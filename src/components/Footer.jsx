import xImg from "../assets/x.png";
import inImg from "../assets/linked-in.png";
import fbImg from "../assets/fb.png";
import mailImg from "../assets/mail.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white pb-10 ">
      <div className="px-5 p-10 lg:p-20 grid lg:grid-cols-12 gap-5 ">
        <div className=" col-span-4 ">
          <h1 className="font-bold text-2xl mb-4">
            Customer Support - Tickets System
          </h1>
          <p className="lg:w-[85%] text-justify lg:text-left text-[#a1a1aa]">
            A helpdesk website provides centralized support for customers and
            employees by offering ticket management, knowledge bases, and live
            chat. It streamlines issue tracking, improves communication, and
            ensures timely solutions. With self-service options, FAQs, and
            automated responses, it enhances efficiency, reduces workload, and
            boosts overall satisfaction through reliable, accessible support
            services.
          </p>
        </div>
        <div className="col-span-2 space-y-4">
          <h2 className="text-xl ">Company</h2>
          <div className="space-y-7 text-[#a1a1aa] flex flex-col">
            <a href="#">About Us</a>
            <a href="#">Our Mission</a>
            <a href="#">Contact Saled</a>
          </div>
        </div>
        <div className="col-span-2 space-y-4">
          <h2 className="text-xl" id="service">
            Service
          </h2>
          <div className="space-y-7 text-[#a1a1aa] flex flex-col">
            <a href="#">Products & Services</a>
            <a href="#">Customer Stories</a>
            <a href="#">Download Apps</a>
          </div>
        </div>
        <div className="col-span-2 space-y-4">
          <h2 className="text-xl">Information</h2>
          <div className="space-y-7 text-[#a1a1aa] flex flex-col">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Join Us</a>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-2 space-y-4  ">
          <h2 className=" text-xl " id="socials">
            Social Links
          </h2>
          <div className="space-y-7 text-[#a1a1aa] flex flex-col">
            <div className="flex">
              <img className="w-6 h-6 mr-2" src={xImg} alt="" />
              <a href="#">@CS — Ticket System</a>
            </div>
            <div className="flex">
              <img className="w-6 h-6 mr-2" src={inImg} alt="" />
              <a href="#">@CS — Ticket System</a>
            </div>
            <div className="flex">
              <img className="w-6 h-6 mr-2" src={fbImg} alt="" />
              <a href="#">@CS — Ticket System</a>
            </div>
            <div className="flex">
              <img className="w-6 h-6 mr-2" src={mailImg} alt="" />
              <a href="#">support@cst.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center border-t-gray-200 border-t mt-5 pt-5 text-[#a1a1aa]">
        <p className="w-11/12 mx-auto">
          © 2026 Customer-Support-Zone Ticket System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
