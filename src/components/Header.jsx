import 'bootstrap/dist/css/bootstrap.min.css'



function Header({setCurrentPage}) {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <div class="container-fluid">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarExample01"
                    aria-controls="navbarExample01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarExample01">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick = {() =>setCurrentPage("About")} >About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick = {() =>setCurrentPage("Project")}>Project</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick = {() =>setCurrentPage("Contact")}>Contact</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
    )
}

export default Header