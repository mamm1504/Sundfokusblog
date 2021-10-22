import Container from "../components/Container"
import { createClient } from "contentful"
import Blogcards from "../components/Blogcards"


export async function getStaticProps() {

    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
  
    //Get all blog posts
    const response = await client.getEntries({ content_type: 'post' })
  
    return {
      props: {
        posts: response.items
      }
    }
  }

export default function Blog( posts ) {
    return(
        <>
            <section className="relative">
                <div className="w-full hero flex flex-col" style={{height: "450px"}}>
                    <div className="relative h-0 z-10 leading-relaxed w-full max-w-screen-2xl mx-auto px-12 2xl:px-0">
                        <h1 className="mt-40 text-4xl drop-shadow-text text-white">Blog</h1>
                        <p className="text-xl mt-4 text-white drop-shadow-text">Bliv klogere på Sense ved at læse om Sense-kost, sundhed, velvære og løbetræning. <br></br> Find inspiration til sunde og nemme opskrifter til dig og familiens livsstilsændring.</p>
                    </div>
                    <img className="w-full h-full object-cover" src='/static/mia2.jpg'/>
                </div>
                <div className="absolute top-0 bg-black bg-opacity-30 h-full w-full"></div>
            </section>
            <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-12">
                {posts.posts.map( post => (
                    <Blogcards key={post.sys.id} post={post}/>
                ))}
            </div>
            </Container>
        </>
    )
}