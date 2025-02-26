import img1 from "../assets/Images.png"
import img2 from "../assets/Illustration.png"
import img3 from "../assets/Adobe Express - file.png"
import img4 from "../assets/Rectangle 81.png"

const Main2 = () => {
    return (
        <div className="mt-[200px] flex flex-col items-center gap-[50px]">
            <div className="text-left mr-[290px] gap-[16px]">
                <p className="text-[55px] font-[600] font-Jost text-[#333333]">Сдача недвижимости в аренду</p>
                <p className="text-[20px] font-[400] font-Jost text-[#858585] w-[1065px]">Полный спектр услуг по сдаче недвижимости в аренду, включая подготовку объекта, маркетинг, поиск арендаторов, заключение договоров и управление арендными отношениями</p>
            </div>
            <div className="flex gap-[20px]">
                <div className="flex flex-col bg-[#EDF3F5] gap-[140px] pt-[30px] pl-[30px] w-[467px]">
                    <p className="text-[24px] font-[400] font-Jost text-[#333333] w-[294px]">Подготовка и фотосъемка недвижимости</p>
                    <img className="w-[359px] ml-[56px]" src={img1} alt="" />
                </div>
                <div className="flex flex-col gap-[20px]">
                    <div className="flex flex-col bg-[#EDF3F5] gap-[11px] pt-[30px] pl-[30px] h-[260px]">
                        <p className="text-[24px] font-[400] font-Jost text-[#333333] w-[371px]">Составление и сопровождение договоров аренды</p>
                        <img className="w-[200px] ml-[193px] h-[147px]" src={img2} alt="" />
                    </div>
                    <div className="flex flex-col bg-[#EDF3F5] gap-[11px] pt-[30px] pl-[30px] h-[260px]">
                        <p className="text-[24px] font-[400] font-Jost text-[#333333] w-[294px]">Проведение показов и переговоров</p>
                        <img className="w-[200px] ml-[180px] h-[147px] bg-[#EDF3F5]" src={img3} alt="" />
                    </div>
                </div>
                <div className="flex flex-col bg-[#EDF3F5] gap-[140px] pt-[30px] pl-[30px]">
                    <p className="text-[24px] font-[400] font-Jost text-[#333333] w-[400px]">Размещение объявлений на популярных платформах</p>
                    <img className="w-[359px] ml-[20px] mt-[60px]" src={img4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main2