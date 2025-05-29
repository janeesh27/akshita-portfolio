import Header from "../../components/Header.jsx";

export default function About() {
  return (
    <main className="min-h-screen bg-[#fefce4]">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-6xl font-bold mb-8 text-[#2C2216]">about*</h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="w-full h-96 bg-gray-200 mb-6"></div>
            <p className="text-sm text-[#2C2216]">Akshita Agarwal</p>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-[#2C2216]">
              I'm Akshita, a design strategist and visual storyteller passionate about transforming ideas into
              impactful brand experiences.
            </p>

            <p className="leading-relaxed text-[#2C2216]">
              With a background in brand strategy and visual design, I specialize in helping consumer brands develop
              authentic identities that resonate with their audience and drive business growth.
            </p>

            <p className="leading-relaxed text-[#2C2216]">
              My approach combines strategic thinking with creative execution, ensuring every design decision serves
              both aesthetic and business objectives.
            </p>

            <div className="border-t border-[#2C2216] pt-6 mt-8">
              <h3 className="font-bold mb-4 text-[#2C2216]">Services</h3>
              <ul className="space-y-2 text-sm text-[#2C2216]">
                <li>• Brand Strategy & Positioning</li>
                <li>• Visual Identity Design</li>
                <li>• Packaging Design</li>
                <li>• Art Direction</li>
                <li>• UI/UX Design</li>
                <li>• Publication Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
