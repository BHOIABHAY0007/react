import React from 'react'

export default function Navbar() {
  return (
    <>
    


    <div>
     
            
        
  <header id="header" class="header d-flex flex-column justify-content-center">

    <i class="header-toggle d-xl-none bi bi-list"></i>

    <nav id="navmenu" class="navmenu">
      <ul>
        <li><a href="#hero" class="active"><i class="bi bi-house navicon"></i><span>Home</span></a></li>
        <li><a href="#about"><i class="bi bi-person navicon"></i><span>About</span></a></li>
        <li><a href="#resume"><i class="bi bi-file-earmark-text navicon"></i><span>Resume</span></a></li>
 
        <li><a href="#services"><i class="bi bi-hdd-stack navicon"></i><span>Services</span></a></li>
        <li><a href="#contact"><i class="bi bi-envelope navicon"></i><span>Contact</span></a></li>
      </ul>
    </nav>

  </header>
 

    
    <section id="hero" class="hero section light-background">
<img src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901775.jpg" alt="developer" />

      <div class="container" data-aos="zoom-out">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <h2>ABHAY BHOI</h2>
            <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Full-stack Developer</span><span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
            <div class="social-links">
              <a href="#"><i class="bi bi-twitter-x"></i></a>
              <a href="#"><i class="bi bi-facebook"></i></a>
              <a href="#"><i class="bi bi-instagram"></i></a>
              <a href="#"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

    </section>


    <section id="about" className="about section py-5 text-white">

  
  <div className="container text-center mb-5">
    <h2 className="fw-bold section-title">About</h2>
    <p className="text-muted">
      Passionate BCA student and aspiring Frontend Developer with knowledge in
      web development, networking, and cyber security.
    </p>
  </div>

  <div className="container">
    <div className="row gy-4 justify-content-center align-items-center">

    
      <div className="col-lg-4 text-center">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/055/236/043/small/smiling-businessman-holds-documents-wearing-a-suit-png.png"
          className="img-fluid rounded shadow"
          alt="profile"
        />
      </div>

      <div className="col-lg-8">

        <h3 className="fw-bold text-info">
          Frontend Developer & Web Developer
        </h3>

        <p className="fst-italic py-3 text-muted">
          I am an enthusiastic and detail-oriented student with a strong
          interest in building modern, responsive, and user-friendly websites.
        </p>

        <div className="row">

        
          <div className="col-lg-6">
            <ul className="list-unstyled">
              <li>✔ <strong>Birthday:</strong> 03 Sep 2004</li>
              <li>✔ <strong>Phone:</strong> +91 8849972202</li>
              <li>✔ <strong>City:</strong> Modasa, Gujarat</li>
              <li>✔ <strong>Degree:</strong> BCA (Pursuing)</li>
            </ul>
          </div>

          <div className="col-lg-6">
            <ul className="list-unstyled">
              <li>✔ <strong>Age:</strong> 21</li>
              <li>✔ <strong>Email:</strong> abhaybhoi93@gmail.com</li>
              <li>✔ <strong>Freelance:</strong> Available</li>
              <li>✔ <strong>Skills:</strong> Frontend, Networking, Cyber Security</li>
            </ul>
          </div>

        </div>

        <p className="py-3 text-muted">
          I am continuously improving my technical skills and aiming to become
          a Full Stack Developer. I enjoy solving problems and creating
          innovative digital solutions.
        </p>

      </div>

    </div>
  </div>

</section>
   
    </div>
   <section id="skills" className="skills py-5 text-white">

  
  <div className="container text-center mb-5">
    <h2 className="fw-bold section-title">Skills</h2>
    <p className="text-muted">
      My technical and professional skills
    </p>
  </div>

  <div className="container">
    <div className="row">

      {/* LEFT SIDE */}
      <div className="col-lg-6">

      
        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <span>HTML</span>
            <span>90%</span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" style={{ width: "90%" }}></div>
          </div>
        </div>

       
        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <span>CSS</span>
            <span>85%</span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: "85%" }}></div>
          </div>
        </div>

       
        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <span>JavaScript</span>
            <span>70%</span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated" style={{ width: "70%" }}></div>
          </div>
        </div>

      </div>

    
      <div className="col-lg-6">

    
        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <span>React</span>
            <span>75%</span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" style={{ width: "75%" }}></div>
          </div>
        </div>

     
        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <span>Networking</span>
            <span>65%</span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: "65%" }}></div>
          </div>
        </div>

        {/* CYBER SECURITY */}
        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <span>Cyber Security</span>
            <span>60%</span>
          </div>
          <div className="progress">
            <div className="progress-bar bg-secondary progress-bar-striped progress-bar-animated" style={{ width: "60%" }}></div>
          </div>
        </div>

      </div>

    </div>
  </div>

