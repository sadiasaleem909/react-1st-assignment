
import React from 'react';

function Footer() {
  return (
    <footer className="container-fluid  text-black py-5">

      <div className="container">
        <div className="row g-4">

          {/* Column 1 */}
          <div className="col-md-4">
            <h3 className="fw-bold">My Website</h3>
            <p>
              We create modern and responsive websites
              using React and Bootstrap.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-white text-decoration-none">About</a></li>
              <li><a href="#services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +92 300 1234567</p>
            <p>Location: Karachi, Pakistan</p>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center">
          <p className="mb-0">
            © 2026 My Website. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
