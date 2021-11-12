import React from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown/Dropdown';
import TableView from './TableView/TableView';

import {words} from '../../words';

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
    color: ${props => props.colorScheme.primaryColor}
`

const SearchBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 999px;
`

const Icon = styled.svg`
    width: 100%;
    height: 100%;
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
    border: 3px solid ${props => props.colorScheme.searchbarBorderColor};
    border-right: none;
    outline: none;
    color: ${props => props.colorScheme.searchbarTextColor};
    background-color: ${props => props.colorScheme.searchbarBcgColor}80;

    &::placeholder {
        color: ${props => props.colorScheme.searchbarHintColor};
        font-style: italic;
    }
`

const SearchButton = styled.button`
    diplay: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: none;
    border: 3px solid ${props => props.colorScheme.searchbarBorderColor};
    border-radius: 999px;
    height: 60px;
    width: 100px;
    font-size: 28px;
    padding: 10px;
    right: 25px;
    outline: none;
    transition: .3s all;
    color: ${props => props.colorScheme.searchbarTextColor};
    background-image: url('https://www.figma.com/file/RXu7kPyXpEEIgM5gwmHZIQ/Guess-word?node-id=124%3A6');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-color: ${props => props.colorScheme.searchBtnColor};

    &:hover {
        background-color: ${props => props.colorScheme.searchBtnHoverColor};
    }
`

const Hint = styled.span`
    display: block;
    font-style: italic;
    margin: 20px;
    color: ${props => props.colorScheme.hintColor};
`

const ResultsContainer = styled.div`
    border-top: 6px solid ${props => props.colorScheme.primaryColor};
`

const FiltersContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    padding-bottom: 0;
`


const MainContent = ({ onSearchBarChanged, onSearch, searchBarText, colorScheme }) => {
    const [selectedFilter, setSelectedFilter] = React.useState(0);
    const [selectedView, setSelectedView] = React.useState(0);
    const [columnNumber, setColumnNumber] = React.useState(2);
    const searchBarRef = React.useRef();
    const [searchResult, setSearchResult] = React.useState([]);

    const onSearchEvent = (word) => {
        const wordRegexp = new RegExp(`^${word}$`)
        setSearchResult(words.filter(it => wordRegexp.test(it)));
    }

    return (<MainWrapper>
        <ContentLayout>
            <SearchLayout>
                <Title colorScheme={colorScheme}>Search for your word:</Title>
                <SearchBar>
                    <SearchInput colorScheme={colorScheme} ref={searchBarRef} onChange={(e) => {onSearchBarChanged(e.target.value)}} value={searchBarText} placeholder="Input letters you know" color={colorScheme.primaryColor} bcg={colorScheme.thirdColor} />
                    <SearchButton colorScheme={colorScheme} onClick={_ => onSearchEvent(searchBarText)}>
                        <Icon colorScheme={colorScheme} width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.0625 26.25H27.5813L27.0563 25.7437C28.8938 23.6063 30 20.8313 30 17.8125C30 11.0813 24.5438 5.625 17.8125 5.625C11.0813 5.625 5.625 11.0813 5.625 17.8125C5.625 24.5438 11.0813 30 17.8125 30C20.8313 30 23.6063 28.8938 25.7437 27.0563L26.25 27.5813V29.0625L35.625 38.4188L38.4188 35.625L29.0625 26.25ZM17.8125 26.25C13.1438 26.25 9.375 22.4813 9.375 17.8125C9.375 13.1438 13.1438 9.375 17.8125 9.375C22.4813 9.375 26.25 13.1438 26.25 17.8125C26.25 22.4813 22.4813 26.25 17.8125 26.25Z" fill={colorScheme.searchBtnIconColor}/>
                        </Icon>
                    </SearchButton>
                </SearchBar>
                <Hint colorScheme={colorScheme}>Use “.” where letter is unknown</Hint>
            </SearchLayout>
            <ResultsContainer colorScheme={colorScheme}>
                <FiltersContainer>
                    <Dropdown title="Filter by: " colorScheme={colorScheme} onSelected={(index) => setSelectedFilter(index)} selected={selectedFilter} items={[{ title: "Show all", onClick: () => { } }, { title: "Show censured", onClick: () => { } }]} />
                    <Dropdown title="View: "  colorScheme={colorScheme} onSelected={(index) => setSelectedView(index)} selected={selectedView} items={[{ title: "Two columns", onClick: () => setColumnNumber(2) }, { title: "Three columns", onClick: () => setColumnNumber(3) }]} />
                </FiltersContainer>
                <TableView colorScheme={colorScheme} columns={columnNumber} maxInColumn={5} data={searchResult} />
            </ResultsContainer>
        </ContentLayout>
    </MainWrapper>)
}

export default MainContent;