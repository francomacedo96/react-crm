import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="md:flex md:min-h-screen">

        <aside className="md:w-1/4 bg-blue-600 px-5 py-10">

        </aside>

        <main className="md:w-3/4 md:h-screen overflow-scroll">


        </main>

    </div>
  )
}

export default Layout