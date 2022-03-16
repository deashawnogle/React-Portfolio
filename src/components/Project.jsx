import 'bootstrap/dist/css/bootstrap.min.css'

const projects = [
    {
        image: require('../images/Weather.png'),
        title: 'Weather-Dashboard',
        description: 'Use API to 5day weather forcast',
        githubLink: 'https://github.com/deashawnogle/Weather-Dashboard',
        deployedLink: 'https://deashawnogle.github.io/Weather-Dashboard/'
    },
    {
        image: require('../images/Workday.png'),
        title: 'WorkDay Scheduler',
        description: 'Day Scheduler organize schedule for a day with time',
        githubLink: 'https://github.com/deashawnogle/WorkDayScheduler',
        deployedLink: 'https://deashawnogle.github.io/WorkDayScheduler/'
    },
    {
        image: require('../images/NoteTaker2.png'),
        title: 'Note Taker',
        description: 'Take personal Note on the Web',
        githubLink: 'https://github.com/deashawnogle/DaesangOgle-Note-Taker',
        deployedLink: 'https://daesangnotetaker.herokuapp.com/'
    },
    {
        image: require('../images/CodeQuiz.png'),
        title: 'Code Quiz',
        description: 'Basic code Quiz',
        githubLink: 'https://github.com/deashawnogle/Code-Quiz',
        deployedLink: 'https://deashawnogle.github.io/DaesangOgle-Homework-4/'
    },
    {
        image: require('../images/PasswordGenerator.png'),
        title: 'Password Generator',
        description: 'Random Password Generator',
        githubLink: 'https://github.com/deashawnogle/DaesangOgle-Homework-3',
        deployedLink: ' https://deashawnogle.github.io/DaesangOgle-Homework-3/'
    },
    {
        image: require('../images/Wine.png'),
        title: 'Wine Cellar Tracker',
        description: 'Wine Tracking application',
        githubLink: 'https://github.com/JustinM099/wine-cellar-tracker',
        deployedLink: 'https://bottles-db.herokuapp.com/'
    }
]

function projectCard() {
    return (
    <>
    {projects.map((project, index) => {
        
        return(
                <div class="card" style={{width: "18rem;"}}>
                    <img src={project.image} class="card-img-top" alt="Chicago Skyscrapers"/>
                    <div class="card-body">
                        <h5 class="card-title">{project.title}</h5>
                        <p class="card-text">{project.description}</p>
                    </div>
                    <div class="card-body">
                        <a href={project.githubLink} class="card-link">Github</a>
                        <a href={project.deployedLink} class="card-link">Deployed link</a>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default projectCard