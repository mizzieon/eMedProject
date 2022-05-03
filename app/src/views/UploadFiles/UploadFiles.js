import { Box } from '@mui/material';
import React, { useState } from 'react'

function UploadFiles() {
  const [file, setFile] = useState(null);
  const [modifiedFile, setModifiedFile] = useState(null);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  const onFileUpload = () => {
    console.log(file);
    var reader = new FileReader();
    reader.onload = (ProgressEvent) => {
      var fileContentArray = reader.result.split("\n");
      console.log(`Original Array Length: ${fileContentArray.length}`);
      const stringArray = fileContentArray.toString();
      let convertedArray = [...fileContentArray];
      for(var i = 0; i <= convertedArray.length - 2; i+=2){
        let tempValue = convertedArray[i + 1];
        convertedArray[i + 1] = convertedArray [i];
        convertedArray[i] = tempValue;
      }


      console.log(stringArray);
      console.log(`Converted Array: ${convertedArray.toString()}`);
      // for(var line of fileContentArray){
      //   console.log(line);
      // }
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