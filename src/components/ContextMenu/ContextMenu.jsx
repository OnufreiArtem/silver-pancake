import React from 'react';
import styled from 'styled-components';

export const ContextMenuLayout = styled.span`
    display:block;
    width: 150px;
    background-color: ${props => props.colorScheme.secondColor};
    border: 1px solid ${props => props.colorScheme.primaryColor};
    border-radius: 2px;
`

const Icon = styled.span`
    width: 20px;
    heigh: 20px;
`

export const ContextMenuItemLayout = styled.p`
    font-size: 18px;
    color: ${props => props.colorScheme.primaryColor};
    padding: 0;
    margin: 0;
    padding-top: 5px;
    padding-bottom: 5px;
    user-select: none;
    text-align: left;


    &:hover {
        background-color: ${props => props.colorScheme.thirdColor};
    }
`