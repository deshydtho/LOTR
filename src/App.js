import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import MainPage from "./all_pages";

function App() {
  return (
    <div class="fluid-container" style={{ 'max-height': '100%' }}>

      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/"><a class="navbar-brand" href="#home">LOTR</a></Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li>
                <Link to="/movies"><a class="nav-link" href="#movies">Movies</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/characters"><a class="nav-link" href="#character">Characters</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/about"><a class="nav-link" href="#about">About Me</a></Link>

              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide text-center" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/lotrphoto.jpg" style={{ 'max-height': '100%', width: '100%' }} class="text-center" alt="Picture from Lord of the Rings" />
          </div>
          <div class="carousel-item">
            <img src="/images/hobbit_photo.jpg" class="d-block w-100" alt="Picture from The Hobbit" class="img-fluid" />
          </div>
          <div class="carousel-item">
            <img src="/images/lotrphoto1.jpg" class="d-block w-100" alt="Picture from Lord of the Rings" class="img-fluid" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

function Movies() {
  return (

<div>
    <div>
      <div class="container my-4">

        <p class="font-weight-bold">With bootstrap modal you can easily create a gallery, which allows you to click on the image and display it in full-screen size.</p>

        <p>Detailed documentation and more examples you can find in our <a href="https://mdbootstrap.com/docs/jquery/modals/basic/">¸ target="_blank" Bootstrap Modals Docs</a> </p>
      </div>
      <p class="font-weight-bold">Basic example</p>

      <div class="row">

        <div class="col-lg-4 col-md-12 mb-4">

          <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">

              <div class="modal-content">

                <div class="modal-body mb-0 p-0">

                  <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/A3PDXmYoF5U"
                      allowfullscreen></iframe>
                  </div>

                </div>


                <div class="modal-footer justify-content-center">
                  <span class="mr-4">Spread the word!</span>
                  <a type="button" class="btn-floating btn-sm btn-fb"><i class="fab fa-facebook-f"></i></a>
                  <a type="button" class="btn-floating btn-sm btn-tw"><i class="fab fa-twitter"></i></a>

                  <a type="button" class="btn-floating btn-sm btn-gplus"><i class="fab fa-google-plus-g"></i></a>

                  <a type="button" class="btn-floating btn-sm btn-ins"><i class="fab fa-linkedin-in"></i></a>

                  <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>

                </div>

              </div>

            </div>
          </div>
          <a><img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg" alt="video" data-toggle="modal" data-target="#modal1" /></a>

        </div>
      </div>
    </div>




    <div class="col-lg-4 col-md-6 mb-4">


      <div class="modal fade" id="modal6" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">


          <div class="modal-content">


            <div class="modal-body mb-0 p-0">

              <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/wTcNtgA6gHs"
                  allowfullscreen></iframe>
              </div>

            </div>


            <div class="modal-footer justify-content-center">
              <span class="mr-4">Spread the word!</span>
              <a type="button" class="btn-floating btn-sm btn-fb"><i class="fab fa-facebook-f"></i></a>

              <a type="button" class="btn-floating btn-sm btn-tw"><i class="fab fa-twitter"></i></a>

              <a type="button" class="btn-floating btn-sm btn-gplus"><i class="fab fa-google-plus-g"></i></a>

              <a type="button" class="btn-floating btn-sm btn-ins"><i class="fab fa-linkedin-in"></i></a>

              <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>

            </div>

          </div>


        </div>
      </div>


      <a><img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/screens/yt/screen-video-2.jpg" alt="video" data-toggle="modal" data-target="#modal6" /></a>

    </div>



    <div class="col-lg-4 col-md-6 mb-4">


      <div class="modal fade" id="modal4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">


          <div class="modal-content">


            <div class="modal-body mb-0 p-0">

              <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM"
                  allowfullscreen></iframe>
              </div>

            </div>


            <div class="modal-footer justify-content-center">
              <span class="mr-4">Spread the word!</span>
              <a type="button" class="btn-floating btn-sm btn-fb"><i class="fab fa-facebook-f"></i></a>

              <a type="button" class="btn-floating btn-sm btn-tw"><i class="fab fa-twitter"></i></a>

              <a type="button" class="btn-floating btn-sm btn-gplus"><i class="fab fa-google-plus-g"></i></a>

              <a type="button" class="btn-floating btn-sm btn-ins"><i class="fab fa-linkedin-in"></i></a>

              <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>

            </div>

          </div>


        </div>
      </div>


      <a><img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/screens/yt/screen-video-3.jpg" alt="video" data-toggle="modal" data-target="#modal4" /></a>

    </div>






    <div class="row">


      <div class="col-lg-4 col-md-12 mb-4">


        <div class="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">


            <div class="modal-content">


              <div class="modal-body mb-0 p-0">

                <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/GUEZCxBcM78"
                    allowfullscreen></iframe>
                </div>

              </div>


              <div class="modal-footer justify-content-center">
                <span class="mr-4">Spread the word!</span>
                <a type="button" class="btn-floating btn-sm btn-fb"><i class="fab fa-facebook-f"></i></a>

                <a type="button" class="btn-floating btn-sm btn-tw"><i class="fab fa-twitter"></i></a>

                <a type="button" class="btn-floating btn-sm btn-gplus"><i class="fab fa-google-plus-g"></i></a>

                <a type="button" class="btn-floating btn-sm btn-ins"><i class="fab fa-linkedin-in"></i></a>

                <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>

              </div>

            </div>


          </div>
        </div>


        <a><img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/screens/yt/screen-video-4.jpg" alt="video" data-toggle="modal" data-target="#modal2" /></a>

      </div>



      <div class="col-lg-4 col-md-6 mb-4">


        <div class="modal fade" id="modal5" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">


            <div class="modal-content">


              <div class="modal-body mb-0 p-0">

                <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/PjGkVCAo8Fw"
                    allowfullscreen></iframe>
                </div>

              </div>

              <div class="modal-footer justify-content-center">
                <span class="mr-4">Spread the word!</span>
                <a type="button" class="btn-floating btn-sm btn-fb"><i class="fab fa-facebook-f"></i></a>

                <a type="button" class="btn-floating btn-sm btn-tw"><i class="fab fa-twitter"></i></a>

                <a type="button" class="btn-floating btn-sm btn-gplus"><i class="fab fa-google-plus-g"></i></a>

                <a type="button" class="btn-floating btn-sm btn-ins"><i class="fab fa-linkedin-in"></i></a>

                <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>

              </div>

            </div>


          </div>
        </div>


        <a><img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/screens/yt/screen-video-5.jpg" alt="video" data-toggle="modal" data-target="#modal5" /></a>

      </div>


      <div class="col-lg-4 col-md-6 mb-4">


        <div class="modal fade" id="modal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">

            <div class="modal-content">


              <div class="modal-body mb-0 p-0">

                <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/gsNY7TV4r1M"
                    allowfullscreen></iframe>
                </div>

              </div>


              <div class="modal-footer d-block d-md-flex justify-content-center">
                <span class="mr-4">Spread the word!</span>
                <a type="button" class="btn-floating btn-sm btn-fb"><i class="fab fa-facebook-f"></i></a>

                <a type="button" class="btn-floating btn-sm btn-tw"><i class="fab fa-twitter"></i></a>

                <a type="button" class="btn-floating btn-sm btn-gplus"><i class="fab fa-google-plus-g"></i></a>

                <a type="button" class="btn-floating btn-sm btn-ins"><i class="fab fa-linkedin-in"></i></a>

                <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>

              </div>

            </div>

          </div>
        </div>
        <a><img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/screens/yt/screen-video-6.jpg" alt="video" data-toggle="modal" data-target="#modal3" /></a>

      </div>

    </div>

</div>

  );
}

function Characters() {
  return (
    <div>
      <h2>Characters</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default App;
