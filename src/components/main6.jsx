import logo1 from "../assets/Step number (4).png"
import logo2 from "../assets/Step number (5).png"
import logo3 from "../assets/Step number (6).png"
import logo4 from "../assets/Step number (7).png"
import logo5 from "../assets/Step number (8).png"
import logo6 from "../assets/Step number (9).png"
import logo7 from "../assets/Step number (10).png"

const Main6 = () => {
    return (
        <div className="mt-[200px] flex flex-col gap-[70px] pl-[80px]">
            <p className="text-[55px] font-[500] font-Jost text-[#333333]">Процесс работы</p>
            <div className="flex gap-[50px] flex-wrap">
                <div className="w-[300px] flex flex-col gap-[16px]">
                    <img className="w-[102px] h-[102px] mb-[19px]" src={logo1} alt="" />
                    <p className="text-[30px] font-[500] font-Jost text-[#333333]">Подготовка недвижимости</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#858585]">Проверка наличия и состояния всех предметов мебели и техники</p>
                </div>
                <div className="w-[300px] flex flex-col gap-[16px]">
                    <img className="w-[102px] h-[102px] mb-[19px]" src={logo2} alt="" />
                    <p className="text-[30px] font-[500] font-Jost text-[#333333]">Анализ рынка</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#858585]">Оценка рыночной стоимости аренды. Определение, какой типов арендаторов</p>
                </div>
                <div className="w-[300px] flex flex-col gap-[16px]">
                    <img className="w-[102px] h-[102px] mb-[19px]" src={logo3} alt="" />
                    <p className="text-[30px] font-[500] font-Jost text-[#333333]">Размещение объявления</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#858585]">Размещение объявлений на популярных платформах</p>
                </div>
                <div className="w-[300px] flex flex-col gap-[16px]">
                    <img className="w-[102px] h-[102px] mb-[19px]" src={logo4} alt="" />
                    <p className="text-[30px] font-[500] font-Jost text-[#333333]">Проведение просмотров</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#858585]">Организация удобного времени для арендаторов. Показ все ключевых особенностей</p>
                </div>
                <div className="w-[300px] flex flex-col gap-[16px] pt-[88px]">
                    <img className="w-[102px] h-[102px] mb-[19px]" src={logo5} alt="" />
                    <p className="text-[30px] font-[500] font-Jost text-[#333333]">Мониторинг и поддержка</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#858585]">Периодическая проверка состояния недвижимости</p>
                </div>
                <div className="w-[300px] flex flex-col gap-[16px] pt-[88px]">
                    <img className="w-[102px] h-[102px] mb-[19px]" src={logo6} alt="" />
                    <p className="text-[30px] font-[500] font-Jost text-[#333333]">Передача недвижимости</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#858585]">Составление акта приема-передачи, где зафиксировано состояние имущества и ключи</p>
                </div>
                <div className="w-[300px] flex flex-col gap-[16px] pt-[88px]">
                    <img className="w-[102px] h-[102px] mb-[19px]" src={logo7} alt="" />
                    <p className="text-[30px] font-[500] font-Jost text-[#333333]">Выбор арендатора</p>
                    <p className="text-[20px] font-[400] font-Jost text-[#858585]">Проверка потенциальных арендаторов на наличие задолженностей</p>
                </div>
            </div>
        </div>
    )
}

export default Main6