import Link from 'next/link';
import styles from '../styles/Home.module.css';

// ✅ The `getStaticProps` function (runs at build time)
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: { posts },
  };
}

// ✅ Single Home component
export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Next.js App</h1>
      <p>
        This is my first application built with Next.js.{' '}
        <Link href="/about">Learn more about me</Link>
      </p>

      <h2>Fetched Posts:</h2>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
