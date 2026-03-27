import React from 'react'

export default function Navbar1() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient shadow-lg sticky-top">
  <div class="container">

   
    <a class="navbar-brand fw-bold fs-3 text-info" href="#">
    
    </a>

   
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <a class="nav-link active px-3 fw-semibold" href="#">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link px-3 fw-semibold" href="#">About</a>
        </li>

        <li class="nav-item">
          <a class="nav-link px-3 fw-semibold" href="#">Resume</a>
        </li>

        <li class="nav-item">
          <a class="nav-link px-3 fw-semibold" href="#">Services</a>
        </li>

    

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle px-3 fw-semibold" href="#" data-bs-toggle="dropdown">
            More
          </a>

          <ul class="dropdown-menu dropdown-menu-dark shadow border-0">
            <li><a class="dropdown-item" href="#">Projects</a></li>
            <li><a class="dropdown-item" href="#">Skills</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Testimonials</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link px-3 fw-semibold" href="#">Contact</a>
        </li>

      </ul>

     
      <div class="d-flex align-items-center">

        <i class="bi bi-twitter-x fs-5 me-3 text-info"></i>
        <i class="bi bi-facebook fs-5 me-3 text-info"></i>
        <i class="bi bi-instagram fs-5 me-3 text-info"></i>
        <i class="bi bi-linkedin fs-5 me-3 text-info"></i>

        <a href="#" class="btn btn-outline-info ms-3 px-4 rounded-pill fw-semibold">
          Hire Me
        </a>

      </div>

    </div>
  </div>
</nav>
    </div>
  )
}