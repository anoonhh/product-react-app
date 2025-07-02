import React, { useEffect, useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'
import '../style.css'

const AddForm = ({productData, productSetter}) => {
    const [ newProduct,setNewProduct] = useState({
        title: '',
        brand: '',
        price: '',
        stock: '',
        description: '',
        thumbnail: ''
    })
   
    const navigate = useNavigate()

    

    const handleChange = (event) => {
      setNewProduct((prev) => ({
        ...prev,
        [event.target.name]: event.target.value

      }))
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        productSetter([...productData,newProduct])
        api.post('/add',newProduct)
        .then(() => {
          alert("Product added successfully")
          navigate('/')
        } )
        .catch(() => alert("Submission failed"))   
    }

  return (
    <div>
        <div className='container my-5 '>
          <div className='col-md-6 mx-auto card p-5 shadow-lg ' style={{borderRadius:'10px', border:'transparent'}}>
            <form onSubmit={handleSubmit}>
                <div className='input-field  mb-3'>
                     <label htmlFor='product-title'>Product Title</label><br/>
                     <input name='title' value={newProduct.title} onChange={handleChange} type='text' id='product-title' placeholder='  Product Title' className='shadow w-100 ' />
                </div>               
                <div className=' input-field mb-3'>
                    <label htmlFor='product-brand'>Brand</label><br/>
                    <input name='brand' value={newProduct.brand} onChange={handleChange} type='text' id='product-brand' placeholder='  Brand' className='shadow w-100 ' />
               </div> 
                <div className='input-field mb-3'>
                    <label htmlFor='product-price'>Price</label>
                    <input name='price' value={newProduct.price} onChange={handleChange} type='text' id='product-price' placeholder='  Price' className='shadow w-100 '/>
                </div>               
                <div className='input-field mb-3'> 
                    <label htmlFor='product-stock'>Stock</label>
                    <input name='stock' value={newProduct.stock} onChange={handleChange} type='text' id='product-stock' placeholder='  Stock' className='shadow w-100 '/>
                </div>
                <div className='input-field mb-3'>
                  <label htmlFor='product-des'>Description</label>
                  <textarea name='description' value={newProduct.description} onChange={handleChange} id='product-des' placeholder='  Description' className='shadow w-100 '/>
                </div>
                <div className='input-field mb-3'>
                   <label htmlFor='product-img'>Image</label>
                  <input name='thumbnail' value={newProduct.thumbnail} onChange={handleChange} type='text'  id='product-img'  className='shadow w-100'/>
                </div>
                <button type='submit ' className='button-btn d-flex mx-auto'>Add Product</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default AddForm