import {makeStyles} from '@mui/styles'
import { Box, Button, CircularProgress, Paper, Theme, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { authActions, selectIsLogging } from '../authSlice';


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
    const dispatch = useAppDispatch();
    const isLogging = useAppSelector(selectIsLogging);
    const handleLoginClick = () => {
        dispatch(authActions.login({
            username: 'phong',
            password: ''
        }));
    }

    return ( 
        <div className={classes.root}>
            <Paper elevation={1} className={classes.box}>
                <Typography variant="h5" component="h1">Student Management</Typography>
                <Box mt={4}>
                    <Button variant="contained" color="primary" onClick={handleLoginClick}>
                        {isLogging && <CircularProgress size={20} color='secondary' />} &nbsp; Fake Login</Button>
                </Box>
            </Paper>
        </div>  
    );
}

export default LoginPage;