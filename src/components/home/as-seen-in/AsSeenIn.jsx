import React, { useEffect, useRef } from 'react'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import asseeninImg1 from '../../../assets/home/as-seen-in/as-seen-in-1.avif'
import asseeninImg2 from '../../../assets/home/as-seen-in/as-seen-in-2.avif'
import asseeninImg3 from '../../../assets/home/as-seen-in/as-seen-in-3.avif'
import asseeninImg4 from '../../../assets/home/as-seen-in/as-seen-in-4.avif'
import asseeninImg5 from '../../../assets/home/as-seen-in/as-seen-in-5.avif'
import asseeninImg6 from '../../../assets/home/as-seen-in/as-seen-in-6.avif'

// Example card content data
const defaultSlides = [
    {
        title: "Elegant Bracelet",
        image: asseeninImg1,
        description: "A beautiful bracelet for any occasion.",
        price: "$49.99"
    },
    {
        title: "Classic Earrings",
        image: asseeninImg2,
        description: "Timeless earrings to elevate your style.",
        price: "$29.99"
    },
    {
        title: "Chic Necklace",
        image: asseeninImg3,
        description: "A chic necklace for a modern look.",
        price: "$59.99"
    },
    {
        title: "Stylish Ring",
        image: asseeninImg4,
        description: "A stylish ring to complete your outfit.",
        price: "$39.99"
    },
    {
        title: "Trendy Hoops",
        image: asseeninImg5,
        description: "Trendy hoop earrings for every day.",
        price: "$34.99"
    }
    ,
    {
        title: "Trendy Hoops",
        image: asseeninImg6,
        description: "Trendy hoop earrings for every day.",
        price: "$34.99"
    }
]

const AUTO_SCROLL_INTERVAL = 2500 // ms

const AsSeenIn = (props) => {
    // Use provided slides or default card content
    const slides = props?.slides || defaultSlides
    const options = props?.options || {}

    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const autoScrollIntervalRef = useRef(null)

    // Auto scroll effect
    useEffect(() => {
        if (!emblaApi) return

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
                                {/* <h3 className="text-lg font-semibold mb-2">{slide.title}</h3>
                                <p className="text-gray-600 text-sm mb-2 text-center">{slide.description}</p>
                                <span className="text-primary font-bold text-base">{slide.price}</span> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AsSeenIn ;
