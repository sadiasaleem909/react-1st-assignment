function Card() {
  return (
    <>
    <section className="container py-5">
      <h2 className="text-center fw-bold mb-4">
        Our Services
      </h2>

      <div className="row g-4">

        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <img src="public/house-model (1) 1.png" className="card-img-top" alt="Web Design" />

            <div className="card-body">
              <h5 className="card-title">Sobha Hearland II Villas</h5>
              <p className="card-text">
                We create modern and responsive websites.
              </p>
              <button className="btn btn-primary">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <img src="public/house-model (3) 1.png" className="card-img-top" alt="Graphic Design" />

            <div className="card-body">
              <h5 className="card-title">Sobha Hearland II Villas</h5>
              <p className="card-text">
                We create attractive graphics and designs.
              </p>
              <button className="btn btn-primary">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <img src="public/house-model 1.png" className="card-img-top" alt="Marketing" />

            <div className="card-body">
              <h5 className="card-title">Sobha Hearland II Villas</h5>
              <p className="card-text">
                Grow your business with digital marketing.
              </p>
              <button className="btn btn-primary">
                Read More
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}

export default Card;