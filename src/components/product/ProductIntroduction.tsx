import { ContentBlock } from "@/types/productContent"
import { Icon } from "@iconify/react"

type Props = {
    sections: ContentBlock[]
}

export function ProductIntroduction({ sections }: Props) {
    return (
        <div className="space-y-6 border border-gray-200 rounded-xl p-4">
            <div className="flex items-center gap-2">
                <Icon className="text-4xl text-sky-600" icon="solar:file-text-bold"/>
                <h2 className="text-2xl font-medium">معرفی کالا</h2>
            </div>
            {sections.map((block, index) => {
                switch (block.type) {
                    case "heading": {
                        const className = block.bold ? "font-medium text-2xl" : "font-medium"

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
