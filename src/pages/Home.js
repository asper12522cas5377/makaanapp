import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import b1 from './img/carousel-1.jpg';
import b2 from './img/carousel-2.jpg';


import apartment from "./img/icon-apartment.png";
import villa from "./img/icon-apartment.png";
import home from "./img/icon-apartment.png";
import office from "./img/icon-apartment.png";
import building from "./img/icon-apartment.png";
import townhouse from "./img/icon-apartment.png";
import shop from "./img/icon-apartment.png";
import garage from "./img/icon-apartment.png";


import e1 from './img/about.jpg';
import b5 from './img/property-1.jpg';
import { propTypes } from 'react-bootstrap/esm/Image';
import b6 from './img/property-2.jpg';
import b7 from './img/property-3.jpg';
import b8 from './img/property-4.jpg';
import b9 from './img/property-5.jpg';
import b10 from './img/property-6.jpg';
import c1 from './img/call-to-action.jpg';
import c2 from './img/team-1.jpg';
import c3 from './img/team-2.jpg';
import c4 from './img/team-3.jpg';
import c5 from './img/team-4.jpg';
import d1 from './img/testimonial-1.jpg';
import d2 from './img/testimonial-2.jpg';
import d3 from './img/testimonial-3.jpg';

const propertyData = [
  { title: "Apartment", p: "123 Properties", img: apartment },
  { title: "Villa", p: "123 Properties", img: villa },
  { title: "Home", p: "123 Properties", img: home },
  { title: "Office", p: "123 Properties", img: office },
  { title: "Building", p: "123 Properties", img: building },
  { title: "Townhouse", p: "123 Properties", img: townhouse },
  { title: "Shop", p: "123 Properties", img: shop },
  { title: "Garage", p: "123 Properties", img: garage },
];

const properties = [
  {
    img: b5,
    tag: "For Sell",
    type: "Apartment",
    price: "$12,345",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    sqft: "1000 Sqft",
    bed: "3 Bed",
    bath: "2 Bath",
  },
  {
    img: b6,
    tag: "For Rent",
    type: "Villa",
    price: "$12,345",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    sqft: "1000 Sqft",
    bed: "3 Bed",
    bath: "2 Bath",
  },
  {
    img: b7,
    tag: "For Sell",
    type: "Office",
    price: "$12,345",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    sqft: "1000 Sqft",
    bed: "3 Bed",
    bath: "2 Bath",
  },
  {
    img: b8,
    tag: "For Rent",
    type: "Building",
    price: "$12,345",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    sqft: "1000 Sqft",
    bed: "3 Bed",
    bath: "2 Bath",
  },
  {
    img: b9,
    tag: "For Sell",
    type: "Home",
    price: "$12,345",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    sqft: "1000 Sqft",
    bed: "3 Bed",
    bath: "2 Bath",
  },
  {
    img: b10,
    tag: "For Rent",
    type: "Shop",
    price: "$12,345",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    sqft: "1000 Sqft",
    bed: "3 Bed",
    bath: "2 Bath",
  },
];

