import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../Data";
import { useDispatch } from "react-redux";

export default function Sign_in() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputValue)
    if (inputValue) {
      dispatch({ type: "LOG_IN", payload: inputValue });
    }
  };

  const availableUsers = users.map(user => {
    const { id, name } = user;
    return { value: id, display: name };
  });

  return (
    <div className="container-signin">
      <div className="header">
        <h2>Would You Rather Game!</h2>
        <p>Please Sign In</p>
      </div>
      <div className="container-image">
        {users.map(user => {
          return <img key={user.id} src={user.avatarURL} alt="User Avatar" />;
        })}
      </div>
      <form className="form-signin" onSubmit={handleSubmit}>
        <select
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        >
          <option key={new Date().getTime()} hidden={true}>Select User</option>
          {availableUsers.map(user => {
            return (
              <option key={user.value} value={user.name}>
                {user.display}
              </option>
            );
          })}
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}
