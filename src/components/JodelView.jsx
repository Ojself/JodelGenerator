import React from "react";
import { defaultColors } from "../placeholderDefaults";
import html2canvas from "html2canvas";
import GetAppIcon from "@material-ui/icons/GetApp";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import RoomIcon from "@material-ui/icons/Room";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const greyShades = {
  "#FF9908": "#FED697",
  "#FFBA00": "#FFE28F",
  "#DD5F5F": "#E78F8E",
  "#8ABDB0": "#D0E3DF",
  "#06A3CB": "#A3D8EB",
  "#9EC41C": "#D8E7A4",
};

export default function JodelView(props) {
  const classes = useStyles();
  const { options } = props;

  const backgroundColor = defaultColors[options.backgroundColor];
  const greyColor = greyShades[backgroundColor];

  const styles = {
    jodelWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "Center",
      height: "100%",
      width: "35%",
      marginRight: "20%",
    },
    jodelHeader: {
      textAlign: "center",
    },
    jodelPreview: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      minHeight: "200px",
      height: "200px",
      minWidth: "250px",
      width: "250px",
      position: "relative",
      padding: "10%",
      backgroundColor: backgroundColor,
    },
    jodelText: {
      whiteSpace: "pre-line",
      color: "white",
    },
    likesText: {
      position: "absolute",
      bottom: "0",
      right: "5%",
      color: "white",
    },
    jodelHashTags: {
      position: "absolute",
      bottom: "5%",
      color: "white",
      fontWeight: "bold",
    },
    likesNumber: {
      position: "absolute",
      bottom: "0",
      right: "5%",
      color: "white",
      fontSize: "2em",
    },
    topInfo: {},
    location: {
      fontSize: "0.75em",
      color: greyColor,
    },
    channel: {
      fontSize: "0.9em",
      color: "white",
      fontWeight: "bold",
    },
    dot: {
      color: greyColor,
    },
    duration: {
      fontSize: "0.75em",
      color: greyColor,
    },
  };

  

  const handleDownload = () => {
    const options = {
      useCORS: true,
        imageTimeout:0,
        allowTaint: true
    }
    html2canvas(document.querySelector("#jodelView"),options).then((canvas) => {
      let link = document.createElement("a");
      link.download = "jodel.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  const locationIcon =
    options.housePinIcon === "house" ? (
      <HomeIcon fontSize="small" color="action" />
    ) : (
      <RoomIcon fontSize="small" color="action" />
    );

  return (
    <div style={styles.jodelWrapper}>
      <h1 style={styles.jodelHeader}> Live preview</h1>
      <div id="jodelView" style={styles.jodelPreview}>
        {options.view === "detailed" && (
          <div style={styles.topInfo}>
            <span>{locationIcon}</span>
            <span style={styles.location}>{options.location}</span>
            <span style={styles.channel}>{` @${options.channel}`}</span>
            <span style={styles.dot}> &#183; </span>
            <span style={styles.duration}>
              {options.duration}
              {options.durationLabel} ago
            </span>
          </div>
        )}
        <p style={styles.jodelText}>{options.textInput}</p>
        {options.view === "detailed" && (
          <p style={styles.jodelHashTags}>{options.hashTags}</p>
        )}
        {options.showLikes && <p style={styles.likesNumber}>{options.likes}</p>}
        {options.showLikes && <p style={styles.likesText}>likes</p>}
      </div>
      <div className={classes.root}>
        <Button
          onClick={handleDownload}
          variant="contained"
          color="primary"
          startIcon={<GetAppIcon />}
        >
          Download
        </Button>
      </div>
    </div>
  );
}
