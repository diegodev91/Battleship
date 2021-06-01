import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { StyledTableCell, StyledTableRow } from "./hoc-styles/table.js";

export default function ScoreBoard({ scoreBoard = [] }) {
  const useStyles = makeStyles({
    table: {
      minWidth: 500,
    },
    container: {
      display: "flex",
      margin: "0 auto",
    },
  });

  return (
    <TableContainer component={Paper} className={useStyles().container}>
      <Table className={useStyles().table}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Id</StyledTableCell>
            <StyledTableCell align="center">Datetime played</StyledTableCell>
            <StyledTableCell align="center">Level</StyledTableCell>
            <StyledTableCell align="center">Turns</StyledTableCell>
            <StyledTableCell align="center">Turns played</StyledTableCell>
            <StyledTableCell align="center">Score</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scoreBoard.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">{row.datetime}</StyledTableCell>
              <StyledTableCell align="center">{row.level}</StyledTableCell>
              <StyledTableCell align="center">{row.turns}</StyledTableCell>
              <StyledTableCell align="center">
                {row.turnsPlayed}
              </StyledTableCell>
              <StyledTableCell align="center">{row.score}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
