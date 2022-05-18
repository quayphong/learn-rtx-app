import {makeStyles} from '@mui/styles'
import { Box, Button, Paper, Theme, Typography } from "@mui/material";


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
    },
    box: {
        padding: '12vh'
    }
}));

function LoginPage() {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Paper elevation={1} className={classes.box}>
                <Typography variant="h5" component="h1">Student Management</Typography>
                <Box mt={4}>
                    <Button variant="contained" color="primary">Fake Login</Button>
                </Box>
            </Paper>
        </div>  
    );
}

export default LoginPage;