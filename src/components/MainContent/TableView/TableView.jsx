import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
`

const TableColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`

const TableItem = styled.span`
    display: block;
    font-size: 20px;
    color: ${props => props.color};
`

const TableView = ({ colorScheme, columns, maxInColumn, data }) => {


    const subdivide = (list, maxColumns, maxElementsInColumn) => {
        let arrays = Array(maxColumns).fill([]);
        for (let i = 0; i < maxColumns; i++) {
            arrays[i] = (list.slice(i * maxElementsInColumn, i * maxElementsInColumn + maxElementsInColumn));
            if (arrays[i].length < maxElementsInColumn) {
                for (let j = 0; j < maxElementsInColumn - arrays.length; j++) {
                    arrays[i].push('-1');
                }
            }
        }
        // console.log(arrays)
        return arrays;
    }

    const toTableColumn = (list) => <TableColumn key={nanoid()}> {list.map(it => toTableItem(it))}</TableColumn>

    const toTableItem = (text) => <TableItem key={nanoid()} color={text === "-1" ? 'transparent' : colorScheme.primaryColor}>{text}</TableItem>;

    return (
        <TableContainer columns={columns}>
            {
                subdivide(data, columns, maxInColumn).map(dataInCol => toTableColumn(dataInCol))
            }
        </TableContainer>
    )
}

export default TableView;