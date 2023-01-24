// Components
import Wrapper from "@/components/Wrapper";

export default function Projects() {
  return (
    <Wrapper
      title="Projects - Juan Pedro Martin"
      description="A collection of my work as a web developer, showcasing my attention to detail, creativity, and technical skills"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark-border-gray-700 mx-auto pb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Projects
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          A collection of my work as a web developer, showcasing my attention to
          detail, creativity, and technical skills
        </p>
        <div className="base:grid-cols-1 mt-12 grid justify-center gap-8 md:grid-cols-2">
          {/* Projects go here */}
        </div>
      </div>
    </Wrapper>
  );
}
