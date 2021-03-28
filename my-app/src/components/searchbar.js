import React from "react";

import "./styles.css";


export default function Searchbar({value, onChange}) {


  return (
    <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Search here by word" 
                    value={value} onChange={onChange}
                    />
                </div>
            </div>
  )
}

