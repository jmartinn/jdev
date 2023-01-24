// Components
import Wrapper from "@/components/Wrapper";
import Tweet from "@/components/Tweet";
// Types
import type { Tweet as TweetType } from "lib/types";
// Utils
import { getTweets } from "lib/twitter";

export default function Tweets({ tweets }: { tweets: TweetType[] }) {
  return (
    <Wrapper
      title="Tweets - Juan Pedro Martin"
      description="A collection of tweets that inspire me, make me laugh, and make me think."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Tweets
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This is a collection of tweets I&apos;ve enjoyed. I use Twitter quite a
          bit, so I wanted a place to publicly share what inspires me, makes me
          laugh, and makes me think.
        </p>
        {tweets.map((tweet, i) => (
          <Tweet key={i} {...tweet} />
        ))}
      </div>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const tweets = await getTweets([
    "1609254628113420290",
    "1471558914579722245",
    "1606298328752324608",
    "1599959685469130752",
    "1612434510565498888",
    "1334334544598740994"
  ]);

  return { props: { tweets } };
}
