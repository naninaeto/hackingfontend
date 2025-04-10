import React, { useState } from "react";

interface Post {
  id: number;
  username: string;
  content: string;
  replies: { username: string; reply: string }[];
}

const Forum: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");

  const handlePostSubmit = () => {
    if (!username || !content) return;
    const newPost: Post = {
      id: Date.now(),
      username,
      content,
      replies: [],
    };
    setPosts([newPost, ...posts]);
    setUsername("");
    setContent("");
  };

  const handleReplySubmit = (postId: number, replyUsername: string, replyText: string) => {
    if (!replyUsername || !replyText) return;
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, replies: [...post.replies, { username: replyUsername, reply: replyText }] }
          : post
      )
    );
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Community Forum</h2>
      <p className="text-gray-500 mb-6">Join discussions with fellow cybersecurity enthusiasts.</p>

      {/* New Post Form */}
      <div className="border p-4 rounded-lg shadow-md bg-gray-800 text-white">
        <h3 className="text-lg font-semibold mb-2">Start a Discussion</h3>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 mb-2 rounded-md bg-gray-900 text-white border border-gray-600"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          placeholder="Write your post..."
          className="w-full p-2 mb-2 rounded-md bg-gray-900 text-white border border-gray-600 h-20"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={handlePostSubmit}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
        >
          Post
        </button>
      </div>

      {/* Forum Posts */}
      <div className="mt-6">
        {posts.length === 0 ? (
          <p className="text-gray-400">No discussions yet. Start one above!</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="border p-4 rounded-lg shadow-md bg-gray-900 text-white mt-4">
              <h4 className="font-semibold text-green-400">{post.username}</h4>
              <p className="text-gray-300">{post.content}</p>
              <div className="mt-2">
                <h5 className="text-sm font-semibold text-gray-400">Replies:</h5>
                {post.replies.map((reply, index) => (
                  <div key={index} className="ml-4 text-gray-400 border-l-2 pl-2 border-gray-600 mt-1">
                    <strong className="text-green-400">{reply.username}:</strong> {reply.reply}
                  </div>
                ))}
              </div>

              {/* Reply Form */}
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 mt-2 rounded-md bg-gray-800 text-white border border-gray-600"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Write a reply..."
                  className="w-full p-2 mt-2 rounded-md bg-gray-800 text-white border border-gray-600"
                  onChange={(e) => setContent(e.target.value)}
                />
                <button
                  onClick={() => handleReplySubmit(post.id, username, content)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 mt-2 rounded-md"
                >
                  Reply
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Forum;
