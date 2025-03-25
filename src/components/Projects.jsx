import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {useLanguage} from "../context/LanguageContext";
import { useData } from "../context/DataContext";
import "swiper/css/navigation";

export default function Projects() {
  const { data } = useData();
  const projects = data?.projects || [];
  const {language} = useLanguage();

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E293B] dark:text-[#CBD5E1] mb-8 sm:mb-12 transform transition-all duration-300 hover:translate-x-2">
        {language === "en" ? "Projects" : "Projeler"}
      </h2>

      <div className="relative group">
        {/* Custom Navigation Arrows */}
        <div className="hidden md:block absolute top-1/2 -left-6 lg:-left-10 transform -translate-y-1/2 z-10">
          <button className="swiper-button-prev !text-[#3730A3] dark:!text-[#B7AAFF] !w-8 !h-8 after:!text-lg lg:after:!text-xl hover:opacity-75" />
        </div>
        <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-10 transform -translate-y-1/2 z-10">
          <button className="swiper-button-next !text-[#3730A3] dark:!text-[#B7AAFF] !w-8 !h-8 after:!text-lg lg:after:!text-xl hover:opacity-75" />
        </div>

        <div className="px-2">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="w-full"
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i} className="flex justify-center pb-4">
                <div className="transform transition-transform duration-300 hover:-translate-y-1">
                  <ProjectCard project={project} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
