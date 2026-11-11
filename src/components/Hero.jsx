import React from 'react'

function Hero() {
  return (
    <>
     <section className="container-fluid  heroSection py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-md-6">
            <h6>Welcome to Realstate</h6>
            <h1 className="display-3 fw-bold">
              Manage Your Property
            </h1>

            <p className="lead">
               "Your will have everything nearby supermarket, buses , station, the carmen neighborhood, etc"
            </p>

            <button className="btn btn-primary btn-lg">
              Get a Quote
            </button>
          </div>

          {/* Right Image */}
          <div className="col-md-6">
            <img
              src="public/Group 2.png"
              className="img-fluid"
              alt="Hero"
            />
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Hero