import React from 'react'

function Sidebar({ageFilter, sexFilter}) {

  return (
    <div className="filter">
      <h3> filter by:</h3>
      <div className="sidebar-age">
        <h4>age</h4>
        <select name="age" onChange={(e) => ageFilter(e.target.value)}>
          <option value="all"> all </option>
          <option value="1"> 1 </option>
          <option value="2"> 2 </option>
          <option value="3"> 3 </option>
          <option value="4"> 4 </option>
          <option value="5"> 5 </option>
          <option value="6"> 6 </option>
          <option value="7"> 7 </option>
        </select>
      </div>

      <div className="sidebar-sex">
        <h4>sex</h4>
        <select onChange={(e) => sexFilter(e.target.value)} >
          <option value="all"> all </option>
          <option value="female"> female </option>
          <option value="male"> male </option>
        </select>
      </div>

      <div className="sidebar-size">
        <h4>size</h4>
        <select >
          <option value="all"> all </option>
          <option value="small"> small </option>
          <option value="medium"> medium </option>
          <option value="large"> large </option>
        </select>
      </div>

      <div className="sidebar-location">
        <h4>location</h4>
        <select >
          <option value="all"> all </option>
          <option value="dog park"> dog park </option>
          <option value="beach"> beach </option>
          <option value="hiking trail"> hiking trail </option>
        </select>
      </div>

    
    </div>
  );
}

export default Sidebar