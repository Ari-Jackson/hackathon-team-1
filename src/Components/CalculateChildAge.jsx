import { useState } from "react"

const CalculateChildAge = () => {
    const [birthday, setBirthday] = useState('')
    const [age, setAge] = useState('')

    const calculateAge = () => {
        const todaysDate = new Date()
        const dateOfBirth = new Date(birthday)

        const ageInMilliseconds = todaysDate - dateOfBirth

        const monthsMilliseconds = 1000 * 60 * 60 * 24 * 30.4375
        const convertAgeToMonths = Math.floor(ageInMilliseconds / monthsMilliseconds)

        if (convertAgeToMonths < 36 || convertAgeToMonths >= 60) {
            setAge('This application is designed for children between the ages of 3-5')
        } else {
            setAge(convertAgeToMonths)
        }
    }

    return (
        <div className="h-screen">
            <h2>Please Select Your Child's Age</h2>
            <input
                type='date'
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
            />     
            <button onClick={calculateAge}>Submit</button>
            {typeof age === 'number' ? <h3>Age In Months: {age} months</h3> : <h3>{age}</h3>}
        </div>
    )
}

export default CalculateChildAge
