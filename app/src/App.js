import { Box } from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import UploadFiles from './views/UploadFiles/UploadFiles';
import ViewFiles from './views/ViewFiles/ViewFiles';

function App() {
  const [files, setFiles] = useState([]);

  const onFileUploaded = (newFileData) => {

  }

  return (
    <Routes>
      <Route path='/' element={<UploadFiles />}></Route>
      <Route path='/view' element={<ViewFiles />}></Route>
    </Routes>
  );
}

export default App;
