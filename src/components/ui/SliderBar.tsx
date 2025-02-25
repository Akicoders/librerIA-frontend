import Slider from 'react-slick';
import Book from './book';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
import {BookCardProps} from './book'

export default function SliderBar({ books }: { books: BookCardProps[] }) {
    
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        alignCenter: true,
        centerMode: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024, // Adjust for tablets
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // Adjust for mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    rows: 1,
                    className: "center",
                    slidesPerRow: 1,
                    centerPadding: "10px",
                }
            }
        ]
    };
    return(
        <>
        <Slider {...settings}  >
        {
            books.map((book, index:number) => (
                <Book 
                    title={book.title}
                    category={book.category}
                    rating={book.rating}
                    description={book.description}
                    author={book.author}
                    publicationDate={book.publicationDate}
                    imageUrl={book.imageUrl}
                    pdfUrl={book.pdfUrl}
                    id={book.id} 
                    liked={book.liked}
                    key={index}
                />
            ))
        }
        </Slider>
        </>
    );

}