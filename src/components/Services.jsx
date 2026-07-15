function Services() {
  return (
    <section id="services" className="bg-slate-800 text-white py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-6">
          Our Services
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Branding, Logos, Posters, Social Media Designs and Printing.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Branding
            </h3>
            <p className="text-gray-300">
              Professional logos, visual identity and business branding.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Event Media
            </h3>
            <p className="text-gray-300">
              Posters, flyers, banners and church media designs.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Social Media
            </h3>
            <p className="text-gray-300">
              Premium social media campaigns and digital marketing graphics.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;