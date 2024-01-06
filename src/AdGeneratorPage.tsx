import React, { useState } from 'react';
// import OpenAI from "openai";
import { AdContainer, Input, GenerateButton, AdFrame, AdImage, AdTitle, AdDescription, AdCtaButton } from './AdGeneratorStyles';
import { Title } from './TemplateSelectionStyles';

// const openai = new OpenAI();

const AdGeneratorPage: React.FC<{ selectedTemplate: string }> = ({ selectedTemplate }) => {
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [adContent, setAdContent] = useState<{ title: string; description: string } | null>(null);

  const handleGenerateAd = async () => {
    // const completion = await openai.chat.completions.create({
    //   messages: [{ role: "system", content: "You are a helpful assistant." }],
    //   model: "gpt-3.5-turbo",
    // });
    // completion
    setIsLoading(true);
    setTimeout(() => {
      // Simulate API call
      setIsLoading(false);
      // Placeholder content
      setAdContent({
        title: 'Generated Title',
        description: 'completion.choices[0].toString()',
      });
    }, 3000);
  };

  return (
    <AdContainer>
      {!isLoading && <Title>Enter a prompt</Title>}
      {isLoading && <Title>Loading...</Title>}
      <Input value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Enter your prompt" />
      <GenerateButton onClick={handleGenerateAd}>Generate Ad</GenerateButton>

      {adContent && (
        <AdFrame className={selectedTemplate}>
          <AdImage>Image Placeholder - template: {selectedTemplate}</AdImage>
          <AdTitle>{adContent.title}</AdTitle>
          <AdDescription>{adContent.description}</AdDescription>
          <AdCtaButton>Call to Action</AdCtaButton>
        </AdFrame>
      )}
    </AdContainer>
  );
};

export default AdGeneratorPage;
