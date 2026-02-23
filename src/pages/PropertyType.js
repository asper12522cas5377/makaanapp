import b1 from './img/carousel-1.jpg';
import b5 from './img/property-1.jpg';
import b6 from './img/property-2.jpg';
import b7 from './img/property-3.jpg';
import b8 from './img/property-4.jpg';
import b9 from './img/property-5.jpg';
import b10 from './img/property-6.jpg';


import apartment from "./img/icon-apartment.png";
import villa from "./img/icon-apartment.png";
import home from "./img/icon-apartment.png";
import office from "./img/icon-apartment.png";
import building from "./img/icon-apartment.png";
import townhouse from "./img/icon-apartment.png";
import shop from "./img/icon-apartment.png";
import garage from "./img/icon-apartment.png";


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

const PropertyType=()=>{
    return(
        <>
       {/* main page */}

        <div className='title-3'>
            <h1>Propertytype</h1>
            </div>
        <div className='aboutpage-3'>
            <h2><span>Home</span>/<span>Pages</span>/Propertytype</h2>
          <img src={b1}></img>
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
export default PropertyType;