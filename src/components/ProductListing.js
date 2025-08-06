import {  useNavigate } from 'react-router-dom'
import '../style.css'

const ProductListing = ({productData,pages ,totalPages, setPages }) => {

    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/${id}`)
    }

  return (
    <div>
        <div className='container '>
            <div className='row'>   
                { productData.map((product) => (
                    <div className='col-md-3 my-4 div-cursor' key={product.id} onClick={() => handleClick(product.id)}>
                        <div className='card h-100 p-3 shadow-lg ' style={{borderRadius:'15px', border:'transparent'}}>
                            <img 
                            src={product.thumbnail}
                            alt={product.title}
                            className='w-100'
                            />
                            <h4> {product.title}</h4>
                            <h6>${product.price}</h6>
                         </div>
                    </div>
                ))}   
            </div> 

            <div className='d-flex justify-content-center mt-5'>
                <button onClick={() => setPages((prev) =>Math.max(prev - 1, 1))} disabled={pages === 1} className='pagination-btn shadow'>Previous</button>
                 <span className='mx-3'>Page {pages} of {totalPages}</span>
                <button  onClick={() => setPages((prev) => Math.min(prev + 1, totalPages))} disabled={pages === totalPages} className='pagination-btn shadow'>Next</button>
            </div>
        </div>
    </div>
  )
}

export default ProductListing