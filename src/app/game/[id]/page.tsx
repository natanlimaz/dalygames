
type GameDetailsProps = {
    params: {
        id: number;
    }
}

export default function Game({ params }: GameDetailsProps) {

    const id = params.id;

    return(
        <div>
            <h1>Página Game</h1>
            <p>{id}</p>
        </div>
    );
}