const EmployeesListItem = () => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="list-group-item-label">John Smith</span>
            <input
                type="text"
                className="list-group-item-input"
                defaultValue="1000$"
            />
        </li>
    );
};

export default EmployeesListItem;