import Navbar from '../ABOUTS/Navbar/Navber';
import Footer from '../Footer/Footer';
import DetailsSection from './DetailsSection/DetailsSection';
// import DetailsOption from './DetailsSection/DetailsOption'



const Details = () => {
    return (
        <div className= 'mt-40 w-full  justify-center' >
       
<Navbar/>

<DetailsSection/>
{/* <DetailsOption/> */}
<Footer/>
        </div>
    );
};

export default Details;