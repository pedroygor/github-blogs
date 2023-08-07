import Header from "../components/Header"
import MainHome from "../components/MainHome"
import Publications from "../components/Publications"

export function Home() {
    return (
        <div className="h-screen bg-base-base-background">
            <Header />
            <MainHome />
            <Publications />
        </div>
    )
}