import { BsCheck2All,BsClipboardData } from "react-icons/bs";

const About=()=>{
    return(
        <>
        <div className="small_pt">
            <div className="container aos-init aos-animate">
                <div className="section-header">
                    <h2>About us</h2>
                    <p>Learn More <span>About Us</span></p>
                </div>
                <div className="row gy-4">
                    <div className="col-lg-7 position-relative about-img aos-init aos-animate bk-img">
                        <div className="call-us position-absolute">
                            <h4>Book a Table</h4>
                            <p>+1 5589 55488 55</p>
                        </div>
                    </div>
                    <div className="col-lg-5 d-flex align-items-end aos-init aos-animate">
                        <div className="content ps-0 ps-lg-5">
                            <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul className="p-0 m-0 pad-1">
                <li className="list-unstyled"><BsCheck2All className="icon-edi" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li className="list-unstyled"><BsCheck2All className="icon-edi" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li className="list-unstyled"><BsCheck2All className="icon-edi" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </p>
              <div className="position-relative mt-4">
                <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/about-2.jpg" className="img-fluid" alt="" />
                <a href="" className="glightbox play-btn">

                </a>
              </div>
              </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="small_pt why-us">
            <div className="container aos-init aos-animate">
                <div className="row gy-4">
                    <div className="col-lg-4 aos-init aos-animate">
                        <div className="why-box">
                            <h3>Why Choose Yummy?</h3>
                            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
              </p>
              <div className="text-center">
                <a href="" className="more-btn text-decoration-none">Learn More </a>
              </div>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-center">
                        <div className="row gy-4">
                            <div className="col-xl-4 aos-init aos-animate">
                                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                    <BsClipboardData className="icon-edit" /><h4>Corporis voluptates officia eiusmod</h4>
                                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                </div>
                            </div>
                            <div className="col-xl-4 aos-init aos-animate">
                            <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                    <BsClipboardData className="icon-edit" /><h4>Corporis voluptates officia eiusmod</h4>
                                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                </div>
                            </div>
                            <div className="col-xl-4 aos-init aos-animate">
                            <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                <div className="icon-edit"> <BsClipboardData  /></div>
                                    <h4>Corporis voluptates officia eiusmod</h4>
                                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default About;