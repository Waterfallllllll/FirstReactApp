import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: "John C.",
                    salary: 800,
                    like: false,
                    increase: false,
                    id: 1,
                },
                {
                    name: "Alex M.",
                    salary: 3000,
                    like: false,
                    increase: false,
                    id: 2,
                },
                {
                    name: "Carl W.",
                    salary: 5000,
                    like: false,
                    increase: false,
                    id: 3,
                },
            ],
            term: "",
        };
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter((item) => item.id !== id),
            };
        });
    };

    addItem = (e, name, salary) => {
        let maxId = this.state.data.length;
        e.preventDefault();
        this.setState(({ data }) => {
            if (name.length > 2) {
                return {
                    data: [
                        ...data,
                        {
                            name: name,
                            salary: salary,
                            id: maxId + 1,
                            like: false,
                            increase: false,
                        },
                    ],
                };
            }
        });
    };

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            }),
        }));
    };

    filterFunction = () => {
        return this.state.data.filter((item) => item.increase).length;
    };

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.name.indexOf(term) > -1;
        });
    };

    onUpdateSearch = (term) => {
        this.setState({ term: term });
    };

    onRaise = () => {
        const { data } = this.state;

        const raiseArr = data.filter((item) => {
            return item.like;
        });

        return raiseArr;
    };

    render() {
        const { data, term } = this.state;
        const visibleData = this.searchEmp(data, term);

        return (
            <div className="app">
                <AppInfo
                    dataLength={data.length}
                    award={this.filterFunction}
                ></AppInfo>

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    ></SearchPanel>
                    <AppFilter data={visibleData}></AppFilter>
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                ></EmployeesList>
                <EmployeesAddForm onAddForm={this.addItem}></EmployeesAddForm>
            </div>
        );
    }
}

export default App;
