import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'

function UploadFiles(props) {
  const { uploadAction } = props;
  const [file, setFile] = useState(null);
  const [modifiedFileData, setModifiedFileData] = useState(null);
  const [newFile, setNewFile] = useState(null);

  useEffect(() => {
    if(modifiedFileData){
      if(newFile){
        window.URL.revokeObjectURL(newFile);
      }

      setNewFile(window.URL.createObjectURL(modifiedFileData));
    }
  }, [modifiedFileData])

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  const onFileUpload = () => {
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
      
      setModifiedFileData(new Blob([convertedArray.toString().replaceAll(",","\n")], {type: 'text/plain'}));
      
      // console.log(stringArray.replaceAll(",","\n"));
      // console.log(`Converted Array: ${convertedArray.toString().replaceAll(",","\n")}`);
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
      <a href={newFile} download={"info.text"}>Download the new file</a>
    </Box>
  )
}

export default UploadFiles