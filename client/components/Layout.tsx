import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="min-h-screen bg-background text-text">
      <div className="title">
        <h1>Electricity usage analysis</h1>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout