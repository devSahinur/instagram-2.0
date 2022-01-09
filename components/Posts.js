import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

// const postData = [
//   {
//     id: 1,
//     username: "sahinur_dev",
//     userImg: "https://i.ibb.co/PrCpRTB/profile111.jpg",
//     image:
//       "https://i.pinimg.com/originals/08/fb/61/08fb615b1a389de5bc0410136d75f50d.gif",
//     caption: "IT'S NOT A BUG IT'S FEATURE.",
//   },
//   {
//     id: 2,
//     username: "sahinur_dev",
//     userImg: "https://i.ibb.co/PrCpRTB/profile111.jpg",
//     image: "https://cdn.quotesgram.com/img/24/25/881850109-1201662440722.jpg",
//     caption: "IT'S NOT A BUG IT'S FEATURE.",
//   },
// ];


function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );

    return unsubscribe;
  }, []);


  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
