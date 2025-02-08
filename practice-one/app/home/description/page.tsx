import Navbar from '@/components/log-in/navbar'
import Footer from '@/components/footer'
import Description from '@/components/log-in/proddesc'

export default function home(){
    return(
        <div>
            <Navbar />
            <Description />
            <Footer />
        </div>
    );   
}