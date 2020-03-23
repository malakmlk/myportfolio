import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
   
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">My Portfolio</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fa fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#services">Project</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#portfolio">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#team">Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

 
  {<header class="masthead">
    <div class="container">
      <div class="intro-text">
        <div class="intro-lead-in">Welcome !</div>
        <div class="intro-heading text-uppercase">It's Nice To Meet You</div>
        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
      </div>
    </div>
  </header>}

  <section class="bg-light page-section" id="team">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Resume </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="team-member"> </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto rounded-circle" src="data:image/jpeg;base64,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" />
            <h4>Malak Saiem</h4>
            
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <p class="large text-muted">Studient at high school of computer science ESI ex InI, I am interested in  in IT and everything in it orbit, passionated by web programming developing app and website and AI .
  </p>
        </div>
      </div>
    </div>
  </section>





  <section class="page-section" id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">PROJECT</h2>
          <h3 class="section-subheading text-muted">Some projects that I worked on it.</h3>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-md-4">
         <img class="mx-auto rounded-circle" width ='100 px' src="https://mod.us/wp-content/uploads/2018/03/1024-app-icon.png"/>
          <h4 class="service-heading">bus track</h4>
          <p class="text-muted"> Bus tracking systems make use of GPS, mobile apps,android and java.</p>
        </div>
        <div class="col-md-4">
          <img class="mx-auto rounded-circle" width ='100 px' src="https://cdn3.iconfinder.com/data/icons/brain-games/1042/Quiz-Games.png"/>
          <h4 class="service-heading">Quiz app</h4>
          <p class="text-muted">Using java/javafx to build it.</p>
        </div>
        <div class="col-md-4">
          <img class="mx-auto rounded-circle" width ='100 px' src="https://comps.canstockphoto.com/online-stats-eps-vector_csp35724541.jpg" />
          <h4 class="service-heading">schooling app</h4>
          <p class="text-muted">using node.js and react.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section class="bg-light page-section" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">skills</h2>
          
        </div>
      </div>
      <div class="row">
       
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/04-thumbnail.jpg" alt="" />
          </a>
          <div class="portfolio-caption">
            
            <p class="text-muted">developing mobile app</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal5">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/05-thumbnail.jpg" alt="" />
          </a>
          <div class="portfolio-caption">
            
            <p class="text-muted">Website developing</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal6">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/06-thumbnail.jpg" alt="" />
          </a>
          <div class="portfolio-caption">
            
            <p class="text-muted">Photography</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="page-section" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">About</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ul class="timeline">
            <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/about/1.jpg" alt="" />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 class="subheading">Our Humble Beginnings</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/about/2.jpg" alt="" />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>March 2011</h4>
                  <h4 class="subheading">An Agency is Born</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/about/3.jpg" alt="" />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>December 2012</h4>
                  <h4 class="subheading">Transition to Full Service</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/about/4.jpg" alt="" />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>July 2014</h4>
                  <h4 class="subheading">Phase Two Expansion</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <h4>Be Part
                  <br />Of Our
                  <br />Story!
                  </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  
 

 
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="" />
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="" />
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="" />
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </section>

 
  <section class="page-section" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Contact Us</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <span class="copyright">Copyright &copy; Your Website 2019</span>
        </div>
        <div class="col-md-4">
          <ul class="list-inline social-buttons">
            <li class="list-inline-item">
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fa fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fa fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul class="list-inline quicklinks">
            <li class="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>







    </div>
  );
}

export default App;
