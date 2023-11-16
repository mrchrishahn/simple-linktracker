import Link from "next/link";

import PurposeLogo from "./_components/ui/Logos/PurposeLogo";
import Blob from "./_components/ui/Decorations/Blob";
import { LinkCreation } from "./_components/LinkCreation";

export const metadata = {
  title: "Purpose",
};

export default function Home() {
  return (
    <>
      <nav className="fixed left-0 top-0 z-20 p-5 after:absolute after:inset-0 after:-z-10 after:bg-darkGrey after:opacity-30 after:blur-2xl after:content-['']">
        <PurposeLogo color="white" width="120px" />
      </nav>
      <main className="relative h-full min-h-[100svh] w-full overflow-x-hidden">
        <div className="absolute -left-52 -top-48 -z-50 blur-[75px]">
          <Blob background="conic-gradient(from 23deg at 61.00% 62.82%, #0D28F2 0deg, #FBC02D 360deg)" />
        </div>
        <section className="relative mx-auto w-full max-w-[95vw]">
          <div className="mx-5 mt-56 sm:mx-auto sm:max-w-3xl">
            <h1 className="mb-6 text-3xl font-medium text-white sm:text-5xl">
              Create your tracked link
            </h1>
            <LinkCreation />
          </div>
        </section>
        <section className="relative w-full">
          <div className="absolute -right-60 -top-48 -z-50 blur-[75px]">
            <Blob background="conic-gradient(from 168deg at 44.55% 61.36%, #0D28F2 0deg, #FF5A5A 360deg)" />
          </div>
        </section>
      </main>
      <footer>
        <div className="mx-auto mt-12 flex flex-col items-center justify-center gap-4 px-4 py-8">
          <p className="text-2xs text-grey">
            © 2023 Purpose |{" "}
            <Link className="text-grey" href="/legal/imprint">
              Imprint
            </Link>{" "}
            |{" "}
            <Link className="text-grey" href="/legal/privacy">
              Privacy
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
