import { Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { Main } from './main';
import { AllNFTCollection } from './nfts';

const routes = [
  { path: '/', Page: Home },
  { path: '/main', Page: Main },
  { path: '/nfts', Page: AllNFTCollection }
];

function Routing() {
  const getRoutes = () => routes.map(({ path, Page }) => <Route key={path} path={path} element={<Page />} />);

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
