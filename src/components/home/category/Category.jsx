import React, { useEffect, useRef } from 'react'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import categoryimg1 from '../../../assets/home/category/bracelets.avif'
import categoryimg2 from '../../../assets/home/category/earrings.avif'
import categoryimg3 from '../../../assets/home/category/necklaces.avif'
import categoryimg4 from '../../../assets/home/category/rings.avif'

// Example card content data
const defaultSlides = [
    {
        image: categoryimg1,
        name: "Bracelets"
    },
    {
        image: categoryimg2,
        name: "Earrings"

    },
    {
        image: categoryimg3,
        name: "Necklaces"

    },
    {
        image: categoryimg4,
        name: "Rings"

    }
]

const AUTO_SCROLL_INTERVAL = 2500 // ms

function isMobile() {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(max-width: 767px)').matches
}

const Category = (props) => {
    // Use provided slides or default card content
    const slides = props?.slides || defaultSlides
    const options = props?.options || {}

    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const autoScrollIntervalRef = useRef(null)

    // Only auto scroll on mobile
    useEffect(() => {
        if (!emblaApi) return
        if (!isMobile()) return

        function autoScroll() {
            if (!emblaApi) return
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext()
            } else {
                emblaApi.scrollTo(0)
            }
        }

        autoScrollIntervalRef.current = setInterval(autoScroll, AUTO_SCROLL_INTERVAL)

        // Pause on mouse enter, resume on mouse leave
        const viewport = emblaRef.current
        const pause = () => clearInterval(autoScrollIntervalRef.current)
        const resume = () => {
            clearInterval(autoScrollIntervalRef.current)
            autoScrollIntervalRef.current = setInterval(autoScroll, AUTO_SCROLL_INTERVAL)
        }
        if (viewport) {
            viewport.addEventListener('mouseenter', pause)
            viewport.addEventListener('mouseleave', resume)
        }

        return () => {
            clearInterval(autoScrollIntervalRef.current)
            if (viewport) {
                viewport.removeEventListener('mouseenter', pause)
                viewport.removeEventListener('mouseleave', resume)
            }
        }
    }, [emblaApi, emblaRef])

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="bg-white overflow-hidden flex flex-col items-center  h-full">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full object-cover mb-4 "
                                />
                                <h3>{slide.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="embla__controls ">
                <div className="embla__buttons md:hidden">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </section>
    )
}

export default Category;
