import Post from "./Post";

const postData = [
  {
    id: 1,
    username: "sahinur_dev",
    userImg: "https://i.ibb.co/PrCpRTB/profile111.jpg",
    image:
      "https://i.pinimg.com/originals/08/fb/61/08fb615b1a389de5bc0410136d75f50d.gif",
    caption: "IT'S NOT A BUG IT'S FEATURE.",
  },
  {
    id: 2,
    username: "sahinur_dev",
    userImg: "https://i.ibb.co/PrCpRTB/profile111.jpg",
    image: "https://cdn.quotesgram.com/img/24/25/881850109-1201662440722.jpg",
    caption: "IT'S NOT A BUG IT'S FEATURE.",
  },
];

console.log(postData);

function Posts() {
  return (
    <div>
      {postData.map(post => <Post key={post.id} post={post} />)}
    </div>
  );
}

export default Posts;
