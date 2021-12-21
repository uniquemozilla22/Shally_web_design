import React from 'react'
import { Fade } from 'react-reveal'
import TeacherAll from '../../Components/TeachersAll/TeacherAll'

const Teacher = () => {
    return (
        <main>
            <Fade cascade bottom>
                <TeacherAll />
            </Fade>
        </main>
    )
}

export default Teacher
