import Link from "next/dist/client/link"

export default function Nav () {
    return (
        <nav className="align-middle items-center flex gap-x-8">
            <Link href="/">
                <a className="text-base hover:text-primary">Hjem</a>
            </Link>
            <Link href="/blog/">
                <a className="text-base hover:text-primary">Blog</a>
            </Link>
        </nav>
    )
}