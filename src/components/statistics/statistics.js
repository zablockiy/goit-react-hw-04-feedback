import PropTypes from 'prop-types';
import style from './statistics.module.css';

export default function Statistics ({title,good,neutral,bad,total, percentage}) {
  return (
    <div className={style.statictics}>
      <h2>{title}</h2>
      <ul>
        <li>
          <span>Good: </span>
          <span className={style.good}>{good}</span>
        </li>
        <li>
          <span>Neutral: </span>
          <span className={style.neutral}>{neutral}</span>
        </li>
        <li>
          <span>Bad: </span>
          <span className={style.bad}>{bad}</span>
        </li>

        <li>
          <span>Total: </span>
          <span>{total}</span>
        </li>
        <li>
          <span >Positive feedback: </span>
          <span> {percentage}%</span>
        </li>
      </ul>

    </div>
  )
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired
}
