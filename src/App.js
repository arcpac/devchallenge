import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import Users from './components/Users';
import Users1 from './components/Users1';

function App() {

  // const [users, setUsers] = useState([
  //   { name: 'Ed', message: 'Hello there' },
  //   { name: 'Anton', message: 'Hello there anton' },
  //   { name: 'Awesome', message: 'Hello there awesome' },
  // ]);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get('https://reqres.in/api/users');
      setUsers(res.data);
      setLoading(false);
    }

    fetchUsers();
  }, []);
  return (
    <div className="app">
      My app
      {/* <Users users={users} loading={loading} /> */}
      <Users1 users={users} loading={loading} />
    </div>
  );

}

export default App;