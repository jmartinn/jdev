// Hooks
import { useEffect } from "react";
import useSWR from "swr";
import fetcher from "lib/fetcher";
// Types
import type { Views } from "lib/types";

export default function ViewCounter({ slug }: { slug: string }) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  useEffect(() => {
    const registerView = () => fetch(`/api/views/${slug}`, { method: "POST" });

    registerView();
  }, [slug]);

  return <span>{`${views > 0 ? views.toLocaleString() : "---"} views`}</span>;
}
