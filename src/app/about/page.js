// src/app/page.js
import Image from "next/image";
export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      {/* <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
   
    </div>
  );
}
