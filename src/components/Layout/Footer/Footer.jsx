const Footer = () => {
  return (
    <div style={{ backgroundColor: "#F3DADD" }}>
      <div className="container" style={{ color: "#CC486B" }}>
        <div className="row">
          <div className="container-fluid col-md-6 col-sm-12">
            <h6>MEDIOS DE PAGO</h6>
            <ul
              className="list-unstyled"
              style={{ display: "flex", gap: "10px" }}
            >
              <li>
                <img
                  src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/uala.png"
                  alt=""
                  style={{ width: "50px", height: "auto" }}
                />
              </li>
              <li>
                <img
                  src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/visa.png"
                  alt=""
                  style={{ width: "50px", height: "auto" }}
                />
              </li>
              <li>
                <img
                  src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/cabal.png"
                  alt=""
                  style={{ width: "50px", height: "auto" }}
                />
              </li>
              <li>
                <img
                  src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/deposito.png"
                  alt=""
                  style={{ width: "50px", height: "auto" }}
                />
              </li>
              <li>
                <img
                  src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/mastercard.png"
                  alt=""
                  style={{ width: "50px", height: "auto" }}
                />
              </li>
            </ul>
          </div>
          <div className="container-fluid col-md-6 col-sm-12">
            <h6>REDES SOCIALES</h6>
            <ul
              className="list-unstyled"
              style={{ display: "flex", gap: "10px" }}
            >
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.youtube.com/"
                  target="_blank"
                >
                  <img
                    src="https://cdn-icons-png.freepik.com/128/1384/1384060.png"
                    alt=""
                    style={{ width: "30px", height: "auto" }}
                  />
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://x.com/"
                  target="_blank"
                >
                  <img
                    src="https://cdn-icons-png.freepik.com/256/5969/5969020.png?ga=GA1.1.964022125.1710766706&semt=ais_hybrid"
                    alt=""
                    style={{ width: "30px", height: "auto" }}
                  />
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                  <img
                    src="https://cdn-icons-png.freepik.com/256/2111/2111463.png?ga=GA1.1.964022125.1710766706&semt=ais_hybrid"
                    alt="Instagram"
                    style={{ width: "30px", height: "auto" }}
                  />
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <img
                    src="https://cdn-icons-png.freepik.com/256/5968/5968764.png?ga=GA1.1.964022125.1710766706&semt=ais_hybrid"
                    alt=""
                    style={{ width: "30px", height: "auto" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
