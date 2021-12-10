import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Item = (props) => {
  const classes = useStyles();
  const [anchoreElMenu, setAnchorElMenu] = React.useState(null);
  const isMenuOpen = Boolean(anchoreElMenu);
  const renderMenu = (
    <Menu
      anchorEl={anchoreElMenu}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
    >
      <MenuItem>Edite</MenuItem>
      <MenuItem>Delete</MenuItem>
    </Menu>
  );
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => console.log("detai")}>
        <CardMedia
          className={classes.media}
          image="https://asset.kompas.com/crops/mTnVdoYXCoN9ElxrsEDbdoY7y0s=/65x65:865x599/750x500/data/photo/2017/06/28/1265845835.jpg"
          title={props?.data?.name || ""}
        >
          <IconButton
            onClick={(e) => {
              console.log("more");
              e.stopPropagation();
            }}
            style={{ float: "right" }}
          >
            <MoreIcon style={{ color: "ghostwhite" }} />
          </IconButton>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props?.data?.name || ""}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props?.data?.description || ""}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};
export default Item;
