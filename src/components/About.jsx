import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/About.css';


function About() {
  return (

        <div class="card mb-3" style={{maxWidth: "540px;"}}>
          <div div class="row g-0">
            <div class="col-md-4">
              <img
                src="./Daesang.jpg"
                alt="Daesang"
                class="img-fluid rounded-start"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">BIO</h5>
                <p class="card-text">
                    My Name is Daesang Ogle. <br></br>
                    Served US Army Reserve 2010 to 2015 <br></br>
                    Working at Samsung IT Helpdesk. (2015-Present) <br></br>
                    I Want to be Web Developer <br></br>
                </p>
                <p class="card-text">
                  <small class="text-muted"></small>
                </p>
              </div>
            </div>
          </div>
        </div>
    
  )
}

export default About