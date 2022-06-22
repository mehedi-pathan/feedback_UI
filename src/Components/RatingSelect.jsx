// function RatingSelect({ select, selected }) {
//     // NOTE: We don't need local state here as it's a duplicate of parent state
//     const handleChange = (e) => {
//       select(+e.currentTarget.value)
//     }

//     // simplified with iteration
//     return (
//       <ul className='rating'>
//         {Array.from({ length: 10 }, (_, i) => (
//           <li key={`rating-${i + 1}`}>
//             <input
//               type='radio'
//               id={`num${i + 1}`}
//               name='rating'
//               value={i + 1}
//               onChange={handleChange}
//               checked={selected === i + 1}
//             />
//             <label htmlFor={`num${i + 1}`}>{i + 1}</label>
//           </li>
//         ))}
//       </ul>
//     )
//   }

//   export default RatingSelect


import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext';

const RatingSelect = ({ select }) => {
    const [selected, setSelected] = useState(8)

    const {feedbackEdit} = useContext(FeedbackContext)
    
    useEffect(() => {
        setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])

    const handleCHange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    return (
        <ul className='rating'>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num1"
                    value='1'
                    onChange={handleCHange}
                    checked={selected === 1}
                />
                <label htmlFor="num1">1</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num2"
                    value='2'
                    onChange={handleCHange}
                    checked={selected === 2}
                />
                <label htmlFor="num2">2</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num3"
                    value='3'
                    onChange={handleCHange}
                    checked={selected === 3}
                />
                <label htmlFor="num3">3</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num4"
                    value='4'
                    onChange={handleCHange}
                    checked={selected === 4}
                />
                <label htmlFor="num4">4</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num5"
                    value='5'
                    onChange={handleCHange}
                    checked={selected === 5}
                />
                <label htmlFor="num5">5</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num6"
                    value='6'
                    onChange={handleCHange}
                    checked={selected === 6}
                />
                <label htmlFor="num6">6</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num7"
                    value='7'
                    onChange={handleCHange}
                    checked={selected === 7}
                />
                <label htmlFor="num7">7</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num8"
                    value='8'
                    onChange={handleCHange}
                    checked={selected === 8}
                />
                <label htmlFor="num8">8</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num9"
                    value='9'
                    onChange={handleCHange}
                    checked={selected === 9}
                />
                <label htmlFor="num9">9</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num10"
                    value='10'
                    onChange={handleCHange}
                    checked={selected === 10}
                />
                <label htmlFor="num10">10</label>
            </li>
        </ul>
    )
}

export default RatingSelect