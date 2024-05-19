import React from "react";
import "./DisplayProfile.css";

function DisplayProfile({ data }) {
  return (
    <div className="card">
      <div className="d-flex align-items-center">
        <div className="image">
          <img
            src={data.avatar_url}
            className="rounded"
            width="155"
            alt="profile"
          />
        </div>
        <div className="ml-3 w-100">
          <h4 className="title">{data.login}</h4>
          <span>{data.bio}</span>
          <div className="stats d-flex justify-content-between rounded">
            <div className="d-flex flex-column">
              <span className="articles">Repo</span>
              <span className="number1">{data.public_repos}</span>
            </div>
            <div className="d-flex flex-column">
              <span className="followers">Followers</span>
              <span className="number2">{data.followers}</span>
            </div>
            <div className="d-flex flex-column">
              <span className="rating">Following</span>
              <span className="number3">{data.following}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayProfile;
