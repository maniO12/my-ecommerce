import React from 'react'

const Newsletter = () => {
  return (
    <div className="Newsletter">
        <div className="Newstop">
      <h4 className="Newsheading text-center">Get Exclusive offers on your Gmail</h4>
      <p className="Newspara text-center">Subscribe to our page and get updates</p>
      </div>
      <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="input-group">
          <input type="email" className="form-control" placeholder="Enter your email" aria-label="Email" aria-describedby="subscribe-button"/>
          <button className="subscribe btn btn-primary" type="button" id="subscribe-button">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Newsletter
