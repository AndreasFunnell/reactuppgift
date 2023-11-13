import React from 'react'
import './ContactForm.css'
import { useState } from 'react'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('handling submit')

        const user ={name, email, message}
        const json = JSON.stringify(user)

        const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: json
        })

        switch (result.status) {
            case 200:
                console.log ('meddelandet har skickats')
                break
            case 400:
                console.log (`något har gått fel. felmeddelandet är ${await result.text()}`)
                break
        }


    }

  
  
    return (
    <section className="contact-form">
        <h2>Leave us a message for any information</h2>
        <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
            <label for="name">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>

        <div className="form-group">
            <label for="email">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group message-group">
            <label for="message">Your Message</label>
            <input type="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>

        <button type="submit">Submit</button>
        </form>
    </section>
  )
}

export default ContactForm