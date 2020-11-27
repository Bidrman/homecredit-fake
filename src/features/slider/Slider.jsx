import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Col } from 'reactstrap'

import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'

const Slider = () => {
    SwiperCore.use([Pagination, Autoplay])

    return (
        <div className={'swiper__container'}>
            <Col xs='12' md='6' className={'mx-auto px-2 py-0'}>
                <div className={'d-flex flex-row justify-content-center align-items-center w-100'}>
                    <a href='#' className={' mt-5 swiper__link'}>
                        Všechny zásady
                    </a>
                    <a href='#' className={' mt-5 swiper__link'}>
                        Ombudsman
                    </a>
                </div>
                <Swiper slidesPerView={1} pagination={{ clickable: true }} init autoplay>
                    <SwiperSlide>
                        <div className='swiper__quote'>
                            <p className=' font-20 font-weight-bold text-center swiper__quote-text'>
                                U hotovstních půjček nabízíme přístup k pěnežům nejpozději následující
                                pracovní den, od podpisu smlouvy.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper__quote'>
                            <p className=' font-20 font-weight-bold text-center swiper__quote-text'>
                                Aladdins in wands there dream the Aladdin. Many polite towers there slept
                                those magic fairies.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper__quote'>
                            <p className=' font-20 font-weight-bold text-center swiper__quote-text'>
                                The brave tiara in the curses there cooks a tiny dwarf.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Col>
        </div>
    )
}

export default Slider
