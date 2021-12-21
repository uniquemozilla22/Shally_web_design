import React from 'react'
import { Fade } from 'react-reveal'
import ClassesAll from '../../Components/Classes-All/ClassesAll'
import PromotionalBanner from '../../Components/Promotional-Banner/PromotionalBanner'

const Classes = () => {
    return (
        <main>
            <Fade cascade bottom>
                <PromotionalBanner />
            </Fade>
            <Fade cascade bottom>
                <ClassesAll />
            </Fade>
        </main>
    )
}

export default Classes
