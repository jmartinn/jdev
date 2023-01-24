import { Suspense } from "react";

import Wrapper from "@/components/Wrapper";

import Image from "next/image";
import Link from "next/link";
import BlogPostCard from "@/components/BlogPostCard";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Wrapper>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark-border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Juan Pedro Martin
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Junior Front-end Developer at{" "}
                <span className="font-semibold">Interamplify</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Specializing in modern web development using <b>Next.js</b>,{" "}
                <b>React</b>,<b>Tailwind</b> and <b>TypeScript</b> to create
                responsive and user-friendly websites.
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Juan Pedro Martin"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>
          <div className="text-justify">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I love building tools that are user-friendly, simple and
              delightful. I studied in{" "}
              <a href="https://medac.es/" target={"_blank"} rel="noreferrer" className="basic-1">
                <b>MEDAC</b>
              </a>{" "}
              where I spent 2 years learning the fundamentals of both front-end
              and back-end web development. I also work at{" "}
              <a href="https://interamplify.com/" target={"_blank"} rel="noreferrer" className="basic-1">
                <b>Interamplify</b>
              </a>
              , where my role is re-design existing websites that uses older
              technologies and also bulding new projects from scratch for the
              company.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Through these experiences, I had developed a working style that
              leans towards flexibility, clarity, and collaboration.
            </p>
          </div>
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Featured Posts
          </h3>
          <div className="flex gap-6 flex-col md:flex-row">
            <BlogPostCard
              title="Remembering Steve Jobs: The Visionary Behind Apple's Success"
              slug="remembering-steve-jobs-the-visionary-behind-apple-s-success"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
          </div>
          <Link
            href="/blog"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6 basic-1"
          >
            <>
              {"Read all posts"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
          </Link>
        </div>
      </Wrapper>
    </Suspense>
  );
}
