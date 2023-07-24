import Ari from "./Ari"
import Ariunaa from "./Ariunaa"
import Diandre from "./Diandre"
import Taylor from "./Taylor"
import AriunaaReading from '../Images/AriunaaReading.jpeg'
import DiandreGym from '../Images/DiandreGym.jpeg'
import MeetDevelopers from '../Images/MeetDevelopers.jpeg'
import AriDogs from '../Images/AriDogs.jpeg'
import TaylorAndDaughter from '../Images/TaylorAndDaughter.jpeg'



const MeetTheDevelopers = () => {
    return (
      <div>
        <div className="grid grid-cols-2 m-12">
          <div className="mx-auto mt-[20%]  shadow-md bg-[#ff801c]-500 w-[70%] h-[70%] flex grid  p-12 border-8 border-yellow-100">
            <p className=" mt-[30%] ml-[20%] text-5xl font-extrabold tracking-tight text-[#0065ff] mt-3">
              Learn
              <br />
              More
              <br />
              About Us
            </p>
          </div>
          <div className="w-[90%] my-24">
            <img src={MeetDevelopers} alt="The Developers" height="700px"/>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-3 my-24 w-screen py-12">
              <img src={AriDogs} alt="Ari and his dogs" width="700px" />
              <div className="w-fit mr-24 shadow-md pb-12 bg-white rounded-lg">
              <Ari />
              </div>       
            </div>
            <div className="grid grid-cols-2 gap-6 my-24 w-screen">
                <div className="w-fit mr-24 shadow-md pb-12 bg-white rounded-lg">
                <Ariunaa />
                </div>    
              <img src={AriunaaReading} alt="Ariunaa Reading" width="500px" />
            </div>
            <div className="grid grid-cols-2 gap-6 my-24 w-screen">
              <img src={DiandreGym} alt="Diandre at the gym" width="600px" />
              <div className="w-fit mr-24 shadow-md pb-12 bg-white rounded-lg">
                <Diandre />
                </div> 
            </div>
            <div className="grid grid-cols-2 gap-6 my-24 w-screen">
            <div className="w-fit mr-24 shadow-md pb-12 bg-white rounded-lg">
                <Taylor />
                </div> 
              <img
                src={TaylorAndDaughter}
                alt="Taylor Gardening"
                width="600px"
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default MeetTheDevelopers
