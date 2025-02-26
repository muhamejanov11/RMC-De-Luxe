import img from "../assets/Photo.png"

const Main9 = () => {
    return (
        <div className="bg-[#EDF3F5] mt-[200px] mx-[80px] flex justify-between">
            <div className="flex flex-col gap-[50px]">
                <p className="text-[55px] font-[500] font-Jost text-[#333333] mt-[60px] ml-[60px] w-[650px]">Остались вопросы? Свяжитесь с нами</p>
                <div className="flex flex-col gap-[30px] pl-[60px] pb-[60px]">
                    <div className="flex gap-1 py-[12px]">
                        <p className="text-[18px] font-[400] font-Jost text-[#333333]">ФИО</p>
                        <p className="text-[18px] font-[400] font-Jost text-[#FF4F4F]">*</p>
                    </div>
                    <hr className="border-[1px] border-[#EAEAEA] w-[400px]" />
                    <div className="flex gap-1 py-[12px]">
                        <p className="text-[18px] font-[400] font-Jost text-[#333333]">Номер телефона</p>
                        <p className="text-[18px] font-[400] font-Jost text-[#FF4F4F]">*</p>
                    </div>
                    <hr className="border-[1px] border-[#EAEAEA] w-[400px]" />
                    <div className="py-[12px]">
                        <p className="text-[18px] font-[400] font-Jost text-[#333333]">E-mail</p>
                    </div>
                    <hr className="border-[1px] border-[#EAEAEA] w-[400px]" />
                    <div className="py-[12px]">
                        <p className="text-[18px] font-[400] font-Jost text-[#333333]">Комментарий</p>
                    </div>
                    <hr className="border-[1px] border-[#EAEAEA] w-[400px]" />
                    <button className='bg-[#E1AF93] px-[58px] py-[12px] text-white text-[17px] font-[600] font-Jost w-[223px]'>Отправить</button>
                </div>
            </div>
            <img src={img} alt="" />
        </div>
    )
}

export default Main9