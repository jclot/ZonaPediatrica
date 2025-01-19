import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const DoctorDetails = () => {
  return (
    <Layout bodyClass={"teacher"}>
      <PageBanner pageName={"Mí Experiencia"} />
      <section className="tf-section tf-teacher-details">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="fx teacher-details">
                <div className="teacher-infor">
                  <div className="content">
                    <h3 className="name">Tania Protti</h3>
                    <p className="job">Hematología Pediátrica y Pediatría</p>
                    <p className="sub f-mulish">
                      La Dra. Tania Protti, pediatra y madre, brinda atención cálida y especializada para el bienestar de los niños.
                    </p>
                  </div>
                  <div className="teacher-social">
                    <h4>Sígueme</h4>
                    <div className="social">
                      <a href="https://www.facebook.com/profile.php?id=61551428998686" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://www.instagram.com/pediatricazona?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="teacher-image wow fadeIn animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1200ms"
                >
                  <img
                    src="assets/images/about-us-image-Photoroom.jpg"
                    alt="Image"
                  />
                </div>
                <div className="teacher-desc">
                  <ul className="fx m-b17">
                    <li className="style">
                      <span>L</span>
                    </li>
                    <li>
                      <span className="f-mulish">
                        a consulta debe ser un espacio tranquilo y amigable para los niños, donde ellos puedan participar y los padres salgan con sus dudas resueltas.
                      </span>
                    </li>
                  </ul>
                  <p className="f-mulish">
                    Apasionada por la pediatría y la hematología pediátrica, soy también mamá de un niño con autismo, lo que me ha dado una perspectiva única y valiosa para acompañar a mis pacientes con empatía.
                  </p>
                  <ul className="box">
                    <li className="list fx">
                      <span>
                        <i className="far fa-envelope-open" />
                      </span>
                      <span>Correo Electrónico</span>
                    </li>
                    <li>tania.protti@zona-pediatrica.com</li>
                  </ul>
                </div>
              </div>
              <div className="infor-teacher-detail">
                <div className="experience m-b38">
                  <h3>Experiencia Personal</h3>
                  <p>
                    La Dra. Tania Protti ha trabajado como médica general en <span className="highlight-important">CENEBAIS (UCR-CCSS)</span> y completado residencias en pediatría y hematología pediátrica. Su experiencia incluye formación y práctica en instituciones como el <span className="highlight-important">Hospital Max Peralta</span>, el <span className="highlight-important">CENDEISSS (UCR-CCSS)</span> y el <span className="highlight-important">Hospital Nacional de Niños</span>.
                  </p>
                </div>
                <div className="professional">
                  <h3>Habilidades Profesionales</h3>
                  <p>
                    La formación académica de la Dra. Tania Protti incluye un <span className="highlight-important">Bachillerato en Ciencias de la Salud</span>, una <span className="highlight-important">Licenciatura en Medicina y Cirugía</span>, así como especializaciones en <span className="highlight-important">Pediatría</span> y <span className="highlight-important">Hematología Pediátrica</span>.
                  </p>
                </div>
                <div className="wrap-couter fx">
                  <div
                    className="progress-couter firt wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="couter">
                      <div
                        className="chart"
                        data-percent={79}
                        data-color="#FC477E"
                      >
                        <span
                          className="percent"
                          style={{ width: 120, height: 120, lineHeight: 120 }}
                        >
                          79
                        </span>
                        <canvas height={120} width={120} />
                      </div>
                      <h4 className="heading-progress">Ambiente Amigable</h4>
                    </div>
                  </div>
                  <div
                    className="progress-couter two wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="couter">
                      <div
                        className="chart"
                        data-percent={83}
                        data-color="#FAB319"
                        data-trackcolor="#fef7e8"
                      >
                        <span
                          className="percent"
                          style={{ width: 120, height: 120, lineHeight: 120 }}
                        >
                          83
                        </span>
                        <canvas height={120} width={120} />
                      </div>
                      <h4 className="heading-progress">Atención meticulosa</h4>
                    </div>
                  </div>
                  <div
                    className="progress-couter three wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="couter">
                      <div
                        className="chart"
                        data-percent={68}
                        data-color="#B250FE"
                        data-trackcolor="#f7edff"
                      >
                        <span
                          className="percent"
                          style={{ width: 120, height: 120, lineHeight: 120 }}
                        >
                          68
                        </span>
                        <canvas height={120} width={120} />
                      </div>
                      <h4 className="heading-progress">Respeto y Confianza</h4>
                    </div>
                  </div>
                  <div
                    className="progress-couter three wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="couter">
                      <div
                        className="chart"
                        data-percent={94}
                        data-color="#B250FE"
                        data-trackcolor="#f7edff"
                      >
                        <span
                          className="percent"
                          style={{ width: 120, height: 120, lineHeight: 120 }}
                        >
                          94
                        </span>
                        <canvas height={120} width={120} />
                      </div>
                      <h4 className="heading-progress">Enfoque Analítico</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default DoctorDetails;
