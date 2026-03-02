import { useState, useEffect } from "react";
import GuideList from "../components/GuideList";
import SearchField from "../components/Searchfield";

function Guides() {

  // Initalize state with data from localStorage or an empty array
  const [guides, setGuides] = useState(() => {
    const savedGuides = localStorage.getItem("guides");
    return savedGuides ? JSON.parse(savedGuides) : [];
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