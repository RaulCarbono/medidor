import Cards from "./Cards"
import Main from "./Main"
import Sidebar from "./Sidebar"

const Principal = () => {
  return (
    <div className="flex">
        <Sidebar />
        <Cards  />
    </div>
  )
}
export default Principal