</section>
    <section id="resume" className="resume py-5 text-white">

      <div className="container">

    
        <div className="text-center mb-5">
          <h2 className="fw-bold section-title">My Resume</h2>
          <p className="text-muted">
            Passionate BCA student & aspiring Frontend Developer with Cyber Security knowledge.
          </p>
        </div>

        <div className="row">

          <div className="col-lg-6">

        
            <div className="resume-card p-4 mb-4">
              <h4 className="text-info">👨‍💻 BHOI ABHAY</h4>
              <p className="text-muted">
                Enthusiastic and detail-oriented BCA student with knowledge in JavaScript,
                Networking and Cyber Security. Strong analytical mindset and problem-solving ability.
              </p>

              <ul className="list-unstyled">
                <li>📍 Modasa, Gujarat</li>
                <li>📞 +91 8849972202</li>
                <li>✉️ abhaybhoi93@gmail.com</li>
              </ul>
            </div>

          
            <div className="resume-card p-4 mb-4">
              <h4 className="text-info">🎓 Education</h4>

              <div className="timeline">
                <div className="timeline-item">
                  <h5>BCA - HNGU University</h5>
                  <small>2022 - 2025</small>
                  <p>Strong base in IT, programming & web development.</p>
                </div>

                <div className="timeline-item">
                  <h5>MCA (Running)</h5>
                  <small>Current</small>
                  <p>Advancing in software development & modern technologies.</p>
                </div>
              </div>
            </div>

            <div className="resume-card p-4">
              <h4 className="text-info">📜 Certification</h4>

              <div className="timeline">
                <div className="timeline-item">
                  <h5>Deloitte Cyber Simulation</h5>
                  <small>Feb 2026</small>
                  <p>Worked on cyber threats, analysis & risk awareness.</p>
                </div>
              </div>
            </div>

          </div>

        
          <div className="col-lg-6">

        
            <div className="resume-card p-4 mb-4">
              <h4 className="text-info">💻 Technical Skills</h4>

              <p>HTML</p>
              <div className="progress mb-3">
                <div className="progress-bar bg-info" style={{ width: "90%" }}></div>
              </div>

              <p>CSS</p>
              <div className="progress mb-3">
                <div className="progress-bar bg-success" style={{ width: "85%" }}></div>
              </div>

              <p>JavaScript</p>
              <div className="progress mb-3">
                <div className="progress-bar bg-warning" style={{ width: "70%" }}></div>
              </div>

              <p>Cyber Security</p>
              <div className="progress mb-3">
                <div className="progress-bar bg-danger" style={{ width: "65%" }}></div>
              </div>

              <p>Networking</p>
              <div className="progress mb-3">
                <div className="progress-bar bg-primary" style={{ width: "60%" }}></div>
              </div>

            </div>

            <div className="resume-card p-4 mb-4">
              <h4 className="text-info">🧠 Soft Skills</h4>
              <ul>
                <li>Analytical Thinking</li>
                <li>Problem Solving</li>
                <li>Communication</li>
                <li>Team Collaboration</li>
                <li>Time Management</li>
              </ul>
            </div>

            
            <div className="resume-card p-4">
              <h4 className="text-info">🌍 Languages</h4>
              <ul>
                <li>Gujarati (Native)</li>
                <li>Hindi (Fluent)</li>
                <li>English (Working)</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

    </section>

   <section id="services" className="services section py-5 text-white">

  
  <div className="container text-center mb-5">
    <h2 className="fw-bold section-title">Services</h2>
    <p className="text-muted mt-3">
      I provide modern web solutions including frontend, backend, and full stack development.
    </p>
  </div>

  <div className="container">
    <div className="row gy-4">

    
      <div className="col-lg-4 col-md-6">
        <div className="service-card text-center p-4">
          <div className="icon mb-3">💻</div>
          <h4>Frontend Development</h4>
          <p>Responsive UI using HTML, CSS, Bootstrap & React JS with modern design.</p>
        </div>
      </div>

 
      <div className="col-lg-4 col-md-6">
        <div className="service-card text-center p-4">
          <div className="icon mb-3">🛠️</div>
          <h4>Backend Development</h4>
          <p>Server-side development using PHP, MySQL & API integration.</p>
        </div>
      </div>

      
      <div className="col-lg-4 col-md-6">
        <div className="service-card text-center p-4">
          <div className="icon mb-3">🚀</div>
          <h4>Full Stack Development</h4>
          <p>Complete web application development from frontend to backend.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="service-card text-center p-4">
          <div className="icon mb-3">🎨</div>
          <h4>UI/UX Design</h4>
          <p>Modern, user-friendly, and attractive website designs.</p>
        </div>
      </div>

   
      <div className="col-lg-4 col-md-6">
        <div className="service-card text-center p-4">
          <div className="icon mb-3">📈</div>
          <h4>SEO Optimization</h4>
          <p>Improve website performance and ranking on search engines.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="service-card text-center p-4">
          <div className="icon mb-3">⚙️</div>
          <h4>Website Maintenance</h4>
          <p>Regular updates, bug fixing, and performance optimization.</p>
        </div>
      </div>

    </div>
  </div>

