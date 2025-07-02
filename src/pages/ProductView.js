import { useEffect, useState } from "react"
import api from "../api"
import { useParams, useNavigate, Navigate } from "react-router-dom"
import Header from "../components/Header"

const ProductView = ({productData, productSetter}) => {
  const {id} = useParams();
  const [product, setProduct] = useState([])

  useEffect(() => {
    api.get(`/${id}`)
    .then((res) => {
      setProduct(res.data)
      console.log(res.data)
    })
    .catch ((err) => {
      console.error("error detected", err)
    })
  },[id])


  const navi = useNavigate();

  const handleUpdate = (id) =>{
      navi(`/updateform/${id}`)
  }


  const handleRemove =(id) =>{
      api.delete(`/${id}`)
      .then(() =>{
          const finalProducts = productData.filter((item) => item.id !== id )
            productSetter(finalProducts)
            alert("deleted")
            navi('/')
      })
      .catch((err)=> {
          console.error("Error Detected",err)
      })
      
  }



  return (
    <div>
      <Header/>
      <h1 className="text-center py-5">PRODUCT DETAIL</h1>

      <div className="container d-flex justify-content-center ">
          <div className="card col-md-5 my-5 p-5 shadow-lg " style={{border:'transparent',borderRadius:'15px'}}>
            <img 
            src={product.thumbnail}
            className="w-100"
            />
            <h1>{product.title} </h1><br/>
            <h3 style={{fontStyle:'italic'}}>{product.brand}</h3>
            <h5>${product.price}</h5><br/>
            <h5 className=""  >{product.stock} in stock</h5><br/>
            <p>{product.description}</p><br/>
            <div className='mt-auto d-flex flex-column'>
              <button type='button' style={{border:'transparent'}} className='shadow btn ' onClick={() => handleUpdate(product.id)}>Update</button><br/>
              <button type='button' style={{border:'transparent'}} className='shadow' onClick={()=> {handleRemove(product.id)}}>Delete</button>
            </div>
          </div>
      </div>  
    </div>
  )
}

export default ProductView