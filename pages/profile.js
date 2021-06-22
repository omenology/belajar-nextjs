import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import Layout from "../components/layout";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Profile = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://asset.kompas.com/crops/mTnVdoYXCoN9ElxrsEDbdoY7y0s=/65x65:865x599/750x500/data/photo/2017/06/28/1265845835.jpg"
          title="Buku"
        >
          <span>kk</span>
        </CardMedia>
        <CardContent>
          <form>
            <TextField fullWidth label="Name" />
            <TextField fullWidth label="Email" />
            <TextField fullWidth label="New Password" />
            <TextField fullWidth label="re-Type New Password" />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              style={{ marginTop: 25 }}
            >
              Update
            </Button>
          </form>
        </CardContent>
      </Card>
    </Layout>
  );
};
export default Profile;