</section>
     <section id="contact" className="contact py-5 text-white">


  <div className="container text-center mb-5">
    <h2 className="fw-bold section-title">Contact</h2>
    <p className="text-muted">
      Feel free to contact me for any project or collaboration
    </p>
  </div>

  <div className="container">
    <div className="row gy-4">

      <div className="col-lg-4">

        <div className="contact-box d-flex mb-4">
          <i className="bi bi-geo-alt fs-4 me-3 text-info"></i>
          <div>
            <h5>Address</h5>
            <p className="text-muted mb-0">
              Modasa, Aravalli, Gujarat, India
            </p>
          </div>
        </div>

        <div className="contact-box d-flex mb-4">
          <i className="bi bi-telephone fs-4 me-3 text-info"></i>
          <div>
            <h5>Call</h5>
            <p className="text-muted mb-0">
              +91 8849972202
            </p>
          </div>
        </div>

        <div className="contact-box d-flex">
          <i className="bi bi-envelope fs-4 me-3 text-info"></i>
          <div>
            <h5>Email</h5>
            <p className="text-muted mb-0">
              abhaybhoi93@gmail.com
            </p>
          </div>
        </div>

      </div>

    
      <div className="col-lg-8">

        <form className="contact-form p-4">

          <div className="row">

            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="col-md-12 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>

            <div className="col-md-12 mb-3">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <div className="col-md-12 text-center">
              <button className="btn btn-primary px-4">
                Send Message
              </button>
            </div>

          </div>

        </form>

      </div>

    </div>
  </div>

</section>
<footer id="footer" className="footer position-relative text-center">

  <div className="container">

    <h3 className="sitename">ABHAY BHOI</h3>

    <p className="footer-text" >
      Passionate Frontend Developer focused on creating modern,
      responsive and user-friendly web experiences.
    </p>

    <div className="social-links d-flex justify-content-center">
      <a href="#"><i className="bi bi-twitter-x"></i></a>
      <a href="#"><i className="bi bi-facebook"></i></a>
      <a href="#"><i className="bi bi-instagram"></i></a>
      <a href="#"><i className="bi bi-skype"></i></a>
      <a href="#"><i className="bi bi-linkedin"></i></a>
    </div>

   
    <div className="copyright mt-4">
      <span>© Copyright </span>
      <strong className="px-1">ABHAY BHOI</strong>
      <span> All Rights Reserved</span>
    </div>

  </div>

</footer>



    </>
  )
}
