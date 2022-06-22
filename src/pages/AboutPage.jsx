import { Link } from 'react-router-dom'
import Card from '../Components/shared/Card'

const AboutPage = () => {
    return (
        <Card>
            <div className="about">
                <h1>About this Project</h1>
                <p>This ia  react app to leave feedback for a product or service</p>
                <p>Version 1.0.0</p>
                <p>
                    <Link to="/">Back to Home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage