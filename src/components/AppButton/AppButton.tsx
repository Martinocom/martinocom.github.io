import React from "react";
import "./AppButton.scoped.scss";

interface AppButtonProps {
  text: string;
  type?: "outline" | "fill";
  color?: string;
  onPress?: () => void;
}

function AppButton({ text, type = "fill", color = "#20A4F3", onPress }: AppButtonProps) {
  return (
    <div
      onClick={onPress}
      className="Container"
      style={{
        border: `2px solid ${type === "outline" ? color : "transparent"}`,
        backgroundColor: type === "fill" ? color : "transparent",
        color: type === "outline" ? color : "white",
      }}
    >
      {text}
    </div>
  );
}

export { AppButton };
