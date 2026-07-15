function Contact() {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-cyan-400 mb-6">
            Contact HMM Graphics
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your ideas into powerful visual experiences?
            Let's work together and create something extraordinary.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="bg-slate-800 rounded-2xl p-8 shadow-lg">

            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Get In Touch
            </h3>

            <div className="space-y-6 text-lg">

              <div>
                <h4 className="font-bold">Phone</h4>
                <p className="text-gray-400">
                  +254 795 155 158
                </p>
              </div>

              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-gray-400">
                  hmm.kazini@gmail.com
                </p>
              </div>

              <div>
                <h4 className="font-bold">Location</h4>
                <p className="text-gray-400">
                  Nairobi, Kenya
                </p>
              </div>

            </div>

          </div>

          <div className="bg-slate-800 rounded-2xl p-8 shadow-lg">

            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Why Choose HMM Graphics?
            </h3>

            <ul className="space-y-4 text-gray-300 text-lg">
              <li>✓ Premium and modern designs</li>
              <li>✓ Fast delivery times</li>
              <li>✓ Creative concepts</li>
              <li>✓ Professional branding solutions</li>
              <li>✓ Dedicated customer support</li>
              <li>✓ Designs tailored to your vision</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;