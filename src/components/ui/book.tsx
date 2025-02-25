import React, {  useState } from 'react';
import { ButtonBlendy } from './ButtonBlendy';
import { motion } from "framer-motion";
import {Button} from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";   
import { Toast } from '@radix-ui/react-toast';
import { Toaster } from './toaster';




export  interface BookCardProps {
    title: string;
    category: string;
    rating: number;
    description: string;
    author: string;
    publicationDate: string;
    imageUrl: string;
    pdfUrl: string;
    liked?: boolean;
    id: number;
}



const BookCard: React.FC<BookCardProps> = ({ title, category, rating, description, author, publicationDate, imageUrl, pdfUrl, id, liked } ) => {

    return (
        <div className="flex flex-col max-w-xs rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-neutral-900 text-white">
            
            <div className="flex w-fit h-full " key={id} >
                    <ButtonBlendy 
                        button={<img className='object-cover w-full h-fit' src={imageUrl} alt={title} loading='lazy' />}  
                        modal={<ModalBook key={id} title={title} category={category} rating={rating} description={description} author={author} publicationDate={publicationDate} imageUrl={imageUrl} pdfUrl={pdfUrl} id={id} liked={liked} />} 
                        id={id} 
                    />
                <div className="px-4 py-2 flex flex-col justify-between ">
                    <div>
                        <div className="font-bold text-sm mb-1  truncate text-wrap ">{title}</div>
                        <p className="text-sm text-gray-400">{category}</p>
                        <div className="flex items-center my-1">
                            {[...Array(5)].map((_, index) => (
                                <svg key={index} className={`w-4 h-4 ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.121-6.528L0 6.236l6.545-.954L10 0l2.455 5.282L20 6.236l-5.243 5.326 1.121 6.528z"/></svg>
                            ))}
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 ">{author}</p>
                    <p className="text-xs text-gray-400">{publicationDate}</p>
                    <a href={pdfUrl} className="text-blue-400 hover:underline text-xs">Leer PDF</a>
                </div>
            </div>
        </div>

    );
};

//Llamar a la bd para obtener la informacion de los libros y pasarla como props a BookCard, ademas de pasarle la funcion de like y dislike para que se actualice en la bd y en el estado del componente

const Modal: React.FC<BookCardProps> = ({title, category, rating, description, author, publicationDate, imageUrl, liked}:BookCardProps  ) => {
    const [like, setLike] = useState(liked || false);
    const [saving, setSaving] = useState(false);
    const toggleLike = () => {
       if (saving) return; 
       setLike(prevLiked => !prevLiked);
       setSaving(true);
       setTimeout( async () => {
           console.log("hola")
       }, 2000);
    };

    const { toast } = useToast();



    return(
        <div className='flex justify-center items-center   ' > 
        <motion.div
        
        className="w-full max-w-sm p-5 rounded-2xl shadow-2xl backdrop-blur-md text-white overflow-hidden"
      >
        <h1 className="text-3xl font-extrabold text-center  drop-shadow-lg">{title}</h1>
        <span className="block text-center text-sm font-semibold ">{category}</span>
        
        <div className="flex items-center justify-center gap-1 mb-3">
          {[...Array(5)].map((_, index) => (
            <svg key={index} className={`w-4 h-4 ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.121-6.528L0 6.236l6.545-.954L10 0l2.455 5.282L20 6.236l-5.243 5.326 1.121 6.528z"/></svg>
          ))}
        </div>
        
        <motion.img 
          src={imageUrl} 
          alt={title} 
          className="w-48 h-64 object-cover rounded-xl shadow-lg mx-auto transition-all duration-500 hover:scale-110" 
        />

                <div className="flex justify-center gap-2 mt-4">
                    <Button className="p-2 focus:outline-none outline-white  bg-transparent "
                    variant="outline"
                    disabled={saving}
                    onClick={() => {
                        
                        if(like && !saving){
                            toast({
                                description:" Eliminado de tus libros 📘💔  ",
                            });
                        }else{
                            toast({
                                description:" Agregado en tus libros 📘 🎉",
                            });
                        }

                        
                        toggleLike();
                        
                    }}
                    
                    >
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f7f7f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                            <path d="M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7" className={`lucide lucide-book-heart  ${like ? 'stroke-white fill-red-400 stroke-1' : 'stroke-white'}`} />
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                        </svg>
                    </Button>
                </div>

        <p className="mt-4 text-sm text-gray-200 text-center leading-relaxed px-3">{description}</p>
        
        <div className="mt-4 text-center text-gray-300 text-sm">
          <span className="block font-medium">{author}</span>
          <span>{publicationDate}</span>
        </div>
        
      </motion.div>
        
      </div>
    );
}


export function ModalBook({title, category, rating, description, author, publicationDate, imageUrl, pdfUrl, id, liked}:BookCardProps  ) {
    return(
        <>
        <Modal title={title} category={category} rating={rating} description={description} author={author} publicationDate={publicationDate} imageUrl={imageUrl} pdfUrl={pdfUrl} id={id} liked={liked}  />
        </>
    );
}

export default function Book( {title, category, rating, description, author, publicationDate, imageUrl, pdfUrl,id, liked}: BookCardProps) {
    return(
    <>
        
        <BookCard 
            title={title}
            category={category}
            rating={rating}
            description={description}
            author={author}
            publicationDate={publicationDate}
            imageUrl={imageUrl}
            pdfUrl={pdfUrl}
            id={id}
            liked={liked}
        />
    </>
    )
}