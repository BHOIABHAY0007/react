import React from 'react'

export default function Home() {
  return (

    <div className="bg-dark border-bottom border-secondary"
      style={{ height: "600px", paddingTop: "100px" }}>

      <div className="card mb-3 w-75 mx-auto border-0 bg-transparent">

        <div className="row g-0 align-items-center">

   
          <div className="col-md-8">
            <div className="card-body">

              <h1 className="card-title fs-1 text-light fw-bold">
                <em>Hello, I'm <span className="text-info">ABHAY</span></em>
              </h1>

              <h1 className="card-title text-light fw-bold">
                <em>BHOI</em>
              </h1>

              <h5 className="card-title text-secondary mt-3">
                <em>Creative <span className="text-info">FULL STACK DEVELOPER</span></em>
              </h5>

              <p className="card-text text-secondary mt-3">
                <em>
                  I build modern, responsive and user-friendly web applications
                  using React, Bootstrap and latest technologies.
                </em>
              </p>

           
              <button type="button"
                className="btn btn-info text-dark fw-semibold px-4 rounded-pill shadow-sm hover-btn">
                View My Work 🚀
              </button>

              <button type="button"
                className="btn btn-outline-info ms-3 px-4 rounded-pill fw-semibold hover-btn">
                Get In Touch 📩
              </button>

            
              <p className="mt-4">
                <span>

                  <i className="bi bi-twitter-x border p-2 rounded-circle text-info border-secondary me-2 social-icon"></i>

                  <i className="bi bi-facebook border p-2 rounded-circle text-info border-secondary me-2 social-icon"></i>

                  <i className="bi bi-instagram border p-2 rounded-circle text-info border-secondary me-2 social-icon"></i>

                  <i className="bi bi-linkedin border p-2 rounded-circle text-info border-secondary social-icon"></i>

                </span>
              </p>

            </div>
          </div>

          <div className="col-md-4 text-center">
            <img
              src="https://bootstrapmade.com/content/demo/FolioOne/assets/img/profile/profile-square-11.webp"
              className="img-fluid rounded-4 shadow-lg"
              alt="profile"
              style={{ maxHeight: "350px" }}
            />
          </div>

        </div>
      </div>

    </div>

  )
}