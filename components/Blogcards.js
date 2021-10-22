import Link from 'next/link'
import Image from 'next/image'

export default function Blogcards({ post }) {
    const {title, excerpt, coverImage, slug} = post.fields

    return(
        <Link href={'/blog/' + slug}>
            <a>
                <article className="flex flex-col mb-4 md:mb-0 mx-2 lg:hover:shadow-xl transition-shadow rounded">
                    <div className="relative w-full h-60 xl:h-48">
                        <Image 
                            src={"https:" + coverImage.fields.file.url}
                            layout='fill'
                            className="object-cover"
                        />
                    </div>
                    <div className="p-4 prose max-w-none">
                        <h4 className="text-lg">{title}</h4>
                        <p>{excerpt}</p>
                        <p className="text-primary mt-2">Læs mere</p>
                    </div>            
                </article>
            </a>
        </Link>
    )
}