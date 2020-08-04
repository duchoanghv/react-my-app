import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        }
    }

    changeSearchText = (event) => {
        this.setState({ searchText: event.target.value });
        this.props.searchBusinessActivities(event.target.value);
    }

    showEditButtonView = () => {
        if (this.props.isShowAddButton === true)
            return <div className="btn btn-block btn-info mt-2" onClick={() => this.props.changeEditMode()}>Thêm mới</div>
        return <div className="btn btn-block btn-secondary mt-2" onClick={() => this.props.changeEditMode()}>Đóng lại</div>
    }

    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group btn-block">
                        <input type="text" className="form-control" aria-describedby="helpId" placeholder="Input search text..." onChange={(event) => this.changeSearchText(event)} />
                        <button className="btn btn-primary" type="button" onClick={(val) => this.props.searchBusinessActivities(this.state.searchText)}>Search</button>
                    </div>
                    {this.showEditButtonView()}

                </div>
            </div>
        );
    }
}

export default SearchForm;