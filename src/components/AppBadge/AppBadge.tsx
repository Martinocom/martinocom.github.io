import React from 'react';
import './AppBadge.scoped.scss';

interface AppBadgeProps {
  Icon: JSX.Element;
  title: string;
  text?: string;
}

function AppBadge({Icon, title, text}: AppBadgeProps) {
  return (
    <div>
      <div className={text ? "Container" : "SmallContainer"}>
        <div className="Icon">
          {Icon}
        </div>

        <div className="Content">
          <h1>{title}</h1>
          {text ? <p>{text}</p> : null }
        </div>
      </div>
      {!text ? <h2 className="Subtitle">{title}</h2> : null}
    </div>
  );
};

export { AppBadge };
