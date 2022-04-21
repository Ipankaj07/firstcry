import NavBar from "./components/Header/navBar/NavBar";
import SubMenu from "./components/Header/subMenu/SubMenu";
import AllRoutes from "./routes/AllRoutes";
import FilterByBrands from "../src/components/ProductListPageComponents/caterogy/brands/FilterByBrands"

function App() {
  return (
    <div className="App">
      <NavBar />
      <SubMenu />
      <AllRoutes />
      {/* <FilterByBrands /> */}
    </div>
  );
}

export default App;
