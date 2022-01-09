import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
// import { BookmarkIcon } from "@heroicons/react/solid";

function Post({ post }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          // src={post.data().userImg}
          src="https://i.ibb.co/dG9tksD/download.jpg"
          alt="user profile pic"
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{post?.data().username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>

      {/* image */}
      <img
        src={post.data().image}
        alt={post.data().caption}
        className="object-contain w-full"
      />

      {/* Button */}
      <div className="flex justify-between px-4">
        <div className="flex space-x-4 ">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* caption */}
      <p className="p-5 truncate">
          <span className="font-bold mr-1">{post.data().username} </span>
          {post.data().caption}
      </p>

      {/* comments */}

      {/* input box */}

      <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input type="text" placeholder="Add a comments..." className="border-none flex-1 focus:ring-0 outline-none" />
          <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default Post;
