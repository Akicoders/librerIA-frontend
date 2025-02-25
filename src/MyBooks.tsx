import Body from "./components/ui/Body";
import { BookOpen, Brain,  Settings, LogOut, ChartColumnStacked} from 'lucide-react'
import NavItem from "@/components/ui/NavItem";
import { User } from '@/components/ui/user'
import { LayoutDashboard } from 'lucide-react'
import '../src/components/ui/myBooks.css'
import { Toaster } from "@/components/ui/toaster";
import './dashboard.css';
import { BookCardProps } from "./components/ui/book";





export default function MyBooks() {

    const book : BookCardProps[] = [
        {
            title: 'El Señor de los Anillos',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'JRR Tolkien',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 1
        },
        {
            title: 'El Señor de los Palos',
            category: 'Fantasia',
            rating: 3 ,
            description: 'Descripción del libro 1',
            author: 'Paul',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 2
        },
        {
            title: 'La Señora',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'Dark Tower',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 3
        },
        {
            title: 'Zayda',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'Isaac Asimov',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 4
        },
        {
            title: 'Gu El niño',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'Paulo Coelho',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 5
        },
        {
            title: 'Pincel en la casa de papel',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'Selpio ',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 6
        },
        {
            title: 'Habitos atomicos',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'JRR Tolkien',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 7
        },
        {
            title: 'Fisica Cuantica',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'Yo',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 8
        },
        {
            title: 'Matematica no compleja',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'JRR Tolkien',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 9
        },
        {
            title: 'Bismutol',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'JRR Tolkien',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 10
        },
        {
            title: 'No se me ocurre nada mas',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'JRR Tolkien',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 11
        },
        {
            title: 'Chavo y la piedra filosofal',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'JRR Tolkien',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 12
        },
        {
            title: 'El Señor de los Palos',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'Paul',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 13
        },
        {
            title: 'La Señora',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'Dark Tower',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 14
        },
        {
            title: 'Zayda',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'Isaac Asimov',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 15
        },
        {
            title: 'Gu El niño',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'Paulo Coelho',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 16
        },
        {
            title: 'Pincel en la casa de papel',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'Selpio ',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 17
        },
        {
            title: 'Habitos atomicos',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'JRR Tolkien',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 18
        },
        {
            title: 'Fisica Cuantica',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'Yo',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 19
        },
        {
            title: 'Matematica no compleja',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'JRR Tolkien',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: true,
            id: 20
        }
    ]

    return (
        <Body>
            <header className='h-fit p-1'>
                    <div className='flex items-center justify-between m-3  '>
                        <div className='flex items-center justify-center space-x-2 text-xl font-bold w-full '>
                            <BookOpen className="w-5 h-5 text-purple-500 animate-bounce" />
                            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text hover:animate-bounce   ">Librer<span className="text-purple-500">IA</span></span>
                            <Brain className="w-5 h-5 text-pink-500 animate-bounce" />
                        </div>


                        <div className='flex items-center justify-center space-x-2 text-sm font-bold  w-full '>
                            <User url='https://cdn-icons-png.flaticon.com/512/6073/6073873.png' name='Paul' lastname='Campos Terrones' />

                        </div>
                    </div>
                </header>
               <nav className='px-5 pb-5 shrink'>
                    <div className='flex flex-col text-sm font-bold w-full h-full divide-y'>
                        <div className='flex flex-col gap-5 my-5 h-full'>
                            <NavItem icon={<LayoutDashboard className="w-5 h-5 text-pink-500   group-hover:text-white" />} label="Dashboard" />
                            <NavItem icon={<ChartColumnStacked className="w-5 h-5 text-pink-500  group-hover:text-white" />} label="Categorias" />
                            <NavItem icon={<BookOpen className="w-5 h-5  text-purple-500 group-hover:text-white" />} label="Mis Libros" />
                            <NavItem icon={<Settings className="w-5 h-5 text-pink-500 group-hover:text-white" />} label="Configuración" />
                        </div>
                        <div className='flex flex-col gap-5 items-center  '>
                            <NavItem icon={<LogOut className="w-5 h-5 text-pink-500 group-hover:text-white" />} label="Cerrar Sesión" />
                        </div>
                    </div>
                </nav>

                <div className='p-6 w-full'>
                    <h2 className='text-2xl font-bold mb-6 text-purple-500'>Mis Libros Favoritos</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {book.filter(book => book.liked).map((book) => (
                            <div key={book.id} className='bg-zinc-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-zinc-700'>
                                <img src={book.imageUrl} alt={book.title} className='w-full h-48 object-cover' />
                                <div className='p-4'>
                                    <h3 className='text-lg font-semibold text-gray-200 mb-2'>{book.title}</h3>
                                    <p className='text-sm text-gray-400 mb-2'>por {book.author}</p>
                                    <div className='flex items-center mb-2'>
                                        <span className='text-sm text-gray-400 mr-2'>Rating:</span>
                                        <div className='flex text-yellow-400'>
                                            {[...Array(book.rating)].map((_, i) => (
                                                <svg key={i} className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                                                    <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z'/>
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <p className='text-sm text-gray-400 mb-4'>{book.description}</p>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-sm font-medium text-purple-400'>{book.category}</span>
                                        <button className='px-3 py-1 bg-pink-500 text-gray-200 rounded-full text-sm hover:bg-purple-500 transition-colors duration-300'>Leer</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            <Toaster />
        </Body>


        

    );
    
 
}