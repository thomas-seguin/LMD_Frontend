import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from "@mui/material/Typography";



const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://3xo4di2xpixr3oltj74229w9-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/comprehensive-guide-LMDS-main.png')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    color: "#fff",
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  }
}));


export const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <Box px={3} py={10} className={classes.hero}>
        <Box>Send a package</Box>
        <Typography variant="h7" component="div" fontSize="1.5rem">
          Get your package deliver in no time
        </Typography>
        <Typography variant="h7" component="div" fontSize="1.5rem">
          across city
        </Typography>


      </Box>
    </div>
  );
}
