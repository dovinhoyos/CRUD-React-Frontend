import ProductList from './components/ProductList'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {


  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className='column is-half is-offset-one-quarter'>
            <Routes>
              <Route path='/' element={ <ProductList/> }/>             
            </Routes>
                 
     
          </div>
        </div>
      </div>
    </Router>
    
  )
    
}

export default App
