import Navbar from "../component/navbar";
import ContactForm from "../component/contactForm";
import Footer from "../component/footer";

export default function ContactUs() {
    return (
        <>
            <Navbar/>
            <div className="pt-25 pb-10">
                <ContactForm/>
            </div>
            <Footer/>
        </>
    );
}
