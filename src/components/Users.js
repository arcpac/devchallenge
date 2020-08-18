import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const Users = ({ users, loading }) => {
    const classes = useStyles();

    if (loading) {
        return <h2>Loading ... </h2>;
    }
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                        <StyledTableCell align="right">Calories</StyledTableCell>
                        <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.data && users.data.map((user) => (
                        <StyledTableRow key={user.id}>
                            <StyledTableCell component="th" scope="user">
                                {user.email}
                            </StyledTableCell>
                            <StyledTableCell align="right">{user.email}</StyledTableCell>
                            <StyledTableCell align="right">{user.email}</StyledTableCell>
                            <StyledTableCell align="right">{user.email}</StyledTableCell>
                            <StyledTableCell align="right">{user.email}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
    // return (
    //     <ul>
    //         {/* {console.log(users.data.} */}
    //         {users.data.data && users.data.data.map(user => (
    //             <li key={user.id}> {user.email} </li>
    //         ))
    //         }
    //     </ul>
    // );
};
export default Users;