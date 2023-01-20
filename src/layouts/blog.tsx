import { PropsWithChildren, Suspense } from "react";
// Components
import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import ViewCounter from "@/components/ViewCounter";
// Utils
import { parseISO, format } from "date-fns";
import { urlForImage } from "lib/sanity";
// Types
import type { Post } from "lib/types";

type Props = PropsWithChildren & {
  post: Post;
};

export default function BlogLayout({ children, post }: Props) {
  return (
    <Wrapper
      title={`${post.title} - Juan Pedro Martin`}
      description={post.excerpt}
      image={urlForImage(post.coverImage).url()}
      date={new Date(post.date).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Juan Pedro Martin"
              height={24}
              width={24}
              sizes="20vw"
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {"Juan Pedro Martin / "}
              {format(parseISO(post.date), "MMMM dd, yyyy")}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {post.readingTime}
            {` • `}
            <ViewCounter slug={post.slug} />
          </p>
        </div>
        <Suspense fallback={null}>
          <div className="w-full mt-4 prose dark:prose-dark max-w-none">
            {children}
          </div>
          <div className="mt-8 text-sm text-gray-700 dark:text-gray-300">
            <a
              href="#" // TODO: Change this to newsletter
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Subscribe for updates"}
            </a>
            {` • `}
            <a
              href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                `https://johndev.io/blog/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Discuss on Twitter"}
            </a>
            {` • `}
            <a
              href="https://github.com/leerob/leerob.io/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Suggest Change"}
            </a>
          </div>
        </Suspense>
      </article>
    </Wrapper>
  );
}