import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Company Information */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">
              HMM Graphics
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Turning Ideas Into Powerful Designs through premium branding,
              church media, visual identity, social media graphics and
              professional creative solutions.
            </p>

            <div className="flex gap-5 text-2xl">

              <a
                href="#"
                className="hover:text-cyan-400 transition duration-300"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="hover:text-cyan-400 transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="hover:text-cyan-400 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="hover:text-cyan-400 transition duration-300"
              >
                <FaTiktok />
              </a>

              <a
                href="#"
                className="hover:text-cyan-400 transition duration-300"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Logo Design</li>
              <li>Brand Identity</li>
              <li>Church Media</li>
              <li>Event Branding</li>
              <li>Social Media Graphics</li>
              <li>Motion Graphics</li>
              <li>Printing Solutions</li>
              <li>Video Advertisements</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Home</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-5">
              Contact Information
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-center gap-3">
                <FaPhone className="text-cyan-400" />
                <span>+254 795 155 158</span>
              </div>

              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500" />
                <span>+254 795 155 158</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400" />
                <span>hmm.kazini@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span>Nairobi, Kenya</span>
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © 2026 HMM Graphics. All Rights Reserved.
          </p>

          <p className="text-gray-600 mt-2">
            Designed and Developed by HMM Graphics.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;