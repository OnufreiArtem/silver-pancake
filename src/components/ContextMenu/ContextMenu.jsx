import React from 'react';
import styled from 'styled-components';

export const ContextMenuLayout = styled.span`
    display:block;
    width: 170px;
    background-color: ${props => props.colorScheme.contextBcgColor};
    border: 1px solid ${props => props.colorScheme.contextBorderColor};
    border-radius: 2px;
    box-shadow: 0 0 10px #00000030;
`

export const TextContextMenuItem = styled.span`
    display: block;    
    color: ${props => props.colorScheme.contextTextColor}
    padding-left: 10px;
`

export const IconContextMenuItemLayout = styled.span`
    display: flex;
    justify-content: start;
    align-items: center;    
    font-size: 18px;
    color: ${props => props.colorScheme.contextTextColor};
    padding: 0;
    margin: 0;
    padding: 5px 5px 5px 5px;
    user-select: none;
    text-align: left;
    translate: .3s all;


    &:hover {
        background-color: ${props => props.colorScheme.contextElementHoverColor};
    }
`

export const ContextMenuItemLayout = styled.span`
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 18px;
    color: ${props => props.colorScheme.contextTextColor};
    padding: 0;
    margin: 0;
    padding: 5px 5px 5px 25px;
    user-select: none;
    text-align: left;
    translate: .3s all;


    &:hover {
        background-color: ${props => props.colorScheme.contextElementHoverColor};
    }
`