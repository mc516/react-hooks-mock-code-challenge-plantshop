import React from "react";

function Search( {onSearchInput} ) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={onSearchInput}
      />
    </div>
  );
}

export default Search;
