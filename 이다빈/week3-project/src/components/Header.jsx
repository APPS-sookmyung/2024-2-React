import React from "react";

export default function Header({ layout, text }) {
  return (
    <div className={layout + "-header"}>
      <h2 className={"typography-" + layout + "-headline"}>{text}</h2>
    </div>
  );
}
