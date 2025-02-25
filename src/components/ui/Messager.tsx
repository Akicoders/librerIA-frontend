


interface Menssage{
   content :string;
   name:string;
}


export default function Messager({content, name}:Menssage ) {
    return (
        <div className="w-full flex justify-end items-end flex-col p-2">
        <span className="text-sm italic items-start text-left w-1/2 ">{name}</span> 
      <div className=" w-1/2 justify-right items-right p-2 mx-2 text-wrap text-sm bg-violet-700 border border-gray-500  shadow-md   ">
         {content}
      </div>
      </div>
    )
}