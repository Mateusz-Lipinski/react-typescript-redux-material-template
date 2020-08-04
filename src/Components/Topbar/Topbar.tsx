import React from "react";
import { useScrollTrigger, Slide, AppBar, Toolbar } from "@material-ui/core";
import { useTopBarStyles } from "./Topbar.styles";

export const Topbar = () => {
  const trigger = useScrollTrigger();
  const classes = useTopBarStyles();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar className={classes.root}>
        <Toolbar></Toolbar>
      </AppBar>
    </Slide>
  );
};
