import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Main } from "./main";
import { ceshi } from "./ceshi";

const routes = [
  { path: "/", Page: Home },
  { path: "/main", Page: Main },
  { path: "/ceshi", Page: ceshi },
];

function Routing() {
  console.log("routes", routes);
  const getRoutes = () => routes.map(({ path, Page }) => <Route key={path} path={path} element={<Page />} />);
  console.log("getRoutes", getRoutes);
  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
