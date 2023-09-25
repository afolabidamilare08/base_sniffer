'use client'
import  { useState } from 'react';
import { motion } from 'framer-motion';
import Particles from './particles';
import Illustration from '@/public/images/glow-top.svg';

const Features0 = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Illustration */}
        <div className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
            <img src={Illustration} className="max-w-none" width={1404} height={658} alt="Features Illustration" />
          </div>
        </div>

        <div className="pt-16 pb-12 md:pt-52 md:pb-20">
          <div className="max-w-xl mx-auto md:max-w-none space-y-12">
            <div className="md:grid md:grid-cols-2 md:gap-x-8 md:space-x-16 xl:space-x-20">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="md:w-3/4"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-purple-500 mb-3">The Security First Platform</h2>
                  <h3 className="text-3xl font-semibold mb-4">
                    Simplify your security with authentication services
                  </h3>
                  <p className="text-lg text-gray-300 mb-8">
                    Define access roles for end-users and extend your authorization capabilities.
                  </p>
                </div>
                <div className="space-y-4">
                  <button
                    className={`btn-tab ${activeTab === 1 ? 'active' : ''}`}
                    onClick={() => handleTabChange(1)}
                  >
                    Simplify Your Security
                  </button>
                  <button
                    className={`btn-tab ${activeTab === 2 ? 'active' : ''}`}
                    onClick={() => handleTabChange(2)}
                  >
                    Customer Identity
                  </button>
                  <button
                    className={`btn-tab ${activeTab === 3 ? 'active' : ''}`}
                    onClick={() => handleTabChange(3)}
                  >
                    Adaptable Authentication
                  </button>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                className="md:w-1/4"
              >
                <div className="relative py-24 -mt-12">
                  {/* Particles animation */}
                  <Particles className="absolute inset-0 -z-10" quantity={20} staticity={30} />
                  <div className="flex items-center justify-center">
                    {/* Animated icons */}
                    {/* Add your animated icons here */}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features0;
