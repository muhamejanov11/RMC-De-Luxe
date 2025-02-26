import bgImage from '../assets/Image.png';
import logo from "../assets/iconamoon_arrow-up-2-light.png"

const Img = () => {
    return (
        <div className="h-[800px] w-full bg-cover bg-center mt-[20px] flex flex-col pt-[79px] items-center" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="flex flex-col items-center">
                <p className="text-[55px] font-[500] font-Jost text-white">Жилье решения для вашего будущего</p>
                <p className="text-[20px] font-[400] font-Jost text-white">Найди свой идеальный дом с нами</p>
            </div>
            <div className="flex flex-col gap-[16px] mt-[50px]">
                <div className="flex backdrop-blur-lg bg-white/50 gap-[118.2px] px-[108.2px] items-center py-[4px]">
                    <p className='text-[20px] font-[600] font-Jost text-white'>Купить</p>
                    <p className='text-[20px] font-[600] font-Jost text-white'>Снять</p>
                    <p className='text-[20px] font-[600] font-Jost text-white'>Продать</p>
                    <div className='bg-white w-[278px] flex justify-center h-[53px] items-center'>
                        <p className='text-[20px] font-[600] font-Jost text-black'>Сдать</p>
                    </div>
                    <p className='text-[20px] font-[600] font-Jost text-white'>Оценить</p>
                </div>
                <div className="bg-white flex flex-col gap-[35px] py-[25px]">
                    <div className="flex gap-[120px] ml-[30px]">
                        <p className='text-[20px] font-[400] font-Jost text-[#E1AF93]'>Квартиры</p>
                        <p className='text-[20px] font-[400] font-Jost text-[#858585]'>Новостройки</p>
                        <p className='text-[20px] font-[400] font-Jost text-[#858585]'>Дома и участки</p>
                        <p className='text-[20px] font-[400] font-Jost text-[#858585]'>Коммерческая</p>
                    </div>
                    <hr className='border-[1px] border-[#EAEAEA]' />
                    <div className="ml-[30px] flex gap-[33px] flex-wrap">
                        <div className="flex flex-col gap-[8px]">
                            <p className='text-[16px] font-[400] font-Jost text-[#858585]'>Тип недвижимости</p>
                            <div className="flex justify-between px-[16px] py-[12px] border-[1px] border-[#EAEAEA] w-[338px]">
                                <input type="text" placeholder='Выбрать' />
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <p className='text-[16px] font-[400] font-Jost text-[#858585]'>Комнатность</p>
                            <div className="flex justify-between border-[1px] border-[#EAEAEA]">
                                <div className="border-[1px] border-[#EAEAEA] py-[12px] px-[16px]">Студия</div>
                                <div className="border-[1px] border-[#EAEAEA] py-[12px] px-[16px]">1</div>
                                <div className="border-[1px] border-[#EAEAEA] py-[12px] px-[16px]">2</div>
                                <div className="border-[1px] border-[#EAEAEA] py-[12px] px-[16px]">3</div>
                                <div className="border-[1px] border-[#EAEAEA] py-[12px] px-[16px]">4+</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <p className='text-[16px] font-[400] font-Jost text-[#858585]'>Площадь, м²</p>
                            <div className="flex justify-between px-[16px] py-[12px] border-[1px] border-[#EAEAEA] w-[338px]">
                                <input type="text" placeholder='Введите площадь' />
                                <img src={logo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="ml-[30px] flex gap-[33px] flex-wrap">
                        <div className="flex flex-col gap-[8px]">
                            <p className='text-[16px] font-[400] font-Jost text-[#858585]'>Номер телефона</p>
                            <div className="flex justify-between px-[16px] py-[12px] border-[1px] border-[#EAEAEA] w-[338px]">
                                <input className='w-[338px]' type="text" placeholder='Укажите ваш номер телефона' />
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <p className='text-[16px] font-[400] font-Jost text-[#858585]'>Адрес</p>
                            <div className="flex justify-between px-[16px] py-[12px] border-[1px] border-[#EAEAEA] w-[338px]">
                                <input className='w-[338px]' type="text" placeholder='Город, адрес, ориентир,район, улица' />
                                <img src={logo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex ml-[970px]">
                        <button className='bg-[#E1AF93] px-[58px] py-[12px] text-white text-[17px] font-[600] font-Jost'>Отправить заявку</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Img;
