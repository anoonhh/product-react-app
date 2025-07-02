import Header from "../components/Header"
import UpdateForm from "../components/UpdateForm"

const UpdateFormPage = ({productData,productSetter}) => {
  console.log(productData,"products page")
  return (
    <div >
        <Header/> 
        <UpdateForm productData={productData} productSetter={productSetter}/>
    </div>
  )
}

export default UpdateFormPage