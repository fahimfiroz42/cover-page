import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from '../assets/logo.jpg'
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-primary  p-10">
  <aside>
    <div className="">
    <img src={logo} alt="" className="w-20 rounded-full h-20 object-cover border-2"/>
    </div>
    <p className="font-bold">
      Fahim Firoz Farsi
      <br />
     <span className="" >Get in touch</span>
    </p>
    
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href="https://twitter.com/fahimfirozfarsi">
      <FaSquareXTwitter className="text-3xl" />
      </a>
      <a href="https://www.facebook.com/fahimfirozfarsi">
      <FaFacebook className="text-3xl" />
      </a>
      <a href="https://github.com/fahimfiroz42">
      <FaGithub className="text-3xl" />
      </a>
    </div>
  </nav>
</footer>

            
        </div>
    );
};

export default Footer;