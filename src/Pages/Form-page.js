import Header from '../Features/Header/header';
import Footer from '../Features/Footer/footer';
import BlueBox from '../Features/FormPage/BlueBox'
import SellerInfo from '../Features/FormPage/SellerInfo'
import ItemDetails from '../Features/FormPage/ItemDetails';
const FormPage = () => {
    return (<div>
        <Header/>
        <BlueBox/>
        <SellerInfo/>
        <ItemDetails/>

        <Footer/>
        </div>
    );
  }
  
export default FormPage;