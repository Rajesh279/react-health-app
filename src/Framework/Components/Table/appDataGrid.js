import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TablePagination } from "@mui/material";
import { useState } from "react";

export default function AppDataGrid(props) {
  const { headerDetails } = props;
  const [page, setPage] = React.useState(0);

  const [rowData, setRowData] = useState(props.rowData);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headerDetails.map((columnDetails, rowIndex) => (
                <TableCell key={columnDetails.valueColumnKey}>
                  {columnDetails.columnName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData &&
              rowData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, rowIndex) => (
                  <TableRow
                    key={rowIndex}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    {headerDetails.map((columnDetails, colIndex) =>
                      columnDetails.componentToRender === "button" ? (
                        <TableCell key={`row-${columnDetails.valueColumnKey}`}>
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={(name, value) =>
                              columnDetails.onChangeHandler(
                                name,
                                value,
                                rowIndex
                              )
                            }>
                            {columnDetails.label}
                          </Button>
                        </TableCell>
                      ) : (
                        <TableCell key={`row-${columnDetails.valueColumnKey}`}>
                          {row[columnDetails.valueColumnKey]}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rowData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
