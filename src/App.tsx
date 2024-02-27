import "./App.css";
import Logo from "./assets/logo.png";
import Trophy from "./assets/1.png";
import Bestowal from "./assets/2.png";
import Machines from "./assets/3.png";
import { CallIcon, FacebookIcon, GlobeIcon } from "./assets/Icons";

function App() {
  return (
    <>
      <div className="w-[95%] overflow-x-hidden mx-auto flex flex-col font-serif text-black">
        <div className="mx-auto flex items-center justify-center">
          <img src={Logo} alt="NotFound" className="sm:w-1/2 w-4/5" />
        </div>
        <div className="flex flex-col sm:flex-row justify-between my-6">
          <div className="flex-[0.32] ">
            <img
              src={Trophy}
              alt="Trophy.png"
              className="w-1/2 mx-auto sm:w-auto"
            />
          </div>
          <div className="flex-[0.68] flex flex-col gap-5 text-[1rem]">
            <div className="text-slate-900  flex flex-col">
              <p className="font-bold my-2">
                C.R.L. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
              </p>
              <ul className="list-disc px-10 font-medium">
                <li>
                  <p>
                    C.R.I.'s energy efficient products are well recognized by
                    various Government Institutions, as trustworthy products for
                    various projects across the globe to save energy.
                  </p>
                </li>
                <li>
                  <p>
                    C.R.I. is the highest contributor in the country for the
                    projects of EESL (Energy Efficiency Services Limited) to
                    replace the old inefficient pumps with 5 Star rated energy
                    efficient smart pumps with IoT enabled control panel.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <img src={Bestowal} alt="Bestowal.png" />
            </div>
            <div>
              <p className="font-medium text-black ">
                Government of India has awarded the "National Energy
                Conservation Award 2018". Mr. G. Selvaraj, Joint Managing
                Director of C.R.I. Group received the award from Smt. Sumitra
                Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable
                Minister of State.
              </p>
            </div>
          </div>
        </div>
        <div className="my-10">
          <p className="font-semibold text-[0.8rem]">
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION
          </p>
        </div>
        <div className="w-full flex flex-col gap-5 items-center justify-center">
          <img src={Machines} alt="Machines.png" className="w-4/5" />
          <p className="font-medium">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
        </div>
        <hr className="border-red-600 border-t-2  h-2 my-6" />
        <div className="text-center flex flex-col gap-2 ">
          <p className="font-bold">
            C.R.L. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </p>
          <p className="font-medium text-sm">
            CHEMICALS & PROCESS
            <span className="text-red-500 font-bold"> |</span> POWER
            <span className="text-red-500 font-bold"> |</span> WATER & WASTE
            <span className="text-red-500 font-bold"> |</span> WATER OILS & GAS
            <span className="text-red-500 font-bold"> |</span> PHARMA
            <span className="text-red-500 font-bold"> |</span> SUGARS &
            DISTILLERIES
            <span className="text-red-500 font-bold"> |</span> PAPER & PULP
            <span className="text-red-500 font-bold"> |</span> MARINE & DEFENCE
            <span className="text-red-500 font-bold"> |</span> METAL & MINING
            <span className="text-red-500 font-bold"> |</span> FOOD & BEVERAGE
            <span className="text-red-500 font-bold"> |</span> PETROCHEMICAL &
            REFINERIES
            <span className="text-red-500 font-bold"> |</span> SOLAR
            <span className="text-red-500 font-bold"> |</span> BUILDING
            <span className="text-red-500 font-bold"> |</span> HVAC
            <span className="text-red-500 font-bold"> |</span> FIRE FIGHTING
            <span className="text-red-500 font-bold"> |</span> AGRICULTURE &
            RESIDENTIAL
          </p>
        </div>
        <div className="bg-red-500 flex flex-col sm:flex-row gap-6 items-center mt-10 py-10 justify-around">
          <div className="flex items-center gap-3">
            <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <CallIcon size={20} color="#ec3237" />
            </span>
            <p className="text-white">
              Toll free <span className="font-bold">1800 200 1234</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center">
              <FacebookIcon size={40} color="white" />
            </span>
            <p className="text-white">www.facebook.com/cripumps</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center">
              <GlobeIcon size={40} color="white" />
            </span>
            <p className="text-white">www.crigroups.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
