import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";

function App() {
    return (
        <div className="app">
            <AppInfo></AppInfo>
            <div className="search-panel">
                <SearchPanel></SearchPanel>
                <AppFilter></AppFilter>
            </div>
        </div>
    );
}

export default App;
