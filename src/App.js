import logo from './logo.svg';
import './App.css';
import './onothers/hotel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegPlayCircle,FaQuoteLeft,FaQuoteRight,FaStar,FaTwitter,FaFacebook,FaInstagram,FaLinkedin } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { BsCheck2All,BsClipboardData,BsGem,BsInboxes,BsMap,BsEnvelope,BsTelephone,BsShare,BsGeoAlt,BsClock } from "react-icons/bs";


import About from './onothers/about';

function App() {
  return (
    <>
    
      <div className='header d-flex align-items-center fixed-top'>
        <div className='container d-flex align-items-center justify-content-between'>
          <a href="" className='logo d-flex align-items-center me-auto me-lg-0 text-decoration-none'><h1>Yummy <span>.</span></h1></a>
          <div className='navbar p-0'>
            <ul className='d-flex align-items-center p-0 m-0 list-unstyled'>
              <li><a href="" className='active line'>Home</a></li>
              <li><a href=''> About</a></li>
              <li><a href="">Menu</a></li>
              <li><a href="">Events</a></li>
              <li><a href="">Chefs</a></li>
              <li><a href="">Gallary</a></li>
              <li><a href="">Drop down</a></li>
              <li><a href="">Contact</a></li>

            </ul>
          </div>
          <a href="" className='btn book'>book a table</a>
        </div>
      </div>


      <div className='hero d-flex align-items-center section-bg'>
        <div className='container'>
          <div className='row justify-content-between gy-5'>
            <div className='col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start'>
              <h2 className='aos-init aos-animate'>Enjoy Your Healthy<br></br>Delicious Food</h2>
              <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
              <div className='d-flex aos-init aos-animate'>
                <a href="" className='btn book-1 m-0'>book a table</a>
                <a href="" className='glightbox btn-watch-video d-flex align-items-center text-decoration-none'><FaRegPlayCircle className='icon-1' /><span>Watch Video</span></a>
              </div>
            </div>
            <div className='col-lg-5 order-1 order-lg-2 text-center text-lg-start'>
              <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/hero-img.png" className='img-fluid aos-init aos-animate' alt="" />
            </div>
          </div>
        </div>
      </div>


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
                                  <div className="icon-edit" ><BsClipboardData /></div>
                                    <h4>Corporis voluptates officia eiusmod</h4>
                                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                </div>
                            </div>
                            <div className="col-xl-4 aos-init aos-animate">
                            <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                              <div className="icon-edit"><BsGem  /></div>
                                    <h4>Ullamco laboris ladore pan</h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                </div>
                            </div>
                            <div className="col-xl-4 aos-init aos-animate">
                            <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                <div className="icon-edit"> <BsInboxes  /></div>
                                    <h4>Labore consequatur incidid dolore</h4>
                                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className='stats-counter small_pt'>
          <div className='container aos-init aos-animate'>
            <div className='row gy-4'>
              <div className='col-lg-3 col-md-6'>
                <div className='stats-item text-center w-100 h-100'>
                  <span>232</span>
                  <p>Clients</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
              <div className='stats-item text-center w-100 h-100'>
                  <span>521</span>
                  <p>Projects</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
              <div className='stats-item text-center w-100 h-100'>
                  <span>1453</span>
                  <p>Hours of Support</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
              <div className='stats-item text-center w-100 h-100'>
                  <span>32</span>
                  <p>Workers</p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className='small_pt'>
          <div className='container aos-init aos-animate'>
            <div className='section-header'>
              <h2>Our Menu</h2>
              <p>Check Our <span>Yummy Menu</span></p>
            </div>
            <ul className='nav nav-tabs d-flex justify-content-center aos-init aos-animate'>
              <li className='nav-item'>
                <a href="" className='nav-link active show'><h4>Starters</h4></a>
              </li>
              <li className='nav-item'>
                <a href="" className='nav-link'><h4>Breakfast</h4></a>
              </li>
              <li className='nav-item'>
                <a href="" className='nav-link'><h4>Lunch</h4></a>
              </li>
              <li className='nav-item'>
                <a href="" className='nav-link'><h4>Dinner</h4></a>
              </li>
            </ul>
            <div className='tab-content aos-init aos-animate'>
              <div className='tab-pane fade active show'>
                <div className='tab-header text-center'>
                  <p className='m-0'>Menu</p>
                  <h3>Starters</h3>
                </div>
                <div className='row gy-5'>
                  <div className='col-lg-4 menu-item'>
                    <a href="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png" className='glightbox'>
                      <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-1.png" className='menu-img img-fluid' alt="" />
                    </a>
                    <h4>Magnam Tiste</h4>
                    <p className='ingredients'>Lorem, deren, trataro, filede, nerada</p>
                    <p className='price'>$5.95</p>
                  </div>


                  <div className='col-lg-4 menu-item'>
                  <a href="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-2.png" className='glightbox'>
                      <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-2.png" className='menu-img img-fluid' alt="" />
                    </a>
                    <h4>Aut Luia</h4>
                    <p className='ingredients'>Lorem, deren, trataro, filede, nerada</p>
                    <p className='price'>$14.95</p>
                  </div>


                  <div className='col-lg-4 menu-item'>
                  <a href="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-3.png" className='glightbox'>
                      <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-3.png" className='menu-img img-fluid' alt="" />
                    </a>
                    <h4>Est Eligendi</h4>
                    <p className='ingredients'>Lorem, deren, trataro, filede, nerada</p>
                    <p className='price'>$8.95</p>
                  </div>


                  <div className='col-lg-4 menu-item'>
                  <a href="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-4.png" className='glightbox'>
                      <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-4.png" className='menu-img img-fluid' alt="" />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className='ingredients'>Lorem, deren, trataro, filede, nerada</p>
                    <p className='price'>$12.95</p>
                  </div>


                  <div className='col-lg-4 menu-item'>
                  <a href="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-5.png" className='glightbox'>
                      <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-5.png" className='menu-img img-fluid' alt="" />
                    </a>
                    <h4>Eos Luibusdam</h4>
                    <p className='ingredients'>Lorem, deren, trataro, filede, nerada</p>
                    <p className='price'>$12.95</p>
                  </div>


                  <div className='col-lg-4 menu-item'>
                  <a href="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-6.png" className='glightbox'>
                      <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/menu/menu-item-6.png" className='menu-img img-fluid' alt="" />
                    </a>
                    <h4>Laboriosam Direva</h4>
                    <p className='ingredients'>Lorem, deren, trataro, filede, nerada</p>
                    <p className='price'>$9.95</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className='small_pt testimonials section-bg'>
          <div className='container aos-init aos-animate'>
            <div className='section-header mb-5'>
              <h2>Testimonials</h2>
              <p>What Are They <span>Saying About Us</span></p>
            </div>
              <div>
                <div className='row gy-4 justify-content-center'>
                  <div className='col-lg-6'>
                    <div className='testimonial-content'>
                      <p><FaQuoteLeft className='quote-1' />
                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                          <FaQuoteRight className='quote-2' /></p>
                          <h3>Sara Wilsson</h3>
                          <h4>Designer</h4>
                          <div className='stars'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                    </div>
                  </div>
                  <div className='col-lg-2 text-center'>
                    <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/testimonials/testimonials-2.jpg" className='img-fluid testimonial-img' alt="" />
                  </div>
                </div>
              </div>
          </div>
        </div>



        <div className='small_pt'>
          <div className='container-fluid aos-init aos-animate p-0'>
            <div className='section-header'>
              <h2>Events</h2>
              <p>Share <span>Your Moments</span> In Our Restaurant</p>
            </div>
            <div className='d-flex'>
            <div className='event-item d-flex flex-column justify-content-end'>
              <h3>Custom Parties</h3>
              <div className='price align-self-start'>$99</div>
              <p className='description'>
                Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
              </p>
            </div>
            <div className='event-item-1 d-flex flex-column justify-content-end ma-1'>
              <h3>Custom Parties</h3>
              <div className='price align-self-start'>$99</div>
              <p className='description'>
                Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
              </p>
            </div>
            <div className='event-item-2 d-flex flex-column justify-content-end'>
              <h3>Custom Parties</h3>
              <div className='price align-self-start'>$99</div>
              <p className='description'>
                Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim facilis veritatis id est rem repudiandae nulla expedita quas.
              </p>
            </div>
            </div>
          </div>
        </div>



        <div className='small_pt section-bg'>
          <div className='container aos-init aos-animate'>
            <div className='section-header'>
              <h2>Chefs</h2>
              <p>Our <span>Proffesional</span> Chefs</p>
            </div>
            <div className='row gy-4'>
              <div className='col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate'>
                <div className='chef-member'>
                  <div className='member-img'>
                    <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/chefs/chefs-1.jpg" className='img-fluid' alt="" />
                    <div className='social'>
                      <a href=""><FaTwitter /></a>
                      <a href=""><FaFacebook /></a>
                      <a href=""><FaInstagram /></a>
                      <a href=""><FaLinkedin /></a>
                    </div>
                  </div>
                  <div className='member-info'>
                    <h4>Walter White</h4>
                    <span>Master Chef</span>
                    <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate'>
              <div className='chef-member'>
                  <div className='member-img'>
                    <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/chefs/chefs-2.jpg" className='img-fluid' alt="" />
                    <div className='social'>
                      <a href=""><FaTwitter /></a>
                      <a href=""><FaFacebook /></a>
                      <a href=""><FaInstagram /></a>
                      <a href=""><FaLinkedin /></a>
                    </div>
                  </div>
                  <div className='member-info'>
                    <h4>Sarah Jhonson</h4>
                    <span>Patissier</span>
                    <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate'>
              <div className='chef-member'>
                  <div className='member-img'>
                    <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/chefs/chefs-3.jpg" className='img-fluid' alt="" />
                    <div className='social'>
                      <a href=""><FaTwitter /></a>
                      <a href=""><FaFacebook /></a>
                      <a href=""><FaInstagram /></a>
                      <a href=""><FaLinkedin /></a>
                    </div>
                  </div>
                  <div className='member-info'>
                    <h4>William Anderson</h4>
                    <span>Cook</span>
                    <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className='small_pt'>
          <div className='container aos-init aos-animate'>
            <div className='section-header'>
              <h2>Book A Table</h2>
              <p>Book <span>Your Stay</span> With Us</p>
            </div>
            <div className='row g-0'>
              <div className='col-lg-4 reservation-img aos-init aos-animate'></div>
              <div className='col-lg-8 d-flex align-items-center reservation-form-bg'>
                <form action="" className='php-email-form aos-init aos-animate'>
                  <div className='row gy-4'>
                    <div className='col-lg-4 col-md-6'>
                      <input type="text" className='form-control' placeholder='Your Name' required />
                    </div>
                    <div className='col-lg-4 col-md-6'>
                    <input type="email" className='form-control' placeholder='Your Email' required />
                    </div>
                    <div className='col-lg-4 col-md-6'>
                    <input type="text" className='form-control' placeholder='Your Phone' required/>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                    <input type="text" className='form-control' placeholder='Date'  required/>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                    <input type="text" className='form-control' placeholder='Time' required />
                    </div>
                    <div className='col-lg-4 col-md-6'>
                    <input type="number" className='form-control' placeholder='# of people' required />
                    </div>
                  </div>
                  <div className='form-group mt-3'>
                    <textarea name="message" placeholder='Message' id="message"  rows="5" className='form-control'></textarea>
                  </div>
                  <div className='mb-3'></div>
                  <div className='text-center'>
                    <button className='but' type='submit'>Book a Table</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>



        <div className='small_pt section-bg'>
          <div className='container aos-init aos-animate'>
            <div className='section-header'>
              <h2>gallery</h2>
              <p>Check <span>Our Gallery</span></p>
            </div>
            <div className='overflow-hidden'>
              <div className='gallery align-items-center d-flex'>
                <div className='img-swip'>
                  <a href="">
                    <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-4.jpg" className='img-fluid' alt="" />
                  </a>
                </div>
                <div className='img-swip'>
                  <a href="">
                    <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-5.jpg" className='img-fluid' alt="" />
                  </a>
                </div>
                <div className='img-swip'>
                  <a href="">
                    <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-6.jpg" className='img-fluid squre' alt="" />
                  </a>
                </div>
                <div className='img-swip'>
                  <a href="">
                    <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-2.jpg" className='img-fluid' alt="" />
                  </a>
                </div>
                <div className='img-swip'>
                  <a href="">
                    <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/gallery/gallery-7.jpg" className='img-fluid' alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='small_pt'>
          <div className='container aos-init aos-animate'>
            <div className='section-header'>
              <h2>Contact</h2>
              <p>Need Help? <span>Contact Us</span></p>
            </div>
            <div className='mb-3'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" className='map-2' frameborder="0"></iframe>
            </div>
            <div className='row gy-4'>
              <div className='col-md-6'>
                <div className='info-item  d-flex align-items-center'>
                  <div className='ico-1'><BsMap  /></div>
                  <div>
                    <h3>Our Address</h3>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                  
                </div>
              </div>
              <div className='col-md-6'>
              <div className='info-item  d-flex align-items-center'>
                  <div className='ico-1'><BsEnvelope  /></div>
                  <div>
                    <h3>Email Us</h3>
                    <p>contact@example.com</p>
                  </div>
                  
                </div>
              </div>
              <div className='col-md-6'>
              <div className='info-item  d-flex align-items-center'>
                  <div className='ico-1'><BsTelephone  /></div>
                  <div>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                  
                </div>
              </div>
              <div className='col-md-6'>
              <div className='info-item  d-flex align-items-center'>
                  <div className='ico-1'><BsShare  /></div>
                  <div>
                    <h3>Opening Hours</h3>
                    <div><strong>Mon-Sat:</strong> 11AM - 23PM; <strong>Sunday:</strong> Closed </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <form action="" className='php-email-form p-3 p-md-4'>
              <div className='row out'>
                <div className='col-xl-6 form-group'>
                  <input type="text" className='form-control' placeholder='Your Name' required />
                </div>
                <div className='col-xl-6 form-group'>
                  <input type="email" placeholder='Your Email' className='form-control' required />
                </div>
              </div>
              <div className='form-group'>
                <input type="text" className='form-control' placeholder='Subject' required name="" id=""  />
              </div>
              <div className='form-group'>
                <textarea name="message" placeholder='Message' id="message" className='form-control'  rows="5" required></textarea>
              </div>
              <div className='my-3'></div>
              <div className='text-center'>
                <button type='submit'>Send Messages</button>
              </div>
            </form>
          </div>
        </div>



        <div className='small_pt footer'>
          <div className='container'>
            <div className='row gy-3'>
              <div className='col-lg-3 col-md-6 d-flex'>
                <div className='ico-3'> <BsGeoAlt /></div>
                <div>
                  <h4>Address</h4>
                  <p>A108 Adam Street <br />New York, NY 535022 - US <br /></p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 footer-links d-flex'>
              <div className='ico-3'> <BsTelephone /></div>
                <div>
                  <h4>Reservations</h4>
                  <p><strong>Phone:</strong> +1 5589 55488 55 <br /><strong>Email:</strong>info@example.com <br /></p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 footer-links d-flex'>
              <div className='ico-3'> <BsClock /></div>
                <div>
                  <h4>Opening Hours</h4>
                  <p><strong>Mon-Sat: 11AM</strong>  - 23PM <br />Sunday: Closed<br /></p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 footer-links'>
                <h4>Follow Us</h4>
                <div className='social-links d-flex'>
                  <a href=""><FaTwitter/></a>
                  <a href=""><FaFacebook /></a>
                  <a href=""><FaInstagram/></a>
                  <a href=""><FaLinkedin/></a>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='copyright'>© Copyright <strong><span>Yummy</span></strong>. All Rights Reserved </div>
            <div className='credits'>Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> </div>
          </div>
        </div>

     

    </>
  );
}

export default App;
