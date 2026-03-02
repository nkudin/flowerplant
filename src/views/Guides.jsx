import { useState, useEffect } from "react";
import GuideList from "../components/GuideList";
import SearchField from "../components/Searchfield";

function Guides() {

  // default guides to show when the user has none stored yet
  const defaultGuides = [
    {
      id: 1,
      name: "Spider Plant",
      scienceName: "Chlorophytum comosum",
      light: "Medium indirect",
      water: "Once a week",
      soil: "Well-draining potting mix",
      level: "Easy",
    },
    {
      id: 2,
      name: "Fiddle Leaf Fig",
      scienceName: "Ficus lyrata",
      light: "Bright indirect",
      water: "Every 7-10 days",
      soil: "Rich, moist soil",
      level: "Intermediate",
    },
    {
      id: 3,
      name: "Aloe Vera",
      scienceName: "Aloe barbadensis miller",
      light: "Bright light",
      water: "Every 2-3 weeks",
      soil: "Sandy, well-draining soil",
      level: "Easy",
    }
  ];

  // Initialize state with data from localStorage or the defaults
  const [guides, setGuides] = useState(() => {
    const savedGuides = localStorage.getItem("guides");
    if (savedGuides) {
      const parsed = JSON.parse(savedGuides);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultGuides;
    }
    return defaultGuides;
  });

  // Load saved filter text from localStorage on local render
  const [filterText, setFilterText] = useState(() => {
    const savedFilter = localStorage.getItem("filterText");
    return savedFilter ? savedFilter : "";
  });

  // Save filterText to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("filterText", filterText);
  }, [filterText]);

  // Read the guides stored in webstorage/local storage
  useEffect (() => {
    localStorage.setItem("guides", JSON.stringify(guides));
  }, [guides]);

  // Sort the guides in alphabetical order
  const sortedGuides = guides.toSorted((a,b) =>
    a.name.localeCompare(b.name, "en", { sensitivity: "base" })
  );

  // Filter the guides based on the input
  const filteredGuides = sortedGuides.filter(guide =>
    guide.name.toLowerCase().includes(filterText.toLowerCase())
  );

  // Event handler that initiates the filtering process
  const handleInputChange = (guide) => {
    setFilterText(guide.target.value);
  };

  return (
    <>
      {filteredGuides.length > 0 ? (
        <div>
          <SearchField handleInput={handleInputChange} filter={filterText}/>
          <GuideList guides={filteredGuides} setGuides={setGuides} />
        </div>
      ) : (
        <p>Sorry, nothing to show...</p>
      )}
    </>
  );
}

export default Guides;