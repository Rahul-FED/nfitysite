import React, { useState } from "react";
import * as Styled from "../searchbar/style";
import Search from "../../assets/searchbar.svg";
import { commonConstants } from "../../commonconstants/CommonConstants";

const SearchBar = () => {
  const [search, setSearch] = useState();
  console.log(search)
  return (
    <Styled.MainDiv>
      <div className="search">
        <label className="search">{commonConstants?.Search}</label>
        <input type="text" className="input" 
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>
      <div>
        <img src={Search} alt={commonConstants?.img}/>
      </div>
    </Styled.MainDiv>
  );
};

export default SearchBar;
