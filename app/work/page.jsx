import Header from "../../components/Header.jsx";

export default function Work() {
  return (
    <main className="min-h-screen bg-[#fefce4]">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-6xl font-bold mb-8 text-[#2C2216]">work*</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project placeholder cards */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-full h-48 bg-gray-200 mb-4"></div>
              <h3 className="text-xl font-bold mb-2 text-[#2C2216]">Project {item}</h3>
              <p className="text-[#2C2216] text-sm">Brand Strategy • Visual Identity</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
