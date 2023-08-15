import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="md:flex md:min-h-screen">
        <h1 className="text-6xl font-bold">CRM React - react</h1>
        <Outlet/>
    </div>
  )
}

export default Layout