import { ArrowRightIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 text-white">
      <div className="absolute inset-0 bg-black opacity-20 dark:opacity-40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Building Your Financial
            <span className="block text-blue-300 dark:text-blue-200">
              Future Today
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 dark:text-blue-200 max-w-3xl mx-auto">
            Expert wealth management and investment strategies tailored to your
            unique financial goals. Let us help you navigate the path to
            financial success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white dark:bg-gray-100 text-blue-900 dark:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 dark:hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center">
              Start Your Journey
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white dark:border-gray-200 text-white dark:text-gray-200 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white dark:hover:bg-gray-200 hover:text-blue-900 dark:hover:text-gray-900 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-300 dark:text-blue-200">
              $2.5B+
            </div>
            <div className="text-blue-100 dark:text-blue-300">
              Assets Under Management
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-300 dark:text-blue-200">
              25+
            </div>
            <div className="text-blue-100 dark:text-blue-300">
              Years of Experience
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-300 dark:text-blue-200">
              500+
            </div>
            <div className="text-blue-100 dark:text-blue-300">
              Happy Clients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
