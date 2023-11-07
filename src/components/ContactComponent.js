import React from 'react'

function ContactComponent() {
  return (
    <div className="container mt-5 mb-5">
    <div class="alert alert-success" role="alert">
   If you have any questions or inquiries, feel free to reach out to us.
        </div>
    

    <div className="card shadow">
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default ContactComponent