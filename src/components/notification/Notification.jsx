import PropTypes from 'prop-types';
import { NotifMess } from './Notification.styled';

export const Notification = ({message})=>{
    return (<NotifMess>{message}</NotifMess>)
}

Notification.propTypes ={
    message: PropTypes.string.isRequired
}