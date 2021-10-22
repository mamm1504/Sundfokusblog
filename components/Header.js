import Link from 'next/link'
import Container from '../components/Container'
import Nav from '../components/Nav'

export default function Header () {
    return (
    <>
        <div className="sticky top-0 bg-white z-50 shadow-md">
            <Container>
                <header className="text-left py-4 flex justify-between">
                    <Link href="/">
                        <a className="hover:text-primary transition-colors"> 
                            <img class="h-10 fill-black" src="/static/sense-slank-logo.png"></img>
                        </a>
                    </Link>
                    <Nav/>
                </header>
            </Container>
        </div>
    </>
    )
}