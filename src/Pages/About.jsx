import React from 'react'

function About() {
  return (
    <div className=''>
        
          <div className="about-section">
              <h1 style={{ fontSize: "54px" }} className='pt-5'>About Us</h1>
                  <p>Some text about who we are and what we do.</p>
                  <p>Resize the browser window to see that this page is responsive by the way.</p>
              </div>
              <div className="container py-5">
                  <h2 className='py-5 ' style={{ textAlign: 'center', fontSize:"54px" }}>Our Team</h2>
                  <div className="row ">
                      <div className="col-md-4">
                          <div className="card mb-3">
                              <div className="container p-4">
                                  <h2>Nikhil Singh</h2>
                                  <p className="title text-muted">CEO &amp; Founder</p>
                                  <p className='text-muted'>Some text that describes me lorem ipsum ipsum lorem.</p>
                                  <p className='text-muted'>jane@example.com</p>
                                  <p><button className="btn btn-primary">Contact</button></p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4">
                      <div className="card mb-3">
                              <div className="container p-4">
                                  <h2>Akash Sharma</h2>
                                  <p className="title text-muted">Art Director</p>
                                  <p className='text-muted'>Some text that describes me lorem ipsum ipsum lorem.</p>
                                  <p className='text-muted'>mike@example.com</p>
                                  <p className=''><button className="button btn btn-primary">Contact</button></p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4">
                      <div className="card mb-3">
                              <div className="container p-4">
                                  <h2>Jayashree Negi</h2>
                                  <p className="title text-muted">Designer</p>
                                  <p className='text-muted'>Some text that describes me lorem ipsum ipsum lorem.</p>
                                  <p className='text-muted'>john@example.com</p>
                                  <p><button className="button btn btn-primary">Contact</button></p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
    </div>
  )
}

export default About
