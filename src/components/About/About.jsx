import React from 'react';
import styled from 'styled-components';

const DarkBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #00000060;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Paper = styled.div`
    display: inline-block;
    min-width: 500px;
    max-width: 600px;
    border-radius: 20px;
    background-color: ${props => props.bcgColor};
    padding: 30px 40px;
`

const PaperHeader = styled.span`
    display: block;
    font-size: 36px;
    border-bottom: 4px solid ${props => props.color}80;
    text-align: left;
    margin-bottom: 20px;
    font-style: bold;
    color: ${props => props.color};
`

const PaperContent = styled.span`
    display: block;
    font-size: 18px;
    padding-bottom: 40px;
    text-align: left;
    color: ${props => props.color};
`

const PaperFooter = styled.div`

`

const CloseBtn = styled.button`
    border-radius: 10px;
    background-color: ${props => props.bcgColor};
    color: ${props => props.color};
    border: none;
    padding: 10px 50px;
    font-size: 20px;
    font-style: italic;
    float: right;
    transition: .3s all;

    &:hover {
        background-color: ${props => props.bcgColor}A0;
    }
`

const About = ({onClose, colorScheme}) => {

    return (
        <DarkBackground>
            <Paper bcgColor={colorScheme.bcgColor}>
                <PaperHeader color={colorScheme.primaryColor}>About</PaperHeader>
                <PaperContent color={colorScheme.primaryColor}>This application was created to help people guess the words if they know only some letters. Developed by Artem Onufrei</PaperContent>
                <PaperFooter>
                    <CloseBtn onClick={_ => onClose(false)} bcgColor={colorScheme.thirdColor} color={colorScheme.primaryColor}>Close</CloseBtn>
                </PaperFooter>
            </Paper>
        </DarkBackground>
    )
}

export default About;