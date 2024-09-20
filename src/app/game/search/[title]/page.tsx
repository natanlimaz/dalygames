import { GameProps } from "@/utils/types/game";
import { Container } from "@/components/container";
import { Input } from "@/components/input";
import { GameCard } from "@/components/GameCard";

type SearchDetailProps = {
    params: {
        title: string;
    }
}

async function getGamesData(title: string) {

    const decodeTitle = decodeURI(title)

    try {
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`);

        return res.json();
    }
    catch(error) {
        return null;
    }
}

export default async function Search( { params }: SearchDetailProps) {

    const title = params.title;
    const games: GameProps[] = await getGamesData(title);

    return(
        <Container>
            <main className="w-full text-black">
                <Input />

                <h1 className="font-bold text-xl mt-8 mb-5">Veja o que encontramos na nossa base: </h1>

                {!games && (
                    <p>Esse jogo não foi encontrado!</p>
                )}
                <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {games && games.map((game) => (
                        <GameCard key={game.id} data={game}/>
                    ))}
                </section>
            </main>
        </Container>
    );
}