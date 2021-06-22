import React from "react";
import Grid from "@material-ui/core/Grid";
import Item from "./item";

const Items = (props) => {
  return (
    <Grid container justify="flex-start" spacing={2}>
      {props.data.map((val) => (
        <Grid item xs={3}>
          <Item data={val} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Items;
