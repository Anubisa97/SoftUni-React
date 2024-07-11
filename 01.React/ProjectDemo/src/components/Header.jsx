import Navigation from "./Navigation";


export default function Header() {
    return (
        <div className="hero_area">
      <Navigation />
    
      <section className="slider_section">
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                        Fast & Secure <br />
                        Web Hosting
                      </h1>
                      <p>Anything embarrassing hidden in the middle of text. All the Lorem Ipsuanything embarrassing hidden in the middle of text. All the Lorem Ipsumm</p>
                      <div className="btn-box">
                        <a href="" className="btn-1"> Read More </a>
                        <a href="" className="btn-2"> Contact Us </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-lg-10 mx-auto">
                        <div className="img-box">
                          <img src="images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                        Fast & Secure <br />
                        Web Hosting
                      </h1>
                      <p>Anything embarrassing hidden in the middle of text. All the Lorem Ipsuanything embarrassing hidden in the middle of text. All the Lorem Ipsumm</p>
                      <div className="btn-box">
                        <a href="" className="btn-1"> Read More </a>
                        <a href="" className="btn-2"> Contact Us </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-lg-10 mx-auto">
                        <div className="img-box">
                          <img src="images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                        Fast & Secure <br />
                        Web Hosting
                      </h1>
                      <p>Anything embarrassing hidden in the middle of text. All the Lorem Ipsuanything embarrassing hidden in the middle of text. All the Lorem Ipsumm</p>
                      <div className="btn-box">
                        <a href="" className="btn-1"> Read More </a>
                        <a href="" className="btn-2"> Contact Us </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-lg-10 mx-auto">
                        <div className="img-box">
                          <img src="images/slider-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_btn-box">
            <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </div>
    );
}