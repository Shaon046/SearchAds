import React from "react";
import { useState } from "react";
import SearchArea from "./SearchArea";

const Header = () => {
  const [searchText, setSearch] = useState("");

  const [searchQuery, setSearchQuery] = useState(""); ///only reset functionality now

  const OnchangeHandler = (eve) => {
    const value = eve.target.value;
    setSearch(value);
  };

  const onClickHandler = () => {
    setSearchQuery(searchText);
    setSearch("");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          padding: 20,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          background: "#429ffc",
        }}
      >
        <div
          style={{
            marginRight: "30%",
            height: 0,
            fontFamily: "Times New Roman, Times, serif",
            fontSize: "20px",
          }}
        >
          Search Ads
        </div>
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => OnchangeHandler(e)}


        />
        <button onClick={() => onClickHandler()} >Search</button>
      </div>

      <div >
        <SearchArea searchText={searchQuery} />
      </div>
    </>
  );
};

export default Header;
