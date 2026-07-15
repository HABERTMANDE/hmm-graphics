function About() {
  return (
    <section id="about" className="bg-slate-950 text-white py-24 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-cyan-400">
            About HMM Graphics
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed max-w-5xl mx-auto">
            HMM Graphics is a premium creative design and branding studio
            committed to transforming ideas into powerful visual experiences.
            We help ministries, churches, businesses, organizations and brands
            communicate with clarity, excellence and impact through modern and
            professional design solutions.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">

          <div className="bg-slate-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-300 leading-relaxed">
              To empower brands, ministries and organizations with world-class
              visual communication that inspires action, builds trust and leaves
              lasting impressions.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-300 leading-relaxed">
              To become a leading creative media and branding agency recognized
              for excellence, innovation and transformational design solutions
              across Africa and beyond.
            </p>
          </div>

        </div>

        {/* Services Summary */}
        <div className="bg-slate-900 rounded-2xl p-10 mb-16 shadow-lg">
          <h3 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
            What We Do
          </h3>

          <div className="grid md:grid-cols-3 gap-6 text-gray-300">

            <div>✓ Logo Design & Brand Identity</div>
            <div>✓ Church Media & Event Branding</div>
            <div>✓ Posters, Flyers & Banners</div>
            <div>✓ Social Media Graphics</div>
            <div>✓ Printing Solutions</div>
            <div>✓ Motion Graphics & Video Ads</div>
            <div>✓ Marketing Materials</div>
            <div>✓ Creative Consultation</div>
            <div>✓ Visual Storytelling</div>

          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div className="bg-slate-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-5xl font-bold text-cyan-400">100+</h3>
            <p className="text-gray-400 mt-3">Projects Completed</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-5xl font-bold text-cyan-400">50+</h3>
            <p className="text-gray-400 mt-3">Satisfied Clients</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-5xl font-bold text-cyan-400">5+</h3>
            <p className="text-gray-400 mt-3">Years Experience</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-5xl font-bold text-cyan-400">24/7</h3>
            <p className="text-gray-400 mt-3">Creative Support</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;