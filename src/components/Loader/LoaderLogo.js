import React from "react";
import "./LoaderLogo.css";
import { greeting } from "../../portfolio";

export default function LogoLoader() {
  return (
    <div className="loader-brand">
      <div className="loader-brand-mark">VJ</div>
      <div className="loader-brand-name">{greeting.title}</div>
    </div>
  );
}
