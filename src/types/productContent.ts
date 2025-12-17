export type ContentBlock =
  | HeadingBlock
  | TextBlock
  | ImageBlock

export type HeadingBlock = {
  type: "heading"
  level: 2 | 3 | 4
  bold?: boolean
  content: string
}

export type TextBlock = {
  type: "text"
  content: string
}

export type ImageBlock = {
  type: "image"
  src: string
  alt: string
}

export type ProductContent = {
  sections: ContentBlock[]
}
