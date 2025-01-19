import Link from "next/link";
const Footer2 = () => {
  return (
    <footer id="footer" className="st-2">
      <section className="tf-subcribe-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="fl-subcribe wow fadeIn   animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="subcribe-wp">
                  <h2 className="title clr-pri-5">Suscríbete a nuestro boletín</h2>
                  <p className="sub f-mulish clr-pri-2">
                    Suscríbete a nuestra página para estar al tanto de todas las actualizaciones y noticias nuevas que tenemos para vos.
                  </p>
                </div>
                <div className="subcribe-form fx">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    id="subscribe-form"
                  >
                    <input
                      type="email"
                      id="subscribe-email"
                      placeholder="Correo Electrónico"
                    />
                    <button className="fl-btn st-7" id="subscribe-button">
                      <span className="inner">Suscribirse</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-inner st-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="widget-footer">
                <div className="widget widget-logo">
                  <div className="logo-bottom" id="logo-footer">
                    <Link legacyBehavior href="/">
                      <a>
                        <img
                          src="assets/images/logo/Versiones_Zona_Pediatrica_page-0001-removebg-preview.png"
                          alt="kinco"
                        />
                      </a>
                    </Link>
                  </div>
                  <p className="wrap f-mulish">
                    En cada etapa de su crecimiento, estamos aquí para cuidar su salud y bienestar.
                  </p>
                  <div className="list-contact">
                    <ul>
                      <li className="fx">
                        <span>
                          <i className="far fa-map-marker-alt" /> Edificio Latitud Dent, C308
                        </span>
                      </li>
                      <li className="fx">
                        <a href="mailto:hotline@gmail.com">
                          <i className="far fa-envelope" /> tania.protti@zona-pediatrica.com
                        </a>
                      </li>
                      <li className="fx">
                        <a href="tel:012345678">
                          <i className="fal fa-phone" /> +506 4040 0808
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget widget-business">
                  <div className="inner">
                    <div className="op-time">
                      <h4 className="title-widget">Horario Abierto</h4>
                      <ul>
                        <li>
                          <span className="f-mulish">Lunes - Jueves, Sábado</span>
                        </li>
                        <li>
                          <span className="f-mulish">08 am - 12 pm</span>
                        </li>
                      </ul>
                    </div>
                    <div className="cls-time op-time">
                      <ul>
                        <li>
                          <span className="f-mulish">Viernes</span>
                        </li>
                        <li>
                          <span className="f-mulish">08 am - 4 pm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="widget widget-link">
                  <h4 className="title-widget">Our Program</h4>
                  <ul className="list-link">
                    <li className="fx">
                      <Link legacyBehavior href="/program">
                        <a className="wd-ctm f-mulish">Arts &amp; Drawing</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link legacyBehavior href="/program">
                        <a className="wd-ctm f-mulish">Computer Engineering </a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link legacyBehavior href="/program">
                        <a className="wd-ctm f-mulish">Digital Mathematics</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link legacyBehavior href="/program">
                        <a className="wd-ctm f-mulish">Physical Exercise</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link legacyBehavior href="/program">
                        <a className="wd-ctm f-mulish">General Science</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link legacyBehavior href="/program">
                        <a className="wd-ctm f-mulish">English Basic</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link legacyBehavior href="/program">
                        <a className="wd-ctm f-mulish">Social Science</a>
                      </Link>
                    </li>
                  </ul>
                </div> */}
                <div className="widget widget-news st-3">
                  <h4 className="title-widget">Noticias recientes</h4>
                  <ul className="list-news">
                    <li className="fx">
                      <img
                        src="assets/images/thumbnails/widget10.jpg"
                        alt="Image"
                        className="feature"
                      />
                      <ul className="box-content" id="new-box-clinic">
                        <li>
                          <h6 className="title">
                            <Link legacyBehavior href="https://www.google.com/search?sca_esv=8f1ce1ec8e583385&rlz=1C1UEAD_enUS1103US1103&sxsrf=ADLYWIKFgSqE2UvEgMzvg_Kn1lncGAs18A:1734119686374&q=pediatria+news+costa+rica&tbm=nws&source=lnms&fbs=AEQNm0CbCVgAZ5mWEJDg6aoPVcBgacM8wnpugOpoilxhR0Lwp7B-Gky1aJetEssIbsXJdQXx8-b02rG8AuxLAcut2B7OhfDq0qH-CT4VqIc_VIhHa_i6lg6zT8rXgNG_NQ4sXCFUgI6oR9Ewyz-_wQvSDOJ1q2o8X9yW5iYAvEZat6DzjYdlv8Fz2zG0jvi6J4TBcYrY502b&sa=X&ved=2ahUKEwis2J2fw6WKAxXvg4QIHfXFPXYQ0pQJegQIEhAB&biw=1745&bih=859&dpr=1.1s">
                              <a target="_blank" rel="noopener noreferrer">Novedades mas recientes en la salud</a>
                            </Link>
                          </h6>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-grid">
                            <a className="fx meta-news clr-pri-6">
                              <i className="far fa-calendar-alt" />
                              diciembre 2024
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {/* <li className="fx">
                      <img
                        src="assets/images/thumbnails/widget10.jpg"
                        alt="Image"
                        className="feature"
                      />
                      <ul className="box-content">
                        <li>
                          <h6 className="title">
                            <Link legacyBehavior href="/blog-grid">
                              <a>Useful Code Extened End Developers</a>
                            </Link>
                          </h6>
                        </li>
                        <li>
                          <Link legacyBehavior href="/blog-grid">
                            <a className="fx meta-news clr-pri-6">
                              <i className="far fa-calendar-alt" />
                              25 dec 2021
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-bottom jus-ct">
                <p className="copy-right">
                  Copyright © {new Date().getFullYear()}, Kinco - Kindergarten
                  HTML Template. Desarollado por <a href="https://github.com/jclot" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>{"Julian Clot"}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;
