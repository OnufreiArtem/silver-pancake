import React from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown/Dropdown';
import TableView from './TableView/TableView';

const MainWrapper = styled.div`
    display:flex;
    justify-content: center;
    height: 80vh;
    width: 100%;
`

const ContentLayout = styled.div`
    margin: auto 200px;
    width: 500px;

`
const SearchLayout = styled.div`
`

const Title = styled.h1`
    color: ${props => props.color}
`

const SearchBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 999px;
`

const Icon = styled.span`
    background-image: url(${props => props.source})
`

const SearchInput = styled.input`
    position: relative;
    left: 25px;
    border-right: none;
    border:none;
    width: 100%;
    height: 60px;
    border-radius: 999px 0 0 999px;
    font-size: 28px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 70px;
    border: 3px solid ${props => props.color};
    border-right: none;
    outline: none;
    color: ${props => props.color};
    background-color: ${props => props.bcg}80;

    &::placeholder {
        color: ${props => props.color}A0;
        font-style: italic;
    }
`

const SearchButton = styled.button`
    diplay: block;
    position: relative;
    border: none;
    border: 3px solid ${props => props.color};
    border-radius: 999px;
    height: 60px;
    width: 100px;
    font-size: 28px;
    padding: 10px;
    right: 25px;
    outline: none;
    transition: .3s all;
    color: ${props => props.color};
    background-image: url('https://www.figma.com/file/RXu7kPyXpEEIgM5gwmHZIQ/Guess-word?node-id=124%3A6');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-color: ${props => props.bcg};

    &:hover {
        background-color: ${props => props.bcg};
    }
`

const Hint = styled.span`
    display: block;
    font-style: italic;
    margin: 20px;
    color: ${props => props.color}90;
`

const ResultsContainer = styled.div`
    border-top: 6px solid ${props => props.color};
`

const FiltersContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    padding-bottom: 0;
`


const MainContent = ({ colorScheme }) => {
    const [selectedFilter, setSelectedFilter] = React.useState(0);
    const [selectedView, setSelectedView] = React.useState(0);
    const [columnNumber, setColumnNumber] = React.useState(2);

    return (<MainWrapper>
        <ContentLayout>
            <SearchLayout>
                <Title color={colorScheme.primaryColor}>Search for your word:</Title>
                <SearchBar>
                    <SearchInput placeholder="Input letters you know" color={colorScheme.primaryColor} bcg={colorScheme.thirdColor} />
                    <SearchButton color={colorScheme.primaryColor} bcg={colorScheme.thirdColor}>
                        <Icon source="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PICOL_icon_Search.svg/1200px-PICOL_icon_Search.svg.png" />
                    </SearchButton>
                </SearchBar>
                <Hint color={colorScheme.primaryColor}>Use “.” where letter is unknown</Hint>
            </SearchLayout>
            <ResultsContainer color={colorScheme.primaryColor}>
                <FiltersContainer>
                    <Dropdown title="Filter by: " colorScheme={colorScheme} onSelected={(index) => setSelectedFilter(index)} selected={selectedFilter} items={[{ title: "lorem1", onClick: () => { } }, { title: "lorem2", onClick: () => { } }]} />
                    <Dropdown title="View: "  colorScheme={colorScheme} onSelected={(index) => setSelectedView(index)} selected={selectedView} items={[{ title: "Two columns", onClick: () => setColumnNumber(2) }, { title: "Three columns", onClick: () => setColumnNumber(3) }]} />
                </FiltersContainer>
                <TableView colorScheme={colorScheme} columns={columnNumber} maxInColumn={5} data={['asdfasfsa1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',]} />
            </ResultsContainer>
        </ContentLayout>
    </MainWrapper>)
}

export default MainContent;