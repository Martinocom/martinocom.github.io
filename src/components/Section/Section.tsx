import React from 'react';
import './Section.scoped.scss';

interface SectionProps {
  title: string;
  children: React.ReactNode
}

function Section(props: SectionProps) {
  return (
    <div className="Container">
      <h1>{props.title}</h1>
      <section className="Card">
        {props.children}
      </section>
    </div>
  );
};

export { Section };
