import 'bootstrap/dist/css/bootstrap.min.css'

function Footer() {
    return(
        <footer class="text-center text-lg-start bg-light text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div class="me-5 d-none d-lg-block">
            <span></span>
            </div>
            <div>
            <a href="https://www.instagram.com/deashawn_ogle/" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/dae-sang-ogle-2a613712a/" class="me-4 text-reset">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/deashawnogle" class="me-4 text-reset">
                <i class="fab fa-github"></i>
            </a>
            </div>
        </section>
        <section class="">
            <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3"></i>Daesang Ogle
                </h6>
                <p>
                    THank you for check my portfolio
                </p>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                    Skills
                </h6>
                <p>Javascirpt</p>
                <p>React</p>
                <p>Node</p>
                <p>MySQL</p>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                    Social Links
                </h6>
                <p>
                    <a href="https://github.com/deashawnogle" class="text-reset">Git Hub</a>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/dae-sang-ogle-2a613712a/" class="text-reset">Linked In</a>
                </p>
                <p>
                    <a href="https://www.instagram.com/deashawn_ogle/" class="text-reset">Instagram</a>
                </p>
                <p>
                    <a href="image/resume.png" download>Download Link for Resume</a>
                </p>
                </div>
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                    Contact
                </h6>
                <p><i class="fas fa-home me-3"></i> Bellevue WA</p>
                <p>
                    <i class="fas fa-envelope me-3"></i>
                    deashawnogle@gmail.com
                </p>
                <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                </div>
            </div>
            </div>
        </section>
        <div class="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05);"}}>
            © 2022 Copyright:
            <a class="text-reset fw-bold" href="https://github.com/deashawnogle">Daesang Ogle</a>
        </div>

        </footer>
    )
}

export default Footer