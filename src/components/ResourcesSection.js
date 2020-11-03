import React from "react";
import { useSelector } from "react-redux";
import "./ResourcesSection.css";
import { selectFavsFromDev, selectLoggedinUser } from "../store/selectors";

export default function ResourcesSection() {
  const resources = useSelector((state) => state.resources);
  const activeUser = useSelector(selectLoggedinUser);

  const favsFromDev = useSelector(selectFavsFromDev(activeUser));
  console.log(favsFromDev);

  const isFavorite = false;
  const heart = isFavorite ? <span>&#x2665;</span> : <span>&#9825;</span>;

  return (
    <div className="res-section">
      <h1>All resources:</h1>
      {resources.map(({ id, name, type, tags, url }) => {
        return (
          <div key={id}>
            <button
            //onClick={toggle}
            >
              {heart}
            </button>{" "}
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
