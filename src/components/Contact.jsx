import 'bootstrap/dist/css/bootstrap.min.css'

function Contact () {
    return (
        <div class="container">
            <div class="row">
                <div class="input-group">
                    <span class="input-group-text">First and last name</span>
                    <input type="text" aria-label="First name" class="form-control" />
                    <input type="text" aria-label="Last name" class="form-control" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Message</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                </div>
            </div>
        </div>
    )
}

export default Contact
