import Counter from "@/components/Counter/Counter";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Hello Next app</h1>
      <Counter />
      <Link href="/about">
        <button className="btn btn-accent">About</button>
      </Link>
    </div>
  );
};

export default HomePage;
