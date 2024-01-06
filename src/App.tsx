import React, { useState } from 'react';
import LoadingPage from './LoadingPage'; // Import LoadingPage component
import TemplateSelectionPage from './TemplateSelectionPage'; // Import TemplateSelectionPage component
import AdGeneratorPage from './AdGeneratorPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('loading');
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');

  const handleTemplateSelect = (template: string) => {
    setSelectedTemplate(template);
    setCurrentPage('generator'); // Move to the Ad Generator page
  };

  // Function to switch pages
  const goToTemplateSelection = () => setCurrentPage('templateSelection');
  
  return (
    <div>
      {currentPage === 'templateSelection' ? (
        <TemplateSelectionPage onTemplateSelect={handleTemplateSelect} />
        ) : currentPage === 'generator' ? (
          <AdGeneratorPage selectedTemplate={selectedTemplate} />
        ) : (
        <LoadingPage goToTemplateSelection={goToTemplateSelection} />
        )}
    </div>
  );
}

export default App;

/*

import React, { useState } from 'react';
import TemplateSelectionPage from './TemplateSelectionPage';
import AdGeneratorPage from './AdGeneratorPage';

const App: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [showAdGenerator, setShowAdGenerator] = useState<boolean>(false);

  const handleTemplateSelect = (template: string) => {
    setSelectedTemplate(template);
    setShowAdGenerator(true); // Move to the Ad Generator page
  };

  return (
    <div>
      {!showAdGenerator ? (
        <TemplateSelectionPage onTemplateSelect={handleTemplateSelect} />
      ) : (
        <AdGeneratorPage selectedTemplate={selectedTemplate} />
      )}
    </div>
  );
};

export default App;

*/