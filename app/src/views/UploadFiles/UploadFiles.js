import { Box } from '@mui/material';
import React, { useState } from 'react'

function UploadFiles() {
  const [file, setFile] = useState(null);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  const onFileUpload = () => {
    console.log(file);
    var reader = new FileReader();
    reader.onload = (ProgressEvent) => {
      var fileContentArray = reader.result.split("/\r\n|\n/");
      for(var line of fileContentArray){
        console.log(line);
      }
    }
    reader.readAsText(file);
  }

  return (
    <Box>
      upload files
      <input type="file" id='file' onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
    </Box>
  )
}

export default UploadFiles