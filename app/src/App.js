import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import UploadFiles from './views/UploadFiles/UploadFiles';
import ViewFiles from './views/ViewFiles/ViewFiles';

function App() {
  const [files, setFiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentLinkData, setCurrentLinkData] = useState(null);

  /* updates the object url to reflect whichever one is
  in focus. */
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

  /* called by children to transfer file data
  to this components state */
  const onFileUploaded = (data) => {
    setFiles([...files, data]);
  }

  /* called by rows in the results table
  to know which item to give the user */
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
