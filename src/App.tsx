import './App.css'
import { Navbar } from './components/Navbar'
import { Product } from './components/Product'
import { products } from './data/products'

function App() {


  return (
    <main className='w-full'>
      <Navbar/>
      <div className='flex my-8 justify-center'>
        
      {products.map((product)=>{
        return<>
         <Product {...product}/>
        </>
      })}
      </div>
    </main>
  )
}

export default App
