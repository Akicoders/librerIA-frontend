import  {lazy, Suspense}from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import { Loading } from "./components/ui/Loading";

// Carga diferida (Lazy Loading)
const App = lazy(() => import("./App"));
const Dashboard = lazy(() => import("./Dashboard"));
const Configuration = lazy(() => import("./Configuration"));
const ViewerPDF = lazy(() => import("./ViewerPDF"));
const Categories = lazy(() => import("./Categories"));
const MyBooks = lazy(() => import("./MyBooks"));


function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/config" element={<Configuration />} />
          <Route path="/pdf-viewer" element={<ViewerPDF />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/my-books" element={<MyBooks />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}



ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router />
)

export default Router;