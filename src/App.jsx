// Importing packages and components
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="bg-white">
      <Header />
      {/* Fill in the appropriate component so that the user will conditionally see the appropriate view based on the URL */}
      <Outlet />
      <Footer />
    </div>
    </>
  );
}

export default App;