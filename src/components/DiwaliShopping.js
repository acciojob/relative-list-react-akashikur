import React, { useState } from "react";

const DiwaliShopping = () => {
  const [relativeList] = useState([
    "Aunt Maya",
    "Uncle Rajesh",
    "Cousin Aryan",
    "Grandma Leela",
    "Grandpa Mohan",
  ]);

  const listKey = "relativeList";

  return (
    <div>
      <h1>Diwali Shopping List</h1>
      <p>Diwali is coming! Time to visit and shop for:</p>
      <ol key={listKey}>
        {relativeList.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
};

export default DiwaliShopping;
