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
    color: ${props => props.dialogueTextColor};
`

const PaperContent = styled.span`
    display: block;
    font-size: 18px;
    padding-bottom: 40px;
    text-align: left;
    color: ${props => props.dialogueTextColor};
`

const PaperFooter = styled.div`

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

const About = ({onClose, colorScheme}) => {

    return (
        <DarkBackground>
            <Paper colorScheme={colorScheme}>
                <PaperHeader colorScheme={colorScheme}>About</PaperHeader>
                <PaperContent colorScheme={colorScheme}>This application was created to help people guess the words if they know only some letters. Developed by Artem Onufrei</PaperContent>
                <PaperFooter>
                    <CloseBtn onClick={_ => onClose(false)} colorScheme={colorScheme}>Close</CloseBtn>
                </PaperFooter>
            </Paper>
        </DarkBackground>
    )
}

export default About;