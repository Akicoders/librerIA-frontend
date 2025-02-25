
interface UserProps{
    url: string
    name: string
    lastname: string
}

export function User({url,name,lastname} : UserProps) { 
    return (
        <div className="flex items-center space-x-2  ">
            <div className="image rounded-full ">
                <img src={url} alt= {name} className="w-10 h-10 rounded-full" loading="lazy" />
            </div>

            <div>
                <p className="text-sm font-semibold">{name}, {lastname}</p>
            </div>

        </div>    
    );
}