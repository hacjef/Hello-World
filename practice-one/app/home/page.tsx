import Landingtwo from '@/components/log-in/landing1'
import Navbar from '@/components/log-in/navbar'
import Navbartwo from '@/components/log-in/ads-nav'
import Product from '@/components/log-in/products'
import Footer from '@/components/footer'

export default function home(){
    return(
        <div>
            <Navbar />
            <Landingtwo />
            <Navbartwo />
            <Product />
            <Footer />

        </div>
    );   
}