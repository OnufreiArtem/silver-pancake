import React from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

const SubmenuLayout = styled.span`
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    border: 1px solid ${props => props.colorScheme.primaryColor};
    border-radius: 2px;
    background-color: ${props => props.colorScheme.secondColor};
`

const SubItemContainer = styled.span`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 150px;
    background-color: transparent;
    &:hover {
        background-color: ${props => props.colorScheme.secondColor};
    }
`

const Icon = styled.span`
    width: 20px;
    heigh: 20px;
`

const Title = styled.span`
    font-size: 18px;
    color: ${props => props.colorScheme.primaryColor};
    padding-top: 5px;
    padding-bottom: 5px;
    user-select: none;
`



const ContextMenu = ({ pos, items, show, colorScheme }) => {

    return (
        <>
            {
                show && <SubmenuLayout autoFocus top={pos.top} left={pos.left} colorScheme={colorScheme}>
                    {
                        items.map(item => <MenuSubItem key={nanoid()} colorScheme={colorScheme} icon={item.icon} title={item.title} onClick={_ => { item.onClick(item); }} />)
                    }
                </SubmenuLayout>
            }

        </>

    )

}

const MenuSubItem = ({ colorScheme, icon, title, onClick }) => {

    return (
        <SubItemContainer colorScheme={colorScheme} onClick={_ => onClick()}>
            <Icon icon={icon}></Icon>
            <Title colorScheme={colorScheme}>{title}</Title>
        </SubItemContainer>
    )

}

export default ContextMenu;
