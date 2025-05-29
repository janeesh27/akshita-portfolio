import Header from "../components/Header.jsx";
import MainTitle from "../components/MainTitle.jsx";
import MainContent from "../components/MainContent.jsx";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <MainTitle />
      <MainContent />
    </main>
  );
}
