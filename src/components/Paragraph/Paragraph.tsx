import React from 'react';
import './Paragraph.scoped.scss';

interface ParagraphProps {
  title: string;
  flag?: string;
  url?: string;
  children: React.ReactNode
}

function Paragraph(props: ParagraphProps) {

  const openUrl = () => {
    const url = props.url;
    if (url) {
      window.open(url);
    }
  }

  return (
    <section>
      <div className="Title" onClick={openUrl}>
        <h1 className={`${props.url ? "Clickable" : ""}`}>{props.title}</h1>
        {props.flag ? <h2>{props.flag}</h2> : null }
      </div>
      {props.children}
    </section>
  );
};

export { Paragraph };
