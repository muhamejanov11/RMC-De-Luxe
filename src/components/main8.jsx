import logo from "../assets/Btn (2).png"
import logo2 from "../assets/Btn (3).png"

const Main8 = () => {
    return (
        <div className="px-[80px] mt-[200px]">
            <p className="text-[55px] font-[500] font-Jost text-[#333333] mb-[50px]">Часто задаваемые вопросы</p>
            <div className="flex justify-between">
                <p className="text-[30px] font-[400] font-Jost text-[#333333]">Какова стоимость аренды квартиры?</p>
                <img src={logo} alt="" />
            </div>
            <p className="text-[20px] font-[400] font-Jost text-[#333333] mt-[30px] mb-[40px]">Стоимость аренды зависит от местоположения, площади и состояния недвижимости. Для получения точной информации о цене, пожалуйста, свяжитесь с нами или просмотрите описание конкретного объекта</p>
            <hr className="border-[1px] border-[#EAEAEA]" />
            <div className="flex justify-between mt-[30px] mb-[40px]">
                <p className="text-[30px] font-[400] font-Jost text-[#333333]">Какие документы необходимы для аренды квартиры?</p>
                <img src={logo2} alt="" />
            </div>
            <hr className="border-[1px] border-[#EAEAEA]" />
            <div className="flex justify-between mt-[30px] mb-[40px]">
                <p className="text-[30px] font-[400] font-Jost text-[#333333]">Как можно досрочно расторгнуть договор аренды?</p>
                <img src={logo2} alt="" />
            </div>
            <hr className="border-[1px] border-[#EAEAEA]" />
            <div className="flex justify-between mt-[30px] mb-[40px]">
                <p className="text-[30px] font-[400] font-Jost text-[#333333]">Как происходит подписание договора аренды?</p>
                <img src={logo2} alt="" />
            </div>
            <hr className="border-[1px] border-[#EAEAEA]" />
        </div>
    )
}

export default Main8