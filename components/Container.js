export default function Container({ children }) {
    return (
        <div className="w-11/12 md:w-4/5 max-w-screen-xl mx-auto">
            {children}
        </div>
    )
}