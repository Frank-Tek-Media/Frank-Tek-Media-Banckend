import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Sample posts data (later we can connect database)
let posts = [
  {
    id: 1,
    title: "Welcome to FrankTek Media",
    type: "post",
    content: "This is your new media platform 🚀"
  },
  {
    id: 2,
    title: "AI Video Ideas",
    type: "video",
    content: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

// GET all posts
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// ADD new post
app.post("/api/posts", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    type: req.body.type, // "post" or "video"
    content: req.body.content
  };

  posts.push(newPost);

  res.json({
    message: "Post added successfully",
    post: newPost
  });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("FrankTek Media running");
});