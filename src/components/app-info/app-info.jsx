import "./app-info.css";

const AppInfo = (props) => {
    const { dataLength, award } = props;

    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании №</h1>
            <h2>Общее число сотрудников - {dataLength}</h2>
            <h2>Премию получат: {award()}</h2>
        </div>
    );
};

export default AppInfo;
