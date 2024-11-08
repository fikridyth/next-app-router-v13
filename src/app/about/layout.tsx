import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed right-0 top-10 z-10 h-screen w-25 bg-gray-800">
        <ul className="px-5 py-5">
          <Link href="/">
            <li className="mr-6 text-blue-300 cursor-pointer">Home</li>
          </Link>
          <Link href="/about">
            <li className="mr-6 text-blue-300 cursor-pointer">About</li>
          </Link>
          <Link href="/about/profile">
            <li className="mr-6 text-blue-300 cursor-pointer">Profile</li>
          </Link>
        </ul>
      </nav>
      {children}
    </>
  );
}
