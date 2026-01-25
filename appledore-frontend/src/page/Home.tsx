import  { useState } from 'react';
import Shercap from '../icons/Shercap';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

export const Home = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const navigate=useNavigate()  
  const handleSignIn = () => {
    navigate("signin")
  };

  const handleSignUp = () => {
    navigate("signup")
  };

  const features = [
    {
      title: "Curate Your Knowledge",
      description: "Store and organize links to videos, blog posts, articles, and resources in your personal vault."
    },
    {
      title: "Intelligent Categorization",
      description: "Tag and categorize your saved content for effortless retrieval when you need it most."
    },
    {
      title: "Access Anywhere",
      description: "Your collection of insights accessible from any device, synchronized in real-time."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black dark:bg-slate-950 dark:text-slate-100">
      {/* Navigation */}
      <nav className="border-b border-black dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-3 justify-between items-center">
          <div className="flex items-center space-x-2 dark:invert">
            <Shercap/>
            <span className="text-2xl font-bold tracking-tight">APPLEDORE</span>
          </div>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button 
              onClick={handleSignIn}
              className="px-6 py-2 border-2 border-black dark:border-slate-300 hover:bg-black hover:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900 transition-colors duration-200"
            >
              Sign In
            </button>
            <button 
              onClick={handleSignUp}
              className="px-6 py-2 bg-black text-white dark:bg-slate-100 dark:text-slate-900 hover:bg-white hover:text-black dark:hover:bg-slate-200 border-2 border-black dark:border-slate-300 transition-colors duration-200"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Your Personal Vault<br />of Knowledge
          </h1>
          <p className="text-xl text-gray-700 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Appledore is your digital repository for the web's most valuable content. 
            Store, organize, and access your collection of videos, articles, and resources 
            with the precision of a master detective.
          </p>
          <div className="flex justify-center flex-wrap gap-3">
            <button 
              onClick={handleSignUp}
              className="px-8 py-4 bg-black text-white text-lg hover:bg-gray-800 transition-colors duration-200 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Start Building Your Vault
            </button>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="border-t-4 border-b-4 border-black dark:border-slate-700 py-12 sm:py-16 my-12 sm:my-16">
          <blockquote className="text-2xl italic text-center max-w-3xl mx-auto text-gray-800 dark:text-slate-100">
            "The warehouse is the brain. Appledore is the hard drive."
            <footer className="text-base mt-4 not-italic text-gray-600 dark:text-slate-300">
              — Inspired by 221B Baker Street
            </footer>
          </blockquote>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 border-2 border-black dark:border-slate-700 transition-all duration-300 cursor-pointer ${
                hoveredFeature === index ? 'bg-black text-white dark:bg-slate-800' : 'bg-white dark:bg-slate-900'
              }`}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="text-4xl font-bold mb-4">0{index + 1}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className={hoveredFeature === index ? 'text-gray-300' : 'text-gray-700 dark:text-slate-300'}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* What You Can Store */}
        <div className="bg-black text-white dark:bg-slate-900 p-12 mb-20 border border-black dark:border-slate-800">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">What You Can Store</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "▶", label: "Video Tutorials & Lectures" },
              { icon: "📝", label: "Blog Posts & Articles" },
              { icon: "📚", label: "Research Papers & Documentation" },
              { icon: "🔗", label: "Useful Web Resources" },
              { icon: "🎓", label: "Online Courses & Lessons" },
              { icon: "💡", label: "Ideas & Inspirations" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 border border-white/60 dark:border-slate-700 rounded-lg">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-lg">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center border-4 border-black dark:border-slate-700 p-12 sm:p-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-xl text-gray-700 dark:text-slate-300 mb-8">
            Join Appledore and start building your personal archive of knowledge today.
          </p>
          <button 
            onClick={handleSignUp}
            className="inline-block px-12 py-4 bg-black text-white text-lg hover:bg-gray-800 transition-colors duration-200 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Create Your Vault
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-black dark:border-slate-800 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600 dark:text-slate-300">
          <p>&copy; 2026 Appledore. All rights reserved.</p>
          <p className="mt-2 text-sm">Every link tells a story. Every collection reveals character.</p>
        </div>
      </footer>
    </div>
  );
};

