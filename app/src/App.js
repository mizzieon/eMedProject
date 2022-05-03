import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import UploadFiles from './views/UploadFiles/UploadFiles';
import ViewFiles from './views/ViewFiles/ViewFiles';

function App() {
  const [files, setFiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentLinkData, setCurrentLinkData] = useState(null);

  useEffect(() => {
    if(currentIndex){
      const file = new Blob([files[currentIndex].modified.data.toString().replaceAll(",", "\n")], { type: 'text/plain' });
      console.log(currentIndex);

      if(currentLinkData){
        window.URL.revokeObjectURL(currentLinkData.link);
      }

      setCurrentLinkData({data: window.URL.createObjectURL(file), filename: files[currentIndex].modified.name});
    }
  }, [currentIndex, files])

  const onFileUploaded = (data) => {
    setFiles([...files, data]);
  }

  const changeIndex = (index) => {
    setCurrentIndex(index);
  }

  return (
    <Routes>
      <Route path='/' element={<UploadFiles uploadAction={onFileUploaded} />}></Route>
      <Route path='/view' element={<ViewFiles files={files} updateIndex={changeIndex} link={currentLinkData} />}></Route>
    </Routes>
  );
}

export default App;
