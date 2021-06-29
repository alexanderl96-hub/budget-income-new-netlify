import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="nav">
            <h1 className="link">
                <Link to="/transactions" className="title">Budget</Link>
            </h1>
            <h2 className="link2">
                <button>
                    <Link to="/transactions/new" className="title">New Transaction</Link>
                </button>
            </h2>
            
        </div>
    )
}