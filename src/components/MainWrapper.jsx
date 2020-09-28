import React, { useState, useEffect } from "react";
import RadioButtons from "./organism/RadioButtons";
import TextInputField from "./organism/TextInputField";
import CheckBoxAndLikesField from "./organism/CheckBoxAndLikesField";
import HashTagInputField from "./organism/HashTagInputField";
import HousePinRadio from "./organism/HousePinRadio";
import LocationInputField from "./organism/LocationInputField";
import DurationInputField from "./organism/DurationInputField";
import ButtonViewGroup from "./organism/ButtonViewGroup";
import ChannelInputField from "./organism/ChannelInputField";
import Footer from "./Footer";
import {
  defaultColors,
  defaultQuotes,
  defaultLocations,
  defaultChannels,
} from "../placeholderDefaults";

import JodelView from "./JodelView";

const randomDefaultColor = Object.keys(defaultColors)[
  Math.floor(Math.random() * Object.keys(defaultColors).length)
];

const randomDefaultText =
  defaultQuotes[Math.floor(Math.random() * defaultQuotes.length)];

export default function MainWrapper(props) {
  const [state, setState] = useState({
    message: null,
    view: "clean",
    textInput: randomDefaultText,
    backgroundColor: randomDefaultColor,
    showLikes: false,
    likes: "0",
    hashTags: "",
    durationLabel: "min",
    duration: 1,
    housePinIcon: "house",
    channel: "",
    location: "",
  });

  useEffect(() => {}, [state]);

  const detailedView = state.view === "detailed";

  const handleChange = (prop) => (event) => {
    console.log(prop, event.target.value);
    const value =
      prop === "showLikes" ? event.target.checked : event.target.value;
    if (prop === "view" && !state.channel) {
      setState({
        ...state,
        showLikes: true,
        likes:
          state.likes === "0" ? Math.floor(Math.random() * 1000) : state.likes,
        location:
          defaultLocations[Math.floor(Math.random() * defaultLocations.length)],
        channel:
          defaultChannels[Math.floor(Math.random() * defaultChannels.length)],
        [prop]: value,
      });
    } else {
      setState({ ...state, [prop]: value });
    }
  };
  return (
    <div className="mainWrapper">
      <ButtonViewGroup likes={state.likes} handleChange={handleChange} />
      <div className="subWrapper">
        <div className="settings">
          <RadioButtons
            backgroundColor={state.backgroundColor}
            handleChange={handleChange}
          />
          <TextInputField
            textInput={state.textInput}
            handleChange={handleChange}
          />
          <CheckBoxAndLikesField
            showLikes={state.showLikes}
            likes={state.likes}
            handleChange={handleChange}
          />
          {detailedView && (
            <HashTagInputField
              hashTags={state.hashTags}
              handleChange={handleChange}
            />
          )}
          {detailedView && (
            <LocationInputField
              location={state.location}
              handleChange={handleChange}
            />
          )}
          {detailedView && (
            <HousePinRadio
              housePinIcon={state.housePinIcon}
              handleChange={handleChange}
            />
          )}
          {detailedView && (
            <DurationInputField
              durationLabel={state.durationLabel}
              duration={state.duration}
              handleChange={handleChange}
            />
          )}
          {detailedView && (
            <ChannelInputField
              channel={state.channel}
              handleChange={handleChange}
            />
          )}
        </div>
        <JodelView options={state} />
      </div>
      <Footer />
    </div>
  );
}
