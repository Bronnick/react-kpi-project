import {Link} from 'react-router-dom'

export function Main() {
 return (
    <nav>
        <ul className="main-nav-list">

          <li>
            <Link to="/main">Main</Link>
          </li>

          <li>
            <Link to="/table_selection">Book a table</Link>
          </li>
        </ul>
    </nav>
    );
}