import React, { useState } from "react";
import DisplayProfile from "./DisplayProfile";
import "./ShowProfile.css"; // Import the CSS file

function ShowProfile() {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState({});

  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((originalData) => {
        if (originalData) {
          setData(originalData);
        }
      });
  };

  return (
    <div className="container">
      <h1>GitHub User Profile</h1>
      <form
        id="myform"
        autoComplete="off"
        onSubmit={onSubmitHandler}
        className="form-inline"
      >
        <input
          className="form-control"
          placeholder="GitHub username"
          type="text"
          value={userName}
          onChange={onChangeHandler}
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
      <DisplayProfile data={data} />
    </div>
  );
}

export default ShowProfile;
