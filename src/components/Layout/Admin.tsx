import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Header, Sidebar } from "components/Common";
import Dashboard from "features/dashboard";
import StudentFeature from "features/student";
import {Route, Routes} from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns: '240px  1fr',
        gridTemplateAreas: `"header header" "sidebar main"`,

        minHeight: '100vh'
    },
    header: {
        gridArea: 'header',
        borderBottom: `1px solid rgba(0,0,0,0.12)`
    },
    sidebar: {
        gridArea: 'sidebar',
        borderRight: `1px solid rgba(0,0,0,0.12)`
    },
    main: {
        gridArea: 'main',
        /*padding: '16px 24px' */
    }
})
export function AdminLayout(){
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                <Header />
            </Box>
            <Box className={classes.sidebar}>
                <Sidebar />
            </Box>
            <Box className={classes.main}>
                <Routes>
                    <Route path="/dashboard" element= {<Dashboard />}></Route>
                    <Route path="/students" element= {<StudentFeature />}></Route>
                </Routes>
            </Box>
        </Box>
    );
}