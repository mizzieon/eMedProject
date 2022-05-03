import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';

function UploadFiles(props) {
  const { uploadAction } = props;
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [modifiedFileData, setModifiedFileData] = useState(null);
  const [newFile, setNewFile] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (modifiedFileData) {
  //     if (newFile) {
  //       window.URL.revokeObjectURL(newFile);
  //     }

  //     setNewFile(window.URL.createObjectURL(modifiedFileData));
  //   }
  // }, [modifiedFileData]);

  useEffect(() => {
    if(fileContent && modifiedFileData){
      uploadAction({
        original: {
          name: file.name,
          data: fileContent,
        },
        modified:{
          name: "modified.txt",
          data: modifiedFileData,
        }
      });

      navigate("/view");
    }
  },[fileContent, modifiedFileData])

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  const onFileUpload = () => {
    var reader = new FileReader();
    reader.onload = (ProgressEvent) => {
      var fileContentArray = reader.result.split("\n");
      setFileContent(fileContentArray);
      console.log(`Original Array Length: ${fileContentArray.length}`);

      const stringArray = fileContentArray.toString();
      console.log(`String Array: ${stringArray}`);
      let convertedArray = [...fileContentArray];

      for (var i = 0; i <= convertedArray.length - 2; i += 2) {
        let tempValue = convertedArray[i + 1];
        convertedArray[i + 1] = convertedArray[i];
        convertedArray[i] = tempValue;
      }
      setModifiedFileData(convertedArray);

      // setModifiedFileData(new Blob([convertedArray.toString().replaceAll(",", "\n")], { type: 'text/plain' }));

      // console.log(stringArray.replaceAll(",","\n"));
      // console.log(`Converted Array: ${convertedArray.toString().replaceAll(",","\n")}`);
      // for(var line of fileContentArray){
      //   console.log(line);
      // }

      //store into main array
      // uploadAction({
      //   original: 6,
      //   modified: 5,
      // })
    }
    reader.readAsText(file);
  }

  return (
    <Box>
      <Header />
      upload files
      <input type="file" id='file' onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
      {/* <a href={newFile} download={"info.text"}>Download the new file</a> */}
    </Box>
  )
}

export default UploadFiles