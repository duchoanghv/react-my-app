import React, { Component } from 'react';
import SearchForm from '../../admin/SearchForm';
import DataTable from '../../admin/DataTable';
import AddNewForm from '../../admin/AddNewForm';
import enterpriseInfor from '../../data/enterpriseInfor.json';

class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            data: enterpriseInfor,
            searchText: "",
            currentEditItem: { CODE: null, NAME: null, MAIN: null }
        }
    }
    deleteItem = (code) => {
        localStorage.setItem("key 1", "value 1");
        var newItems = this.state.data;
        newItems.Data.BusinessActivities = this.state.data.Data.BusinessActivities.filter((item) => item.CODE !== code);
        this.setState({ data: newItems });
    }

    changeEditMode = (dt) => {
        var item = { CODE: null, NAME: null, MAIN: null };
        if (dt !== null & dt !== undefined) {
            item = dt;
        }
        this.setState({ currentEditItem: item }, () => { this.setState({ editMode: !this.state.editMode }); });
    }

    doSearchBusinessActivities = (val) => {
        this.setState({ searchText: val });
    }

    doSaveBusinessActivities = (code, name, main) => {
        var item = {
            CODE: code,
            NAME: name,
            MAIN: main
        };
        var items = this.state.data;
        var isUpdate = false;
        items.Data.BusinessActivities.forEach((val) => {
            if (val.CODE === code) {
                val.NAME = name;
                val.MAIN = main;
                isUpdate = true;
            }
        })
        if (isUpdate === false)
            items.Data.BusinessActivities.push(item);
        this.setState({ data: items });
        this.changeEditMode();
    }

    render() {
        var searchResults = [];
        this.state.data.Data.BusinessActivities.forEach((item => {
            if (item.NAME.indexOf(this.state.searchText) > -1)
                searchResults.push(item);
        }))

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <hr></hr>
                        <SearchForm changeEditMode={() => this.changeEditMode()} isShowAddButton={!this.state.editMode}
                            searchBusinessActivities={(val) => this.doSearchBusinessActivities(val)}></SearchForm>

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <DataTable data={searchResults} changeEditMode={(dt) => this.changeEditMode(dt)} deleteItem={(code) => this.deleteItem(code)}></DataTable>
                    </div>
                    <AddNewForm defaultData={this.state.currentEditItem} addNewMode={this.state.editMode} saveBusinessActivities={(code, name, main) => this.doSaveBusinessActivities(code, name, main)}></AddNewForm>
                </div>
            </div>
        );
    }
}

export default AboutPage;