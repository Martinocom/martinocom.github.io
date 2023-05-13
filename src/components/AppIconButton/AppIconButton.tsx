import React from 'react';
import './AppIconButton.scoped.scss';

interface AppIconButtonProps {
  Icon: JSX.Element;
  color?: string;
  onPress?: () => void;
}

function AppIconButton(props: AppIconButtonProps) {
  return (
    <div className="Container" style={{borderColor: props.color ?? "#20A4F3"}} onClick={props.onPress}>
      <div className="Icon" style={{color: props.color ?? "#20A4F3"}}>
        {props.Icon}
      </div>
    </div>
  );
};

export { AppIconButton };
