import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: 0,
        };
    }

    onStateValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        const { name, salary } = this.state;
        const { onAddForm } = this.props;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex">
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        onChange={this.onStateValue}
                        value={name}
                        name="name"
                    />
                    <input
                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        onChange={this.onStateValue}
                        value={salary}
                        name="salary"
                    />

                    <button
                        type="submit"
                        className="btn btn-outline-light"
                        onClick={(e) => onAddForm(e, name, salary)}
                    >
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;
