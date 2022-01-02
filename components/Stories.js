// import faker from "faker";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {
  const {data: session} = useSession();
  const [suggestions, setSuggestions] = useState([]);

  console.log(suggestions);

  useEffect(() => {
    // const suggestions = [...Array(20)].map((_, i) => ({
    //   ...faker.helpers.contextualCard(),
    //   id: i,
    // }));

    // setSuggestions(suggestions)
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then((data) => setSuggestions(data.results));
  }, []);

  return (
    <div className="flex space-x-2 p-6  bg-white mt-8 rounded-md border-gray-200 overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {
        session && (
          <Story img={session.user.image} username={session.user.username} />
        )
      }
      
      {suggestions.map((profile) => (
        <Story key={profile.email} img={profile.picture.medium}  username={profile.login.username} />
      ))}
    </div>
  );
}

export default Stories;
