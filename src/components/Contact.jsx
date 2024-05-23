import code from '../images/code2.png'
import emailjs from '@emailjs/browser'
import { useState, useEffect } from 'react'

export default function Contact() {
    const MY_EMAIL = process.env.REACT_APP_MY_EMAIL;
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
    const [userError, setUserError] = useState('')
    const [userSuccess, setUserSuccess] = useState('')
    const [contactFormData, setContactFormData] = useState({
        from_name: '',
        user_email: '',
        message: '',
    })

    const handleInputChange = (event) => {
        setContactFormData({
            ...contactFormData,
            [event.target.name]: event.target.value,
        })
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const sendEmail = (e) => {
        e.preventDefault()
        setUserSuccess('')
        setUserError('')

        // checks if valid email and not our own email
        if (
            !validateEmail(contactFormData.user_email) ||
            contactFormData.user_email.toLowerCase() === MY_EMAIL
        ) {
            setUserError('Please enter a valid email address.')
            return
        }
        emailjs.send(SERVICE_ID, TEMPLATE_ID, contactFormData, PUBLIC_KEY).then(
            () => {
                setUserSuccess('Email sent successfully!')
                setContactFormData({
                    from_name: '',
                    user_email: '',
                    message: '',
                })
            },
            (error) => {
                setUserError('Failed to send email: ' + error.text)
            }
        )
    }

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
            <div className="offset-3 col-6">
                <h1 style={{fontWeight: 'bold', textAlign: 'center'}}>Contact</h1>
                <div><br /></div>
                <p style={{fontWeight: 'bold', textAlign: 'center'}}>
                    I look forward to hearing from you!
                </p>
                <div><br /></div>
                <br />
                {userError && (
                    <div className="alert alert-danger">{userError}</div>
                )}
                {userSuccess && (
                    <div className="alert alert-success">{userSuccess}</div>
                )}
                <form
                    className="contact-form"
                    id="contact-form"
                    onSubmit={sendEmail}
                >
                    <div className="form-floating mb-3">
                        <input
                            required
                            type="text"
                            value={contactFormData.from_name}
                            name="from_name"
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Name"
                            style={{
                                color: 'white',
                                backgroundColor: 'transparent',
                            }}
                            maxLength={50}
                        />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            value={contactFormData.user_email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            required
                            type="text"
                            name="user_email"
                            id="email"
                            className="form-control"
                            style={{
                                color: 'white',
                                backgroundColor: 'transparent',
                            }}
                            maxLength={50}
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea
                            value={contactFormData.message}
                            onChange={handleInputChange}
                            placeholder="Message"
                            required
                            name="message"
                            id="message"
                            className="form-control resizable"
                            style={{
                                color: 'white',
                                backgroundColor: 'transparent',
                                minHeight: '6rem',
                            }}
                            maxLength={1000}
                        />
                        <label htmlFor="message">Message</label>
                    </div>
                    <div className="text-center">
                        <div><br /></div>
                        <button
                            type="submit"
                            className="btn btn-primary rounded-pill"
                            style={{ backgroundColor: '#ADD8E6', fontWeight: 'bold', color: 'navy' }}
                        >
                            Submit
                        </button>
                    </div>
                    <br></br>
                </form>
            </div>
        </div>
    )
}
