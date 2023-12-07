import "./App.css";
import Toolbar from "./components/header/header";
import MainPage from "./pages/main/main-page";

function App() {
    return (
        <div className='flex flex-col w-screen h-screen'>
            {/* Removed the sidebar from here */}
            <div className='flex-1 h-full'>
                <Toolbar />
                <MainPage />
            </div>
        </div>
    );
}

export default App;