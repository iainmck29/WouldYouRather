import React from 'react'
import NavBar from './NavBar'

class Add extends React.Component {
    render() {
        return (
            <div>
                <NavBar />

                <div className="app-container">
                    <div className="add-container">
                        <img
                            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg"
                            alt="pic of user"
                            className="question-avatar-image" />
                        <div>
                            Hey, user
                        </div>
                        <form>
                            <input type="text" className="question-input" placeholder="Would you rather A?" />
                            <div>
                                OR
                            </div>
                            <input type="text" className="question-input" placeholder="Would you rather B?" />
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default Add