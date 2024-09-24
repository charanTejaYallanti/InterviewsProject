import React, { useState } from "react";

const UseStateToddList = () => {
  const [list, setList] = useState([]);
  const [isediting, setEdting] = useState(false);
  const [updateid, setID] = useState(0);

  const [message, setMessage] = useState({
    text: " ",
    id: " ",
  });
  const addTodo = () => {
    setList([...list, message]);

    setMessage({
      text: "",
      id: "",
    });
  };
  const editMessage = (messageID) => {
    setEdting(true);

    const newtodo = list.find((eachitem) => eachitem.id === messageID);
    setMessage({ ...message, text: newtodo.text });
    setID(newtodo.id);
  };

  const upadteMessage = () => {
    console.log(list);

    let newupdatetodo = list.map((eachitem) => {
      if (eachitem.id === updateid) {
        return {
          text: message.text,
          id: updateid,
        };
      } else {
        return eachitem;
      }
    });
    setList(newupdatetodo);
    setMessage({
      text: "",
      id: "",
    });
    setEdting(false);
  };
  const deleteMessage = (messageID) => {
    const newTodo = list.filter((eachfilter) => {
      return eachfilter.id !== messageID;
    });
    setList(newTodo);
  };
  return (
    <div className="todo">
      <input
        type="message"
        value={message.text}
        placeholder="Enter todo"
        onChange={(e) => {
          setMessage({
            ...message,
            text: e.target.value,
            id: new Date().getTime().toString(),
          });
        }}
      />
      {isediting ? (
        <button type="submit" onClick={upadteMessage}>
          edit
        </button>
      ) : (
        <button type="submit" onClick={addTodo}>
          add
        </button>
      )}

      <ul>
        <hr />
        {list.length === 0 && <h1>Here is no items in list</h1>}
        {list.map((eachobj) => {
          return (
            <li key={eachobj.id}>
              <div>{eachobj.text}</div>
              <button onClick={() => editMessage(eachobj.id)}>edit</button>
              <button onClick={() => deleteMessage(eachobj.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseStateToddList;
