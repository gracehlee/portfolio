import code from '../images/code2.png'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const myEmail = process.env.REACT_APP_MY_EMAIL;
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    return (
        <div
            className="contact"
            style={{
                backgroundImage: `url(${code})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundPositionY: 'fixed',
                backgroundAttachment: 'fixed',
            }}
        >
            <h1 style={{fontWeight: 'bold'}}>Contact</h1>
            <div><br /></div>
            <p>Hello World</p>
        </div>
    )
}
