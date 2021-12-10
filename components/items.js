import React from "react";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import AddIcon from "@material-ui/icons/add";
import Item from "./item";

const Items = (props) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const modalOpenHandler = () => {
    console.log(modalOpen, "open");
    setModalOpen(!modalOpen);
  };

  return (
    <Grid container justify="flex-start" spacing={2}>
      {props.data.map((val, index) => (
        <Grid key={"item" + index} item xs={6} md={3}>
          <Item data={val} />
        </Grid>
      ))}
      <Fab
        color="primary"
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          margin: 20,
          zIndex: 99,
        }}
        onClick={modalOpenHandler}
      >
        <AddIcon />
      </Fab>

      <Modal
        open={modalOpen}
        onClose={modalOpenHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 300 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade in={modalOpen}>
          <Card style={{ minWidth: 275 }}>
            <CardContent>
              <h2>Judul</h2>
              <p>isi</p>
            </CardContent>
            <CardActions>
              <Button>More</Button>
            </CardActions>
          </Card>
        </Fade>
      </Modal>
    </Grid>
  );
};

export default Items;
