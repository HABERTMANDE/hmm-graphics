function Hero() {
  return (
    <section
      id="home"
      data-aos="fade-up"
      className="bg-slate-950 text-white py-32 px-8"
    >
      <div className="max-w-7xl mx-auto text-center">

        <h1 className="text-6xl font-bold mb-6">
          Turning Ideas Into Powerful Designs
        </h1>

        <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10">
          Professional branding, logos, posters, social media graphics,
          event branding, motion graphics and premium visual identity.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          {/* Client Projects */}
          <a
            href="https://wa.me/254795155158?text=Hello%20HMM%20Graphics,%20I%20would%20like%20to%20start%20a%20project%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 px-8 py-4 rounded-xl font-bold hover:bg-cyan-600 transition duration-300"
          >
            Start Your Project
          </a>

          {/* Training Program */}
          <a
            href="https://t.me/pioneersschool"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-500 px-8 py-4 rounded-xl font-bold hover:bg-cyan-500 hover:text-black transition duration-300"
          >
            Join Design Training
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;