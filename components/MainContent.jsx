export default function MainContent() {
  return (
    <section className="bg-[#fefce4] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Visual elements container */}
        <div className="relative flex items-center justify-center mb-16 min-h-[500px]">
          {/* Strategic & Lasting note */}
          <div className="absolute left-0 top-0 bg-gray-200 p-4 rotate-12 shadow-md">
            <div className="font-script text-lg italic text-[#2C2216]">Strategic &</div>
            <div className="font-script text-lg italic text-[#2C2216]">Lasting</div>
          </div>

          {/* Main central frame */}
          <div className="bg-[#8B4513] p-8 rotate-3 shadow-xl max-w-md">
            <div className="bg-white p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-[#2C2216]">
                your design
                <br />
                partner in
                <br />
                building /brands
                <br />
                that sell, scale &<br />
                stand out*.
              </h2>

              {/* Bottom labels */}
              <div className="flex justify-between text-xs mt-8 pt-4 border-t border-gray-200">
                <div>
                  <div className="text-red-500 font-bold">FOR</div>
                  <div className="text-[#2C2216]">consumer</div>
                  <div className="text-[#2C2216]">brands</div>
                </div>
                <div>
                  <div className="text-blue-500 font-bold">BY</div>
                  <div className="text-[#2C2216]">visionary</div>
                  <div className="text-[#2C2216]">founders</div>
                </div>
                <div>
                  <div className="text-orange-500 font-bold">THAT</div>
                  <div className="text-[#2C2216]">shapes</div>
                  <div className="text-[#2C2216]">future</div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="absolute left-8 bottom-0 bg-[#2C2216] p-2 rotate-12 shadow-lg">
            <div className="w-16 h-24 bg-white"></div>
          </div>

          {/* Design elements */}
          <div className="absolute right-0 top-8 bg-blue-100 p-4 -rotate-12 shadow-md">
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          </div>

          {/* Additional decorative elements */}
          <div className="absolute right-8 bottom-0 bg-yellow-100 p-6 rotate-6 shadow-md">
            <div className="w-12 h-12 bg-gray-400"></div>
          </div>

          {/* Strategic note bottom right */}
          <div className="absolute right-0 bottom-16 bg-gray-100 p-3 -rotate-6 shadow-sm">
            <div className="font-script text-sm italic text-[#2C2216]">Strategic &</div>
            <div className="font-script text-sm italic text-[#2C2216]">Lasting</div>
          </div>
        </div>

        {/* Description text */}
        <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed text-[#2C2216]">
          <p>
            I help consumer brands turn ideas into design-driven success. As a design partner, I craft identities,
            packaging, and brand experiences that don't just look good—they sell, connect, and last. For me, great
            design isn't decoration; it's strategy, storytelling, and impact.
          </p>
          <p>
            I help consumer brands turn ideas into design-driven success. As a design partner, I craft identities,
            packaging, and brand experiences that don't just look good—they sell, connect, and last. For me, great
            design isn't decoration; it's strategy, storytelling, and impact.
          </p>
        </div>
      </div>
    </section>
  );
}
