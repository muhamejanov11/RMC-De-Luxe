const Main5 = () => {
    return (
        <div className="bg-[#EDF3F5] pt-[240px] flex gap-[200px] px-[80px] pb-[232px] mt-[200px]">
            <div className="flex flex-col gap-[20px]">
                <p className="text-[55px] font-[500] font-Jost text-[#333333] w-[800px]">Сдайте свою недвижимость в аренду быстро и выгодно!</p>
                <p className="text-[20px] font-[400] font-Jost text-[#858585] w-[690px]">Ищете надежного арендатора для вашего объекта? Наша команда профессионалов поможет вам найти идеального арендатора и максимально упростить процесс аренды</p>
            </div>
            <div className="flex flex-col gap-[30px]">
                <div className="flex gap-1 py-[12px]">
                    <p className="text-[18px] font-[400] font-Jost text-[#333333]">ФИО</p>
                    <p className="text-[18px] font-[400] font-Jost text-[#FF4F4F]">*</p>
                </div>
                <hr className="border-[1px] border-[#EAEAEA]" />
                <div className="flex gap-1 py-[12px]">
                    <p className="text-[18px] font-[400] font-Jost text-[#333333]">Номер телефона</p>
                    <p className="text-[18px] font-[400] font-Jost text-[#FF4F4F]">*</p>
                </div>
                <hr className="border-[1px] border-[#EAEAEA]" />
                <div className="py-[12px]">
                    <p className="text-[18px] font-[400] font-Jost text-[#333333]">E-mail</p>
                </div>
                <hr className="border-[1px] border-[#EAEAEA]" />
                <div className="py-[12px]">
                    <p className="text-[18px] font-[400] font-Jost text-[#333333]">Комментарий</p>
                </div>
                <hr className="border-[1px] border-[#EAEAEA]" />
                <button className='bg-[#E1AF93] px-[58px] py-[12px] text-white text-[17px] font-[600] font-Jost'>Отправить заявку</button>
            </div>
        </div>
    )
}

export default Main5