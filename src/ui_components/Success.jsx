import {Link} from 'react-router-dom'

export function Success() {
    return (
        <div>
            <h2>Table booked successfully</h2>
            <Link to="/main" >
                <button className="nav-button">
                    Back to main page
                </button>
            </Link>
        </div>
        
    );
}