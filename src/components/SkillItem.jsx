export default function SkillItem({ name, description }) {
  return (
    <div className="flex flex-col gap-1 sm:gap-2">
      <h3 className="text-2xl sm:text-2xl md:text-3xl font-semibold leading-7 tracking-normal text-[#4338CA] dark:text-[#B7AAFF]">
        {name}
      </h3>

      <p className="text-xs sm:text-sm leading-4 sm:leading-5 font-normal max-w-[250px] text-[#6B7280] dark:text-white">
        {description}
      </p>
    </div>
  );
}
