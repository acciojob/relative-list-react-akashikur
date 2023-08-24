import React from "react";

const DiwaliShopping = () => {
  const relativeList = [
    { id: "relativeListItem1", name: "Aunt Maya" },
    { id: "relativeListItem2", name: "Uncle Rajesh" },
    { id: "relativeListItem3", name: "Cousin Aryan" },
    { id: "relativeListItem4", name: "Grandma Leela" },
    { id: "relativeListItem5", name: "Grandpa Mohan" },
  ];

  return (
    <div>
      <h1>Diwali Shopping List</h1>
      <p>Diwali is coming! Time to visit and shop for:</p>
      <ol>
        {relativeList.map((relative) => (
          <li key={relative.id}>{relative.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default DiwaliShopping;
