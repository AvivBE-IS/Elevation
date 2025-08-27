import "./App.css";
import Nav from "./Nav";
import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs";

function App() {
  let isUserLoggedIn = localStorage.getItem("loggedIn");
  let componentToDisplay = isUserLoggedIn ? <LandingPage /> : <AboutUs />;

  return (
    <div className="app">
      <Nav />
      {componentToDisplay}
    </div>
  );
}

export default App;
