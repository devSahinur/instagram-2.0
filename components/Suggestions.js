import { useEffect, useState } from "react";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((res) => res.json())
      .then((data) => setSuggestions(data.results));
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.email}
          className="flex items-center justify-between mt-3"
        >
          <img
            src={profile.picture.medium}
            className="h-10 w-10 rounded-full border p-[2px]"
            alt=""
          />
          <div className="flex-1 ml-4">
              <h2 className="font-semibold text-sm">{profile.login.username}</h2>
              <h3 className="text-xs text-gray-400">New to Instagram</h3>
          </div>
              <button className="text-blue-400 text-xs font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
