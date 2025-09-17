import React from 'react'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import categoryimg1 from '../../../assets/home/best-sellers/best-sellers-img-1-by-mohan.avif'

// Example card content data
const defaultSlides = [
    {
        title: "Elegant Bracelet",
        image: categoryimg1,
        description: "A beautiful bracelet for any occasion.",
        price: "$49.99"
    },
    {
        title: "Classic Earrings",
        image: categoryimg1,
        description: "Timeless earrings to elevate your style.",
        price: "$29.99"
    },
    {
        title: "Chic Necklace",
        image: categoryimg1,
        description: "A chic necklace for a modern look.",
        price: "$59.99"
    },
    {
        title: "Stylish Ring",
        image: categoryimg1,
        description: "A stylish ring to complete your outfit.",
        price: "$39.99"
    },
    {
        title: "Trendy Hoops",
        image: categoryimg1,
        description: "Trendy hoop earrings for every day.",
        price: "$34.99"
    }
]

const BestSellers = (props) => {
    // Use provided slides or default card content
    const slides = props?.slides || defaultSlides
    const options = props?.options || {}

    const [emblaRef, emblaApi] = useEmblaCarousel(options)

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
                                <h3 className="text-lg font-semibold mb-2">{slide.title}</h3>
                                <p className="text-gray-600 text-sm mb-2 text-center">{slide.description}</p>
                                <span className="text-primary font-bold text-base">{slide.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </section>
    )
}

export default BestSellers
