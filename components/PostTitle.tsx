import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold mb-12 text-center md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle
