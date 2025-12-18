import { useState } from 'react';
import { motion } from 'motion/react';
import { User, Briefcase, Mail } from 'lucide-react';
import { Story } from './Story';
import { Projects } from './Projects';
import { Contact } from './Contact';

type Tab = 'story' | 'projects' | 'contact';

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>('story');

  const tabs = [
    { id: 'story' as Tab, label: 'Meine Story', icon: User },
    { id: 'projects' as Tab, label: 'Projekte', icon: Briefcase },
    { id: 'contact' as Tab, label: 'Kontakt', icon: Mail },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen p-6 py-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-white mb-2">Portfolio</h1>
          <p className="text-purple-200">Wo Business, Technologie und Design zusammenkommen</p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-2 mb-8 inline-flex rounded-2xl mx-auto block w-fit"
        >
          <div className="flex gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2
                    ${activeTab === tab.id
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-purple-200 hover:text-white hover:bg-white/10'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'story' && <Story />}
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'contact' && <Contact />}
        </motion.div>
      </div>
    </motion.div>
  );
}
