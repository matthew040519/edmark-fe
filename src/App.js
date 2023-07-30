import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('./components/website/home'));
const Products = lazy(() => import('./components/website/products'));
const Login = lazy(() => import('./components/Login'));
const Header = lazy(() => import('./components/website/landingheader'));

export default function App() {
  return (
    <>
      <div className="bg-white">
        <Routes>
           <Route exact key={Home} path="/edmark-fe/" Component={Home}/>
           <Route exact key={Login} path="/login" Component={Login}/>
           <Route exact key={Products} path="/edmark-fe/products" Component={Products}/>
           <Route exact key={Header} path="/edmark-fe/header" Component={Header}/>
        </Routes>
        {/* <LandingHeader /> */}
        
        {/* <Products/>
        <LandingStats />
        <LandingTestimonials />
        <LandingFooter /> */}
      </div>
    </>
      
  )
}
