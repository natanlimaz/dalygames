import logoImg from "/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { LiaGamepadSolid } from "react-icons/lia";

export function Header() {

    return (
        <header className="w-full h-28 bg-slate-100 text-black px-3">
            <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between" >
                <nav className="flex items-center justify-center gap-4">
                    <Link href="/">
                        <Image
                            className="w-full"
                            src={logoImg} 
                            alt="Logo do site dalygames"
                            quality={100}
                            priority={true}
                        />
                    </Link>

                    <Link href="/">
                        Games
                    </Link>

                    <Link href="/profile">
                        Perfil
                    </Link>
                </nav>

                <div className="hidden sm:flex justify-center items-center">
                    <Link href="/profile" data-testid="gamepad-icon">
                        <LiaGamepadSolid size={34} color="#475569"/>
                    </Link>
                </div>
            </div>
        </header>
    );
}