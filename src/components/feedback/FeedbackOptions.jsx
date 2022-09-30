
import React from "react";
import { FeddbackBtn} from './Feedback.styled';
import PropTypes from 'prop-types';


export const FeedbackOptions = ({feedback,feedbackOptions})=>{
 return feedback.map(name=>
 <FeddbackBtn key={name} type="button" name={name}  onClick={feedbackOptions}>{name}</FeddbackBtn> 
 )     
}

FeedbackOptions.propTypes = {
    feedback: PropTypes.arrayOf(PropTypes.string).isRequired,
    feedbackOptions: PropTypes.func.isRequired,
}