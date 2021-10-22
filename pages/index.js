import { createClient } from 'contentful';
import Blogcards from '../components/Blogcards';
import FrontHero from '../components/FrontHero';
import Container from '../components/Container';

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  //Get 4 latest post to home page
  const response = await client.getEntries({ content_type: 'post', limit: 4 })

  return {
    props: {
      posts: response.items
    }
  }
}

export default function Home( posts ) {
  return (
    <>
      <FrontHero/>
      <div className="flex flex-col-reverse md:flex-row lg:h-96 bg-greybg">
        <img className="w-full md:w-1/2 object-cover object-top" src="/static/mia.jpg"></img>
        <div className="w-full md:w-1/2 my-auto py-6 px-12 lg:px-20">
          <h3>Om Mia</h3>
          <p className="prose w-full max-w-none">Mit navn er Mia, og jeg er uddannet Biopat og Naturopath i Biologisk Medicin ved 
          Institut for Biologisk Medicin og har specialiseret mig i Sportsernæring, anti-inflammatorisk kost, fordøjelses- og hudproblemer, 
          astma/allergier og SENSE kost. Desuden er jeg Supervisor i mad og hjælper mange med spiseforstyrrelser. Det er ikke nogen hemmelighed, 
          at jeg har en stor passion for kost og kostens betydning for kroppen. Jeg kombinerer Sense med min viden som Biopat, kostvejleder 
          og supervisor i mad og følelser. Du får det allerbedste her på bloggen. 
          </p>
        </div>
      </div>
      <Container>
        <h3 className="text-center mt-12">Nyheder</h3>
        <p className="prose max-w-none text-center">Bliv klogere på Sense ved atlæse om Sense-kost, sundhed, velvære og løbetræning. <br></br> Find inspiration til sunde og nemme opskrifter til dig og familiens livsstilsændring.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-12">
          {posts.posts.map( post => (
            <Blogcards key={post.sys.id} post={post}/>
          ))}
        </div>
      </Container>
    </>
  )
}