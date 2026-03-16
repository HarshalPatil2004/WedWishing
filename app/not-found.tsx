import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-white via-rose-50 to-pink-100 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center border border-rose-100">
        <div className="text-6xl mb-6">💍</div>
        <h2 className="text-3xl font-serif text-rose-600 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 italic">
          It seems this page didn't make it to the guest list!
        </p>
        <Link
          href="/"
          className="inline-block px-10 py-4 bg-linear-to-r from-rose-500 to-pink-500 text-white font-bold rounded-full hover:shadow-xl transition-all transform hover:scale-105 shadow-md"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
