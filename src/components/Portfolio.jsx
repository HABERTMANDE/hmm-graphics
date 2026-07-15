import warrior from "../assets/portfolio/warriors-night.jpg";
import youth from "../assets/portfolio/royal-youth.jpg";
import prophetic from "../assets/portfolio/prophetic-service.jpg";

function Portfolio() {
  return (
    <section id="portfolio" className="bg-slate-900 py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-white text-center mb-4">
          Our Portfolio
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Some of our latest creative projects.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img src={warrior} alt="Warriors Night" className="w-full" />
            <div className="p-6">
              <h3 className="text-white text-xl font-bold">
                Warriors Night
              </h3>
              <p className="text-gray-400 mt-2">
                Event branding for a worship and revival gathering.
              </p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img src={youth} alt="Royal Youth Kesha" className="w-full" />
            <div className="p-6">
              <h3 className="text-white text-xl font-bold">
                Royal Youth Kesha
              </h3>
              <p className="text-gray-400 mt-2">
                Youth worship conference promotional design.
              </p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img src={prophetic} alt="Prophetic Service" className="w-full" />
            <div className="p-6">
              <h3 className="text-white text-xl font-bold">
                Prophetic Service
              </h3>
              <p className="text-gray-400 mt-2">
                Church event promotional poster.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Portfolio;