import React, { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { store } from "./context/store";
import { userDetailAction } from "./context/actions";

function App() {
  const [name, setName] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const { dispatch } = useContext(store);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: userDetailAction,
      payload: name,
    });
    setShowMessage(true);
  };

  return (
    <>
      {!showMessage ? (
        <>
          <div>
            <h3>Hello there, Please Enter your phone number</h3>
            <form onSubmit={onSubmit}>
              <input value={name} onChange={(e) => setName(e.target.value)} />
              <button type="submit">submit</button>
            </form>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>
      ) : (
        <MessageInterface />
      )}
    </>
  );
}

export default App;

function MessageInterface(props) {
  const [name, setName] = useState("");
  const {
    state: { userDetail },
  } = useContext(store);

  useEffect(() => {
    if (name != userDetail) {
      setName(userDetail);
    }
  }, [userDetail]);
  return (
    <>
      <div>
        <h3>Hello {name}</h3>
        <form>
          <textarea></textarea>
          <button>send</button>
        </form>
      </div>
      <div> Now messages yet</div>
    </>
  );
}
