import React from 'react';
import styled from 'styled-components';

const SubItemContainer = styled.span`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 170px;
    background-color: transparent;
    padding: 5px;
    &:hover {
        background-color: ${props => props.colorScheme.contextElementHoverColor};
    }
`

const Icon = styled.svg`
`

const Text = styled.span`
    font-size: 18px;
    color: ${props => props.color};
    padding-top: 5px;
    padding-bottom: 5px;
    user-select: none;
`

const MenuSubItem = ({ icon, last, title, colorScheme, onClick }) => {

    const iconGenerator = (icon) => {
        if (icon === "export") {
            return (
                <Icon style={{ marginRight: '10px' }} width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 3H15C16.1046 3 17 3.89543 17 5V11C17 12.1046 16.1046 13 15 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H4" stroke={colorScheme.primaryColor} />
                    <path d="M9.35355 0.646446C9.15829 0.451184 8.84171 0.451184 8.64645 0.646446L5.46447 3.82843C5.2692 4.02369 5.2692 4.34027 5.46447 4.53553C5.65973 4.7308 5.97631 4.7308 6.17157 4.53553L9 1.70711L11.8284 4.53553C12.0237 4.7308 12.3403 4.7308 12.5355 4.53553C12.7308 4.34027 12.7308 4.02369 12.5355 3.82843L9.35355 0.646446ZM9.5 10L9.5 1H8.5L8.5 10H9.5Z" fill={colorScheme.primaryColor} />
                </Icon>
            )
        } else if (icon === "clear") {
            return (<Icon style={{ marginRight: '10px' }} width="19" height="14" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.79778 1.47418L1.32505 5.47418C1.12585 5.79642 1.12585 6.20358 1.32505 6.52582L3.79778 10.5258C3.98 10.8206 4.30184 11 4.64838 11H17C17.5523 11 18 10.5523 18 10V2C18 1.44772 17.5523 1 17 1H4.64838C4.30184 1 3.98 1.17941 3.79778 1.47418Z" stroke={colorScheme.primaryColor} />
                <circle cx="13" cy="6" r="2.5" stroke={colorScheme.primaryColor} />
            </Icon>)
        } else {
            return (<Icon style={{ marginRight: '10px' }} width="19" height="14" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.79778 1.47418L1.32505 5.47418C1.12585 5.79642 1.12585 6.20358 1.32505 6.52582L3.79778 10.5258C3.98 10.8206 4.30184 11 4.64838 11H17C17.5523 11 18 10.5523 18 10V2C18 1.44772 17.5523 1 17 1H4.64838C4.30184 1 3.98 1.17941 3.79778 1.47418Z" stroke="#00000000" />
                <circle cx="13" cy="6" r="2.5" stroke="#00000000" />
            </Icon>)
        }
    }

    return (<SubItemContainer colorScheme={colorScheme} onClick={_ => onClick()}>
        {
            iconGenerator(icon)
        }
        <Text color={colorScheme.primaryColor}>{title}</Text>
    </SubItemContainer>
    )
}

export default MenuSubItem;