import { useState } from 'react';
import { Hero } from './components/Hero';
import { MainContent } from './components/MainContent';
import { ProjectDetail } from './components/ProjectDetail';

export type Project = {
  id: number;
  title: string;
  category: string;
  tags: string[];
  image: string;
  shortDesc: string;
  challenge: string;
  approach: string;
  results: string[];
  learnings: string[];
  uxLaws: { law: string; application: string }[];
};

export default function App() {
  const [showMain, setShowMain] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'projects' | 'story' | 'contact' | 'design'>('home');

  return (
    <div className="min-h-screen bg-warm-light">
      {!showMain ? (
        <Hero onContinue={() => setShowMain(true)} />
      ) : selectedProject ? (
        <ProjectDetail 
          project={selectedProject} 
          onBack={() => {
            setSelectedProject(null);
            setActiveTab('projects');
          }} 
        />
      ) : (
        <MainContent 
          onProjectSelect={(project) => setSelectedProject(project)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )}
    </div>
  );
}