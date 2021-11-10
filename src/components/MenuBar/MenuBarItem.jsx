import React from 'react';
import styled from 'styled-components';
import MenuSubItem from './MenuSubItem';
import { nanoid } from 'nanoid';

const MenuBarItemLayout = styled.span`
    display: block;
    color: ${props => props.colorScheme.bcgColor};
    padding: 5px 10px;
    font-style: italic;
    background-color: ${props => props.isPressed ? props.colorScheme.thirdColor : 'transparent'};
    user-select: none;
`

const SubmenuLayout = styled.span`
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    border: 1px solid ${props => props.colorScheme.primaryColor};
    border-radius: 2px;
    background-color: ${props => props.colorScheme.thirdColor}80;
    box-shadow: 0 0 10px #00000030;
`

const MenuBarItem = ({ id, title, submenuItems, colorScheme, isOpenned, menuPosition, openCollback }) => {
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
                    submenuItems.map(item => <MenuSubItem isVisible={isOpenned} key={nanoid()} icon={item.icon} title={item.title} colorScheme={item.colorScheme} onClick={_ => onSubmenuItemClicked(item)} />)
                }
            </SubmenuLayout>
        }


    </>)
}

export default MenuBarItem;