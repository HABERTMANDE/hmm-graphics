function About() {
  return (
    <section className="bg-slate-950 text-white py-24 px-8">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-8">
          About HMM Graphics
        </h2>

        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          HMM Graphics is a creative design and branding studio dedicated to
          transforming ideas into powerful visual experiences. We specialize in
          church media, event branding, business identity, social media graphics,
          print design and digital marketing materials that communicate with
          excellence and impact.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          <div>
            <h3 className="text-5xl font-bold text-cyan-400">100+</h3>
            <p className="text-gray-400 mt-2">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-cyan-400">50+</h3>
            <p className="text-gray-400 mt-2">Satisfied Clients</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-cyan-400">5+</h3>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-cyan-400">24/7</h3>
            <p className="text-gray-400 mt-2">Creative Support</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;