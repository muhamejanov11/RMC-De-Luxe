const Main10 = () => {
    return (
        <div className="mt-[200px] px-[80px]">
            <p className="text-[55px] font-[500] font-Jost text-[#333333]">Контакты</p>
            <div className="flex gap-[20px]">
                <div className="border-[1px] border-[#EAEAEA] px-[30px] py-[30px] w-[440px]">
                    <div className="top">
                        <p className="text-[20px] font-[400] font-Jost text-[#858585]">Телефон</p>
                        <p className="text-[30px] font-[400] font-Jost text-[#333333]">+998 (90) 123 45 67</p>
                    </div>
                    <hr className="border-[1px] border-[#EAEAEA] mt-[24px] mb-[30px]" />
                    <div className="bottom">
                        <p className="text-[20px] font-[400] font-Jost text-[#858585]">E-mail</p>
                        <p className="text-[30px] font-[400] font-Jost text-[#333333]">name@domain.uz</p>
                    </div>
                </div>
                <div className="border-[1px] border-[#EAEAEA] px-[30px] py-[30px] w-[440px]">
                    <div className="top">
                        <p className="text-[20px] font-[400] font-Jost text-[#858585]">Адрес</p>
                        <p className="text-[30px] font-[400] font-Jost text-[#333333] w-[400px]">Узбекистан, г.Ташкент, ул.Такая-то, дом такой-то, Ориентир такой-то</p>
                    </div>
                </div>
                <div className="border-[1px] border-[#EAEAEA] px-[30px] py-[30px] w-[440px]">
                    <div className="top">
                        <p className="text-[20px] font-[400] font-Jost text-[#858585]">График работы</p>
                        <p className="text-[30px] font-[400] font-Jost text-[#333333] w-[220px]">09:00 - 18:00
                            пн-пт</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main10