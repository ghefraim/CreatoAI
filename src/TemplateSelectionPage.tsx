import React, { useState } from 'react';
import Slider from 'react-slick';
import { SelectionContainer, Title, Template, SelectButton, SliderContainer, TemplateSlider } from './TemplateSelectionStyles';

interface TemplateSelectionPageProps {
  onTemplateSelect: (template: string) => void;
}

const TemplateSelectionPage: React.FC<TemplateSelectionPageProps> = ({ onTemplateSelect }) => {
    const [currentTemplate, setCurrentTemplate] = useState<string>('instagram');

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: false,
        adaptiveHeight: false,
        beforeChange: (oldIndex: number, newIndex: number) => {
            // Assuming the order of your templates matches the order of slides
            const templateNames = ['instagram', 'twitter', 'story'];
            setCurrentTemplate(templateNames[newIndex]);
        }
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
            <SelectButton onClick={() => onTemplateSelect(currentTemplate)}>SELECT</SelectButton>
        </SelectionContainer>
    );
}

export default TemplateSelectionPage;
