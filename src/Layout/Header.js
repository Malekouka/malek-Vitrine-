import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavHashLink as Link } from 'react-router-hash-link'

const Header = () => {

  return (
  <div>
    <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><Link to="#home">Make-UP</Link></h1>
     
    <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#home">Home</a></li>
          <li><Link class="nav-link scrollto" to="#about">Produits</Link></li>
          <li><Link class="nav-link scrollto" to="#services">Services</Link></li>
          <li><Link class="nav-link scrollto" to="#contact">Contact</Link></li>
          <li><Link class="nav-link scrollto" to="#login">Login</Link></li>

        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  </div>
  )
}

export default Header
