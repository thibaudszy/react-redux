import React from "react";
import { useSelector } from "react-redux";
import "./ResourcesSection.css";

export default function ResourcesSection() {
  const resources = useSelector((state) => state.resources);
  //console.log("resources:", resources);
  return (
    <div className="res-section">
      <h1>All resources:</h1>
      {resources.map(({ id, name, type, tags, url }) => {
        return (
          <div key={id}>
            <b>{name}</b> ({type}) -- Find out more at:
            <a href={url}> {url} </a>
            <div>
              {tags.map((tag) => (
                <div key={tag} className="tag">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
