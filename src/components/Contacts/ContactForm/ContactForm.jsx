import React from 'react'
import './ContactForm.css'
import { useState } from 'react'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState('')
    const [errorMessage, setErrorMessage] = useState ('')

    const handleChange = (e) => {
        console.log(e.target.type)

        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                setNameError (validateLength(e.target.value, 1))
                break
            case 'email':
                setEmail(e.target.value)
                setEmailError (validateLength(e.target.value, 3))
                break
            case 'message':
                setMessage(e.target.value)
                setMessageError (validateLength(e.target.value, 5))
                break

        }
    }

    const validateLength = (value, minLength = 1) => {
        if (value.length < minLength)
            return true
        return false
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage('')

        for(let element of e.target) {
            switch (element.name) {
                case 'name':
                    setName(element.value)
                    setNameError (validateLength(element.value, 1))
                    break
                case 'email':
                    setEmail(element.value)
                    setEmailError (validateLength(element.value, 3))
                    break
                case 'message':
                    setMessage(element.value)
                    setMessageError (validateLength(element.value, 5))
                    break
            }
        }

        if (!nameError && !emailError && !messageError){
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform',{
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    name, email, message
                })
            })

            if (result.status === 200)
                alert('Thank you for your message.')
            else
                setErrorMessage('Something went wrong.')

        }
        
    }
  
    return (
        <section className="contact-form">
            <h2>Leave us a message for any information.</h2>
            <p className="errorMessage">{errorMessage}</p>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => handleChange(e)}
                            placeholder={`Name${nameError ? ' is required' : ''}`}
                            className={`${nameError ? 'error' : ''}`}
                        />
                    </div>
            
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => handleChange(e)}
                            placeholder={`Email${emailError ? ' is required' : ''}`}
                            className={`${emailError ? 'error' : ''}`}
                        />
                    </div>
            
                    <div className="form-group message-group">
                        <input
                            type="message"
                            name="message"
                            value={message}
                            onChange={(e) => handleChange(e)}
                            placeholder={`Message${messageError ? ' is required' : ''}`}
                            className={`${messageError ? 'error' : ''}`}
                        />
                    </div>
            
                    <button className="btn-yellow" type="submit">
                        Send Message
                    </button>
                </form>
        </section>
    
  )
}

export default ContactForm