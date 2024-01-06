import React, { useState } from 'react';
import LoadingPage from './LoadingPage'; // Import LoadingPage component
import TemplateSelectionPage from './TemplateSelectionPage'; // Import TemplateSelectionPage component

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('loading');

  // Function to switch pages
  const goToTemplateSelection = () => setCurrentPage('templateSelection');

  return (
    <div>
      {currentPage === 'loading' ? (
        <LoadingPage goToTemplateSelection={goToTemplateSelection} />
      ) : (
        <TemplateSelectionPage />
      )}
    </div>
  );
}

export default App;
