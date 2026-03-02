import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {

    // Get the list of guides from webstorage/local storage
    // as a string and format it as a list of guide objects
    const [guides, setGuides] = useState(() => {
        const savedGuides = localStorage.getItem("guides");
        return savedGuides ? JSON.parse(savedGuides) : [];
    });

    const [name, setName] = useState("");
    const [scienceName, setScienceName] = useState("");
    const [light, setLight] = useState("");
    const [water, setWater] = useState("");
    const [soil, setSoil] = useState("");
    const [level, setLevel] = useState("");

    let navigate = useNavigate();

    // Save guides to webstorage/local storage as a string.
    useEffect(() => {
        localStorage.setItem("guides", JSON.stringify(guides));
    }, [guides]);

    // When the user presses the create button, I find the highest
    // id-value in the list, and I add 1 to the number
    // and it becomes the id of the new guide
    function createHandler(e) {
        e.preventDefault();
        const highestId = guides.length > 0 ? Math.max(...guides.map(guide => guide.id)) : -1
        const newGuide = { id: highestId+1, name: name, scienceName: scienceName, light: light, water: water, soil: soil, level: level };
        setGuides([...guides, newGuide]);
        navigate("/");
    }

    return (
        <form onSubmit={createHandler}>
            <h2>Create new Guide</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} required onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="scienceName">Scientific Name:</label>
                <input type="text" id="scienceName" name="scienceName" value={scienceName} required onChange={(e) => setScienceName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="light">Light Level:</label>
                <input type="text" id="light" name="light" value={light} required onChange={(e) => setLight(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="water">Water Frequency:</label>
                <input type="text" id="water" name="water" value={water} required onChange={(e) => setWater(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="soil">Soil Type:</label>
                <input type="text" id="soil" name="soil" value={soil} required onChange={(e) => setSoil(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="level">Difficulty level:</label>
                <input type="text" id="level" name="level" value={level} required onChange={(e) => setLevel(e.target.value)}/>
            </div>
            <button type="submit">Create</button>
        </form>
    )
}