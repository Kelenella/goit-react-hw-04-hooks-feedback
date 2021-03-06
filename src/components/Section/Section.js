import PropTypes from "prop-types";
import s from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <>
      <h1 className={s.title}>{title}</h1>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
