import React from 'react';
import styled from 'styled-components';

const StepContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`

const StepTitle = styled.span`
    display: block;
    font-weight: 800;
    padding-bottom: 10px;
    color: ${props => props.color};
`

const StepDescription = styled.span`
    display: block;
    color: ${props => props.color};
`

const Step = ({ title, description, color }) => {
    return (<StepContainer>
        <StepTitle color={color}>{title}</StepTitle>
        <StepDescription color={color}>{description}</StepDescription>
    </StepContainer>)
}

export default Step;