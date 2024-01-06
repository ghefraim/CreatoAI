import React, { useEffect } from 'react';
import { LoadingContainer, Logo } from './LoadingPageStyles';

interface LoadingPageProps {
  goToTemplateSelection: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ goToTemplateSelection }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            goToTemplateSelection();
        }, 1000);

        return () => clearTimeout(timer);
    }, [goToTemplateSelection]);

    return (
        <LoadingContainer>
            <Logo>Creato<span>AI</span></Logo>
        </LoadingContainer>
    );
}

export default LoadingPage;
