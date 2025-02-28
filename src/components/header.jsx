import img1 from "../assets/Frame 2.png"
import logo from "../assets/iconamoon_arrow-up-2-light.png"
import callImage from "../assets/Call.png";
import logo2 from "../assets/Call2.png"
import logo3 from "../assets/Call1.png"
import logo4 from "../assets/Pages.png"

const Header = () => {
    return (
        <div className="flex justify-between px-[100px] mt-[20px]">
            <img src={img1} alt="" />
            <div className="flex gap-[100px] items-center">
                <div className="flex items-center gap-1">
                    <p className="text-[20px] font-[400] text-[black]">Услуги</p>
                    <img src={logo} alt="" />
                </div>
                <p className="text-[20px] font-[400] text-[black]">О нас</p>
                <p className="text-[20px] font-[400] text-[black]">Блог</p>
                <p className="text-[20px] font-[400] text-[black]">Контакты</p>
            </div>
            <div className="flex gap-3">
                <img className="w-[50px] h-[50px]" src={callImage} alt="" />
                <img className="w-[50px] h-[50px]" src={logo2} alt="" />
                <img className="w-[50px] h-[50px]" src={logo3} alt="" />
                <img className="w-[79px] h-[50px]" src={logo4} alt="" />
            </div>
        </div>
    )
}

export default Header