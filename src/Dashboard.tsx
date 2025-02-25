import { BookOpen, Brain,  Settings, LogOut, ChartColumnStacked } from 'lucide-react'
import './dashboard.css'
import { User } from '@/components/ui/user'
import { LayoutDashboard } from 'lucide-react'
import NavItem from './components/ui/NavItem'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SliderBar from './components/ui/SliderBar'
import { BookCardProps } from './components/ui/book'
import Body from './components/ui/Body'
import { Toaster } from './components/ui/toaster'



export default function Dashboard() {

    var books : BookCardProps[] = [
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
            id: 9
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
            id: 10
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
            id: 11
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
            id: 9
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
            id: 10
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
            id: 11
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
                            <NavItem icon={<LayoutDashboard className="w-5 h-5  text-purple-500 group-hover:text-white" />} label="Dashboard" />
                            <NavItem icon={<ChartColumnStacked className="w-5 h-5 text-pink-500  group-hover:text-white" />} label="Categorias" />
                            <NavItem icon={<BookOpen className="w-5 h-5 text-pink-500 group-hover:text-white" />} label="Mis Libros" />
                            <NavItem icon={<Settings className="w-5 h-5 text-pink-500 group-hover:text-white" />} label="Configuración" />
                        </div>
                        <div className='flex flex-col gap-5 items-center  '>
                            <NavItem icon={<LogOut className="w-5 h-5 text-pink-500 group-hover:text-white" />} label="Cerrar Sesión" />
                        </div>
                    </div>
                </nav>

                <section className='greeting flex-grow '>
                    <div className='flex justify-center items-center '>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-2xl font-bold'>Bienvenido, Paul!</h2>
                            <p className='text-sm font-semibold'>Los mejores libros para ti. ¿Quires leer algo?</p>
                            <button className='bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors duration-300'>
                                Leer Ahora
                            </button>
                        </div>
                        <div className='flex' >
                            <DotLottieReact
                                src="https://lottie.host/51f8a51b-39c1-426f-8f84-854e03a1808e/aP8DK2hvIM.lottie"
                                loop
                                autoplay
                            />
                        </div>
                    </div>
                </section>

                <section className='recomendations p-5 min-w-full flex-col flex  '>
                    <h2 className='text-xl font-bold my-1'>Recomendados para ti</h2>
                    <div className='min-h-full min-w-full px-20 py-10 '>
                        <SliderBar books={books}  />
                    </div>
                </section>

            <Toaster/>
        </Body>
    )

}