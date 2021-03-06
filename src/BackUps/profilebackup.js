import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import axios from 'axios';
import Scream from '../components/Scream.js'
import UserProfile from "../pages/UserProfile"
//Redux Stuff
import { connect } from "react-redux";
import { uploadImage } from "../redux/actions/userActions"
//MUI STUFF
import Button from "@material-ui/core/Button";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip"
//Icons
import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";
import EditIcon from "@material-ui/icons/Edit";
import KeyboardReturn from "@material-ui/icons/KeyboardReturn"

const styles = (theme) => ({
  paper: {
    padding: 20,
  },
  profile: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
      "& button": {
        position: "absolute",
        top: "80%",
        left: "70%",
      },
    },
    "& .profile-image": {
      width: 200,
      height: 200,
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "50%",
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle",
      },
      "& a": {
        color: theme.palette.primary.main,
      },
    },
    "& hr": {
      border: "none",
      margin: "0 0 10px 0",
    },
    "& svg.button": {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  buttons: {
    textAlign: "center",
    "& a": {
      margin: "20px 10px",
    },
  },
});

class Profile extends Component {
  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append('image', image, image.name);
    this.props.uploadImage(formData); 
  };

  handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  // Function so screams will be retreived from FIREBASE
  state = {
    screams: null
};

  componentDidMount(){
      axios.get('/screams')
          .then(res => {
              this.setState({
                  screams: res.data
              })
          })
          .catch(err => console.log(err));
  };

  render() {
        // Screams loading and posted
    let recentScreamsMarkup = this.state.screams ? (
      this.state.screams.map((scream) => (
        <Scream key={scream.screamId} scream={scream}/>
      )) ) : ( <p>Loading..</p> );

    const {
      classes,
      user: {
        credentials: { handle, createdAt, imageUrl, bio, website, location, name },
        loading,
        authenticated,
      },
    } = this.props;


    let profileMarkup = !loading && 
      authenticated && 
        <Paper className={classes.paper}>
          <div className={classes.profile}>
            <div className="image-wrapper">
              <img src={imageUrl} alt="profile" className="profile-image" />
              <input
                type="file"
                id="imageInput"
                hidden="hidden"
                onChange={this.handleImageChange}
              />
              <Tooltip title="Edit profile picture" placement="top">
                <IconButton onClick={this.handleEditPicture} className="button">
                  <EditIcon color="primary" />
                </IconButton>
              </Tooltip>
            </div>
            <hr />
            <div className="profile-details">
              <MuiLink
                component={Link}
                to={`/users/${handle}`}
                color="primary"
                variant="h5"
              >
                @{handle}
              </MuiLink>
              <hr />
              {bio && <Typography variant="body2">{bio}</Typography>}
              {name && <Typography variant="body2">{name}</Typography>}
              <hr />
              {location && (
                <Fragment>
                  <LocationOn color="primary" /> <span>{location}</span>
                  <hr />
                </Fragment>
              )}
              {website && (
                <Fragment>
                  <LinkIcon color="primary" />
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    {" "}
                    {website}
                  </a>
                  <hr />
                </Fragment>
              )}
              <CalendarToday color="primary" />
              {""}
              <span>Joined {dayjs(createdAt).format("MMM YYYY")}</span>
            </div>
          </div>
          <Tooltip title="Go Back" placement="top">
                <IconButton onClick={() => (window.location.href = "homepage")}>
                   <KeyboardReturn color="primary">
                   </KeyboardReturn>
                </IconButton>
          </Tooltip>
          <UserProfile/>
              {/* Screams to be see */}
        <div> {recentScreamsMarkup} </div> 
    
        </Paper>
        
    //   ) : (
    //     <Paper className={classes.paper}>
    //       <Typography variant="body2" align="center">
    //         No profile found, please login again
    //       </Typography>
    //       <div className={classes.buttons}>
    //         <Button
    //           variant="cointained"
    //           color="primary"
    //           component={Link}
    //           to="/login"
    //         >
    //           Login
    //         </Button>
    //         <Button
    //           variant="cointained"
    //           color="secondary"
    //           component={Link}
    //           to="/signup"
    //         >
    //           Signup
    //         </Button>
    //       </div>
    //     </Paper>
    //   )
    // ) : (
    //   <p>loading...</p>
    // );
    return profileMarkup;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = { uploadImage };

Profile.propTypes = {
  uploadImage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Profile));
