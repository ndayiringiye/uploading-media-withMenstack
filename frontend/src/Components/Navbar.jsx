import { Link, Links } from "react-router"

const Navbar = () => {
  return (
    <div className="bg-green-500">
    <div className="flex justify-between  py-3 px-6 w-11/12 mx-auto capitalize font-bold text-xl">
        <div>
            <p>uploading media from any where</p>
        </div>
        <div className="flex gap-6 items-center">
            <ul className="flex gap-6">
                <Link to="/">home</Link>
                <Link to="/contact">contact us</Link>
            </ul>
            <div className="flex gap-6">
                <Link to="/signup" className="border p-1 px-3 rounded-lg shadow-lg hover:bg-slate-500 hover:text-white">signup</Link>
                <button className="bg-slate-500 text-white p-1 px-3 rounded-lg shadow-lg hover:text-black hover:bg-green-500 hover:border">login</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar