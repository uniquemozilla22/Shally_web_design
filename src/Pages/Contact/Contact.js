import React from 'react'
import { Fade } from 'react-reveal'
import ContactForm from '../../Components/Contact-Form/ContactForm'
import LargeMap from '../../Components/Lage-Map/LargeMap'

const Contact = () => {
    return (
        <main>
            <Fade cascade bottom>
                <LargeMap />
            </Fade>
            <Fade cascade bottom>
                <ContactForm />
            </Fade>
        </main>
    )
}

export default Contact
