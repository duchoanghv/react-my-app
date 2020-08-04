import React, { Component } from 'react';
import news from "../../data/news.json";

class ContentDetail extends Component {
    
    render() {
        console.log(this.props.match.params.id, news);
        return(
            <div>
                <hr></hr>
                {
                    news.map((value) => {
                        if(value.index === parseInt(this.props.match.params.id)){
                            return (
                                
                                <section className="showcase">
                                    <div className="container-fluid p-0">
                                        <div className="row no-gutters">
                                        <div className="col-lg-6 text-white showcase-img"  style={{backgroundImage: value.img}} />
                                        <div className="col-lg-6 my-auto showcase-text">
                                        <h2>{value.title}</h2>
                                        <p className="lead mb-0">{value.description}</p>
                                        </div>
                                        </div>
                                    </div>
                            </section>
                            );
                        }
                        return true;
                    })
                }
            </div>
        )
    }
}

export default ContentDetail;