import { CheckCircleIcon } from '@heroicons/react/24/outline';

const WhoWeAreSection = () => {
  const values = [
    {
      title: 'Integrity',
      description:
        "We operate with the highest ethical standards, always putting our clients' interests first.",
    },
    {
      title: 'Excellence',
      description:
        'We strive for excellence in everything we do, from investment strategies to client service.',
    },
    {
      title: 'Innovation',
      description:
        'We leverage cutting-edge technology and research to deliver superior investment solutions.',
    },
    {
      title: 'Partnership',
      description:
        'We build long-term partnerships with our clients, working together to achieve their goals.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              OakBridge Financial is a leading wealth management firm with over
              25 years of experience helping individuals and families achieve
              their financial goals. We combine deep market expertise with
              personalized service to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of certified financial planners, investment advisors, and
              tax specialists work together to provide comprehensive financial
              solutions tailored to your unique needs and circumstances.
            </p>

            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg mb-6">
                To empower our clients with the knowledge, strategies, and
                support they need to build lasting wealth and achieve financial
                freedom.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-blue-200">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-blue-200">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-blue-200">Certifications</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-blue-200">Client Focused</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
