import React from 'react';
import styled from 'styled-components';
import Colors from '../common/Colors';

const StyledTable = styled.table`
  border: 1px solid #000000;
  display: table;
  width: 100%;
  padding-bottom: 20px;
  border-collapse: separate;
  border-spacing: 0px 10px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  th {
    font-weight: 600;
    font-size: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid #000000;
    align-items: center;
    text-align: center;
    color: #000000;
  }
  th#col0 {
    padding-left: 1%;
  }
  th#col1 {
    width: 20%;
    padding-left: 30px;
  }
  th#col2 {
    width: 60%;
    text-align: left;
    align-items: left;
    padding-left: 80px;
  }
  th#col3 {
    text-align: left;
    align-items: left;
    padding-right: 20px;
  }
  tr#hoverableRow:hover {
    text-decoration: underline;
  }
  tr#hoverableRow {
    text-decoration: none;
  }
  td {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid #969696;
  }
  td#dataCol0 {
    position: relative;
    top: 4px;
    padding-left: 4%;
  }
  td#dataCol1 {
    width: 25%;
    position: relative;
    top: 4px;
    padding-left: 7%;
  }
  td#dataCol2 {
    width: 30%;
    position: relative;
    top: 4px;
    text-align: left;
    padding-left: 10%;
  }
  td#dataCol3 {
    position: relative;
    top: 4px;
    padding-right: 20px;
    color: #ff0505;
    font-weight: 600;
  }
`;

function getDeleteElement(i, j) {
  console.log('delete col');
  console.log(`dataCol${j}`);
  return (
    <td key={`row${i}col${j}`} id={`dataCol${j}`}>
      Delete
    </td>
  );
}

function Table(props) {
  return (
    <StyledTable>
      <thead>
        <tr>
          {props.headerColumns.map(function (col, i) {
            return (
              <th key={`col${i}`} id={`col${i}`}>
                {col}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.data.map(function (entry, i) {
          if (props.hoverable) {
            console.log('hoverable');
            return (
              <tr key={i} id={'hoverableRow'} onClick={props.rowLink}>
                {props.dataColumns.map(function (col, j) {
                  if (col == 'Delete') {
                    return getDeleteElement(i, j);
                  }
                  return (
                    <td key={`row${i}col${j}`} id={`dataCol${j}`}>
                      {entry[col]}
                    </td>
                  );
                })}
              </tr>
            );
          } else {
            return (
              <tr key={i}>
                {props.dataColumns.map(function (col, j) {
                  if (col == 'Delete') {
                    return getDeleteElement(i, j);
                  }
                  return (
                    <td key={`row${i}col${j}`} id={`dataCol${j}`}>
                      {entry[col]}
                    </td>
                  );
                })}
              </tr>
            );
          }
        })}
      </tbody>
    </StyledTable>
  );
}

export default Table;
