import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/api/test")
      .then((response) => setMessage(response.data.message))
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <div>
      <h1>SNEAK SHOT</h1>
      <h3>coming soon</h3>
      <strong>
        <p>Backend Response: {message}</p>
      </strong>
    </div>
  );
}

export default App;
