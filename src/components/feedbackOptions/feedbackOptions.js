import PropTypes from 'prop-types';
import shortid from 'shortid';
import style from './feedbackOptins.module.css';

export default function FeedbackOptions ({options, onLeaveFeedback}) {
  return (
    <>
      <div className={style.feedback__buttonWrap}>
        {options.map((option) => (
          <button className={style.feedback__button} key={shortid.generate()} type="button" name={option} onClick={onLeaveFeedback}>
            {option}
          </button>
        ))}
      </div>
    </>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
