import { Container, Btn } from "./FeedbackOptions.styled";
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const value = Object.keys(options);
  return (
    <Container>
      {value.map((item) => (
        <Btn
          key={item}
          type="button"
          value={item}
          onClick={({ target }) => onLeaveFeedback(target.value)}
        >
          {item}
        </Btn>
      ))}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
