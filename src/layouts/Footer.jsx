import { Link } from "react-router-dom"


function Footer(){

    return (

    <footer className="bg-blue">
        <div className="container">
            <section>
                <div className="link-home">
                    <Link to="/">Torna alla home</Link>
                </div>
            </section> 
        </div>
    </footer>

    )

}

export default Footer