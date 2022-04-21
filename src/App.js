import NavBar from "./components/Header/navBar/NavBar";
import SubMenu from "./components/Header/subMenu/SubMenu";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SubMenu />
      <AllRoutes />
    </div>
  );
}

export default App;
