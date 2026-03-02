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

  // Combine default guides and user-added guides from localStorage
  const [guides, setGuides] = useState(() => {
    const savedGuides = localStorage.getItem("guides");
    let userGuides = [];
    if (savedGuides) {
      try {
        const parsed = JSON.parse(savedGuides);
        if (Array.isArray(parsed)) {
          userGuides = parsed;
        }
      } catch (e) {
        // ignore corrupted localStorage
      }
    }
    // Filter out any default guides that have the same id as a user guide
    const mergedGuides = [...defaultGuides.filter(def => !userGuides.some(u => u.id === def.id)), ...userGuides];
    return mergedGuides;
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

  // Save all guides to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("guides", JSON.stringify(guides));
  }, [guides]);

  // Sort the guides in alphabetical order
  // toSorted is relatively new and may not exist in all browsers/environments
  // fall back to a copy-and-sort so the original array isn't modified.
  const sortedGuides = [...guides].sort((a,b) =>
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