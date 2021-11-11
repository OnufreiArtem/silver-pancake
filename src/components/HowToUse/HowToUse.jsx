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
    background-color: ${props => props.colorScheme.dialogueBcgColor};
    padding: 30px 40px;
`

const PaperHeader = styled.span`
    display: block;
    font-size: 36px;
    border-bottom: 4px solid ${props => props.colorScheme.dialogueTextColor}80;
    text-align: left;
    margin-bottom: 20px;
    font-style: bold;
    color: ${props => props.colorScheme.dialogueTextColor};
`

const PaperContent = styled.span`
    display: block;
    font-size: 18px;
    padding-bottom: 40px;
    text-align: left;
    color: ${props => props.colorScheme.dialogueTextColor};
`

const PaperFooter = styled.div`
    border-top: 4px solid ${props => props.colorScheme.dialogueTextColor}80;
    color: ${props => props.color};
`

const CloseBtn = styled.button`
    border-radius: 10px;
    background-color: ${props => props.colorScheme.dialogueBtnColor};
    color: ${props => props.colorScheme.dialogueBtnTextColor};
    border: none;
    padding: 10px 50px;
    font-size: 20px;
    font-style: italic;
    float: right;
    transition: .3s all;
    box-shadow: 0 0 10px #00000030;

    &:hover {
        color: ${props => props.colorScheme.dialogueBtnTextHoverColor};
        background-color: ${props => props.colorScheme.dialogueBtnHover};
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
            <Paper colorScheme={colorScheme}>
                <PaperHeader colorScheme={colorScheme}>How to use out app?</PaperHeader>
                <PaperContent colorScheme={colorScheme}>
                    <Step colorScheme={colorScheme} title="Step 1:" description="Select the search bar" />
                    <Step colorScheme={colorScheme} title="Step 2:" description="Enter the letters of the word you want to guess (If you don’t  know the letter, just enter “.” instead). Example: Police (need to guess) -> P...ce (what to enter if you know only “P”, “c” and “e”). " />
                    <Step colorScheme={colorScheme} title="Step 3:" description="Press the search button." />
                </PaperContent>
                <PaperFooter colorScheme={colorScheme}>
                    <Text colorScheme={colorScheme}>And thats all :D. The system will find you word.</Text>
                    <div>
                        <CloseBtn colorScheme={colorScheme} onClick={_ => onClose(false)}>Close</CloseBtn>
                    </div>
                </PaperFooter>
            </Paper>
        </DarkBackground>
    )
}

export default HowToUse;