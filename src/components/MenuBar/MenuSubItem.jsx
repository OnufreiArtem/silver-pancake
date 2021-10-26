import React from 'react';
import styled from 'styled-components';

const SubItemContainer = styled.span`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 150px;
    background-color: transparent;
    &:hover {
        background-color: ${props => props.colorScheme.thirdColor}80;
    }
`

const Icon = styled.span`
    width: 20px;
    heigh: 20px;
`

const Text = styled.span`
    font-size: 18px;
    color: ${props => props.color};
    padding-top: 5px;
    padding-bottom: 5px;
    user-select: none;
`

const MenuSubItem = ({ icon, title, colorScheme, onClick }) => {
    return (<SubItemContainer colorScheme={colorScheme} onClick={_ => onClick()}>
        <Icon url={icon} />
        <Text color={colorScheme.primaryColor}>{title}</Text>
    </SubItemContainer>
    )
}

export default MenuSubItem;