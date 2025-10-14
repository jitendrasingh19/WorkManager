import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center">
      <h1 className="text-3xl font-bold mb-2">About Page</h1>
      <p className="text-gray-600 mb-4">
        This is the about page of my first Next.js application!
      </p>
      <Link href="/" className="text-blue-600 hover:underline">
        Go back home
      </Link>
     <Image
        src="/images/profile.jpg"   // ✅ correct path (no /public)
        alt="Team photo"
        width={300}
        height={300}
        style={{ borderRadius: "10px", marginTop: "20px" }}
      />
    </div>
  );
}