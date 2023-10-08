

import { Link } from 'react-router-dom'

import './navBar.css'
// import Contact from '../whatsApp'

export function NavBar() {
  return <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        <img width={80} src="logo.png" alt="" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/login">
            Login <span className="sr-only">(current)</span>
          </Link>
          <Link className="nav-item nav-link" to="/admin">
            Admin Panal
          </Link>
          <Link className="nav-item nav-link" to={'/allCards'}>
            Products
          </Link>
          {/* <div>
            <Contact name="John Doe" phoneNumber="https://call.whatsapp.com/video/60M0mAGrjE0s84iYN7B5WJ " />
          </div> */}
          

        </div>
      </div>
    </nav>

  </div>
}