const Home = () => {
  return (
    <>
{/* main page */}

        <div className="home">
        <div className="leftside-1">
          <h2>
            Find A <span className="text-success">Perfect Home</span><br />
            To Live With Your Family.
          </h2>
        </div>
        <div className="rightside-1">
          <img src={b1} alt="Home" />
        </div>
      </div>

      <div className="main">
        <div className="leftside-2">
          <p>Vero elitr justo lorem ipsum dolor at set stet sit diam no</p> 
          <p>kasd rebumipsum et diam justo clita.</p>
          <button className="btn btn-success" id="get">Get Started</button>
        </div>

        <div className="rightside-2">
          <img src={b2} alt="Property" />
        </div>
      </div>
      
{/* search and dropdown */}
    
<div class="search-section">
  <div class="container">
    <div class="row g-3 align-items-center search-box">

      <div class="col-lg-3 col-md-6">
        <input type="text" class="form-control" placeholder="Search Keyword"></input>
      </div>

      <div class="col-lg-3 col-md-6">
        <select class="form-select">
          <option selected>Property Type</option>
          <option>Property Type1</option>
          <option>Property Type2</option>
          <option>Property Type3</option>
        </select>
      </div>

      <div class="col-lg-3 col-md-6">
        <select class="form-select">
          <option selected>Location</option>
          <option>Location1</option>
          <option>Location2</option>
          <option>Location3</option>
        </select>
      </div>

      <div class="col-lg-3 col-md-6">
        <button class="btn btn-search w-100">Search</button>
      </div>

    </div>
  </div>
</div>

{/* property type */}

      <div className="property-types-section">
        <div className="container-type">
          <h2 className="text-center fw-bold mb-3">Property Types</h2>
          <p className="text-center text-muted mb-5">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd<br></br>
          vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>

        <div className="row g-4">
          {propertyData.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <div className="property-card text-center">
                <div className="icon-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <h6 className="mt-3">{item.title}</h6>
                <p className="text-muted mb-0">{item.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


  {/* 1 find property */}

  <div className="hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6">
            <div className="hero-img-box">
              <img src={e1} alt="Property" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-content">
              <h1>#1 Place To Find <br/> The Perfect Property</h1>
              <p>  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              <ul>
                <li>Tempor erat elitr rebum at clita</li>
                <li>Aliqu diam amet diam et eos</li>
                <li>Clita duo justo magna dolore erat amet</li>
              </ul>
              <button className="btn btn-success px-8 py-9">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
 {/* property listing */}

     <div className="container py-5">
      <div className="row mb-4">
        <div className="col-md-6">
          <h2 className="fw-bold">Property Listing</h2>
          <p className="text-muted">
            Eirmod sed ipsum dolor sit rebum labore magna erat.
          </p>
        </div>
        <div className="col-md-6 text-md-end">
          <button className="btn btn-success me-2">Featured</button>
          <button className="btn btn-outline-secondary me-2">For Sell</button>
          <button className="btn btn-outline-secondary">For Rent</button>
        </div>
      </div>

      <div className="row g-4">
        {properties.map((item) => (
          <div className="col-lg-4 col-md-6" >
            <div className="property-card">
              <div className="property-img">
                <img src={item.img} alt="" />
                <span className="tag">{item.tag}</span>
                  <span className="type">{item.type}</span>
              </div>

              <div className="property-body">
                <h5 className="price">{item.price}</h5>
                <h6>{item.title}</h6>
                <p className="location"><i class="fa-solid fa-location-dot"></i>{item.location}</p>

                <div className="property-info">
                  <span><i class="fa-solid fa-ruler-combined"></i>{item.sqft}</span>
                  <span><i class="fa-solid fa-bed"></i>{item.bed}</span>
                  <span><i class="fa-solid fa-bath"></i>{item.bath}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


{/* contant with our contant property */}

<div class="container my-5">
  <div class="contact-box">
    <div class="row align-items-center">
      
      {/* Image */}
      <div class="col-md-6 mb-4 mb-md-0">
        <img src={c1}
             class="img-fluid"
             alt="Agent"></img>
      </div>

      {/* Content */}
      <div class="col-md-6">
        <h1 class="contact-title">
          Contact With Our <br></br> Certified Agent
        </h1>

        <p class="contact-text mt-3">
          Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd
          vero ipsum sit sit diam justo sed vero dolor duo.
        </p>

        <div class="mt-4">
          <button class="btn btn-call me-3 px-4 py-2">
            <i class="bi bi-telephone-fill me-2"></i>Make A Call
          </button>

          <button class="btn btn-appointment px-4 py-2">
            <i class="bi bi-calendar-event me-2"></i>Get Appointment
          </button>
        </div>
      </div>

    </div>
  </div>
</div>


{/* property agents */}

<div className='agent'>
<div className=''>
  <h1>Property Agents</h1>
  <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd<br></br>
  vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>   
</div>
</div> 

<div class="container py-5">
  <div class="row g-4">

    {/* Card 1 */}
    <div class="col-lg-3 col-md-6">
      <div class="card team-card">
        <img src={c2} class="team-img"></img>
        <div class="social-icons">
          <a href='#'><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
        </div>
        <div class="card-body team-body">
          <h5 class="team-name">Full Name</h5>
          <p class="team-role">Designation</p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div class="col-lg-3 col-md-6">
      <div class="card team-card">
        <img src={c3} class="team-img"></img>
        <div class="social-icons">
          <a href='#'><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
        </div>
        <div class="card-body team-body">
          <h5 class="team-name">Full Name</h5>
          <p class="team-role">Designation</p>
        </div>
      </div>
    </div>

    {/*Card 3 */}
    <div class="col-lg-3 col-md-6">
      <div class="card team-card">
        <img src={c4} class="team-img"></img>
        <div class="social-icons">
          <a href='#'><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
        </div>
        <div class="card-body team-body">
          <h5 class="team-name">Full Name</h5>
          <p class="team-role">Designation</p>
        </div>
      </div>
    </div>

    {/* Card 4  */}
    <div class="col-lg-3 col-md-6">
      <div class="card team-card">
        <img src={c5} class="team-img"></img>
        <div class="social-icons">
          <a href='#'><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
        </div>
        <div class="card-body team-body">
          <h5 class="team-name">Full Name</h5>
          <p class="team-role">Designation</p>
        </div>
      </div>
    </div>

  </div>
</div>


{/* our clints say! */}
<div className='container-our'>
<h1>Our clients Say!</h1>
<p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd<br></br>
vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
</div><div class="container py-5">
  <div class="testimonial-wrapper">

    {/* Testimonial 1 */}
    <div class="testimonial-box">
      <p>
      Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet<br></br>
      est kasd kasd erat eos
      </p>

      <div class="client-info">
        <img src={d1} alt=""></img>
        <div>
          <h4 class="client-name">Client Name</h4>
          <h4 class="client-role">Profession</h4>
        </div>
      </div>
    </div>

    {/*Testimonial 2 */}
    <div class="testimonial-box">
      <p>
      Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet<br></br>
      est kasd kasd erat eos
      </p>

      <div class="client-info">
        <img src={d2} alt=""></img>
        <div>
          <h4 class="client-name">Client Name</h4>
          <h4 class="client-role">Profession</h4>
        </div>
      </div>
    </div>


    {/*Testimonial 3 */}
    <div class="testimonial-box mb-0">
      <p>
      Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet<br></br>
      est kasd kasd erat eos
      </p>

      <div class="client-info">
        <img src={d3} alt=""></img>
        <div>
          <h4 class="client-name">Client Name</h4>
          <h4 class="client-role">Profession</h4>
        </div>
      </div>
    </div>

  </div>
  </div>


{/* footer */}
<footer class="footer">
  <div class="container">
    <div class="row g-4">

      {/* Get In Touch */}
      <div className="col-lg-3 col-md-6">
        <h5>Get In Touch</h5>
        <p><i className="bi bi-geo-alt-fill icon"></i>123 Street, New York, USA</p>
        <p><i className="bi bi-telephone-fill icon"></i>+012 345 67890</p>
        <p><i className="bi bi-envelope-fill icon"></i>info@example.com</p>
 
        <div className="">
          <a href='#'><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>  
      </div> 

      {/* Quick Links  */}
      <div class="col-lg-3 col-md-6">
        <h5>Quick Links</h5>
        <p><i class="bi bi-chevron-right"></i> <a href="#">About Us</a></p>
        <p><i class="bi bi-chevron-right"></i> <a href="#">Contact Us</a></p>
        <p><i class="bi bi-chevron-right"></i> <a href="#">Our Services</a></p>
        <p><i class="bi bi-chevron-right"></i> <a href="#">Privacy Policy</a></p>
        <p><i class="bi bi-chevron-right"></i> <a href="#">Terms & Condition</a></p>
      </div> 

      {/* Photo Gallery */}
      <div class="col-lg-3 col-md-6">
        <h5>Photo Gallery</h5>
        <div class="row g-2 gallery">
          <div class="col-4"><img src={b5}></img></div>
          <div class="col-4"><img src={b6}></img></div>
          <div class="col-4"><img src={b7}></img></div>
          <div class="col-4"><img src={b8}></img></div>
          <div class="col-4"><img src={b9}></img></div>
          <div class="col-4"><img src={b10}></img></div>
        </div>
      </div> 

       {/* Newsletter */}
      <div class="col-lg-3 col-md-6">
        <h5>Newsletter</h5>
        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>

        <div class="newsletter d-flex mt-3">
          <input type="email" class="form-control me-2" placeholder="Your email"></input>
          <button class="btn text-white">SignUp</button>
        </div>
      </div>

     </div>  

    {/* Footer Bottom */}
     <div class="footer-bottom d-flex flex-column flex-md-row justify-content-between mt-4"> 
      <p class="mb-2 mb-md-0">
        © <strong>Your Site Name</strong>, All Right Reserved. Designed By
        <a href="#" class="text-white">HTML Codex</a>
      </p>

      <div>
        <a href="#" class="me-3">Home</a>
        <a href="#" class="me-3">Cookies</a>
        <a href="#" class="me-3">Help</a>
        <a href="#">FAQs</a>
      </div>
     </div> 

  </div>
   </footer> 
    </>
  )
}
export default Home;