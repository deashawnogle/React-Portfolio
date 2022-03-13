const projects = [
    {
        image: require(''),
        title:,
        altText:,
        githubLink:
        deployedLink:
    },
    {
        image: require(''),
        title:,
        altText:,
        githubLink:
        deployedLink:
    },
    {
        image: require(''),
        title:,
        altText:,
        githubLink:
        deployedLink:
    },
]

function projectCard() {
    return (

    <div className="container">
        <div className="row">
            <div className="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text"></p>
                </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                    </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Github Link</a>
                    <a href="#" className="card-link">Deployed Link</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default projectCard