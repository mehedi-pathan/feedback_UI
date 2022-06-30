import { v4 as uuidv4 } from 'uuid'
import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            "id": 1,
            "rating": 10,
            "text": "This is feedback item 1 coming from the backend."
          },
          {
            "id": 2,
            "rating": 8,
            "text": "This is feedback item 2 coming from the backend."
          },
          {
            "id": 3,
            "rating": 7,
            "text": "This is feedback item 3 coming from the backend."
          },
          {
            "id": 4,
            "rating": 9,
            "text": "This is feedback item 4 coming from the backend."
          }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    //Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        let data = await response.json()
        setFeedback(data)
    }

    // add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are your sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    //Edit and update feeback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item))
    }

    // set item for updating 
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }
    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext