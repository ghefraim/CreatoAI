import React from 'react';
import Slider from 'react-slick';
import { SelectionContainer, Title, Template, SelectButton, SliderContainer, TemplateSlider } from './TemplateSelectionStyles';

const TemplateSelectionPage: React.FC = () => {
    // Settings for the slider
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: false,
        adaptiveHeight: false
    };

    return (
        <SelectionContainer>
            <Title>Select Template</Title>
            <SliderContainer>
                <Slider {...settings}>
                    <Template className="instagram">Instagram Post (500 x 500px)</Template>
                    <Template className="twitter">Twitter Header (1500 x 500px)</Template>
                    <Template className="story">Story (1080 x 1920px)</Template>
                </Slider>
            </SliderContainer>
            <SelectButton>Select</SelectButton>
        </SelectionContainer>
    );
}

export default TemplateSelectionPage;
