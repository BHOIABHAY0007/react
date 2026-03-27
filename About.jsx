import React from "react";

export default function About() {
  return (
    <div className="bg-dark text-light">

      <div className="text-center py-5">
        <h1 className="fw-bold display-5 text-info">About Me</h1>
        <p className="text-secondary w-75 mx-auto">
          Crafting clean UI, smooth UX and meaningful digital experiences.
        </p>
      </div>

      <div className="container mb-5">
        <div className="card bg-black border-0 shadow-lg p-4 rounded-4">
          <div className="row align-items-center">

        
            <div className="col-md-7">
              <p className="text-info">HELLO THERE 👋</p>
              <h2 className="fw-bold">
                Hi, I'm <span className="text-info">ABHAY BHOI</span>
              </h2>
              <p className="text-secondary mt-3">
                A calm-minded creative developer building modern and elegant
                web experiences using React & Bootstrap.
              </p>

              <div className="mt-4">
                <button className="btn btn-info rounded-pill px-4 me-3">
                  View Work 🚀
                </button>
                <button className="btn btn-outline-light rounded-pill px-4">
                  Download CV ⬇
                </button>
              </div>
            </div>

            
            <div className="col-md-5 text-center">
              <img
                src="https://bootstrapmade.com/content/demo/FolioOne/assets/img/profile/profile-square-11.webp"
                className="img-fluid rounded-4 shadow"
                alt="profile"
              />
            </div>

          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row g-4">

          {[
            { icon: "bi-code-slash", title: "React JS" },
            { icon: "bi-phone", title: "JavaScript" },
            { icon: "bi-layout-text-window", title: "HTML/CSS" },
            { icon: "bi-server", title: "Node JS" },
          ].map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="card bg-black border-0 text-center p-4 shadow-sm h-100 hover-card">
                <i className={`bi ${item.icon} fs-1 text-info`}></i>
                <h5 className="mt-3">{item.title}</h5>
                <p className="text-secondary small">
                  Clean and scalable development with modern UI.
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>


      <div className="container mb-5">
        <div className="row g-4">

          {[
            { year: "2022", title: "BCA" },
            { year: "2025", title: "MSC IT" },
            { year: "2026", title: "Freelance" },
            { year: "2027", title: "Company" },
          ].map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="card bg-black border-0 p-3 shadow-sm h-100">
                <p className="text-info">● {item.year}</p>
                <h6>{item.title}</h6>
              </div>
            </div>
          ))}

        </div>
      </div>


      <div className="text-center mb-5">
        <h5 className="fst-italic text-secondary">
          "Building clean and meaningful experiences through thoughtful code."
        </h5>
      </div>

    
      <div className="container mb-5">
        <h2 className="text-center mb-4 text-info">Skills</h2>

        {[
          { name: "HTML", value: 90 },
          { name: "CSS", value: 80 },
          { name: "Bootstrap", value: 70 },
          { name: "Media Query", value: 65 },
        ].map((skill, index) => (
          <div key={index} className="mb-3">
            <div className="d-flex justify-content-between">
              <span>{skill.name}</span>
              <span>{skill.value}%</span>
            </div>

            <div className="progress rounded-pill" style={{ height: "8px" }}>
              <div
                className="progress-bar bg-info"
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}