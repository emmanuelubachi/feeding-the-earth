import Link from "next/link";
// import { useRouter } from "next/router";
export default function Home() {
  // const router = useRouter()
  return (
    <main>
      <Link href="/countries">Countries</Link>
    </main>
  );
}
