import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, specialty, experience, qualification, consultCharge) {
  return { name, specialty, experience, qualification, consultCharge };
}

const rows = [
  createData(
    "Dr. Suresh",
    "GENERAL PHYSICIAN",
    "5 YRS",
    "MBBS, MD (DVL), DN",
    240
  ),
  createData("Dr. Rajesh", "DERMATOLOGY", "3 YRS", "MBBS, MD (DVL), DN", 370),
  createData(
    "Dr. Mahesh",
    "GENERAL PHYSICIAN",
    "8 YRS",
    "MBBS, MD (DVL), DN",
    240
  ),
  createData("Dr. Naresh", "DERMATOLOGY", "4 YRS", "MBBS, MD (DVL), DN", 670),
  createData(
    "Dr. Mukesh",
    "GENERAL PHYSICIAN",
    "5 YRS",
    "MBBS, MD (DVL), DN",
    490
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Specialty</TableCell>
            <TableCell align="right">Experience</TableCell>
            <TableCell align="right">Qualification</TableCell>
            <TableCell align="right">Consult Charge</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.specialty}</TableCell>
              <TableCell align="right">{row.experience}</TableCell>
              <TableCell align="right">{row.qualification}</TableCell>
              <TableCell align="right">{row.consultCharge}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
