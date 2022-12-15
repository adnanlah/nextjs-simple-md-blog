import PostPreview from './PostPreview'
import type Post from '../types/post'

type Props = {
  posts: Post[]
}

const AllPosts = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-center text-5xl md:text-2xl font-bold">
        All articles
      </h2>
      <div className="w-[32rem] m-auto grid grid-cols-1 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default AllPosts
