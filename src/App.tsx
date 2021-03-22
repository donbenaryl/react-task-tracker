import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Shared/Header';
import Tasks from './Components/Pages/Tasks/Tasks';
import Footer from './Components/Shared/Footer';
import About from './Components/Pages/About/About';

// interface IArticle {
//   id: number
//   title: string
//   body: string
// }

// type ArticleState = {
//   articles: IArticle[]
// }

// type ArticleAction = {
//   type: string
//   article: IArticle
// }

// // STORE -> GLOBALIZED STATE

// // ACTION
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }
// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// // REDUCER
// const counter = (state = 0, action: {type:string}) => {
//   switch(action.type){
//     case "INCREMENT":
//       return state++
//     case 'DECREMENT':
//       return state--
//   }
// }

// let store = createStore(counter)

// store.subscribe(() => console.log(store.getState()))

// // DISPATCH
// store.dispatch(increment())



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
