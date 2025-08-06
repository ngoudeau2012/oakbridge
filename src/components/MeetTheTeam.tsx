import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      title: 'Chief Executive Officer',
      image: '/api/placeholder/300/300',
      bio: 'Sarah has over 20 years of experience in wealth management and has led OakBridge to become one of the most trusted financial advisory firms in the region.',
      email: 'sarah.mitchell@oakbridge.com',
      phone: '(555) 123-4567',
      certifications: ['CFP', 'CFA', 'MBA'],
    },
    {
      name: 'Michael Chen',
      title: 'Chief Investment Officer',
      image: '/api/placeholder/300/300',
      bio: 'Michael brings 15 years of investment management experience, specializing in portfolio optimization and risk management strategies.',
      email: 'michael.chen@oakbridge.com',
      phone: '(555) 123-4568',
      certifications: ['CFA', 'FRM', 'MBA'],
    },
    {
      name: 'Emily Rodriguez',
      title: 'Senior Financial Advisor',
      image: '/api/placeholder/300/300',
      bio: 'Emily specializes in retirement planning and estate planning, helping families secure their financial future across generations.',
      email: 'emily.rodriguez@oakbridge.com',
      phone: '(555) 123-4569',
      certifications: ['CFP', 'AIF', 'ChFC'],
    },
    {
      name: 'David Thompson',
      title: 'Head of Client Relations',
      image: '/api/placeholder/300/300',
      bio: 'David ensures every client receives exceptional service and maintains strong relationships with our valued client base.',
      email: 'david.thompson@oakbridge.com',
      phone: '(555) 123-4570',
      certifications: ['Series 7', 'Series 66'],
    },
    {
      name: 'Lisa Park',
      title: 'Tax Strategy Specialist',
      image: '/api/placeholder/300/300',
      bio: 'Lisa specializes in tax-efficient investment strategies and helps clients minimize their tax burden while maximizing returns.',
      email: 'lisa.park@oakbridge.com',
      phone: '(555) 123-4571',
      certifications: ['CPA', 'CFP', 'EA'],
    },
    {
      name: 'Robert Johnson',
      title: 'Portfolio Manager',
      image: '/api/placeholder/300/300',
      bio: 'Robert manages client portfolios with a focus on long-term growth and risk-adjusted returns across various market conditions.',
      email: 'robert.johnson@oakbridge.com',
      phone: '(555) 123-4572',
      certifications: ['CFA', 'MBA', 'Series 7'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced team of financial professionals is dedicated to
            helping you achieve your financial goals through personalized
            strategies and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 h-48 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-blue-900">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {member.title}
                </p>
                <p className="text-gray-600 mb-4">{member.bio}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {member.certifications.map((cert, certIndex) => (
                    <span
                      key={certIndex}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                      {cert}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <EnvelopeIcon className="h-4 w-4 mr-2" />
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:text-blue-600">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <PhoneIcon className="h-4 w-4 mr-2" />
                    <a
                      href={`tel:${member.phone}`}
                      className="hover:text-blue-600">
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Commitment to Excellence
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Every member of our team holds relevant certifications and
              undergoes continuous education to stay current with the latest
              financial strategies and market trends.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
                <div className="text-gray-600">Professional Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">25+</div>
                <div className="text-gray-600">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">
                  100%
                </div>
                <div className="text-gray-600">Client Focused</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
