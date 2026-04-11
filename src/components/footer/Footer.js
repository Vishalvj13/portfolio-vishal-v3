import React from "react";
import "./Footer.css";

export default function Footer(props) {
  const theme = props.theme || {};
  return (
    <div className="footer-div">
      <p className="footer-text" style={{ color: theme.secondaryText || "#868e96" }}>
          You made it to the footer. Respect. 🙌
      </p>
    </div>
  );
}
