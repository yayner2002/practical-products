import React, { useState } from "react";

const App = () => {
  const [resourceType, setResoureType] = useState("posts");
  const [resourceData, setResoureData] = useState([]);

  return (
    <>
      <div>
        <button onClick={() => setResoureType("posts")}>POSTS</button>
        <button onClick={() => setResoureType("users")}>USERS</button>
        <button onClick={() => setResoureType("comments")}>Comments</button>
      </div>
      <h3>{resourceType}</h3>
      {resourceData.map((item) => (
        <h1 key={item.id}>{JSON.stringify(item)}</h1>
      ))}
    </>
  );
};

export default App;
