import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </aside>
  )
}

export default Sidebar
