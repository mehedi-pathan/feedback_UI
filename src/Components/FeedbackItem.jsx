import { RiEdit2Fill, RiCloseCircleFill } from 'react-icons/ri'
import { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ item }) => {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    return (
        //NOTE: reverse the card false to true for darker view.
        <Card reverse={true}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className='close'><RiCloseCircleFill color='#ff6a95' /></button>
            <button onClick={() => editFeedback(item)} className='edit'><RiEdit2Fill/></button>

            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.prototype = {
    item: PropTypes.array,
}

export default FeedbackItem
