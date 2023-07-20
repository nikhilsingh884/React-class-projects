import React from 'react'

function ContactUs() {
  return (
    <div className='container mt-5 pt-5'>

      <div className="row text-center">
        <div className="col-md-6 ">
          <h5>Contact no. : +91 84601 88483</h5>
        </div>
        <div className="col-md-6">
          <h5>Email  : ashishfreedom@outlook.com</h5>

        </div>
      </div>

      <div className="row">
        <div className="col-md-8 offset-2 bg-light p-2">
          <div className="form p-4">
            <form name="contact" action="/contact" method="POST" data-netlify="true" onSubmit="submit"
              netlify>
              <h4 className='text-center mb-4'>Send Inquiry</h4>

              <input type="hidden" name="form-name" value="contact" />
              <input className="d-none" type="hidden" name="" value="contact" />

              <input className='form-control mb-2' type="text" required name='name' placeholder='Your name' />
              <input className='form-control mb-2' type="text" required name='mobile' placeholder='Your mobile no.' />
              <input className='form-control mb-2' type="email" required name='email' placeholder='Your email' />
              <textarea name="msg" placeholder='Your message here' cols="85" rows="5"></textarea>
              <button type='submit' className='btn btn-primary mb-3 w-100'> Send</button>
            </form>
          </div>
        </div>
      </div>


    </div>
  )
}

export default ContactUs
