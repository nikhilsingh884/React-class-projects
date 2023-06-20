import React from 'react'

function About() {
  return (
    <div className=''>
        
              <div className="about-section">
                  <h1 className='pt-5'>About Us</h1>
                  <p>Some text about who we are and what we do.</p>
                  <p>Resize the browser window to see that this page is responsive by the way.</p>
              </div>
              <div className="container py-5">
                  <h2 className='py-5' style={{ textAlign: 'center' }}>Our Team</h2>
                  <div className="row ">
                      <div className="col-md-4">
                          <div className="card">
                              <div className="container p-4">
                                  <h2>Nikhil Singh</h2>
                                  <p className="title">CEO &amp; Founder</p>
                                  <p className='text-muted'>Some text that describes me lorem ipsum ipsum lorem.</p>
                                  <p className='text-muted'>jane@example.com</p>
                                  <p><button className="btn btn-primary">Contact</button></p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className="card">
                              <div className="container p-4">
                                  <h2>Akash Sharma</h2>
                                  <p className="title">Art Director</p>
                                  <p className='text-muted'>Some text that describes me lorem ipsum ipsum lorem.</p>
                                  <p className='text-muted'>mike@example.com</p>
                                  <p className=''><button className="button btn btn-primary">Contact</button></p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className="card">
                              <div className="container p-4">
                                  <h2>Saubir Dey</h2>
                                  <p className="title">Designer</p>
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
