import React from 'react';
import './AppButton.scoped.scss';

interface AppButtonProps {
  text: string;
}

function AppButton(props: AppButtonProps) {
  return (
    <div className="Container">
      {props.text}
    </div>
  );
};

export { AppButton };
