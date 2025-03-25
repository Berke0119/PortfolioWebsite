export default function ProjectCard({project}) {
  return (
    <div className="flex flex-col h-[510px] md:h-[600px] rounded-lg shadow-md overflow-hidden mx-auto w-full max-w-[350px]">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="flex flex-col flex-grow p-4 gap-4">
        <h3 className="text-2xl sm:text-2xl md:text-3xl font-semibold leading-7 tracking-normal text-[#4338CA] dark:text-[#CFCBFF] line-clamp-2">
          {project.title}
        </h3>

        <p className="text-sm font-normal leading-relaxed text-[#6B7280] dark:text-white line-clamp-4 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="border border-[#3730A3] dark:border-[#8F88FF] px-3 py-0.5 text-sm rounded text-[#3730A3] dark:text-[#8F88FF]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between mt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-base font-medium leading-4 text-[#3730A3] dark:text-[#E1E1FF] underline hover:opacity-80"
          >
            Github
          </a>
          <a
            href={project.live}
            onClick={(e) => e.preventDefault()}
            target="_blank"
            rel="noreferrer"
            className="text-base font-medium leading-4 text-[#3730A3] dark:text-[#E1E1FF] underline hover:opacity-80"
          >
            View Site
          </a>
        </div>
      </div>
    </div>
  );
}
