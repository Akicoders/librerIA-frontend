import { ArrowUpToLineIcon } from "lucide-react"
import NavItem from "./NavItem";
import Messager from "./Messager";
import Response from "./response";



export function Chat() {
    return (
        <div className='border w-full border-gray-500 rounded-xl flex flex-col  h-full max-h-[96vh] '>
            <div className="overflow-y-scroll max-h-full h-full ">
            <div className="flex flex-col">
             <Messager content="Hola" name="Paul" />
             <Response response="Hola mi nombre es Juliana la librera, dsjfasfsoidfisfusfijsnfkjnaskldfnsakjldfnksjn
              tu libro me interesa, asi que te ayudare para todo lo que quieras candi perrero dasofnsof dasuasasubfpsa
              hacer sasasasasa sasasasasasasasa dpojfpjs apfjdis sdklvx mklvncoxv sdfnsdlk fnsoifnsf dsinfosi nfsoisndi" />
            </div>
            </div>

            <div className='w-full flex flex-row justify-end items-center p-2 sticky-bottom  '>
                <input type="text" className='w-full rounded-xl p-2 placeholder:text-gray-500 placeholder:italic placeholder:text-sm placeholder:font-bold' placeholder='Escribe tu mensaje' />
                <NavItem icon={<ArrowUpToLineIcon className="w-5 h-5 text-pink-500 group-hover:text-white" />} label="Enviar" />
            </div>
        </div>
        )
}