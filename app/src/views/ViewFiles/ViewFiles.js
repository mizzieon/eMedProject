import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header/Header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ViewFiles(props) {
  const { files, updateIndex, link } = props;

  const onRowHover = (event) => {
    updateIndex(event.currentTarget.dataset.index);
  }

  return (
    <Box>
      <Header />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Original Filename</TableCell>
              <TableCell >Selected Filename</TableCell>
              <TableCell >Size (bytes)</TableCell>
              <TableCell >Lines</TableCell>
              <TableCell >Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {files.map((item, index) => (
              <TableRow
                key={index}
                data-index={index}
                onMouseOver={onRowHover}
              >
                <TableCell>
                  {item.original.name}
                </TableCell>
                <TableCell >{item.modified.name}</TableCell>
                <TableCell ></TableCell>
                <TableCell ></TableCell>
                <TableCell ><a href={link?.data} download={link?.filename}>Download</a></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default ViewFiles