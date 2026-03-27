import React from 'react'

export default function Contact() {
  return (
    <div className="bg-dark text-light border-bottom border-secondary">

      {/* Heading */}
      <h1 className="pt-5 text-center text-info fw-bold"><em>Contact</em></h1>
      <h6 className="mt-3 text-center text-secondary">
        <em>Let’s connect and build something amazing together.</em>
      </h6>

      {/* Card Section */}
      <div className="d-flex justify-content-center align-items-center p-5">

        <div className="card w-50 bg-black p-5 border-0 shadow-lg rounded-4">

          <div className="card-body">

            <h3 className="card-title text-info"><em>Contact Info</em></h3>
            <p className="card-text text-secondary">
              <em>Feel free to reach out anytime. I’m available for freelance & full-time work.</em>
            </p>

            {/* Location */}
            <div className="card mb-3 ms-2 bg-black w-100 border-0 hover-box">
              <div className="row g-0 align-items-center">

                <div className="col-md-2 text-center">
                  <i className="bi bi-geo-alt fs-2 text-info"></i>
                </div>

                <div className="col-md-10">
                  <div className="card-body">
                    <h6 className="card-title"><em>Location</em></h6>
                    <p className="card-text text-secondary">
                      <em>Modasa, Aravalli, India</em>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Phone */}
            <div className="card mb-3 ms-2 bg-black w-100 border-0 hover-box">
              <div className="row g-0 align-items-center">

                <div className="col-md-2 text-center">
                  <i className="bi bi-telephone fs-2 text-info"></i>
                </div>

                <div className="col-md-10">
                  <div className="card-body">
                    <h6 className="card-title"><em>Phone</em></h6>
                    <p className="card-text text-secondary">
                      <em>+91 88499 72202</em>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Email */}
            <div className="card mb-3 ms-2 bg-black w-100 border-0 hover-box">
              <div className="row g-0 align-items-center">

                <div className="col-md-2 text-center">
                  <i className="bi bi-envelope fs-2 text-info"></i>
                </div>

                <div className="col-md-10">
                  <div className="card-body">
                    <h6 className="card-title"><em>Email</em></h6>
                    <p className="card-text text-secondary">
                      <em>abhaybhoi93@gmail.com</em>
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}