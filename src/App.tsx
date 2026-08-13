import React from 'react';
import { Header } from './Header';
import { EditorCanvas } from './EditorCanvas';
import { ResearchSidebar } from './ResearchSidebar';
import { ClaimInspectorSidebar } from './ClaimInspectorSidebar';
import { BYOKModal } from './BYOKModal';
import OpenJennieLandingPage from './OpenJennieLandingPage';
import { useAppStore } from './useAppStore';

export const App: React.FC = () => {
  const { activeRightPanel, currentView } = useAppStore();

  if (currentView === 'landing') {
    return <OpenJennieLandingPage />;
  }

  return (
    <div className="min-h-screen bg-[#fcfcff] flex flex-col font-sans text-[#1e2938] antialiased">
      {/* Top Bar */}
      <Header />

      {/* Main App Workspace */}
      <div className="flex-1 flex overflow-hidden">
        {/* Editor Writing Canvas */}
        <EditorCanvas />

        {/* Dynamic Context Panel */}
        {activeRightPanel === 'research' && <ResearchSidebar />}
        {activeRightPanel === 'claims' && <ClaimInspectorSidebar />}
      </div>

      {/* BYOK Settings Modal */}
      <BYOKModal />
    </div>
  );
};

export default App;
