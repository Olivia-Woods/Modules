import CustomCard from "../../../components/CustomCard";
import Link from "next/link";
import { Button } from "@mui/material"; // Import Material UI Button

// Function to FETCH a single post by ID
async function getPostData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch post #${id}`);
  }
  return res.json();
}

// Function to FETCH posts with a LIMIT
async function getPosts(limit) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default async function Posts({ searchParams }) {
  const limit = parseInt(searchParams.limit) || 10;
  const postId = parseInt(searchParams.id);

  // If `id` is provided in the query string, FETCH and display the SINGLE POST
  if (postId) {
    try {
      const post = await getPostData(postId);

      return (
        <main>
          <div className="post">
            <h1>Post Details</h1>
            <CustomCard title={`Post #${post.id}: ${post.title}`}>
              {post.body}
            </CustomCard>
            <Link href="/posts">
              <Button size="small" color="primary">
                ← Back to All Posts
              </Button>
            </Link>
          </div>
        </main>
      );
    } catch (error) {
      return (
        <main>
          <div className="error">
            <h2>Error: Unable to load post #{postId}.</h2>
            <p>{error.message}</p>
            <Link href="/posts">← Back to All Posts</Link>
          </div>
        </main>
      );
    }
  }

  // Otherwise, FETCH and display the LIST of POSTS
  const posts = await getPosts(limit);

  return (
    <main>
      <div className="Posts">
        <h1>Posts</h1>
        <p>Showing up to {limit} posts:</p>
        <div className="post-list">
          {posts.map((post) => (
            <CustomCard key={post.id} title={`Post #${post.id}`}>
              {post.title}
              <Link href={`/posts/${post.id}`}>
                <Button size="small" color="primary">
                  Read More
                </Button>
              </Link>
            </CustomCard>
          ))}
        </div>
      </div>
    </main>
  );
}
