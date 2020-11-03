import React, { useState } from "react";
//const addResource = require("../store/resources/actions");
import { addResource } from "../store/resources/actions";
import { useDispatch } from "react-redux";

export default function AddResourceForm() {
  const [newResource, setNewResource] = useState({});
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    dispatch(addResource(newResource));
  };

  return (
    <div>
      <form onSubmit={submit}>
        <p>
          <label>
            Name:
            <input
              onChange={(e) =>
                setNewResource({ ...newResource, name: e.target.value })
              }
            />
          </label>
        </p>
        <p>
          <label>
            Type:
            <input
              onChange={(e) =>
                setNewResource({ ...newResource, type: e.target.value })
              }
            />
          </label>
        </p>
        <p>
          <label>
            Tags (space separated):
            <input
              onChange={(e) =>
                setNewResource({
                  ...newResource,
                  tags: e.target.value.split(" "),
                })
              }
            />
          </label>
        </p>{" "}
        <p>
          <label>
            url:
            <input
              onChange={(e) =>
                setNewResource({ ...newResource, url: e.target.value })
              }
            />{" "}
          </label>
        </p>{" "}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
