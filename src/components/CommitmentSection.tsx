import {
  HeartIcon,
  UserGroupIcon,
  ClockIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const CommitmentSection = () => {
  const commitments = [
    {
      icon: HeartIcon,
      title: 'Client-First Approach',
      description:
        'Your success is our success. We prioritize your financial well-being above all else.',
    },
    {
      icon: UserGroupIcon,
      title: 'Personalized Service',
      description:
        'Every client receives customized attention and tailored financial strategies.',
    },
    {
      icon: ClockIcon,
      title: 'Long-term Partnership',
      description:
        "We're committed to building lasting relationships that grow with your financial journey.",
    },
    {
      icon: PhoneIcon,
      title: '24/7 Support',
      description:
        'Our team is always available to address your questions and concerns.',
    },
  ];

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Commitment to You
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We believe that exceptional financial planning begins with an
            unwavering commitment to our clients. Your trust is our most
            valuable asset, and we work tirelessly to earn and maintain it every
            day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {commitments.map((commitment, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <commitment.icon className="h-8 w-8 text-blue-200" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{commitment.title}</h3>
              <p className="text-blue-100">{commitment.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 text-gray-900">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-gray-600">Families Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">98%</div>
              <div className="text-gray-600">Client Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">4.9/5</div>
              <div className="text-gray-600">Client Satisfaction Score</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-800 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">What Our Clients Say</h3>
            <blockquote className="text-lg text-blue-100 italic mb-6">
              "OakBridge has transformed our financial future. Their
              personalized approach and unwavering commitment to our success
              have given us confidence in our retirement planning."
            </blockquote>
            <div className="text-blue-200">
              <strong>Sarah & Michael Johnson</strong>
              <div className="text-sm">Retired Professionals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
