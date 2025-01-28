import React from "react";
import "./AppSeparator.scoped.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppSeparatorProps {}

function AppSeparator(props?: AppSeparatorProps) {
  return (
    <div className="Separator">
      <div className="Line" />
      <div className="Dot" />
      <div className="Line" />
    </div>
  );
}

export { AppSeparator };
