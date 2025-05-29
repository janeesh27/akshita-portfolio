import Header from "../../components/Header.jsx";

export default function Play() {
  return (
    <main className="min-h-screen bg-[#fefce4]">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-6xl font-bold mb-8 text-[#2C2216]">play*</h1>
        <p className="text-lg mb-12 max-w-2xl text-[#2C2216]">
          Experimental projects, personal explorations, and creative ventures that push boundaries and explore new
          possibilities.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experimental project cards */}
          {[
            { title: "Typography Experiments", type: "Personal Project" },
            { title: "Color Theory Studies", type: "Research" },
            { title: "Digital Art Collection", type: "Art" },
            { title: "Brand Concept Explorations", type: "Concept" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-300 mb-6 flex items-center justify-center">
                <span className="text-[#2C2216] font-medium">{item.type}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#2C2216]">{item.title}</h3>
              <p className="text-[#2C2216] text-sm">{item.type}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-[#2C2216]">Creative Process</h2>
          <p className="leading-relaxed mb-4 text-[#2C2216]">
            This space showcases my experimental work and creative explorations. Here, I document my journey of
            discovery, testing new techniques, and pushing creative boundaries.
          </p>
          <p className="leading-relaxed text-[#2C2216]">
            From typography experiments to conceptual brand ideas, these projects fuel my main client work and keep my
            creative process fresh and innovative.
          </p>
        </div>
      </div>
    </main>
  );
}
