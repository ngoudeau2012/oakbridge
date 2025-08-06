import {
  ChartBarIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline';

const InvestmentSection = () => {
  const services = [
    {
      icon: ChartBarIcon,
      title: 'Portfolio Management',
      description:
        'Comprehensive portfolio management tailored to your risk tolerance and financial objectives.',
      features: ['Asset Allocation', 'Risk Management', 'Regular Rebalancing'],
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Investments',
      description:
        'Access to international markets and diverse investment opportunities worldwide.',
      features: [
        'International Markets',
        'Currency Hedging',
        'Emerging Markets',
      ],
    },
    {
      icon: ShieldCheckIcon,
      title: 'Retirement Planning',
      description:
        'Strategic retirement planning to ensure your golden years are financially secure.',
      features: [
        '401(k) Management',
        'IRA Strategies',
        'Social Security Optimization',
      ],
    },
    {
      icon: ArrowTrendingUpIcon,
      title: 'Tax-Efficient Investing',
      description:
        'Investment strategies designed to minimize tax impact and maximize after-tax returns.',
      features: ['Tax-Loss Harvesting', 'Municipal Bonds', 'Estate Planning'],
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Investment Solutions That Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive investment strategies are designed to help you
            achieve your financial goals while managing risk and optimizing
            returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-blue-900 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Investment Approach?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-2">
                  12.5%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Average Annual Return
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-2">
                  95%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Client Satisfaction Rate
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Portfolio Monitoring
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
