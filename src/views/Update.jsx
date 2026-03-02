import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Update() {
  const [id] = useState();

  // Initialize state with data from localStorage
  const [guides, setGuides] = useState(() => {
    const savedGuides = localStorage.getItem("guides");
    return savedGuides ? JSON.parse(savedGuides) : [];
  });

  // Find the specific guide that the user wants to update
  const guide = guides.find((guide) => guide.id === Number(id)); // Find the guide in question

    const [name, setName] = useState("");
    const [scienceName, setScienceName] = useState("");
    const [light, setLight] = useState("");
    const [water, setWater] = useState("");
    const [soil, setSoil] = useState("");
    const [level, setLevel] = useState("");

  let navigate = useNavigate();

  // Save guides to webstorage/local storage
  useEffect(() => {
    localStorage.setItem("guides", JSON.stringify(guides));
  }, [guides]);

  // Update plant guide's name, scientific name, light level, water frequency,
  //  soil type and and difficulty level when the specific guide is found. 
  // This will affect the values in the form.
  useEffect(() => {
    if (guide) {
      setName(guide.name);
      setScienceName(guide.scienceName);
      setLight(guide.light);
      setWater(guide.water);
      setSoil(guide.soil);
      setLevel(guide.level);
    }
  }, [guide]);

  
  // When the user presses form update button, the specific guide
  // is updated.
  function updateHandler(e) {
    e.preventDefault();
    const updatedGuide = {id: Number(id), name: name, scienceName: scienceName, light: light, water: water, soil: soil, level: level };
    setGuides(guides.map((guide) =>
        guide.id === Number(id) ? updatedGuide : guide
    )
);

  // After update, the user is redirected to the default page.
  navigate("/guides");
}

return (
  <form onSubmit={updateHandler}>
    <h2>Update guide</h2>

    <div>
      <label htmlFor="id">ID:</label>
      <input type="number"
 id="id" name="id" value={id} readOnly />
    </div>
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="scienceName">Scientific Name:</label>
      <input
        type="text"
        id="scienceName"
        name="scienceName"
        value={scienceName}
        required
        onChange={(e) => setScienceName(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="light">Light level:</label>
      <input
        type="text"
        id="light"
        name="light"
        value={light}
        required
        onChange={(e) => setLight(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="water">Water frequency:</label>
      <input
        type="text"
        id="water"
        name="water"
        value={water}
        required
        onChange={(e) => setWater(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="soil">Soil Type:</label>
      <input
        type="text"
        id="soil"
        name="soil"
        value={soil}
        required
        onChange={(e) => setSoil(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="level">Difficulty level:</label>
      <input
        type="text"
        id="level"
        name="level"
        value={level}
        required
        onChange={(e) => setLevel(e.target.value)}
      />
    </div>
    <button type="submit">Update</button>
  </form>
);
};