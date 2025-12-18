import { ContentBlock } from "@/types/productContent"

type Props = {
    sections: ContentBlock[]
}

export function ProductIntroduction({ sections }: Props) {
    return (
        <div className="detail-box space-y-6 p-4">
            <h3 className="detail-title">معرفی کالا</h3>
            {sections.map((block, index) => {
                switch (block.type) {
                    case "heading": {
                        const className = block.bold ? "font-medium text-2xl" : "font-medium text-lg"

                        switch (block.level) {
                            case 2:
                                return <h2 key={index} className={className}>{block.content}</h2>
                            case 3:
                                return <h3 key={index} className={className}>{block.content}</h3>
                            default:
                                return <h4 key={index} className={className}>{block.content}</h4>
                        }
                    }
                    case "text":
                        return (
                            <p key={index} className="text-gray-700 leading-7 whitespace-pre-line">
                                {block.content}
                            </p>
                        )
                    case "image":
                        return (
                            <img
                                key={index}
                                src={block.src}
                                alt={block.alt}
                                className="rounded-xl w-full"
                            />
                        )
                }
            })}
        </div>
    )
}
