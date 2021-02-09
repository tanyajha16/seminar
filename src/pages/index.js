import React from "react";

import Datas from '../Datas.json';
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import "../css/index.css";

const IndexPage = () => (
  <body>
    <h1 className="heading">Maths Department Seminar</h1>
    <div className="time">Feb 10-11.Online.Free</div>
     <div className="desc">
     <p>

     Join us on March 2-3, 2021 for this free virtual event.
      Connect with Gatsby community members from all over the world, 
      advance your skills with free workshops, and hear the latest
     announcements from the Gatsby team. 
      Claim your spot!
     </p>
   </div>
   {/* <div>
     <Card/>
   </div> */}
    <section className="talks">
      <div className="talk-head">
        <h3>February 10,2021 </h3>
        <h1 className="guest-lect">Guest Lectures</h1>
        <p>Local Times Shown Below</p>
      </div>
     
    </section>
   
    <ul className="guest-Lectures">
    {Datas.guests.map((item, i) => (
       <section className="talks">
   <li key={i} >
   <a href="#" >
   <p style={{color:"white"}} className="pdate">{item.start_time} - {item.end_time}</p>
    <p className="pname">{item.name}</p>
     <p className="pdesc">{item.description}</p>
     <p className="ptopic">Topic: {item.topic}</p>
     </a>
      </li>
      </section>

  ))}
      </ul>
 <section className="sponsors">
   <h1 className="sponcer-head">Sponsors</h1>
   <h3 className="sponsor-name">Organized By</h3>
   <div className="img-sponsors">
     <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Birla_Institute_of_Technology_Mesra.png/220px-Birla_Institute_of_Technology_Mesra.png" style={{height:90,width:90}}/>
   <h3>Maths-Department</h3>
   </div>
   <h3 className="sponsor-name">Sponsored By</h3>
   <div className="img-sponsors">
     <img src="https://mondaymorning.nitrkl.ac.in/uploads/post/TEQIP.jpg" style={{height:90,width:200}}/>
   <h3>TEQIP</h3>
   </div>

 </section>


<MDBFooter color="cyan" className="font-small darken-3 pt-0">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-5">
            <div className="mb-5 flex-center">
              <a className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="#">   Birla_Institute_of_Technology_Mesra-Department of Mathematics </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  </body>
)

export default IndexPage;
