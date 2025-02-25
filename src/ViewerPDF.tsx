import React from "react";
import Pdf from "./components/ui/pdf";



const ViewerPDF: React.FC = () => {
    
    return (
        <div className='min-h-screen h-full w-full min-w-screen bg-gradient-to-br from-gray-900 to-black p-5 '>
        <div className='flex  text-white bg-neutral-900 dark:bg-neutral-950 w-full min-h-[96vh] rounded-xl overflow-hidden shadow-sm shadow-white'>
            <Pdf url="src/assets/libro.pdf" />
         </div>
        </div>

    );
}

export default ViewerPDF;