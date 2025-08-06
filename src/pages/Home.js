
import Header from '../components/Header'
import ProductListing from '../components/ProductListing'
import '../style.css'

const Home = ({productData, productSetter, pages , setPages , totalPages}) => {
   
  return (
    <div className='home-page'>
      <Header/>
      {/* <div className='py-5 text-center '>
          <h1 >PRODUCTS</h1>
      </div>  */}
      <div className="container my-5">
        <div className="d-flex flex-column align-items-start justify-content-between">
          <h2 className="fw-bold mb-1">Browse Products</h2>
          <p className="text-muted">Explore our latest collection and find what suits you best.</p>
        </div>
      </div>

      <ProductListing productData={productData} productSetter = {productSetter} pages={pages} setPages={setPages} totalPages={totalPages} />

      
    </div>
  )
}

export default Home