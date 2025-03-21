import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <>
            <div className="navbar absolute h-[50px] bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul 
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'add-coupon'}>Add Coupon</Link></li>
                        <li><Link to={'/'}>About</Link></li>
                    </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to={'/'} className="btn btn-ghost text-xl">Coupon Distributor</Link>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar
