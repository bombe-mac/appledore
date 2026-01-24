import { useState } from "react";
import { Share } from "../icons/Share";
import { Trash } from "../icons/Trash";
import { Youtube } from "../icons/Youtube";
import { X } from "../icons/X";
import { Links } from "../icons/Links";
import { Blog } from "../icons/Blog";
import { Page } from "../icons/Page";
import axios from "axios";
import { config } from "../config";
interface CardProps {
    _id: string;
    title: string;
    type: "videos" | "X" | "link" | "blog" | "document";
    link: string;
    onClick?: () => void;
}

const typeIcons = {
    videos: <Youtube />,
    X: <X />,
    link: <Links />,
    blog: <Blog />,
    document: <Page size="md" />,
};

const typeLabels = {
    videos: "YouTube",
    X: "Twitter/X",
    link: "Link",
    blog: "Blog",
    document: "Document",
};

export function Card({ _id, title, type, link, onClick }: CardProps) {
    const [videoError, setVideoError] = useState(false);
    const [tweetError, setTweetError] = useState(false);

    const displayLink =
        link.length > 40 ? link.substring(0, 40) + "..." : link;

    const deletehandler=async()=>{
    try {
    const token=localStorage.getItem('token')
    //@ts-ignore
    await axios.delete(`${config.baseURL}/content`,
        {
        data: {
          //@ts-ignore
            contentId: _id
        },
        headers: {
            token: token || '',
        }
        }
    );
        
    } catch (error) {
    console.error('Error deleting content:', error);
    }
    finally{
    }
}
    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 h-80 flex flex-col overflow-hidden">
            {/* Card Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                    <div className="shrink-0 text-gray-500">
                        {typeIcons[type]}
                    </div>
                    <a
                        href={link}
                        target="_blank"
                        className="text-sm font-medium text-gray-800 truncate hover:text-blue-600"
                    >
                        {title}
                    </a>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                    <button className="p-1.5 rounded-md hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700">
                        <Share size="md" />
                    </button>
                    <button className="p-1.5 rounded-md hover:bg-red-50 transition-colors text-gray-500 hover:text-red-500" onClick={deletehandler}>
                        <Trash size="md" />
                    </button>
                </div>
            </div>

            {/* Preview Content */}
            <div className="flex-1 overflow-hidden">
                {type === "videos" && (
                    videoError ? (
                        <div className="h-full flex flex-col items-center justify-center p-4 text-sm text-gray-600">
                            <p className="mb-2 text-center">
                                We couldn't load the video preview.
                            </p>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-700 hover:underline"
                            >
                                Open on YouTube
                            </a>
                        </div>
                    ) : (
                        <iframe
                            className="w-full h-full"
                            src={link.replace("watch?v=", "embed/")}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            onError={() => setVideoError(true)}
                        />
                    )
                )}

                {type === "X" && (
                    tweetError ? (
                        <div className="h-full flex flex-col items-center justify-center p-4 text-sm text-gray-600">
                            <p className="mb-2 text-center">
                                We couldn't load the tweet preview.
                            </p>
                            <a
                                href={link.replace("x.com", "twitter.com")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-700 hover:underline"
                            >
                                Open on X / Twitter
                            </a>
                        </div>
                    ) : (
                        <div className="h-full overflow-auto p-3">
                            <blockquote
                                className="twitter-tweet"
                                data-conversation="none"
                                onError={() => setTweetError(true) as unknown as undefined}
                            >
                                <a href={link.replace("x.com", "twitter.com")}></a>
                            </blockquote>
                        </div>
                    )
                )}

                {(type === "link" || type === "blog" || type === "document") && (
                    <div className="h-full flex flex-col items-center justify-center p-4 bg-linear-to-br from-gray-50 to-gray-100">
                        <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 text-gray-400">
                            {typeIcons[type]}
                        </div>
                        <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                            {typeLabels[type]}
                        </span>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 text-sm text-blue-600 hover:text-blue-700 hover:underline truncate max-w-full px-2"
                        >
                            {displayLink}
                        </a>
                    </div>
                )}
            </div>

            {/* Card Footer */}
            <div className="px-4 py-2 border-t border-gray-100 bg-gray-50">
                <span className="text-xs text-gray-400">{typeLabels[type]}</span>
            </div>
        </div>
    );
}
