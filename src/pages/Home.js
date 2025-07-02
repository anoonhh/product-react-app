
import Header from '../components/Header'
import ProductListing from '../components/ProductListing'
import '../style.css'

const Home = ({productData, productSetter, pages , setPages , totalPages}) => {
   
  return (
    <div>
      <Header/>
      <div className='py-5 text-center '>
          <h1 >PRODUCTS</h1>
      </div> 
      <ProductListing productData={productData} productSetter = {productSetter} pages={pages} setPages={setPages} totalPages={totalPages} />

      
    </div>
  )
}

export default Home