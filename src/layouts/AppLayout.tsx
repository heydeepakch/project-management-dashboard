import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function AppLayout() {
  return (
    <div>
      <Navbar title="Project Management Dashboard" />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default AppLayout
