import Body from "./components/ui/Body";
import { BookOpen, Brain,  Settings, LogOut, ChartColumnStacked } from 'lucide-react'
import {User} from "@/components/ui/user";
import NavItem from "@/components/ui/NavItem";
import { LayoutDashboard } from 'lucide-react'
import './dashboard.css'


export default function Configuration() {
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
            <nav className='px-5 pb-5 flex-shrink-0'>
                    <div className='flex flex-col text-sm font-bold w-full h-full divide-y'>
                        <div className='flex flex-col gap-5 my-5 h-full'>
                            <NavItem icon={<LayoutDashboard className="w-5 h-5  text-pink-500 group-hover:text-white" />} label="Dashboard" />
                            <NavItem icon={<ChartColumnStacked className="w-5 h-5 text-pink-500 group-hover:text-white" />} label="Categorias" />
                            <NavItem icon={<BookOpen className="w-5 h-5 text-pink-500 group-hover:text-white" />} label="Mis Libros" />
                            <NavItem icon={<Settings className="w-5 h-5 text-purple-500  group-hover:text-white" />} label="Configuración" />
                        </div>
                        <div className='flex flex-col gap-5 items-center  '>
                            <NavItem icon={<LogOut className="w-5 h-5 text-pink-500 group-hover:text-white" />} label="Cerrar Sesión" />
                        </div>
                    </div>
            </nav>
            <main className=' flex flex-col items-center justify-center space-y-5 w-full h-full px-12'>
               <form className='configuration-form flex flex-col w-full space-y-4'>
                <div className='flex flex-col'>
                    <label htmlFor='nombre' className='text-white'>Nombre</label>
                    <input type='text' id='nombre' className='mt-1 p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 transition duration-300 ease-in-out transform hover:scale-105' placeholder='Ingrese nombre' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='apellido' className='text-white'>Apellido</label>
                    <input type='text' id='apellido' className='mt-1 p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 transition duration-300 ease-in-out transform hover:scale-105' placeholder='Ingrese apellido' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='correoElectronico' className='text-white'>Correo Electrónico</label>
                    <input type='text' id='correoElectronico' className='mt-1 p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 transition duration-300 ease-in-out transform hover:scale-105' placeholder='Ingrese correo electrónico' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='contrasena' className='text-white'>Contraseña</label>
                    <input type='password' id='contrasena' className='mt-1 p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 transition duration-300 ease-in-out transform hover:scale-105' placeholder='Ingrese contraseña' />
                </div>
                <div className='flex flex-col '>
                    <label htmlFor='confirmarContrasena' className='text-white'>Confirmar Contraseña</label>
                    <input type='password' id='confirmarContrasena' className='mt-1 p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2  focus:ring-violet-500 transition duration-300 ease-in-out transform hover:scale-105' placeholder='Ingrese confirmar contraseña' />
                </div>
                
                <button className="flex items-center justify-center space-x-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-white p-[2px] rounded-md relative group transition-all duration-300 ease-in-out transform hover:scale-105">
                <span className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <div className="relative flex items-center justify-center space-x-2 dark:bg-gray-800 rounded-md p-2 z-10">
                    <span className="transition-colors duration-300   ">🔒</span>
                    <span className="text-sm transition-colors duration-300 group-hover:text-white ">Guardar Cambios</span>
                </div>
                </button>

               </form>

            </main>
        </Body>
    )
}