import React, { Component } from 'react';
import slugify from 'slugify';

class SubContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            formVisible: 0,
            status: 1
          }
    };
    
    componentWillMount() {
        console.log("componentWillMount");
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate");
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }
    
    updateState = () => {
        this.setState({status: 2});
    }
    

    renderButton = () => {
        return(
         <div className="row">
           <div className="btn btn-group">
             <div className="btn btn-info" type="button" onClick = {() => this.onClickEdit()}>Edit</div>
             <div className="btn btn-warning" type="button" onClick = {() => this.updateState()}>UpdateState</div>
           </div>
         </div>
        )
      }
      renderForm = () => {
        return(
         <div className="row">
           <div className="form-group">
             <input type="text" name="contentName" className="form-control" defaultValue={this.props.title} ref = {(value) => {this.titleTemp = value}}/>
             <div className="btn btn-block btn-success" type="button" onClick = {() => this.onClickSave()}>Save</div>
           </div>
         </div>
       )
      }
      displayFormCheck = () => {
        if(this.state.formVisible === 0)
           return this.renderButton();
         return this.renderForm();
      }
      onClickEdit = () => {
        this.setState({formVisible: 1});
      }
   
      onClickSave = () => {
        this.setState({formVisible: 0});
        alert(this.titleTemp.value);
     }
   
    render() {
        console.log("Render start");
        console.log(this.state.status.value, "Status: ");
        return (
            <div className="row no-gutters">
            <div className={"col-lg-6 text-white showcase-img " + (this.props.index % 2 === 1 ? "order-lg-2" : "")}  style={{backgroundImage: this.props.img}} />
            <div className={"col-lg-6 my-auto showcase-text " + (this.props.index % 2 === 1 ? "order-lg-1" : "")}>
              <h2><a href={"news/" + slugify(this.props.title) + "/" + this.props.index}>{this.props.title}</a></h2>
              <p className="lead mb-0">{this.props.description}</p>
              {this.displayFormCheck()}
            </div>
        </div>
        );
    }
}

export default SubContent;
