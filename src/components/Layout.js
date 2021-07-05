import { makeStyles } from "@material-ui/core";
import React from "react";


const newStyle = makeStyles({
    page:{
        background:'#f2f2f2',
        width :'100%'
    }
})
export default function Layout({children}){
    const classes = newStyle()
    return ( 
        <div>
            <div className ={classes.page}>
                {children}
            </div>
        </div>
     );

}
    

 
