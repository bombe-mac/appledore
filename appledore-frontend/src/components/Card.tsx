import { Share } from "../icons/Share";
import { Trash } from "../icons/Trash";
import { Page } from "../icons/Page";

interface CardProps{
    title: string,
    type: "youtube" | "X",
    link: string
}

export function Card(props: CardProps){
    return(
        <div>
            <div className="bg-white p-4 rounded-md border-gray-300 max-w-72 border h-full flex flex-col">
                <div className="flex justify-between pb-4">
                    <div className="flex items-center">
                        <div>
                            <Page size="md"/>
                        </div>
                        <div className="text-sm pl-2">
                            {props.title}
                        </div>
                    </div>
                    
                    <div className="flex items-center">
                        <Share size="md"/>
                        <div className="pl-2">
                        <Trash size="md"/>  
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    {props.type==="youtube" && <iframe  className="w-full" src={props.link.replace("watch?v=", "embed/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                    {props.type==="X" && 
                    <blockquote className="twitter-tweet">
                        <a href={props.link.replace("x.com", "twitter.com")}></a>    
                    </blockquote> }
                </div>
            </div>
        </div>
    )
}
