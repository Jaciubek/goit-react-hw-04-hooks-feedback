import styles from './Section.module.css';
import PropTypes from 'prop-types';
import React from 'react';

const Section = ({ title, children }) => {
  const { headHead } = styles;
  return (
    <section>
      <h2 className={headHead}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};