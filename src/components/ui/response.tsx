

interface ResponseProps{
    response:string
}

export default function Response({response}:ResponseProps){
    return(
        <div className="w-full max-w-md p-2 text-wrap text-sm shadow-md overflow-wrap break-word ">
         {response}   
        </div>
     
    )

}