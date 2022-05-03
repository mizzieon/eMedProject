import { Box, Button, Input, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import makeStyles from './styles';
import Paper from '@mui/material/Paper';

function UploadFiles(props) {
  const { uploadAction } = props;
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [modifiedFileData, setModifiedFileData] = useState(null);
  const [newFile, setNewFile] = useState(null);
  const [newName, setNewName] = useState("");
  const navigate = useNavigate();
  const styles = makeStyles(file);
  const textFieldElement = document.querySelector("#nameInput");

  // useEffect(() => {
  //   if (modifiedFileData) {
  //     if (newFile) {
  //       window.URL.revokeObjectURL(newFile);
  //     }

  //     setNewFile(window.URL.createObjectURL(modifiedFileData));
  //   }
  // }, [modifiedFileData]);

  /* adds the file data to our main array in App.js 
  then redirects to the view page*/
  useEffect(() => {
    if (fileContent && modifiedFileData) {
      uploadAction({
        original: {
          name: file.name,
          data: fileContent,
          size: file.size,
          count: fileContent.length,
        },
        modified: {
          name: newName,
          data: modifiedFileData,
        }
      });

      navigate("/view");
    }
  }, [fileContent, modifiedFileData])

  /* gives focus to the text input when a 
  file has been uploaded */
  useEffect(() => {
    if(file){
      textFieldElement.focus();
    }
  }, [file])

  /* stores file in state,
  sets input to default filename */
  const onFileChange = (event) => {
    setFile(event.target.files[0]);
    setNewName(event.target.files[0].name)
  }

  /* creates a copy of the original data, modifies
  the copy, saves result in state */
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

  const onTextInputChanged = (event) => {
    setNewName(event.target.value);
  }

  return (
    <Box>
      <Header />
      <Box sx={styles.container} >
        <Box sx={styles.uploadContainer} component={Paper} >
          <Typography align='center' variant='h5'>Drag files here</Typography>
          <Typography align='center'>or</Typography>
          <Box sx={styles.form}>
            <Box sx={styles.buttonGroup}>
              <Typography align='center' sx={styles.prompt}>Select a file to upload</Typography>
              <TextField id='nameInput' variant="standard" label="New File Name" sx={styles.textInput} value={newName} onChange={onTextInputChanged}></TextField>
              <label htmlFor='contained-button-file-2'>
                <Input id="contained-button-file-2" type="file" sx={{ display: "none" }} onChange={onFileChange} />
                <Button variant='contained' component='span'>Select File</Button>
              </label>
              {/* <input type="file" id='file' onChange={onFileChange} /> */}
              <Button variant='contained' onClick={onFileUpload} sx={styles.uploadButton}>Upload</Button>
              {/* <button onClick={onFileUpload}>Upload</button> */}
              {/* <a href={newFile} download={"info.text"}>Download the new file</a> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default UploadFiles