import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createTimeData(time: string, from: string, to: string) {
  return { time, from, to };
}

const timeTable = [
  createTimeData("Morning", "10:00 AM", "12:00 AM"),
  createTimeData("Afternnoon", "12:00 PM", "01:00 PM"),
  createTimeData("Evening", "04:00 PM", "06:00 PM"),
  createTimeData("Night", "08:00 PM", "10:00 PM"),
];

function createPriceData(from: string, to: string, price: string) {
  return { from, to, price };
}

const priceTable = [
  createPriceData("10:00 AM", "12:00 AM", "100"),
  createPriceData("12:00 PM", "01:00 PM", "200"),
  createPriceData("04:00 PM", "06:00 PM", "300"),
  createPriceData("08:00 PM", "10:00 PM", "400"),
];

export function TimingTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ width: "100%", height: "fit-content" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="left">Time</TableCell>
            <TableCell align="left">From</TableCell>
            <TableCell align="left">To</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {timeTable.map((row) => (
            <TableRow
              key={row.time}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell align="left">{row.from}</TableCell>
              <TableCell align="left">{row.to}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function PriceTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ width: "100%", height: "fit-content" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="left">From</TableCell>
            <TableCell align="left">To</TableCell>
            <TableCell align="left">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {priceTable.map((row) => (
            <TableRow
              key={row.price}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.from}</TableCell>
              <TableCell align="left">{row.to}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
