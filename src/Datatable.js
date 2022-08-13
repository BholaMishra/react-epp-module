import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";

const Datatable = () => {
  // All Data handle for data
  const [data, setData] = useState([]);

  // handle for pagination data
  const [page, setPage] = useState(0);

  // handle for tables rows
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // pagination set new Page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // handle Change Rows PerPage
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    axios.get(`https://qaapi.jahernotice.com/api/Epp`).then((response) => {
      setData(response.data.data);
      console.log("anuj", response.data.data)
    });
  }, []);

  return (
    <>
      {/* table */}
      <Paper sx={{ width: "100%", mb: 0 }}>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            className="table table-striped table-hover"
            size="small"
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Sr.No</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>MobileNo</TableCell>
                <TableCell>EmailID</TableCell>
                <TableCell>EPPCount</TableCell>
                {/* <TableCell>LastName</TableCell> */}
                {/* <TableCell>UserID</TableCell> */}
                {/* <TableCell>group_id</TableCell> */}
                <TableCell> end_date</TableCell>
                <TableCell>start_date</TableCell>
                <TableCell>Auction</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((data, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{data.FirstName}  {data.LastName}</TableCell>
                    <TableCell>{data.MobileNo}</TableCell>
                    <TableCell>{data.EmailID}</TableCell>
                    <TableCell>{data.EPPCount}</TableCell>
                    {/* <TableCell>{data.LastName}</TableCell> */}
                    {/* <TableCell>{data.UserID}</TableCell> */}
                    {/* <TableCell>{data.group_id}</TableCell> */}
                    <TableCell>{moment(data.end_date).format("DD/MMM/YYYY")}</TableCell>
                    <TableCell>{moment(data.start_date).format("DD/MMM/YYYY")}</TableCell>
                    <TableCell>  <a href="/epp1" style={{ border: 'none', color: 'black' }}>
                      <i class="bi bi-plus" >
                        <svg href="/epp1" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg></i></a>
                      {/* </button> */}
                      {/* <button style={{bordr:'none'}}> */}
                      <a href="/epp3" style={{ border: 'none', color: 'black' }}>
                        <i class="bi bi-box-arrow-in-down-left">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-down-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                            <path fill-rule="evenodd" d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0v5z" />
                          </svg></i>
                      </a></TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* table pagination */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default Datatable;
