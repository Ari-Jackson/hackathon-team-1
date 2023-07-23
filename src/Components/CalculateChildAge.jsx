import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form");
  };

    return (
        <div className="h-screen">
            <h2 className="text-3xl">Please Select Your Child Age</h2>
            <input
                type='date'
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
            />     
            <button onClick={calculateAge}>Submit</button>
            {typeof age === 'number' ? <h3>Age In Months: {age} months</h3> : <h3>{age}</h3>}
            <button
          onClick={handleClick}
          className="w-full py-4 text-xl text-center text-white transition-colors duration-300 bg-green-400 rounded-full hover:bg-green-500 ease px-9 md:w-auto"
        >
          Let&apos;s Start
        </button>
        </div>
    )
}

export default CalculateChildAge
