import Link from "next/link";
export default function HomePage() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Hola mundo</span>

      <Link href={"/about"} className="mt-4 text-blue-500 underline">
        About page
      </Link>
    </main>
  );
}
