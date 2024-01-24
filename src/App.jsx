import CoreConcept from "./Components/CoreConcept";
import Examples from "./Components/Examples";
import Header from "./Components/Header";

function App() {
    return (
        <div>
            <Header></Header>
            <main>
                <CoreConcept />
                <Examples></Examples>
            </main>
        </div>
    );
}

export default App;
