import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import AppStoreIcon from "./_components/ui/Logos/AppStoreIcon";
import PurposeLogo from "./_components/ui/Logos/PurposeLogo";
import ChevronRightIcon from "./_components/ui/icons/ChevronRightIcon";
import Blob from "./_components/ui/Decorations/Blob";

export const metadata = {
  title: "Purpose",
};

export default function Home() {
  return (
    <>
      <nav className="after:bg-darkGrey fixed left-0 top-0 z-20 p-5 after:absolute after:inset-0 after:-z-10 after:opacity-30 after:blur-2xl after:content-['']">
        <PurposeLogo color="white" width="120px" />
      </nav>
      <main className="relative h-full min-h-[100svh] w-full overflow-x-hidden">
        <div className="absolute -left-52 -top-48 -z-50 blur-[75px]">
          <Blob background="conic-gradient(from 23deg at 61.00% 62.82%, #0D28F2 0deg, #FBC02D 360deg)" />
        </div>
        <section className="relative w-full">
          <div className="mx-5 mt-56 sm:mx-auto sm:max-w-3xl">
            <h1 className="text-softGrey mb-6 text-3xl font-medium sm:text-5xl">
              Your space for the
              <br />
              <span className="text-white">people who truly matter</span>
            </h1>
            <p className="text-softGrey mb-12 max-w-xs text-sm font-normal leading-normal sm:max-w-prose">
              Connect deeply with your 100 most important friends{" "}
              <span className="text-white">
                in a space where you can be as open as your relationship
                demands.
              </span>
            </p>
            <a
              href={`/get?redirectUrl=${encodeURIComponent(
                "https://apps.apple.com/us/app/purpose/id1660906574",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppStoreIcon variant="dark" width="120" />
            </a>
            <p className="text-softGrey mt-3 text-xs">
              Or{" "}
              <Link
                href="/app-store/testflight"
                className="text-softGrey font-medium underline"
              >
                join as a beta tester
              </Link>{" "}
              and get new features sooner
            </p>
          </div>
        </section>
        <section className="relative w-full">
          <div className="absolute -right-60 -top-48 -z-50 blur-[75px]">
            <Blob background="conic-gradient(from 168deg at 44.55% 61.36%, #0D28F2 0deg, #FF5A5A 360deg)" />
          </div>
          <div className="mx-5 mt-40 sm:mx-auto sm:max-w-3xl">
            <h2 className="text-softGrey mb-6 text-2xl font-medium sm:text-5xl">
              Making staying close
              <br />
              <span className="text-white">feel like a breeze</span>
            </h2>
            <p className="text-softGrey mb-3 max-w-prose text-sm font-normal leading-normal">
              Purpose gives you the space and tools to connect deeper with the
              people you want to stay close to.
            </p>
            <p className="mb-7 max-w-prose text-sm">
              What if it weren&apos;t so hard to stay close with your friends
              while you live a busy life?
            </p>
            {/* <Link
              href="/features"
              className="rounded-xl border border-white bg-white/10 px-4 py-2 text-xs font-medium"
            >
              Features
            </Link> */}
          </div>
        </section>
        <section className="relative w-full">
          <div className="absolute -left-56 -top-40 -z-50 blur-[75px]">
            <Blob
              flipHorizontal
              // rotation="180deg"
              background="conic-gradient(from 168deg at 50.55% 64.36%, #20C997 0deg, #8E57FF 360deg)"
            />
          </div>
          <div className="mx-5 mt-48 flex flex-col items-end justify-end text-right sm:mx-auto sm:max-w-3xl sm:items-start sm:justify-start sm:text-start">
            <h2 className="mb-0.5 text-2xl font-medium text-white sm:text-5xl">
              True connections only
            </h2>
            <p className="mb-3 max-w-prose text-sm font-normal leading-normal text-white">
              Purpose is a <em>truly social</em> social-network.
            </p>
            <p className="text-softGrey mb-3 max-w-prose text-sm font-normal leading-normal">
              It&apos;s about helping you enjoy your social connections and
              nothing more.{" "}
              <span className="text-white">
                No ads, no influencers, just the people you care about.
              </span>
            </p>
          </div>
        </section>
        <section className="mt-40 flex max-w-3xl flex-col items-center gap-7 sm:mx-auto sm:items-start sm:gap-3">
          <h2 className="text-xl font-semibold">Join now</h2>
          <a
            href={`/get?redirectUrl=${encodeURIComponent(
              "https://apps.apple.com/us/app/purpose/id1660906574",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppStoreIcon variant="dark" width="140" />
          </a>
        </section>
        <section className="mx-auto mb-20 mt-40 flex max-w-sm flex-col gap-3">
          <h2 className="mb-4 text-xl font-semibold">Learn more</h2>
          <Link
            href="/support/faq"
            className="border-b-blueGrey/10 border-l-blueGrey/10 flex justify-between rounded-md border border-r-white/10 border-t-white/10 bg-white/10 px-3 py-1.5 backdrop-blur-md"
          >
            <span className="text-medium text-softGrey text-base">FAQ</span>
            <ChevronRightIcon width="22" color={"softGrey"} />
          </Link>
          <Link
            href="/legal/privacy"
            className="border-b-blueGrey/10 border-l-blueGrey/10 flex justify-between rounded-md border border-r-white/10 border-t-white/10 bg-white/10 px-3 py-1.5 backdrop-blur-md"
          >
            <span className="text-medium text-softGrey text-base">Privacy</span>
            <ChevronRightIcon width="22" color={"softGrey"} />
          </Link>
          {/* <a
          href="/contact"
          className="flex justify-between rounded-md border border-b-blueGrey/10 border-l-blueGrey/10 border-r-white/10 border-t-white/10 bg-white/10 px-3 py-1.5 backdrop-blur-md"
        >
          <span className="text-medium text-base text-softGrey">Contact</span>
          <ChevronRightIcon width="22" color={"softGrey"} />
        </a> */}
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

async function CrudShowcase() {
  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
