import React from "react";
import Sidebar from "./partial/sidebar";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const UseStyles = makeStyles((theme) => ({
    dashboard: {
      background: "#2E2E2E",
      height: "100vh",
    },
    leftNav:{
        background: '#1B1B1C'
    },
    rightContainer: {
        padding: 20,        
    },
    card:{
        background: '#1B1B1C',
        padding: 10,
        borderRadius: 4,
        color: '#fff',
        textAlign: 'left',
        marginRight: 15,
        '&>last-child':{
            marginRight: 0,
        },
        '& h2':{
            fontSize: 16,
            marginTop: 0,
        }
    }
}));
function Dashboard(){
    const classes = UseStyles();
    return(
        <div>
            <Grid container justifyContent="center" className={classes.dashboard}>
                <Grid item md={2} className={classes.leftNav}>
                    <Sidebar/>
                </Grid>
                <Grid item md={10}>
                    <Grid container className={classes.rightContainer}>
                        <Grid item md={4}>
                            <Grid className={classes.card}>
                                <h2>Graph Heading</h2>
                            <img src="../img/graph.png"/>
                            </Grid>
                        </Grid>
                        <Grid item md={4}>
                            <Grid className={classes.card}>
                                <h2>Graph Heading</h2>
                            <img src="../img/graph.png"/>
                            </Grid>
                        </Grid>
                        <Grid item md={4}>
                            <Grid className={classes.card}>
                                <h2>Graph Heading</h2>
                            <img src="../img/graph.png"/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
export default Dashboard;