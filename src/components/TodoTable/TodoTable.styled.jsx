import styled from '@emotion/styled';

export const Table = styled.table`
  width: 600px;
  text-align: center;
  border-spacing: 0 10px;
  empty-cells: hide;

  th {
    width: calc(100% / 4);
    padding: 5px 10px;
  }

  td {
    padding: 15px 10px;
  }

  .tableHeader tr {
    background-color: #a7a0a2;
    padding: 5px 0;
  }

  .tableBody tr {
    background-color: #564f51;
  }

  #emptyRow {
    background-color: transparent;

    td {
      padding: 5px 0;
    }
  }
`;
