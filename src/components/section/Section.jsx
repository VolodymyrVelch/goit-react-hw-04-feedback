import PropTypes from 'prop-types';
import {SectionBlock} from './Section.styled'

export const Section = ({title, children})=>{
    return (
        <SectionBlock>
            <h2>{title}</h2>
            <div>{children}</div>
        </SectionBlock>
    )
}

Section.propTypes ={
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}