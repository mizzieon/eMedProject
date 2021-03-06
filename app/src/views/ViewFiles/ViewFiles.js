import { Box, Typography } from '@mui/material';
import React from 'react';
import Header from '../../components/Header/Header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import makeStyles from './styles';
import { Link } from 'react-router-dom';

function ViewFiles(props) {
  const { files, updateIndex, link } = props;
  const styles = makeStyles(files);

  const onRowHover = (event) => {
    updateIndex(event.currentTarget.dataset.index);
  }

  return (
    <Box>
      <Header />
      <Box sx={styles.contentContainer}>
        <Box sx={styles.filesContainer}>
          <Typography sx={styles.prompt} align='center'>No files yet! <Link to='/'>Click here to upload files</Link></Typography>
          <Typography sx={styles.prompt2} align='center'><Link to='/'>Upload More</Link></Typography>
          <TableContainer component={Paper} sx={styles.tableContainer}>
            <Table aria-label="simple table">
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
                    sx={styles.tableRow}
                  >
                    <TableCell>
                      {item.original.name}
                    </TableCell>
                    <TableCell >{item.modified.name}</TableCell>
                    <TableCell >{item.original.size}</TableCell>
                    <TableCell >{item.original.count}</TableCell>
                    <TableCell ><a href={link?.data} download={link?.filename}>Download</a></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  )
}

export default ViewFiles