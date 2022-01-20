import React from 'react'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Produits</h2>
                </div>
                
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="assets/img/1.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Accessoires Make Up</h5>
                                    <p className="card-text"></p>
                                    <a href="#" className="btn btn-primary">Buy</a>
                                </div>
                            </div>

                        </div>
                        <div class="col">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="assets/img/2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Belle peau</h5>
                                    <p className="card-text"></p>
                                    <a href="#" className="btn btn-primary">Buy</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="assets/img/1.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Mascara</h5>
                                    <p className="card-text"></p>
                                    <a href="#" className="btn btn-primary">Buy</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="assets/img/7.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Font de tient</h5>
                                    <p className="card-text"></p>
                                    <a href="#" className="btn btn-primary">Buy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default About
