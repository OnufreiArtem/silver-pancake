import React from 'react';
import styled from 'styled-components';
import MenuSubItem from './MenuSubItem';
import { nanoid } from 'nanoid';
import "../../index.css"
import { synth } from '../../constants';

const MenuBarItemLayout = styled.span`
    display: block;
    color: ${props => props.isPressed ? props.colorScheme.menuItemHoverTextColor : props.colorScheme.menuItemTextColor};
    padding: 5px 10px;
    font-style: italic;
    background-color: ${props => props.isPressed ? props.colorScheme.menuItemHoverColor : 'transparent'};
    user-select: none;
    ${props => props.isTargeted === true ? "outline: 3px solid black;" : ""}
`

const SubmenuLayout = styled.span`
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    border: 1px solid ${props => props.colorScheme.contextBorderColor};
    border-radius: 2px;
    background-color: ${props => props.colorScheme.contextBcgColor};
    box-shadow: 0 0 10px #00000030;
`

const MenuBarItem = ({ id, title, target, sections, colorScheme, isOpenned, menuPosition, openCallback }) => {
    const [submenuPosition, setSubmenuPosition] = React.useState(menuPosition)
    const itemRef = React.useRef();
    const submenuRef = React.useRef();
    const [selectedElement, setSelectedElement] = React.useState(-1);

    const maxSelectionIndex = () => sections.reduce((prev, next) => prev.length + next.length)

    const calculateMenuPost = () => ({ top: itemRef.current.offsetTop + itemRef.current.offsetHeight + itemRef.current.offsetHeight * 0.2, left: itemRef.current.offsetLeft + itemRef.current.offsetWidth * 0.4, });

    const onItemClicked = () => {
        const nMenuPosition = calculateMenuPost();
        setSubmenuPosition(nMenuPosition);
        openCallback(id, nMenuPosition);
    }

    const onSubmenuItemClicked = (item) => {
        const nMenuPosition = calculateMenuPost();
        openCallback(-1, nMenuPosition);
        item.onClick();
    }

    const speak = (text) => {
        synth.cancel();
        let speech = new SpeechSynthesisUtterance();
        speech.text = text;
        synth.speak(speech);
    }

    const moveSelection = (e) => {
        if (e.keyCode === 40 && target) {
            if (selectedElement === maxSelectionIndex()) setSelectedElement(0);
            else {
                let nSelected = selectedElement + 1;
                if (nSelected >= maxSelectionIndex()) {
                    nSelected = 0;
                }
                setSelectedElement(nSelected)
            }
        } else if (e.keyCode === 38 && target) {
            if (selectedElement === -1) setSelectedElement(0);
            else {
                let nSelected = selectedElement - 1;
                if (nSelected < 0) {
                    nSelected = maxSelectionIndex() - 1;
                }
                setSelectedElement(nSelected)
            }
        }
    }

    const actualSectionIndex = () => selectedElement >= sections[0].length ? 1 : 0;

    React.useEffect(() => {
        if (selectedElement !== -1) speak(sections[actualSectionIndex()][actualSectionIndex() === 1 ? selectedElement - sections[0].length : selectedElement].title)
    }, [selectedElement])

    React.useEffect(() => {
        document.addEventListener("keydown", moveSelection)
        return () => {
            document.removeEventListener("keydown", moveSelection)
        }
    })

    

    return (<>
        <MenuBarItemLayout isTargeted={target && selectedElement === -1} ref={itemRef} isPressed={isOpenned} colorScheme={colorScheme} onClick={_ => onItemClicked()}>{title}</MenuBarItemLayout>
        {
            isOpenned && <SubmenuLayout autoFocus ref={submenuRef} top={submenuPosition.top} left={submenuPosition.left} colorScheme={colorScheme}>
                {
                    sections[0].map((item, index) => <MenuSubItem isTargeted={target && selectedElement === index} isVisible={isOpenned} key={nanoid()} last={false} icon={item.icon} title={item.title} colorScheme={item.colorScheme} onClick={_ => onSubmenuItemClicked(item)} />)
                }
                {
                    sections.length === 2 && (
                        <>
                        <hr style={{ margin: 0, padding: 0, border: 'none', borderTop: `1px solid ${colorScheme.menuSectionSeparatorColor}` }}/>
                        {
                             sections[1].map((item, index) => <MenuSubItem isTargeted={target && selectedElement === index + sections[0].length} shortCut="Ctrl+X" isVisible={isOpenned} key={nanoid()} last={false} icon={item.icon} title={item.title} colorScheme={item.colorScheme} onClick={_ => onSubmenuItemClicked(item)} />)
                        }
                        </>
                    )
                }
            
            </SubmenuLayout>
        }


    </>)
}

export default MenuBarItem;