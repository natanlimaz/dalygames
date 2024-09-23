import { Container } from "@/components/container";
import Image from "next/image";
import userImg from "../../../public/user.png";
import { FaShareAlt } from "react-icons/fa";

import { FavoriteCard } from "./components/favorite";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Meu perfil - DalyGames sua plataforma de jogos!",
    description: "Perfil Natan Lima | DalyGames sua plataforma de jogos!"
}

export default function Profile() {

    return (
        <main className="w-full text-black">
            <Container>
                <section className="mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
                    <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal">
                        <Image 
                            src={userImg}
                            alt="Imagem perfiol do usuário"
                            className="rounded-full w-56 h-56 object-cover"
                        />

                        <h1 className="font-bold text-2xl">Natan Lima</h1>
                    </div>

                    <div className="sm:self-start flex gap-3 items-center justify-center mt-2">
                        <button className="bg-gray-700 px-4 py-3 rounded-lg text-white">Configurações</button>
                        <button className="bg-gray-700 px-4 py-3 rounded-lg">
                            <FaShareAlt size={24} color="#fff"/>
                        </button>
                    </div>
                </section>

                <section className="flex flex-wrap gap-5 flex-col md:flex-row">
                    <div className="flex-grow flex-wrap">
                        <FavoriteCard />
                    </div>
                    <div className="flex-grow flex-wrap">
                        <FavoriteCard />
                    </div>
                    <div className="flex-grow flex-wrap">
                        <FavoriteCard />
                    </div>
                </section>
            </Container>
        </main>
    );
}