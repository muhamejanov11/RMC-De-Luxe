import img1 from "../assets/Frame 2.png"
import logo1 from "../assets/ins_line.png"
import logo2 from "../assets/形状.png"
import logo3 from "../assets/whatsapp_line.png"
import logo4 from "../assets/facebook_line.png"
import logo5 from "../assets/Youtube.png"
import img2 from "../assets/лого фулл 1.png"

const Footer = () => {
    return (
        <div className="mt-[200px] px-[80px] bg-[#F7F7F7] pt-[50px] items-center">
            <div className="flex justify-between">
                <img src={img1} alt="" />
                <div className="flex gap-[20px]">
                    <img className="w-[30px] h-[30px]" src={logo1} alt="" />
                    <img className="w-[30px] h-[30px]" src={logo2} alt="" />
                    <img className="w-[30px] h-[30px]" src={logo3} alt="" />
                    <img className="w-[30px] h-[30px]" src={logo4} alt="" />
                    <img className="w-[30px] h-[30px]" src={logo5} alt="" />
                </div>
            </div>
            <hr className="border-[1px] border-[#EAEAEA] mt-[50px] mb-[50px]" />
            <div className="flex gap-[138px]">
                <div className="flex flex-col gap-1">
                    <p className="text-[24px] font-[500] font-Jost text-[#333333] mb-[8px]">Услуги</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#333333]">Купить</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#333333]">Арендовать</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#333333]">Продать</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#333333]">Оценить</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-[24px] font-[500] font-Jost text-[#333333] mb-[8px]">Недвижимость</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#333333]">Квартиры</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#333333]">Новостройки</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#333333]">Дома и участки</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#333333]">Коммерческая</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-[24px] font-[500] font-Jost text-[#333333] mb-[8px]">Компания</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#333333]">О нас</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#333333]">Блог</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#333333]">Контакты</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#333333]">Связаться</p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-[24px] font-[500] font-Jost text-[#333333]">Другое</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#333333]">Ипотечный калькулятор</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#333333] w-[280px]">Инвестиции в недвижимость в Дубае</p>
                </div>
            </div>
            <hr className="border-[1px] border-[#EAEAEA] mt-[34.5px] mb-[14.5px]" />
            <div className="flex justify-between items-center">
                <p className="text-[16px] font-[400] font-Jost text-[#B3B3B3]">2024 © RMC De Luxe real estate LLC. Все права защищены</p>
                <img src={img2} alt="" />
            </div>
        </div>
    )
}

export default Footer