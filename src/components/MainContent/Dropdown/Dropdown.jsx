import { nanoid } from "nanoid";
import React from "react";
import styled from "styled-components";

const DropdownLayout = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s all;
    font-style: italic;
    font-size: 18px;
    border-radius: 5px;
    padding: 5px;
    user-select: none;
    color: ${(props) => props.colorScheme.dropdownTextColor};

    &:hover {
        background-color: ${(props) => props.colorScheme.dropdownHover};
        color: ${(props) => props.colorScheme.dropdownTextHoverColor};
    }
`;

const DropdownItemContainter = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    border: 1px solid ${(props) => props.colorScheme.contextBorderColor};
    border-radius: 2px;
    background-color: ${(props) => props.colorScheme.contextBcgColor};
    user-select: none;

    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
    box-shadow: 0 0 10px #00000030;
`;

const DropdownItem = styled.span`
    display: block;
    padding: 10px;
    text-align: left;
    width: ${(props) => props.width}px;
    font-style: italic;
    color: ${(props) => props.colorScheme.dropdownTextColor};
    font-size: 18px;
    user-select: none;
    transition: 0.3s all;

    &:hover {
        background-color: ${(props) =>
            props.colorScheme.contextElementHoverColor};
        color: ${(props) => props.colorScheme.dropdownTextHoverColor};
    }
`;

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: ${(props) => props.source};
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
`;

const Dropdown = ({ title, colorScheme, selected, onSelected, items }) => {
    const [showItems, setShowItems] = React.useState(false);
    const dropdownRef = React.useRef();
    const [containterPos, setContainerPos] = React.useState({
        x: 0,
        y: 0,
        w: 0,
    });

    const detectContainerPosition = (ref) => {
        const pos = {
            y: ref.current.offsetTop + ref.current.offsetHeight,
            x: ref.current.offsetLeft,
            w: ref.current.offsetWidth,
        };
        setContainerPos(pos);
    };

    const onDropdownClick = () => {
        detectContainerPosition(dropdownRef);
        setShowItems(!showItems);
    };

    const onDropdownItemClick = (index) => {
        setShowItems(false);
        items[index].onClick();
        onSelected(index);
    };

    return (
        <div>
            <DropdownLayout
                colorScheme={colorScheme}
                ref={dropdownRef}
                onClick={(_) => onDropdownClick()}
            >
                {title + " " + items[selected].title}
                <Icon>
                    <svg
                        width="38"
                        height="38"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.7325 13.6008L19 20.8525L26.2675 13.6008L28.5 15.8333L19 25.3333L9.5 15.8333L11.7325 13.6008Z"
                            fill={colorScheme.contextTextColor}
                        />
                    </svg>
                </Icon>
            </DropdownLayout>
            {showItems && (
                <DropdownItemContainter
                    colorScheme={colorScheme}
                    top={containterPos.y}
                    left={containterPos.x}
                >
                    {items.map((it, index) => (
                        <DropdownItem
                            colorScheme={colorScheme}
                            color={colorScheme.primaryColor}
                            width={containterPos.w}
                            key={nanoid()}
                            onClick={(_) => onDropdownItemClick(index)}
                        >
                            {it.title}
                        </DropdownItem>
                    ))}
                </DropdownItemContainter>
            )}
        </div>
    );
};

export default Dropdown;
