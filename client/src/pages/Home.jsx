export const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                            <div className="hero-content">
                                <p>My first Mern Project</p>
                                <h1>Welcome to my first project</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, delectus ex vel quam aspernatur minus.
                                </p>
                                <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">Connect Now</button>
                                </a>
                                <a href="/service">
                                    <button className="btn secondary-btn">Learn More</button>
                                </a>
                            </div>
                        </div>
                        {/* Hero images */}
                        <div className="hero-image">
                            <img src="../public/images/register.png" alt="hero image here" 
                            width="400px" height="400px"/>
                        </div>
                    </div>

                </section>
            </main>
        </>
    )
};