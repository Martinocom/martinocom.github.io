import React from 'react';
import './Section.scoped.scss';

interface SectionProps {
  title: string;
  children: React.ReactNode
}

function Section(props: SectionProps) {
  return (
    <section className="Card">
      <h1>{props.title}</h1>
      {props.children}
    </section>
  );
};

export { Section };
