import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header';
import Tasks from './Routes/Tasks/Tasks';
import Footer from './Components/Footer';
import About from './Routes/About/About';

function App() {
  console.log(process.env)
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
