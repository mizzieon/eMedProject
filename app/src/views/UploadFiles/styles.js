const makeStyles = (file) => {
    const uploadButtonColor = file ? "green" : "#1976D2";
    const textInputDisplay = file ? "block" : "none";
    return {
        container: {
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        uploadContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "300px",
            height: "200px",
            padding: "20px",
        },
        form: {
            display: "flex",
            flexDirection: "column",
            rowGap: "5px",
            width: "80%",
            margin: "20px 0 0 0",
        },
        buttonGroup: {
            display: "grid",
            gridTemplateColumns: "auto auto",
            justifyContent: "center",
            columnGap: "10px",
            rowGap: "10px",
        },
        prompt: {
            gridColumn: "span 2",
        },
        prompt2: {

        },
        uploadButton: {
            backgroundColor: uploadButtonColor,
        },
        textInput: {
            gridColumn: "span 2",
            display: textInputDisplay,
        }
    }
}

export default makeStyles;