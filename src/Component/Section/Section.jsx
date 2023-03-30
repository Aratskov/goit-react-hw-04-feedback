import { Container } from "./Section.styled";
import PropTypes from "prop-types";

export const Section = ({ title, children }) => {
  return (
    <section>
      <Container>
        <h1>{title}</h1>
        {children}
      </Container>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};
