import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#fefce4] px-6 py-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left navigation */}
        <div className="flex items-center space-x-8">
          <Link href="/work" className="text-sm font-medium hover:underline text-[#2C2216]">
            /work
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline text-[#2C2216]">
            /about
          </Link>
          <Link href="/play" className="text-sm font-medium hover:underline text-[#2C2216]">
            /play
          </Link>
        </div>

        {/* Right corner - Start a project button */}
        <div className="flex items-center">
          <button className="bg-[#2C2216] text-white px-4 py-2 text-sm font-medium hover:bg-opacity-80 transition-colors">
            start a project
          </button>
        </div>
      </nav>
    </header>
  );
}
