const makeStyles = (files) => {
    const promptDisplay = files?.length > 0 ? "none" : "block";
    const prompt2Display = files?.length > 0 ? "block" : "none";
    const tableDisplay = files?.length > 0 ? "block" : "none";
    return {
        contentContainer: {
            display: "flex",
            height: "60vh",
            justifyContent: "center",
            alignItems: "center",
        },
        filesContainer: {
            width: "600px"
        },
        prompt: {
            display: promptDisplay
        },
        prompt2: {
            display: prompt2Display,
            marginBottom: "10px",
        },
        tableContainer: {
            display: tableDisplay,
            padding: "5px",
        },
        tableRow: {
            ':hover': {
                backgroundColor: '#1976D2',
                td: {
                    color: "white",
                    a: {
                        color: "white",
                    }
                }
            }
        },
    }
}

export default makeStyles;