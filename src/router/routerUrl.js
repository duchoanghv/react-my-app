import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Content from '../component/content/content';
import AboutPage from '../component/content/aboutPage';
import StartPage from '../component/content/startPage';
import SignInPage from '../component/content/signInPage';
import Contact from '../component/content/contact';
import ContentDetail from '../component/content/contentDetail';

class RouterUrl extends Component {
    render() {
        return (
                <div>
                    <Route exact path="/" component={Content}></Route>
                    <Route exact path="/about" component={AboutPage}></Route>
                    <Route exact path="/start" component={StartPage}></Route>
                    <Route exact path="/signin" component={SignInPage}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route exact path="/news/:slug/:id" component={ContentDetail}></Route>
                </div>
        );
    }
}  

export default RouterUrl;