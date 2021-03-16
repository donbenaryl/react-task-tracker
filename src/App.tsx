import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Shared/Header';
import Tasks from './Components/Pages/Tasks/Tasks';
import Footer from './Components/Shared/Footer';
import About from './Components/Pages/About/About';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route path='/' exact component={Tasks} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
