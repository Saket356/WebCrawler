import { Link } from "react-router-dom";
import { Globe, Network, Eye } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">
                WebCrawler
              </span>
            </div>

            <Link
              to="/dashboard"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6 leading-tight">
              Visualize Your
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Web Structure
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover, analyze, and visualize website architectures with our
              powerful web crawler. Get insights into link relationships and
              site structures with beautiful interactive graphs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/dashboard"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Crawling
            </Link>
          </div>

          {/* Hero Visualization Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-black/40 to-black/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="grid grid-cols-3 gap-4 opacity-70">
                <div className="h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg flex items-center justify-center">
                  <Network className="h-8 w-8 text-blue-400" />
                </div>

                <div className="h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg flex items-center justify-center">
                  <Globe className="h-8 w-8 text-purple-400" />
                </div>

                <div className="h-32 bg-gradient-to-br from-pink-500/30 to-blue-500/30 rounded-lg flex items-center justify-center">
                  <Eye className="h-8 w-8 text-pink-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;