
import React from "react";
import { FeedbackBtn} from './Feedback.styled';
import PropTypes from 'prop-types';


export const FeedbackOptions = ({feedback,feedbackOptions})=>{
 return feedback.map(name=>
 <FeedbackBtn key={name} type="button" name={name}  onClick={feedbackOptions}>{name}</FeedbackBtn> 
 )     
}

FeedbackOptions.propTypes = {
    feedback: PropTypes.arrayOf(PropTypes.string).isRequired,
    feedbackOptions: PropTypes.func.isRequired,
}