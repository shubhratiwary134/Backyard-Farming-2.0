import image1 from "../Assests/Report1.png";
import image2 from "../Assests/report2.png";
import image3 from "../Assests/report4.png";
import image4 from "../Assests/report3.png";
import image5 from "../Assests/report5.png";
import { motion } from "framer-motion";

export const CaseStudy = () => {
  return (
    <div className="bg-black text-white min-h-screen p-10 font-[Poppins]">
      <div className="text-center">
        <h1 className="text-7xl font-poppins text-[#ffde59] tracking-widest">
          Case Study
        </h1>
      </div>
      <div className="flex flex-col gap-10 mt-10">
        {/*report1*/}
        <div className="group relative w-full mt-10 flex flex-col gap-10 items-center">
          <p className="text-[#d2d2d1] text-2xl ml-4 w-full font-poppins tracking-wider">
            # Problems and Challenges by{" "}
            <span className="text-[#ffde59]">Shreya Soni</span>
          </p>
          <div className="w-3/4 mt-2 overflow-hidden">
            <motion.img
              src={image1}
              alt="report1 image"
              className="w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <div className="absolute bottom-0 backdrop-blur-lg w-3/4 hidden group-hover:flex justify-center h-16 items-center">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1stf0xVpVchIx28X9VEu9ePoEh3rkPZFx/view"
              className="text-blue-500 ml-4 text-xl hover:underline"
            >
              Read More
            </a>
          </div>
        </div>

        {/*report2*/}
        <div className="group relative w-full mt-10 flex flex-col gap-10 items-center">
          <p className="text-[#d2d2d1] text-3xl ml-4 w-full font-poppins tracking-wider">
            # Knowledge Gaps in Urban Farming: Understanding Public Interest by{" "}
            <span className="text-[#ffde59]">Shreya Soni</span>
          </p>
          <div className="w-3/4 mt-2 overflow-hidden">
            <motion.img
              src={image2}
              alt="report2 image"
              className="w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <div className="absolute bottom-0 backdrop-blur-lg w-3/4 hidden group-hover:flex justify-center h-16 items-center">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1kTrEbJPXNaJTs01QRADNJorCqvA_N76e/view"
              className="text-blue-500 ml-4 text-xl hover:underline"
            >
              Read More
            </a>
          </div>
        </div>

        {/*report3*/}
        <div className="group relative w-full mt-10 flex flex-col gap-10 items-center">
          <p className="text-[#d2d2d1] text-3xl ml-4 w-full font-poppins tracking-wider">
            # Marketplace Feature in Backyard Farming 2.0 by{" "}
            <span className="text-[#ffde59]">Shubhra Tiwary</span>
          </p>
          <div className="w-3/4 mt-2 overflow-hidden">
            <motion.img
              src={image3}
              alt="report3 image"
              className="w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <div className="absolute bottom-0 backdrop-blur-xl w-3/4 hidden group-hover:flex justify-center h-16 items-center">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1qYkolrm2OUBcl8nNKpVhiFJ8vR2lKgTZ/view"
              className="text-blue-500 ml-4 text-xl hover:underline"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Report 4 */}
        <div className="group relative w-full mt-10 flex flex-col gap-10 items-center">
          <p className="text-[#d2d2d1] text-3xl ml-4 w-full font-poppins tracking-wider">
            # Mitigating Agriculture's Carbon Footprint: The Role of Urban and
            Backyard Farming in Emission Reduction by{" "}
            <span className="text-[#ffde59]">Shubhra Tiwary</span>
          </p>
          <div className="w-3/4 mt-2 overflow-hidden">
            <motion.img
              src={image4}
              alt="report4 image"
              className="w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <div className="absolute bottom-0 backdrop-blur-xl w-3/4 hidden group-hover:flex justify-center h-16 items-center">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1VRXlLHjgiFM-shF2MvaTMml6Tn63a6XQ/view"
              className="text-blue-500 ml-4 text-xl hover:underline"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Report 5 */}
        <div className="group relative w-full mt-10 flex flex-col gap-10 items-center">
          <p className="text-[#d2d2d1] text-3xl text-center ml-4 w-full font-poppins tracking-wider">
            # Personalized Farming Plans: Enhancing Urban Gardening with
            Tailored Roadmaps by{" "}
            <span className="text-[#ffde59]">Arin Zingade</span>
          </p>
          <div className="w-3/4 mt-2 overflow-hidden">
            <motion.img
              src={image5}
              alt="report5 image"
              className="w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <div className="absolute bottom-0 backdrop-blur-xl w-3/4 hidden group-hover:flex justify-center h-16 items-center">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1FxsStn3st9ZftyuvhcO8Vlk2TNynMn6W/view"
              className="text-blue-500 ml-4 text-xl hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
