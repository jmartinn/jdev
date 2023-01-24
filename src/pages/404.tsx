import Wrapper from "@/components/Wrapper";
import Link from "next/link";

export default function NotFound() {
  return (
    <Wrapper title="404 – Juan Pedro Martin">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          404 – Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Oh no, it looks like you&apos;ve stumbled upon a page that doesn&apos;t exist!
          But don&apos;t worry, you haven&apos;t fallen into a black hole or anything.
          It&apos;s just a 404 error. Maybe try checking the URL for typos or try
          going back to the homepage. 
        </p>
        <Link
          href="/"
          className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white"
        >
          Return Home
        </Link>
      </div>
    </Wrapper>
  );
}
