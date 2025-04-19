import type React from "react"

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen py-10" style={{
      backgroundImage: "linear-gradient(290deg, #7e28d6 5%, #2a225b 64%)",
    }}>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-white mb-8 mt-5">About Us</h1>

        <div className="max-w-3xl mx-auto space-y-8">
          <section>
            <p className="text-lg text-gray-300 leading-relaxed">
              The Business Club IIT (BHU) aims to build a robust business culture, nurture the brilliant technological
              minds of the institution, and impart insight into the business side of the world.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white font-semibold mb-4">Our Pillars</h2>
            <p className="mb-4 text-gray-100">The Club segregates its endeavours into the five pillars:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Consulting</li>
              <li>Product Management</li>
              <li>Economics</li>
              <li>Finance</li>
              <li>Analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Our Philosophy</h2>
            <p className="leading-relaxed text-gray-100">
              We believe in growing together, and with alignment to this philosophy, we regularly conduct weekly
              brainstorming sessions – Bizstorms, workshops and boot camps. Many of our competitions, seminars and boot
              camps hosts participants from across the country.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Achievements</h2>
            <p className="leading-relaxed text-gray-100">
              The Club hosts immense accolades and achievements of its members. The recent awards include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-2">
              <li>Gold at IIM-A's TRBS</li>
              <li>Three positions at the Inter-IIT 2019 meeting, including a gold</li>
              <li>Two positions at the Inter-IIT tech meet 2020</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Collaborations</h2>
            <p className="leading-relaxed text-gray-100">
              We also boast good collaborations with IIM-A, Groww, WazirX, Angel Broking and many more prestigious
              institutions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Our Vision</h2>
            <p className="leading-relaxed text-gray-100">
              We envision a robust business ecosystem in the college and will leave no stone unturned.
            </p>
          </section>

          <section className="bg-black/20 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="leading-relaxed text-gray-100">
              Email:{" "}
              <a href="mailto:businessclub.iitbhu@gmail.com" className="text-gray-400 hover:underline">
                businessclub.iitbhu@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

