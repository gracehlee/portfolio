import code from '../images/code2.png'

export default function Contact() {
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
