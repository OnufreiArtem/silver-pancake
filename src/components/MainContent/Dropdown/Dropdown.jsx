import { nanoid } from "nanoid";
import React from "react";
import styled from "styled-components";

const DropdownLayout = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s all;
    font-style: italic;
    font-size: 18px;
    color: ${props => props.color};

    &:hover {
        background-color: #00000080;
    }
`

const DropdownItemContainter = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    background-color: #ccc;

    top: ${props => props.top}px;
    left: ${props => props.left}px;
`

//    min-width: ${props => props.width};
// max-width: ${props => props.width};

const DropdownItem = styled.span`
    display: block;
    padding: 10px;
    text-align: left;
    width: ${props => props.width}px;
    font-style: italic;
    color: ${props => props.color};
    font-size: 18px;

    &:hover {
        background-color: yellow;
    }
`

const Icon = styled.div`
    background-image: ${props => props.source};
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
`

const Dropdown = ({ title, colorScheme, selected, onSelected, items }) => {
    const [showItems, setShowItems] = React.useState(false);
    const dropdownRef = React.useRef();
    const [containterPos, setContainerPos] = React.useState({ x: 0, y: 0, w: 0 })

    const detectContainerPosition = (ref) => {
        const pos = { y: ref.current.offsetTop + ref.current.offsetHeight, x: ref.current.offsetLeft, w: ref.current.offsetWidth }
        console.log(pos);
        console.log(ref);
        setContainerPos(pos);
    }

    const onDropdownClick = () => {
        detectContainerPosition(dropdownRef);
        setShowItems(!showItems);
    }

    const onDropdownItemClick = (index) => {
        setShowItems(false);
        items[index].onClick();
        onSelected(index);
    }

    return (
        <div>
            <DropdownLayout color={colorScheme.primaryColor} ref={dropdownRef} onClick={_ => onDropdownClick()}>
                {title + " " + items[selected].title}
                <Icon source={""} />
            </DropdownLayout>
            {
                showItems && <DropdownItemContainter top={containterPos.y} left={containterPos.x}>
                    {
                        items.map((it, index) => <DropdownItem color={colorScheme.primaryColor} width={containterPos.w}  key={nanoid()} onClick={_ => onDropdownItemClick(index)}>{it.title}</DropdownItem>)
                    }
                </DropdownItemContainter>
            }
        </div>
    )
}

export default Dropdown;