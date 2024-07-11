export default function Pricing() {
    return (
        <section className="price_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Pricing</h2>
          </div>
          <div className="price_container">
            <div className="box">
              <div className="detail-box">
                <h2>
                  $ <span>49</span>
                </h2>
                <h6>Startup</h6>
                <ul className="price_features">
                  <li>2GB RAM</li>
                  <li>20GB SSD Cloud Storage</li>
                  <li>Weekly Backups</li>
                  <li>DDoS Protection</li>
                  <li>Full Root Access</li>
                  <li>24/7/365 Tech Support</li>
                </ul>
              </div>
              <div className="btn-box">
                <a href=""> See Detail </a>
              </div>
            </div>
            <div className="box">
              <div className="detail-box">
                <h2>
                  $ <span>99</span>
                </h2>
                <h6>Standard</h6>
                <ul className="price_features">
                  <li>4GB RAM</li>
                  <li>50GB SSD Cloud Storage</li>
                  <li>Weekly Backups</li>
                  <li>DDoS Protection</li>
                  <li>Full Root Access</li>
                  <li>24/7/365 Tech Support</li>
                </ul>
              </div>
              <div className="btn-box">
                <a href=""> See Detail </a>
              </div>
            </div>
            <div className="box">
              <div className="detail-box">
                <h2>
                  $ <span>149</span>
                </h2>
                <h6>Business</h6>
                <ul className="price_features">
                  <li>8GB RAM</li>
                  <li>100GB SSD Cloud Storage</li>
                  <li>Weekly Backups</li>
                  <li>DDoS Protection</li>
                  <li>Full Root Access</li>
                  <li>24/7/365 Tech Support</li>
                </ul>
              </div>
              <div className="btn-box">
                <a href=""> See Detail </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}