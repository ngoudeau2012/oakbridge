import {
  CalendarIcon,
  ChartBarIcon,
  DocumentTextIcon,
  PlayIcon,
} from '@heroicons/react/24/outline';

const MarketInsights = () => {
  const insights = [
    {
      title: 'Market Outlook: Q4 2024',
      category: 'Market Analysis',
      date: 'December 15, 2024',
      excerpt:
        'Our analysis of current market conditions and projections for the fourth quarter of 2024.',
      readTime: '5 min read',
      featured: true,
    },
    {
      title: 'The Impact of Inflation on Investment Strategies',
      category: 'Investment Strategy',
      date: 'December 10, 2024',
      excerpt:
        'How rising inflation affects different asset classes and strategies to protect your portfolio.',
      readTime: '7 min read',
      featured: false,
    },
    {
      title: 'Retirement Planning in Uncertain Times',
      category: 'Retirement Planning',
      date: 'December 8, 2024',
      excerpt:
        'Strategies for building a resilient retirement plan that can weather market volatility.',
      readTime: '6 min read',
      featured: false,
    },
    {
      title: 'Tax-Efficient Investment Strategies for 2025',
      category: 'Tax Planning',
      date: 'December 5, 2024',
      excerpt:
        'Preparing for the new year with tax-efficient investment strategies to maximize after-tax returns.',
      readTime: '8 min read',
      featured: false,
    },
    {
      title: 'Global Market Trends: Emerging Opportunities',
      category: 'Global Markets',
      date: 'December 3, 2024',
      excerpt:
        'Identifying investment opportunities in emerging markets and international equities.',
      readTime: '6 min read',
      featured: false,
    },
    {
      title: 'Estate Planning Essentials for High Net Worth Individuals',
      category: 'Estate Planning',
      date: 'November 30, 2024',
      excerpt:
        'Key considerations and strategies for effective estate planning and wealth transfer.',
      readTime: '10 min read',
      featured: false,
    },
  ];

  const marketData = [
    { metric: 'S&P 500', value: '+15.2%', change: '+2.1%', period: 'YTD' },
    { metric: 'NASDAQ', value: '+18.7%', change: '+1.8%', period: 'YTD' },
    {
      metric: '10-Year Treasury',
      value: '4.25%',
      change: '-0.15%',
      period: 'MTD',
    },
    { metric: 'Gold', value: '$2,150', change: '+3.2%', period: 'MTD' },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Market Insights
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay informed with our expert analysis, market trends, and
              investment strategies to help you make informed financial
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Market Data Dashboard */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Market Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {marketData.map((data, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-sm text-gray-600 mb-2">{data.metric}</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {data.value}
                </div>
                <div
                  className={`text-sm ${
                    data.change.startsWith('+')
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}>
                  {data.change} {data.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Analysis
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-900 to-blue-700 p-8 flex items-center justify-center">
                <ChartBarIcon className="h-24 w-24 text-white" />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    Market Analysis
                  </span>
                  <span className="ml-4 text-sm text-gray-500 flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    December 15, 2024
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Market Outlook: Q4 2024
                </h3>
                <p className="text-gray-600 mb-6">
                  Our comprehensive analysis of current market conditions,
                  economic indicators, and investment opportunities for the
                  fourth quarter of 2024. We examine key factors influencing
                  market performance and provide actionable insights for
                  investors.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">5 min read</span>
                  <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors duration-200">
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Latest Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.slice(1).map((insight, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                      {insight.category}
                    </span>
                    <span className="ml-4 text-sm text-gray-500 flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {insight.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {insight.readTime}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Educational Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <DocumentTextIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Investment Guides
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guides covering various investment strategies and
                financial planning topics.
              </p>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors duration-200">
                Browse Guides
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <PlayIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Webinars</h3>
              <p className="text-gray-600 mb-4">
                Live and recorded webinars featuring expert insights on market
                trends and investment strategies.
              </p>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors duration-200">
                View Schedule
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <ChartBarIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Market Reports
              </h3>
              <p className="text-gray-600 mb-4">
                Monthly and quarterly market reports with detailed analysis and
                investment recommendations.
              </p>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors duration-200">
                Download Reports
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketInsights;
