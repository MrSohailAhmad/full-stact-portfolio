// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <div>
        <h1 className="text-4xl font-bold text-red-600">
          404 - Page Not Found
        </h1>
        <p className="mt-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/" className="mt-6 inline-block text-blue-500 underline">
          Go to Home
        </Link>
      </div>
    </div>
  );
}
