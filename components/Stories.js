import faker from "faker";
import { useEffect, useState } from "react";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions)
  }, []);

  return <div>
      {suggestions.map(profile => (
          <Story key={profile.id} profile={profile} />
      ))}
  </div>;
}

export default Stories;
