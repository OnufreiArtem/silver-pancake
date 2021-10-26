import React from 'react';
import styled from 'styled-components';
import MenuBarItem from './MenuBarItem';
import { nanoid } from 'nanoid';

const MenuBarContainer = styled.div`
    background-color: ${props => props.bcgColor};
    display: flex;
    justify-content: start;
    align-items: start;
    font-size: 20px;

`

const MenuBar = ({ items, colorScheme }) => {
    const [selected, setSelected] = React.useState(-1);
    const [menuPos, setMenuPos] = React.useState({top: 0, left: 0});

    const onMenuItemClicked = (id, pos) => {
        setSelected(id === selected ? -1 : id); 
        setMenuPos(pos);
    }

    return (<MenuBarContainer bcgColor={colorScheme.primaryColor}>
        {
            items.map((item, index) => <MenuBarItem id={index} key={nanoid()} title={item.title} menuPosition={menuPos} isOpenned={selected === index} submenuItems={item.submenu} openCollback={onMenuItemClicked} colorScheme={colorScheme} />)
        }
    </MenuBarContainer>)
}

export default MenuBar;