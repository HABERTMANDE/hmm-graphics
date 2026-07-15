function Services() {
  const services = [
    {
      title: "Logo Design",
      text: "Unique and memorable brand identities."
    },
    {
      title: "Branding",
      text: "Complete business branding packages."
    },
    {
      title: "Social Media Design",
      text: "Professional Instagram, Facebook and LinkedIn graphics."
    },
    {
      title: "Print Design",
      text: "Flyers, posters, banners, brochures and business cards."
    },
    {
      title: "Event Branding",
      text: "Complete branding for conferences, crusades and corporate events."
    },
    {
      title: "Motion Graphics",
      text: "Animated adverts and promotional videos."
    }
  ];

  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-xl hover:bg-cyan-500 hover:text-black transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300">
                {service.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;