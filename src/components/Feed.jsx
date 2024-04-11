import MiniProfile from "./MiniProfile";
import Posts from "./Posts";

export default function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-3 mx-auto md:max-w-6xl">
            <section className="md:col-span-2">
                <Posts />
            </section>
            <section className="hidden md:inline-grid md:col-span-1">
                <MiniProfile />
            </section>
        </main>
    )
}
