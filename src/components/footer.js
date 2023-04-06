const Footer = () => {
  return (
    <section id="footer">
      <div class="footer-top">
        <div class="footer-about">
          <img
            class="logo-footer"
            src="/startup_logo.png"
            alt="logo-footer"
            data-at2x="startup_logo.png"
            width="96"
          />
          <p>We Make Careers Not Just Jobs</p>
        </div>
        <div class="footer-other">
          <div class="footer-contact">
            <h3>Contact Us</h3>
            <p>
              <i class="fas fa-map-marker-alt"></i> Rajouri Garden Delhi
            </p>
            <p>
              <i class="fas fa-phone"></i> Phone:{" "}
              <a class="email" href="telto:9810963305">
                9810963305
              </a>
            </p>
            <p>
              <i class="fas fa-envelope"></i> Email:
              <a class="email" href="mailto:placmenthub@gmail.com">
                placmenthub@gmail.com
              </a>
            </p>
          </div>
          <div class="footer-links">
            <div class="row">
              <div class="col">
                <h3>Links</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <p>
                  <a class="scroll-link" href="#xyz">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#about">Vision</a>
                </p>
                <p>
                  <a href="#middle">About Us</a>
                </p>
                <p>
                  <a href="#social">Community</a>
                </p>
                <p>
                  <a href="#founders">Team</a>
                </p>
                <p>
                  <a href="#footer">Contact Us</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copyright">
          &copy;<a href="#xyz"> Placement Hub</a>
        </div>
        <div class="footer-social">
          <a href="#home">Top</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
