export default function FrontHero () {
    return (
    <section className="relative">
        <div className="w-full h-96 lg:h-px-500 flex flex-col">
            <div className="relative h-0 text-center z-10 leading-relaxed">
                <h1 className="mt-32 text-4xl drop-shadow-text text-white">Velkommen til sundfokus</h1>
                <p className="text-2xl mt-4 text-white drop-shadow-text">Knæk koden til sund livsstil én gang for alle med Sense kost.</p>
            </div>
            <img className="w-full h-full object-cover" src='/static/hero.jpg'/>
        </div>
        <div className="absolute top-0 bg-black bg-opacity-40 h-full w-full"></div>
    </section>
    )
}