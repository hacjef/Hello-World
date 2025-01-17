import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
 
          <Image
          className="mx-auto w-fit rounded-xl"
          src="/img/jeff.jpg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />



        <ol className="list-inside list-decimal font-[family-name:var(--font-geist-mono)] mx-auto w-fit text-center">
          <p className="text-lg font-bold">Jefferson T. Canamo</p>
          <p>Misamis University</p>
          <p>BSIT 4</p>
          <p>In the end, we will remember not the words of our enemies, but the silence of our friends: A quote by Martin Luther King Jr.</p>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          
        </div>
      </main>
    </div>
  );
}
