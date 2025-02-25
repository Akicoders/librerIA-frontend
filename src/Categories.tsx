import Body from "./components/ui/Body";
import { InputIcon } from '@/components/ui/input-icon'
import { Input } from '@/components/ui/input'
import { User } from '@/components/ui/user'
import NavItem from "./components/ui/NavItem";
import { LayoutDashboard, ChartColumnStacked,Settings, LogOut, BookOpen, Brain, Search } from 'lucide-react'
import Book from "./components/ui/book";
import { BookCardProps } from './components/ui/book'
import {  useState, useEffect } from "react"; 
import './dashboard.css';
import { Toaster } from "./components/ui/toaster";


export default function Categories() {
    const [searchParam, setSearchParam] = useState<("title" | "author")[]>(["title"]); 
    const [filterParam, setFilterParam] = useState("All");
    const [q, setQ] = useState("");
    const [books, setBooks] = useState<BookCardProps[]>([]);
    const [dateFilterParam, setDateFilterParam] = useState<"recent" | "oldest">("recent"); 

    var bookss : BookCardProps[] = [
        {
            title: 'El Señor de los Anillos',
            category: 'Fantasia',
            rating: 5,
            description: 'Descripción del libro 1',
            author: 'JRR Tolkien',
            publicationDate: '2023-01-01',
            imageUrl: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            pdfUrl: 'https://example.com/libro1.pdf',
            liked: false,
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
            liked: false,
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
            liked: false,
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
            liked: false,
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
            liked: false,
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
            liked: false,
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
            liked: false,
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
            liked: false,
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
            liked: false,
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
            liked: false,
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
            liked: false,
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
            liked: false,
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
            liked: false,
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
            liked: false,
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
            liked: false,
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
            liked: false,
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
            liked: false,
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
            liked: false,
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
            liked: false,
            id: 20
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
            liked: false,
            id: 21
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
            id: 22
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
            id: 23
        }
    ]

    useEffect(() => {
        setBooks(bookss); 
    }, []);


    const filteredBooks = books
    .filter((book) => {
        const searchMatch =
            searchParam.some(param => { 
                if (book[param]) { 
                    return book[param].toLowerCase().includes(q.toLowerCase());
                }
                return false; 
            });



        const categoryMatch = filterParam === 'All' || book.category === filterParam;

        return searchMatch && categoryMatch;
    })
    .sort((a, b) => { // Sort after filtering
        const dateA = new Date(a.publicationDate);
        const dateB = new Date(b.publicationDate);

        if (dateFilterParam === "recent") {
            return dateB.getTime() - dateA.getTime(); 
        } else { 
            return dateA.getTime() - dateB.getTime(); 
        }
    });

    return(
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

                <nav className='px-5 pb-5 flex-shrink-0'>
                    <div className='flex flex-col text-sm font-bold w-full h-full divide-y'>
                        <div className='flex flex-col gap-5 my-5 h-full'>
                            <NavItem icon={<LayoutDashboard className="w-5 h-5 text-pink-500 group-hover:text-white" />} label="Dashboard" />
                            <NavItem icon={<ChartColumnStacked className="w-5 h-5  text-purple-500 group-hover:text-white" />} label="Categorias" />
                            <NavItem icon={<BookOpen className="w-5 h-5 text-pink-500 group-hover:text-white" />} label="Mis Libros" />
                            <NavItem icon={<Settings className="w-5 h-5 text-pink-500 group-hover:text-white" />} label="Configuración" />
                        </div>
                        <div className='flex flex-col gap-5 items-center  '>
                            <NavItem icon={<LogOut className="w-5 h-5 text-pink-500 group-hover:text-white" />} label="Cerrar Sesión" />
                        </div>
                    </div>
                </nav>

                <section className='greeting flex-grow'>
                    <div className='flex w-full  flex-col '>
                        <div className='flex items-center justify-center space-x-2 text-sm font-bold w-full p-2 '>
                            <InputIcon icon={<Search className="h-4 w-4 text-gray-500" />}>
                                <Input
                                    type="search"
                                    id="search"
                                    name="search-form"
                                    onChange={(e) => setQ(e.target.value)}
                                    placeholder='Busca un libro, un autor o un tema'
                                    className="mt-1 bg-gray-800 border-gray-700 text-white pl-10 w-full"
                                    required
                                    aria-label="Buscar libro, autor o tema"
                                />
                            </InputIcon>

                            <select
                                className="mt-1 p-2 bg-gray-800 border-gray-700 text-white w-fit"
                                aria-label="Filtrar por opción"
                                onChange={(e) => setSearchParam([e.target.value as "title" | "author"])} // Type assertion here
                            >
                                <option value="title">Titulo</option>
                                <option value="author">Autor</option>

                            </select>

                            <select
                                className="mt-1 p-2 bg-gray-800 border-gray-700 text-white w-fit"
                                aria-label="Filtrar por categoría"
                                onChange={(e) => setFilterParam(e.target.value)}
                            >

                                <option value="All" >Categoría</option>
                                <option value="Romántica">Romántica</option>
                                <option value="Fantasía">Fantasía</option>
                                <option value="Ciencia Ficción">Ciencia Ficción</option>
                            </select>

                            <select
                                className="mt-1 p-2 bg-gray-800 border-gray-700 text-white w-fit"
                                aria-label="Filtrar por fecha de publicación"
                                onChange={(e) => setDateFilterParam(e.target.value as "recent" | "oldest")}
                            >
                                <option value="recent">Más Reciente</option>
                                <option value="oldest">Más Antiguo</option>
                            </select>


                        </div>

                        <div className="mx-auto p-4 w-full h-[calc(100vh-80px)] overflow-y-scroll     ">
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  ">
                                {
                                    filteredBooks.map((book, index: number) => (
                                        <div key={index} className="flex">
                                            <Book {...book} key={index} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
               <Toaster/>
        </Body>
            
    )
}   