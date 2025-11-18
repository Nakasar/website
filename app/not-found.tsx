import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <main className="relative isolate min-h-full">
        <Image
          alt=""
          src="/images/404.png"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
        <div className="bg-black bg-opacity-35 h-dvh">
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <p className="text-base font-semibold leading-8 text-white">Mayday!</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">You ended up in uncharted
              space</h1>
            <p className="mt-4 text-base text-white/70 sm:mt-6">You ventured too far into deep space.</p>
            <div className="mt-10 flex justify-center">
              <Link href="/" className="text-sm font-semibold leading-7 text-white">
                <span aria-hidden="true">&larr;</span> Back to safety
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}