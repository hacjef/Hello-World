import Navbar from '../components/navbar'
import Landing from '../components/landing'
import Exclusive from '@/components/exclusiveprod'
import Footer from '@/components/footer'
import Topproduct from '@/components/topprod';
import Categories from '@/components/categories'


export default function home(){
    return(
        <div>
            <Navbar />
            <Landing />
            <Topproduct />
            <Exclusive />
            <Categories />
            <Footer />
        </div>
    );   
}