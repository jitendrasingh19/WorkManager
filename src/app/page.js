import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      {/* Centered text block */}
      <div className="text-center">
          <h1 className="text-5xl font-bold text-center">About Page</h1>
        <p className="text-gray-600 mb-4 text-lg">
          This is the about page of my first Next.js application!
        </p>
        <Link href="/" className="text-blue-600 hover:underline">
          Go back home
        </Link>
      </div>
  
      {/* Image below the text */}
  <div className="flex flex-col items-center justify-center">
  <div className="translate-y-10">
    <img
      className="h-48 w-96 object-fill justify-center mt-[90px]"
      src="/images/profile.jpg"
      alt="Team photo"
      height={500}
      width={920}
    />
  </div>
</div>
    </div>
  );
}
