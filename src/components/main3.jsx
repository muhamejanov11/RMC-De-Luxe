import logo from "../assets/Btn (2).png"
import logo2 from "../assets/Btn (3).png"

const Main3 = () => {
    return (
        <div className="mt-[200px] px-[80px] justify-between flex gap-[363px]">
            <div className="left">
                <p className="text-[55px] font-[500] font-Jost text-[#333333]">Как мы сдаем в аренду</p>
            </div>
            <div className="right">
                <div className="flex flex-col gap-5">
                    <div className="flex justify-between items-center">
                        <p className="text-[30px] font-[500] font-Jost text-[#E1AF93]">Подготовка недвижимости</p>
                        <img src={logo} alt="" />
                    </div>
                    <p className="text-[#333333] text-[20px] font-[400] font-Jost">Проверка наличия и состояния всех предметов мебели и техники, которые будут предоставлены арендаторам</p>
                    <p className="text-[#333333] text-[20px] font-[400] font-Jost">Подготовка и фотосъемка недвижимости</p>
                </div>
                <hr className="border-[1px] border-[#858585] mt-[40px]" />
                <div className="bottom">
                    <div className="flex justify-between items-center mt-[40px]">
                        <p className="text-[30px] font-[500] font-Jost text-[#333333]">Рекламирование недвижимости</p>
                        <img src={logo2} alt="" />
                    </div>
                    <hr className="border-[1px] border-[#858585] mt-[40px]" />
                    <div className="flex justify-between items-center mt-[40px]">
                        <p className="text-[30px] font-[500] font-Jost text-[#333333]">Показ объекта</p>
                        <img src={logo2} alt="" />
                    </div>
                    <hr className="border-[1px] border-[#858585] mt-[40px]" />
                    <div className="flex justify-between items-center mt-[40px]">
                        <p className="text-[30px] font-[500] font-Jost text-[#333333]">Заключение договора аренды</p>
                        <img src={logo2} alt="" />
                    </div >
                    <hr className="border-[1px] border-[#858585] mt-[40px]" />
                    <div className="flex justify-between items-center mt-[40px]">
                        <p className="text-[30px] font-[500] font-Jost text-[#333333]">Передача объекта</p>
                        <img src={logo2} alt="" />
                    </div>
                </div>

                <hr className="border-[1px] border-[#858585] mt-[40px]" />
            </div>
        </div>

    )
}

export default Main3