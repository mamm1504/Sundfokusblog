import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const response = await client.getEntries({
    content_type:'post'
  })

  const paths = response.items.map(item => {
    return {
      params: { slug: item.fields.slug}
    }
  })
  return {
    paths,
    fallback:false
  }
}

export async function getStaticProps( {params} ) {
  const { items } = await client.getEntries({
    content_type:'post',
    'fields.slug': params.slug
  })

  return {
    props: {post: items[0]}
  }

}

export default function Blogpost( {post} ) {
  const {title, coverImage, date, content} = post.fields

  const displaydate = new Date(date);

  return (
    <div className="bg-greybg">
      <div className="flex flex-col max-w-screen-lg lg:my-12 bg-gray-50 mx-auto justify-center shadow-xl">
        <header className="relative w-full h-96 flex flex-col justify-end">
        <Image
          src={"https:" + coverImage.fields.file.url}
          layout='fill'
          className="object-cover"
        />
        <div className="relative ml-8 mb-8">
          <span className="py-1 px-4 rounded bg-white bg-opacity-75 text-sm text-gray-700 font-medium">{displaydate.getDate() + '/' + (displaydate.getMonth()+1) + ', ' + displaydate.getFullYear()}</span>
          <h1 className="text-4xl mt-1 font-medium drop-shadow-text text-white">{title}</h1>
        </div>
        </header>
        <article className="prose mb-12 max-w-none px-8 md:px-20">
          <div className="border-b border-primary pt-8 pb-6">
            <Link href="/">
              <a>Hjem</a>
            </Link>
            <span> / </span>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
            <span> / {title} </span>
          </div>
          {documentToReactComponents(content)}
        </article>
      </div> 
    </div>   
  )
}