import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
            </div>
          </div>
          <div className="greeting-image-div">
            <div className="greeting-photo-shell">
              <div className="greeting-photo-ring greeting-photo-ring-one"></div>
              <div className="greeting-photo-ring greeting-photo-ring-two"></div>
              <div className="greeting-photo-card">
                <img
                  className="greeting-profile-photo"
                  alt="Vishal Junghare"
                  src={require("../../assets/images/vishal_hero.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
