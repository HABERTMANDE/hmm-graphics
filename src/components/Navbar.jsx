function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          HMM Graphics
        </h1>

        <ul className="flex gap-8">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;