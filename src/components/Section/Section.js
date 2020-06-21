import React from 'react';
import style from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={style.section}>
    <p className={style.title}>{title}</p>
    {children}
  </section>
);

export default Section;
