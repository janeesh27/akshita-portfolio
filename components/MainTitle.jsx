export default function MainTitle() {
  return (
    <section className="bg-[#fefce4] px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Main name */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-[#2C2216] mb-8 leading-none">
          akshita agarwal<span className="text-4xl align-top">*</span>
        </h1>

        {/* Navigation menu */}
        <nav className="border-t border-b border-[#2C2216] py-4">
          <div className="flex flex-wrap items-center justify-between text-xs tracking-wide font-medium">
            <span className="hover:underline cursor-pointer">BRAND STRATEGY</span>
            <span className="hidden md:inline">|</span>
            <span className="hover:underline cursor-pointer">VISUAL IDENTITY</span>
            <span className="hidden md:inline">|</span>
            <span className="hover:underline cursor-pointer">PACKAGING DESIGN</span>
            <span className="hidden md:inline">|</span>
            <span className="hover:underline cursor-pointer">ART DIRECTION</span>
            <span className="hidden md:inline">|</span>
            <span className="hover:underline cursor-pointer">UI/UX</span>
            <span className="hidden md:inline">|</span>
            <span className="hover:underline cursor-pointer">PUBLICATION</span>
          </div>
        </nav>
      </div>
    </section>
  );
}
