import React, { Component } from 'react';

class AddNewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: this.props.defaultData.CODE,
            name: this.props.defaultData.NAME,
            main: this.props.defaultData.MAIN
        }
    }

    onChangeAddForm = (event) => {
        this.setState({code: this.state.code ?? this.props.defaultData.CODE});
        this.setState({name: this.state.name ?? this.props.defaultData.NAME});
        this.setState({main: this.state.main ?? this.props.defaultData.MAIN});
        this.setState({ [event.target.name]: event.target.value });  
    }

    showEditFormView = () => {
        if (this.props.addNewMode === true) {
            return (
                <div className="col">
                    <div className="card border-primary mb-3 mt-2" style={{ maxWidth: '18rem' }}>
                        <div className="card-header">Add new</div>
                        <div className="card-body text-primary">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" defaultValue={this.props.defaultData.CODE} name="code" aria-describedby="helpId" placeholder="Input name..." onChange={(event) => this.onChangeAddForm(event)} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" defaultValue={this.props.defaultData.NAME} name="name" aria-describedby="helpId" placeholder="Input phone..." onChange={(event) => this.onChangeAddForm(event)} />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select my-1 mr-sm-2" name="main" defaultValue={this.props.defaultData.MAIN} onChange={(event) => this.onChangeAddForm(event)}>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Employee</option>
                                        <option value={3}>Guest</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-primary" onClick={(code, name, main) => this.props.saveBusinessActivities(this.state.code, this.state.name, this.state.main)} value="Save" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {
                    this.showEditFormView()
                }


            </div>
        );
    }
}

export default AddNewForm;