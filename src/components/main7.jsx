import img1 from "../assets/solar_document-text-outline.png"
import img2 from "../assets/iconamoon_clock-light.png"

const Main7 = () => {
    return (
        <div className="flex flex-col gap-[50px] pl-[80px] mt-[200px]">
            <p className="text-[55px] font-[500] font-Jost text-[#333333] w-[550px]">Необходимые документы и сроки</p>
            <div className="flex gap-[20px]">
                <div className="py-[40px] flex flex-col gap-[30px] px-[40px] border-[1px] border-[#EAEAEA]">
                    <img className="w-[50px] h-[50px]" src={img1} alt="" />
                    <div className="div">
                        <p className="text-[20px] font-[400] font-Jost text-[#333333]">Кадастровый план</p>
                        <p className="text-[20px] font-[400] font-Jost text-[#333333]">Свидетельство о праве собственности</p>
                        <p className="text-[20px] font-[400] font-Jost text-[#333333]">Технический паспорт объекта</p>
                        <p className="text-[20px] font-[400] font-Jost text-[#333333]">Документы, подтверждающие право на землю</p>
                        <p className="text-[20px] font-[400] font-Jost text-[#333333]">Документы, подтверждающие состояние и историю объекта</p>
                        <p className="text-[20px] font-[400] font-Jost text-[#333333]">Документы, подтверждающие использование и эксплуатацию</p>
                        <p className="text-[20px] font-[400] font-Jost text-[#333333]">Правоустанавливающие документы на имущество</p>
                    </div>
                </div>
                <div className="py-[40px] flex flex-col gap-[30px] pr-[230px] pl-[40px] border-[1px] border-[#EAEAEA]">
                    <img className="w-[50px] h-[50px]" src={img2} alt="" />
                    <div className="div">
                        <p className="text-[20px] font-[400] font-Jost text-[#333333]">Стандартная сдача квартиры или дома — 1-3 дня</p>
                        <p className="text-[20px] font-[400] font-Jost text-[#333333]">Сдача коммерческой недвижимости – 3-7 дней</p>
                        <p className="text-[20px] font-[400] font-Jost text-[#333333]">Сдача сложных объектов — 7-15 дней</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main7