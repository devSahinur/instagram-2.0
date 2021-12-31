import { useEffect, useState } from "react";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => setSuggestions(data.results));
  }, []);

  return (
    <div>
      <h1>i am suggestions</h1>
    </div>
  );
}

export default Suggestions;
