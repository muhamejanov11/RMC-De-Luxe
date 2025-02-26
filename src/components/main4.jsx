import img1 from "../assets/Case.png"
import img2 from "../assets/Case (1).png"
import logo1 from "../assets/Arrow.png"
import logo2 from "../assets/Arrow (1).png"

const Main4 = () => {
    return (
        <div className="pl-[80px] flex flex-col mt-[200px] gap-[40px]">
            <p className="text-[55px] font-[500] font-Jost text-[#333333]">Успешные кейсы</p>
            <div className="flex gap-[20px]">
                <img className="w-[1000px] h-[400px]" src={img1} alt="" />
                <img className="w-[670px] h-[400px]" src={img2} alt="" />
            </div>
            <div className="flex gap-2 ml-[1160px]">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
            </div>
        </div>

    )
}

export default Main4