import React from 'react';
import styled from 'styled-components';

import Step from './Step/Step';

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
    border-top: 4px solid ${props => props.color}80;
    color: ${props => props.color};
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

const Text = styled.div`
    font-size: 20px;
    padding-top: 10px;
    padding-bottom: 20px;
    text-align: left;
`



const HowToUse = ({ onClose, colorScheme }) => {

    return (
        <DarkBackground>
            <Paper bcgColor={colorScheme.bcgColor}>
                <PaperHeader color={colorScheme.primaryColor}>How to use out app?</PaperHeader>
                <PaperContent color={colorScheme.primaryColor}>
                    <Step color={colorScheme.primaryColor} title="Step 1:" description="Select the search bar" />
                    <Step color={colorScheme.primaryColor} title="Step 2:" description="Enter the letters of the word you whant to guess (If tou don’t the letter, just enter “.” instead). Example: Police (need to guess) -> P...ce (what to enter if you know only “P”, “c” and “e”). " />
                    <Step color={colorScheme.primaryColor} title="Step 3:" description="Press the search button." />
                </PaperContent>
                <PaperFooter color={colorScheme.primaryColor}>
                    <Text>And thats all :D. The system will find you word.</Text>
                    <div>
                        <CloseBtn onClick={_ => onClose(false)} bcgColor={colorScheme.thirdColor} color={colorScheme.primaryColor}>Close</CloseBtn>
                    </div>
                </PaperFooter>
            </Paper>
        </DarkBackground>
    )
}

export default HowToUse;