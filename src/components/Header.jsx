import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="py-3">
      <div className="container max-w-screen-lg mx-auto px-5 flex items-center justify-between">
        <h1 className="font-medium text-2xl">
          A<span className="hidden md:inline sm:mr-2">bdurahmon</span>
          <span className="hidden md:inline">portfoliosi</span>
        </h1>
        <Navbar />
      </div>
    </header>
  );
}
