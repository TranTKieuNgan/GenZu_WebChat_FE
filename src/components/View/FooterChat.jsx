
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { PiSmileyStickerLight } from "react-icons/pi";
import { IoSendOutline } from "react-icons/io5";

function Footer() {
    return  <div className="bg-white p-4 flex items-center">
                <input type="text" placeholder="Type your message..." className="flex-1 border rounded-full px-4 py-2 focus:outline-none" />
                <ul className="hidden md:flex overflow-x-hidden mr-10 font-semibold">
                    <li className="mr-6 p-1">
                        <button id="setting" class="hover:bg-blue-400 rounded-md p-1">
                            <MdOutlineKeyboardVoice size={40}/>
                        </button>
                    </li>
                    <li className="mr-6 p-1">
                        <button id="setting" class="hover:bg-blue-400 rounded-md p-1">
                            <PiSmileyStickerLight size={40}/>
                        </button>
                    </li>
                    <li className="mr-6 p-1">
                        <button className="bg-blue-500 text-white rounded-full p-2 ml-2 hover:bg-blue-600 focus:outline-none">
                            <IoSendOutline size={40} />
                        </button>
                    </li>
                </ul>
                
            </div>
                
  }

export default Footer;