const makeStyles = () => {
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
            padding: "10px",
        },
        form: {
            display: "flex",
            flexDirection: "column",
            rowGap: "5px",
            width: "80%",
            margin: "20px 0 0 0",
        }
    }
}

export default makeStyles;