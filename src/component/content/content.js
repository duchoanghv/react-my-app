import React, { Component } from 'react';
import SubContent from './subContent';
import news from '../../data/news.json';
import Axios from 'axios';

class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      formVisible: 0,
      flights: ""
    }
  }

  GetFlightsList = () => {
    
    Axios.get('http://localhost:57146/api/FlightBooking/GetFlightsSearchList', {
      headers: { 
      'Access-Control-Allow-Origin': '*'
      },
      responseType: 'json',
     }).then(res => {
      console.log(res.data);
      this.setState({ flights: res.data });
    });
  }
  //  renderButton = () => {
  //    return(
  //     <div className="row">
  //       <div className="btn btn-group">
  //         <div className="btn btn-info" type="button" onClick = {() => this.onClickEdit()}>Edit</div>
  //         <div className="btn btn-warning" type="button">Delete</div>
  //       </div>
  //     </div>
  //    )
  //  }
  //  renderForm = () => {
  //    return(
  //     <div className="row">
  //       <div className="form-group">
  //         <input type="text" name="contentName" className="form-control"/>
  //         <div className="btn btn-block btn-success" type="button" onClick = {() => this.onClickSave()}>Save</div>
  //       </div>
  //     </div>
  //   )
  //  }
  //  displayFormCheck = () => {
  //    if(this.state.formVisible === 0)
  //       return this.renderButton();
  //     return this.renderForm();
  //  }
  //  onClickEdit = () => {
  //    this.setState({formVisible: 1});
  //  }

  //  onClickSave = () => {
  //   this.setState({formVisible: 0});
  // }

  // renderSection = (content) => {
  //   return(
  //     <div className="row no-gutters">
  //       <div className={"col-lg-6 text-white showcase-img " + (content.index % 2 === 1 ? "order-lg-2" : "")}  style={{backgroundImage: content.img}} />
  //       <div className={"col-lg-6 my-auto showcase-text " + (content.index % 2 === 1 ? "order-lg-1" : "")}>
  //         <h2>{content.title}</h2>
  //         <p className="lead mb-0">{content.description}</p>
  //         {this.displayFormCheck()}
  //       </div>
  //   </div>
  //   )
  // }
  // lstContents = [{index: 1, title : "Fully Responsive Design", img : 'url("img/bg-showcase-1.jpg")', description : "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"},
  //                {index: 2, title : "Easy to Use &amp; Customize", img : 'url("img/bg-showcase-3.jpg")', description : "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"},
  //                {index: 3, title : "Fully Responsive", img : 'url("img/bg-showcase-2.jpg")', description : "Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!"}]
    
  render() {
        return (
         
          <div>
             <div className="btn btn-info" onClick={() => this.GetFlightsList()}>Get</div>
        <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-screen-desktop m-auto text-primary" />
                </div>
                <h3>Fully Responsive</h3>
                <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-layers m-auto text-primary" />
                </div>
                <h3>Bootstrap 4 Ready</h3>
                <p className="lead mb-0">Featuring the latest build of the new Bootstrap 4 framework!</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-check m-auto text-primary" />
                </div>
                <h3>Easy to Use</h3>
                <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="container-fluid p-0">
          {
            news.map((value, key) => {
              return(
                <SubContent key={key} index = {key} title = {value.title} img = {value.img} description = {value.description}></SubContent>
              );
            })
          }
          {/* <SubContent index = "1" title = "Fully Responsive Design" img = 'url("img/bg-showcase-1.jpg")' description = "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"></SubContent>
          <SubContent index = "2" title = "Easy to Use &amp; Customize" img = 'url("img/bg-showcase-3.jpg")' description = "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"></SubContent>
          <SubContent index = "3" title = "Fully Responsive" img = 'url("img/bg-showcase-2.jpg")' description = "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"></SubContent> */}

        </div>
      </section>

      <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">What people are saying...</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="img/testimonials-1.jpg" alt="" />
                <h5>Margaret E.</h5>
                <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="img/testimonials-2.jpg" alt="" />
                <h5>Fred S.</h5>
                <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="img/testimonials-3.jpg" alt="" />
                <h5>Sarah W.</h5>
                <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action text-white text-center">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h2 className="mb-4">Ready to get started? Sign up now!</h2>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div className="form-row">
                  <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
                  </div>
                  <div className="col-12 col-md-3">
                    <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
        );
    }
}

export default Content;