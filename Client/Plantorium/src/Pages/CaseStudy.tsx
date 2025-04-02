
import image1 from "../Assests/Report1.png"
import image2 from "../Assests/report2.png"
import image3 from "../Assests/report4.png"
import image4 from "../Assests/report3.png"
import image5 from "../Assests/report5.png"

export const CaseStudy = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4 font-[Poppins]">
      <div className="text-center">
        <h1 className="text-7xl font-poppins font-bold text-[#ffde59] tracking-widest">Reports</h1>
      </div>
      {/*report1*/}
      <div className="w-full mt-10 flex flex-col items-center">
        <p className="text-[#d2d2d1] text-3xl text-left ml-4 w-full font-poppins tracking-wider">Problems and Challenges by Shreya Soni</p>
        <img src= {image1} alt="report1 image" className="w-3/4 mt-2 opacity-50 blur-sm " />
        <a href ="https://drive.google.com/file/d/1stf0xVpVchIx28X9VEu9ePoEh3rkPZFx/view"
          className ="text-blue-500 ml-4 text-xl hover:underline">
            Read More
          </a>
      </div>
      {/*report2*/}
      <div className="w-full mt-10 flex flex-col items-center">
        <p className=" text-[#d2d2d1] text-3xl text-left ml-4 w-full font-poppins tracking-wider">Knowledge Gaps in Urban Farming: Understanding Public Interest by Shreya Soni</p>
        <img src= {image2} alt="report2 image" className="w-3/4 mt-2 opacity-50 blur-sm " />
        <a href ="https://drive.google.com/file/d/1kTrEbJPXNaJTs01QRADNJorCqvA_N76e/view"
          className ="text-blue-500 ml-4 text-xl hover:underline">
            Read More
          </a>
      </div>
      {/*report3*/}
      <div className="w-full mt-10 flex flex-col items-center">
        <p className="text-[#d2d2d1] text-3xl text-left ml-4 w-full font-poppins tracking-wider">Marketplace Feature in Backyard Farming 2.0 by Shubhra Tiwary</p>
        <img src={image3} alt="report3 image" className="w-3/4 mt-2 opacity-50 blur-sm" />
        <a href="https://drive.google.com/file/d/1qYkolrm2OUBcl8nNKpVhiFJ8vR2lKgTZ/view" className="text-blue-500 ml-4 text-xl hover:underline">Read More</a>
      </div>
      
      {/* Report 4 */}
      <div className="w-full mt-10 flex flex-col items-center">
        <p className="text-[#d2d2d1] text-3xl text-left ml-4 w-full font-poppins tracking-wider">Mitigating Agriculture's Carbon Footprint: The Role of Urban and Backyard Farming in Emission Reduction by Shubhra Tiwary</p>
        <img src={image4} alt="report4 image" className="w-3/4 mt-2 opacity-50 blur-sm" />
        <a href="https://drive.google.com/file/d/1VRXlLHjgiFM-shF2MvaTMml6Tn63a6XQ/view" className="text-blue-500 ml-4 text-xl hover:underline">Read More</a>
      </div>

      {/* Report 5 */}
      <div className="w-full mt-10 flex flex-col items-center">
        <p className="text-[#d2d2d1] text-3xl text-left ml-4 w-full font-poppins tracking-wider">Personalized Farming Plans: Enhancing Urban Gardening with Tailored Roadmaps by Arin Zingade</p>
        <img src={image5} alt="report5 image" className="w-3/4 mt-2 opacity-50 blur-sm" />
        <a href="https://drive.google.com/file/d/1FxsStn3st9ZftyuvhcO8Vlk2TNynMn6W/view" className="text-blue-500 ml-4 text-xl hover:underline">Read More</a>
      </div>
    </div>
    )
}
