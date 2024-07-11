export default function About() {
  return (
    <section className="about_section layout_padding-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>About Us</h2>
              </div>
              <p>Words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks</p>
              <a href=""> Read More </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src="images/about-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
