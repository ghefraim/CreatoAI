import styled from 'styled-components';

export const AdContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center; // Centers vertically in the container
  align-items: center; // Aligns horizontally
  height: 100vh;
  position: relative; // Needed for absolute positioning of children
`;

export const Input = styled.input`
  position: absolute;
  bottom: 80px; // Position above the bottom, with space for the button
  width: 80%; // Adjust as needed
  max-width: 500px; // Adjust as needed

  background-color: #1a1a1a;
  color: white;
  padding: 1rem;
  border-radius: 5px;
  border-style: solid;
  border-color: #264b85;
`;

export const GenerateButton = styled.button`
  position: absolute;
  bottom: 20px; // Position at the bottom with some spacing
  left: 50%;
  transform: translateX(-50%);
  
  background-color: #264b85;
  color: white;
  padding: 1rem;
  border-radius: 5px;
`;

export const AdFrame = styled.div`
  // Adjust this as needed based on the selected template
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // Example dimensions, adjust as needed
  width: 80%;
  max-width: 500px;
  height: 500px; // Adjust based on the template
  border: 1px solid #ddd; // For visibility
  margin-bottom: 100px; // Ensure there's space for the input and button
`;

export const AdImage = styled.div`
  width: 100%;
  height: 50%; // Takes up half of the AdFrame
  background-color: #333; // Placeholder color
  // Additional styles...
`;

export const AdTitle = styled.h2`
  // Style for the title
`;

export const AdDescription = styled.p`
  // Style for the description
`;

export const AdCtaButton = styled.button`
  // Style for the call to action button
`;

// ... Rest of your components
