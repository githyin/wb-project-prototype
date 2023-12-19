import React, { useState, useEffect } from "react";

const App = () => {
  const [dynamicData, setDynamicData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/");
        const data = await response.json();
        console.log("Fetched data:", data);
        setDynamicData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{dynamicData.video_title}</h1>
      <p>Views: {dynamicData.view_count}</p>
      <div id="comments">
        {dynamicData.comments && (
          <ul>
            {dynamicData.comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
