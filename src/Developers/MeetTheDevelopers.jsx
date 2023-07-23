import Ari from "./Ari"
import Ariunaa from "./Ariunaa"
import Diandre from "./Diandre"
import Taylor from "./Taylor"
import AriunaaReading from '../Images/AriunaaReading.jpeg'
import DiandreGym from '../Images/DiandreGym.jpeg'
import MeetDevelopers from '../Images/MeetDevelopers.jpeg'


const MeetTheDevelopers = () => {
    return (
        <div>
            <img src={MeetDevelopers}
                alt="The Developers"
                height='700px'
            />

            <h1>Learn More About Us</h1>
            
            <Ari />
            <Ariunaa />
            <img src={AriunaaReading}
                alt='Ariunaa Reading'
                height='700px'
            />
            <Diandre />
            <img src={DiandreGym}
                alt='Diandre at the gym'
                height='700px'
            />
            <Taylor />
        </div>
    )
}

export default MeetTheDevelopers
