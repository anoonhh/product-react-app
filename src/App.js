import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductView from "./pages/ProductView";
import AddProduct from "./pages/AddProduct";
import UpdateFormPage from "./pages/UpdateFormPage";
import api from "./api";
import { useEffect,useState } from "react";



const App = () => {
     const [data , setData] = useState([])

     const [pages,setPages] = useState(1)
     const [total, setTotal] = useState(0)
     const limit = 20
     const totalPages = Math.ceil(total / limit)

    useEffect(()=> {
        const skip = (pages - 1 ) * limit ;

        api.get(`?limit=${limit}&skip=${skip}`)
        .then((response) => {
          setData(response.data.products)
            console.log(response.data.products)
            setTotal(response.data.total)
        })
        .catch((err) =>{
            console.error("Error detected ",err)
        })
    },[pages])

    console.log(data,"data from list api")
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home productData={data} productSetter = {setData} pages={pages} setPages={setPages} totalPages={totalPages} />} />
        <Route path="/:id" element={<ProductView productData={data} productSetter={setData}/>}/>
        <Route path="/addproduct" element={<AddProduct productData={data} productSetter = {setData}/>}/>
        <Route path="/updateform/:id" element={<UpdateFormPage productData={data} productSetter = {setData}/>}/>
      </Routes>

    </div>
  );
}

export default App;
