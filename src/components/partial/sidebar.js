import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const UseStyles = makeStyles((theme) => ({
    navigation: {
        padding: 15,
      '& ul':{
          listStyleType: 'none',
          marginTop: 35,
          paddingLeft: 0,
          width: '100%',
          '& li':{
            padding: '10px 15px',
            background: '#2E2E2E',
            borderRadius: 4,
            textAlign: 'left',
            '& a':{
                color: '#fff',
                textDecoration: 'none',
                textAlign: 'left'
            }
          }
        }
    },
}));
function Sidebar(){
    const classes = UseStyles();
    return (
        <div>
            <Grid container justifyContent="flex-start" className={classes.navigation}>
                <Grid item xs={12}>
                    <img src="../img/dummy-logo.png"/>    
                </Grid>
                <ul>
                    <li>
                        <a href="javascript:void(0)">Dashboard</a>
                    </li>
                </ul>
            </Grid>
        </div>
    );
}
export default Sidebar;