import React from 'react';
import styled from 'styled-components';
import MenuSubItem from './MenuSubItem';
import { nanoid } from 'nanoid';
import "../../index.css"

const MenuBarItemLayout = styled.span`
    display: block;
    color: ${props => props.isPressed ? props.colorScheme.menuItemHoverTextColor : props.colorScheme.menuItemTextColor};
    padding: 5px 10px;
    font-style: italic;
    background-color: ${props => props.isPressed ? props.colorScheme.menuItemHoverColor : 'transparent'};
    user-select: none;
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

const MenuBarItem = ({ id, title, sections, colorScheme, isOpenned, menuPosition, openCollback }) => {
    const [submenuPosition, setSubmenuPosition] = React.useState(menuPosition)
    const itemRef = React.useRef();
    const submenuRef = React.useRef();

    const onItemClicked = () => {
        const nMenuPosition = { top: itemRef.current.offsetTop + itemRef.current.offsetHeight + itemRef.current.offsetHeight * 0.2, left: itemRef.current.offsetLeft + itemRef.current.offsetWidth * 0.4, };
        setSubmenuPosition();
        openCollback(id, nMenuPosition);
    }

    const onSubmenuItemClicked = (item) => {
        openCollback(-1);
        item.onClick();
    }

    return (<>
        <MenuBarItemLayout ref={itemRef} isPressed={isOpenned} colorScheme={colorScheme} onClick={_ => onItemClicked()}>{title}</MenuBarItemLayout>
        {
            isOpenned && <SubmenuLayout autoFocus ref={submenuRef} top={submenuPosition.top} left={submenuPosition.left} colorScheme={colorScheme}>
                {
                    sections[0].map((item, index) => <MenuSubItem isVisible={isOpenned} key={nanoid()} last={false} icon={item.icon} title={item.title} colorScheme={item.colorScheme} onClick={_ => onSubmenuItemClicked(item)} />)
                }
                {
                    sections.length === 2 && (
                        <>
                        <hr style={{ margin: 0, padding: 0, border: 'none', borderTop: `1px solid ${colorScheme.menuSectionSeparatorColor}` }}/>
                        {
                             sections[1].map(item => <MenuSubItem shortCut="Ctrl+X" isVisible={isOpenned} key={nanoid()} last={false} icon={item.icon} title={item.title} colorScheme={item.colorScheme} onClick={_ => onSubmenuItemClicked(item)} />)
                        }
                        </>
                    )
                }
            
            </SubmenuLayout>
        }


    </>)
}

export default MenuBarItem;