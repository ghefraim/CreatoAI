import styled from 'styled-components';

export const SelectionContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center; // Centers vertically in the container
    align-items: center; // Aligns horizontally
    height: 100vh;
    position: relative; // Needed for absolute positioning of children
`;

export const Title = styled.h1`
    position: absolute;
    top: 20px; // Position at the top with some spacing
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
`;

export const SliderContainer = styled.div`
    width: 100%;
    .slick-slider {
        margin: 0 auto; // Center the slider
    }
`;

export const SelectButton = styled.button`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    
    background-color: #264b85;
    color: white;
    padding: 1rem;
    border-radius: 5px;
`;


export const Template = styled.div`
    border: 1px solid #ddd;
    padding: 1rem;
    margin: 0 10px;
    background-color: #333;
    color: #fff;
    text-align: center;

    // Reduce opacity for non-focused items
    // this doesn't work ^
    // opacity: 0.5;

    // Increase opacity for focused item
    // .slick-current {
    //     opacity: 1;
    // }
`;

export const TemplateSlider = styled.div`
    width: 100%; // Take the full width of the container

    .slick-list,
    .slick-slide,
    .slick-track {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slick-slide {
        transition: all 0.3s ease; // Smooth transition for focusing effect
        opacity: 0.5; // Reduce opacity for non-focused items
    }

    .slick-center .slick-slide {
        opacity: 1;
        transform: scale(1.05); // Slightly scale up the centered item
    }

    // ... rest of your TemplateSlider styles
`;
