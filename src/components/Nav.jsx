import{FaInstagram} from 'react-icons/fa'
import{FaTwitter} from 'react-icons/fa'
import{FaFacebook} from 'react-icons/fa'
import{FaLinkedin} from 'react-icons/fa'
import{FaGithub} from 'react-icons/fa'
import{FaYoutube} from 'react-icons/fa'

const Nav = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img src="" alt="" srcset="" />
        <h1 className='text font-semibold'>Jafar A.M</h1>
    </div>
    <div className="m-8 flex gap-4 justify-center text-2xl" >
        <FaInstagram/>
        <FaTwitter/>
        <FaFacebook/>
        <FaLinkedin/>
        <FaGithub/>
        <FaYoutube/>
    </div>
  </nav>
  )
};

export default Nav