import {useForm} from "react-hook-form";
import emailjs from "@emailjs/browser";
import {useLanguage} from "../context/LanguageContext";
import { useTheme } from '../context/ThemeContext';
import { toast } from 'react-toastify';


export default function Contact() {
  const {language} = useLanguage();
  const {darkMode} = useTheme();
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting},
  } = useForm({mode: "onChange"});

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success(language === "tr" ? "Mesaj başarıyla gönderildi!" : "Message sent successfully!", {theme: darkMode ? "dark" : "light"});
      reset();
    } catch (error) {
      console.error("E-posta gönderilemedi:", error);
      toast.error(language === "tr" ? "Mesaj gönderilirken bir hata oluştu." : "An error occurred while sending the message.", {theme: darkMode ? "dark" : "light"});
    }
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-[#1E1E1E] dark:to-[#2a2a2a] py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl bg-white dark:bg-[#1E1E1E] rounded-xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-800 dark:text-white">
          {language === "tr" ? "İletişim Formu" : "Contact Form"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 sm:gap-6">
          <div className="space-y-1 sm:space-y-2">
            <input
              type="text"
              placeholder={language === "tr" ? "Ad Soyad" : "Name Surname"}
              {...register("name", { required: language === "tr" ? "Ad gerekli" : "Name required" })}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#4338CA] dark:focus:ring-[#372fc3] transition-shadow"
            />
            {errors.name && <p className="text-red-500 text-xs sm:text-sm">{errors.name.message}</p>}
          </div>

          <div className="space-y-1 sm:space-y-2">
            <input
              type="email"
              placeholder={language === "tr" ? "E-posta" : "Email"}
              {...register("email", {
                required: language === "tr" ? "E-posta gerekli" : "Email required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: language === "tr" ? "Geçerli bir e-posta girin" : "Enter a valid email",
                },
              })}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#4338CA] dark:focus:ring-[#372fc3] transition-shadow"
            />
            {errors.email && <p className="text-red-500 text-xs sm:text-sm">{errors.email.message}</p>}
          </div>

          <div className="space-y-1 sm:space-y-2">
            <textarea
              placeholder={language === "tr" ? "Mesajınız" : "Your Message"}
              {...register("message", { required: language === "tr" ? "Mesaj boş bırakılamaz" : "Message cannot be empty" })}
              rows={4}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#4338CA] dark:focus:ring-[#372fc3] transition-shadow resize-none"
            />
            {errors.message && <p className="text-red-500 text-xs sm:text-sm">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#4338CA] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-[#372fc3] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2 sm:mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting 
              ? (language === "tr" ? "Gönderiliyor..." : "Sending...") 
              : (language === "tr" ? "Gönder" : "Send")}
          </button>
        </form>
      </div>
    </section>
  )
}
