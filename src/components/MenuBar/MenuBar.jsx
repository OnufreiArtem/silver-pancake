import React from 'react';
import styled from 'styled-components';
import MenuBarItem from './MenuBarItem';
import { nanoid } from 'nanoid';
import { synth } from '../../constants';

const MenuBarContainer = styled.div`
    background-color: ${props => props.colorScheme.menuColor};
    display: flex;
    justify-content: start;
    align-items: start;
    font-size: 20px;
`

const MenuBar = ({ items, colorScheme }) => {
    const [selected, setSelected] = React.useState(-1);
    const [selectedSection, setSelectionSection] = React.useState(-1)
    const [menuPos, setMenuPos] = React.useState({ top: 0, left: 0 });
    const [blindMode, setBlindMode] = React.useState(false);


    const handleTabPressed = (e) => {
        if (e.keyCode === 39 && blindMode) {
            
            menuPos.top = 40;
            menuPos.left = 20;
            if (selected === -1) setSelected(0);
            else {
                let nSelected = selected + 1;
                if (nSelected >= items.length) {
                    nSelected = 0;
                }
                setSelected(nSelected)
            }

        } else if (e.keyCode === 37 && blindMode) {
            if (selected === -1) setSelected(items.length - 1);
            else {
                let nSelected = selected - 1;
                if (nSelected < 0) {
                    nSelected = items.length - 1;
                }
                setSelected(nSelected)
            }

        }
    }

    const handleSwitchBlindMode = (e) => {
        if (e.shiftKey && e.keyCode === 9) {
            e.preventDefault();

            if (blindMode) {
                setSelected(-1);
            }

            setBlindMode(!blindMode)
        }
    }

    React.useEffect(() => {
        document.addEventListener('keydown', handleTabPressed, false);
        document.addEventListener('keydown', handleSwitchBlindMode, false)
        return () => {
            document.removeEventListener('keydown', handleTabPressed, false);
            document.removeEventListener('keydown', handleSwitchBlindMode, false);
        }
    })

    React.useEffect(() => {
        menuPos.top = 40;
        menuPos.left = 20;
        if (blindMode) setSelected(0);
    }, [blindMode])


    const speak = (text) => {
        synth.cancel();
        let speech = new SpeechSynthesisUtterance();
        speech.lang = 'en-US';
        speech.text = text;
        synth.speak(speech);
    }

    React.useEffect(() => {
        if (selected >= 0 && blindMode) {
            speak(items[selected].title);
        }
        setSelectionSection(selected)
    }, [selected])

    const onMenuItemClicked = (id, pos) => {
        setSelected(id === selected ? -1 : id);
        console.log(pos);
        setMenuPos(pos);
        setBlindMode(false);
    }

    return (<MenuBarContainer colorScheme={colorScheme}>
        {
            items.map((item, index) => <MenuBarItem id={index} target={index === selected && blindMode} key={nanoid()} title={item.title} menuPosition={menuPos} isOpenned={selected === index} sections={item.sections} openCallback={onMenuItemClicked} colorScheme={colorScheme} />)
        }
    </MenuBarContainer>)
}

export default MenuBar;