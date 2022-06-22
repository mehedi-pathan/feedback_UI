
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackForm from "./Components/FeedbackForm"
import FeedbackList from "./Components/FeedbackList"
import FeedbackStats from "./Components/FeedbackStats"
import Header from "./Components/Header"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './Components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'


const App = () => {

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>

                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }>
                        </Route>
                        <Route path='/about' element={<AboutPage />} />
                        
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App