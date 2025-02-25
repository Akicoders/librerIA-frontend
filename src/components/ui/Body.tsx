export default function Body( {children}: {children: React.ReactNode} ) {
    return(
        <div className='min-h-screen h-full w-full min-w-screen bg-gradient-to-br from-gray-900 to-black p-5 '>
           <div className=' grid grid-rows-[auto_auto_auto_auto]  grid-cols-[auto_1fr_auto] gap-1 text-white bg-neutral-900 dark:bg-neutral-950 w-full min-h-[96vh] rounded-xl overflow-hidden shadow-sm shadow-white'>
            {children}
            </div>
        </div>
    )

}

