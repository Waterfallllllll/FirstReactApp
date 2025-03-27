import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            classNamesAll: "btn btn-outline-light",
            classNamesOnRaise: "btn btn-outline-light",
            classNamesOverThousand: "btn btn-outline-light",
        };
    }

    // ".btn btn-light";

    onChangeEmployee = () => {
        const data = this.props.data;

        this.setState({
            classNamesAll: "btn btn-outline-light",
            classNamesOnRaise: "btn btn-light",
            classNamesOverThousand: "btn btn-outline-light",
        });

        const newData = data.filter((item) => {
            return item.like;
        });

        this.props.onChangeEmployee(newData);

        // if (newData.length > 0) {
        //     this.props.onChangeEmployee(newData);
        // } else {
        //     this.props.onChangeEmployee(data);
        // }
    };

    onOverThousand = () => {
        const data = this.state.data;

        this.setState({
            classNamesAll: "btn btn-outline-light",
            classNamesOnRaise: "btn btn-outline-light",
            classNamesOverThousand: "btn btn-light",
        });

        const newData = data.filter((item) => {
            return item.salary > 1000;
        });

        if (newData.length > 0) {
            this.props.onChangeEmployee(newData);
        } else {
            this.props.onChangeEmployee(data);
        }
    };

    onAllEmployee = () => {
        const data = this.state.data;

        this.setState({
            classNamesAll: "btn btn-light",
            classNamesOnRaise: "btn btn-outline-light",
            classNamesOverThousand: "btn btn-outline-light",
        });

        this.props.onChangeEmployee(data);
    };

    render() {
        return (
            <div className="btn-group">
                <button
                    className={this.state.classNamesAll}
                    type="button"
                    onClick={this.onAllEmployee}
                >
                    Все сотрудники
                </button>
                <button
                    className={this.state.classNamesOnRaise}
                    type="button"
                    onClick={this.onChangeEmployee}
                >
                    На повышение
                </button>
                <button
                    className={this.state.classNamesOverThousand}
                    type="button"
                    onClick={this.onOverThousand}
                >
                    З/П больше 1000$
                </button>
            </div>
        );
    }
}

export default AppFilter;
