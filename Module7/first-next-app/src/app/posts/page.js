import Link from "next/link";

// Function to fetch a single post by ID
async function getPostData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch post #${id}`);
  }
  return res.json();
}

// Function to fetch posts with a limit
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
  const limit = searchParams.limit || 10; // Default to 10 posts if no limit
  const postId = searchParams.id; // Get post ID from query string (?id=)

  // If `id` is provided in the query string, fetch and display the single post
  if (postId) {
    const post = await getPostData(postId);

    return (
      <main>
        <div className="post">
          <h1>Post Details</h1>
          <h3>
            Post #{post.id}: {post.title}
          </h3>
          <p>{post.body}</p>
          <Link href="/posts">← Back to All Posts</Link>
        </div>
      </main>
    );
  }

  // Otherwise, fetch and display the list of posts
  const posts = await getPosts(limit);

  return (
    <main>
      <div className="Posts">
        <h1>Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
