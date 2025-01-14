"use client"; // Mark as a client component

import CustomCard from "../../../components/CustomCard";
import Link from "next/link";
import { Button } from "@mui/material";
import { useSearchParams } from "next/navigation"; // Import useSearchParams
import { useEffect, useState } from "react"; // For client-side fetching

async function getPostData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch post #${id}`);
  }
  return res.json();
}

async function getPosts(limit) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default function Posts() {
  const searchParams = useSearchParams(); // Hook to access query params
  const postId = searchParams.get("id"); // Get the "id" param
  const limit = parseInt(searchParams.get("limit") || 10); // Get the "limit" param with a default value

  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (postId) {
          const post = await getPostData(postId);
          setSinglePost(post);
        } else {
          const fetchedPosts = await getPosts(limit);
          setPosts(fetchedPosts);
        }
      } catch (err) {
        setError(err.message);
      }
    }

    fetchData();
  }, [postId, limit]);

  if (error) {
    return (
      <main>
        <div className="error">
          <h2>Error: Unable to load post.</h2>
          <p>{error}</p>
          <Link href="/posts" legacyBehavior>
            <a>← Back to All Posts</a>
          </Link>
        </div>
      </main>
    );
  }

  if (singlePost) {
    return (
      <main>
        <div className="post">
          <h1>Post Details</h1>
          <CustomCard title={`Post #${singlePost.id}: ${singlePost.title}`}>
            {singlePost.body}
          </CustomCard>
          <Link href="/posts" legacyBehavior>
            <a>
              <Button size="small" color="primary">
                ← Back to All Posts
              </Button>
            </a>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="Posts">
        <h1>Posts</h1>
        <p>Showing up to {limit} posts:</p>
        <div className="post-list">
          {posts.map((post) => (
            <CustomCard key={post.id} title={`Post #${post.id}`}>
              {post.title}
              <Link href={`/posts?id=${post.id}`} legacyBehavior>
                <a>
                  <Button size="small" color="primary">
                    Read More
                  </Button>
                </a>
              </Link>
            </CustomCard>
          ))}
        </div>
      </div>
    </main>
  );
}
