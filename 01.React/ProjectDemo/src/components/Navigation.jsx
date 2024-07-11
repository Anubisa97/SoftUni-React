export default function Navigation() {
 return (
    <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="index.html">
              <span>Hostit</span>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html"> About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="price.html">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact Us</a>
                </li>
              </ul>
              <div className="quote_btn-container">
                <form className="form-inline">
                  <button className="btn nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
                <a href="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span> Call : +01 123455678990 </span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
 );
}