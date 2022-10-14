import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export const Notification = ({ message }) => {
  const { notif__message } = styles;

  return <p className={notif__message}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

Notification.propTypes = {
  message: PropTypes.string,
};