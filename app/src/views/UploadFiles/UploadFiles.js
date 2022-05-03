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
  const [newName, setNewName] = useState("");
  const navigate = useNavigate();
  const styles = makeStyles(file);
  const textFieldElement = document.querySelector("#nameInput");


  /* sends the new file data to the main array
  in App.js once the conversions are complete.
  redirects to View page afterwards */
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

  /* drag and drop only worked when assigning event handlers
  this way */
  useEffect(() => {
    let container = document.querySelector("#container");
    container.addEventListener("dragover", onDragEvent);
    container.addEventListener("drop", onDropEvent);
  }, [])

  /* stores file in state,
  sets input to default filename */
  const onFileChange = (event) => {
    setFile(event.target.files[0]);
    setNewName(event.target.files[0].name)
  }

  const onDragEvent = (event) => {
    event.preventDefault();
  }

  /* gets the file from the drop event and saves
  in it in state */
  const onDropEvent = (event) => {
    setFile(event.dataTransfer.files[0]);
    setNewName(event.dataTransfer.files[0].name);

    event.preventDefault();
  }

  /* creates a copy of the original data, modifies
  the copy, saves new version in state */
  const onFileUpload = () => {
    var reader = new FileReader();
    reader.onload = (ProgressEvent) => {
      //convert original conent into an array
      var fileContentArray = reader.result.split("\n");
      setFileContent(fileContentArray);

      //duplicate and modify original array
      let convertedArray = [...fileContentArray];
      for (var i = 0; i <= convertedArray.length - 2; i += 2) {
        let tempValue = convertedArray[i + 1];
        convertedArray[i + 1] = convertedArray[i];
        convertedArray[i] = tempValue;
      }
      setModifiedFileData(convertedArray);
    }
    reader.readAsText(file);
  }

  const onTextInputChanged = (event) => {
    setNewName(event.target.value);
  }

  return (
    <Box>
      <Header />
      <Box id='container' sx={styles.container}>
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
              <Button variant='contained' onClick={onFileUpload} sx={styles.uploadButton}>Upload</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default UploadFiles