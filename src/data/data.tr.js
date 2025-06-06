export const dataTr = {
  headerInfo: {
    name: "Berke Serin",
    titleLine1: "Yaratıcı düşünen",
    titleLine2: "Minimalizm aşığı",
    description:
      "Merhaba, ben Berke. Ölçeklenebilir ve sağlam frontend projeleri üretmeyi seven bir full-stack geliştiriciyim. Harika kullanıcı deneyimleri için el sıkışalım!",
    buttons: [
      { label: "Bana ulaş", link: "mailto:berkeserin2001@gmail.com", type: "primary", icon: "FaEnvelope" },
      { label: "Github", link: "https://github.com/Berke0119", type: "secondary", icon: "FaGithub" },
      { label: "LinkedIn", link: "https://www.linkedin.com/in/berke-serin-6a2574359/", type: "secondary", icon: "FaLinkedinIn"},
    ],
    image: "/images/berkeresimremover.png",
  },

  skills: [
    {
      name: "HTML",
      description: "Web sayfalarının iskeletini oluşturmaya yarayan işaretleme dilidir.",
    },
    {
      name: "CSS",
      description: "Web sayfalarının tasarımını ve düzenini belirlemeye yarayan stil dilidir.",
    },
    {
      name: "JavaScript",
      description: "Hem frontend hem backend'de kullanılan yüksek seviyeli programlama dilidir.",
    },
    {
      name: "TypeScript",
      description: "JavaScript'in statik tipli hali, büyük projelerde hata azaltmak için kullanılır.",
    },
    {
      name: "React",
      description: "Kullanıcı arayüzleri oluşturmak için kullanılan JavaScript kütüphanesidir.",
    },
    {
      name: "Redux",
      description: "Özellikle React ile birlikte kullanılan global state yönetim aracıdır.",
    },
    {
      name: "Java",
      description: "Backend ve kurumsal sistemlerde yaygın olarak kullanılan nesne tabanlı dildir.",
    },
    {
      name: "Spring Boot",
      description: "Java ile hızlı ve üretime hazır backend uygulamaları geliştirmek için kullanılan framework.",
    },
    {
      name: "Flutter",
      description: "Dart dili ile mobil ve web arayüzleri oluşturmak için kullanılan UI toolkit.",
    },
    {
      name: "GitHub",
      description: "Git versiyon kontrol sistemi üzerinden işbirliği yapmaya yarayan platform.",
    },
    {
      name: "Figma",
      description: "UI/UX tasarımları yapmak ve paylaşmak için kullanılan işbirlikçi tasarım aracı.",
    },
    {
      name: "Tailwind CSS",
      description: "Hızlı ve esnek arayüz geliştirmek için kullanılan utility-first CSS framework'ü.",
    },
  ],

  profile: {
    personalInfo: [
      { label: "Doğum Tarihi", value: "17.05.2001" },
      { label: "Konum", value: "Ankara" },
      { label: "Eğitim", value: "TED Üniversitesi, Bilgisayar Mühendisliği - 2025" },
      { label: "Tercih Ettiği Rol", value: "Full Stack Developer" },
    ],
    aboutMe:
      "Web ve mobil uygulamalar geliştirmekten keyif alan, ölçeklenebilir sistemler kurmaya odaklı bir full-stack geliştiriciyim. Yeni şeyler öğrenmeye istekliyim ve her zaman yeni zorluklara açığım.",
  },

  projects: [
    {
      title: "Pizza Projesi",
      description: "React ve css konularında gelişmek için yaptığım tasarım odaklı ve genel React konularını içeren bir pizza restorantı projesi.",
      image: "/images/project1.png",
      techStack: ["react", "axios", "css modules"],
      github: "https://github.com/Berke0119/PizzaProjesiWT",
      live: "#",
    },
    {
      title: "FastJob",
      description: "Linkedin benzeri yapay zekayla güçlendirilmiş. İş verenler ve çalışanları buluşturan ayrıca şirketlerin çalışanları değerlendirmesini kolaylaştıran bir iş bulma platformu.",
      image: "/images/project2.png",
      techStack: ["Flutter", "Firebase", "Dart"],
      github: "https://github.com/Berke0119/FastJob",
      live: "#",
    },
    {
      title: "Portfolyo Sitesi",
      description: "Kendimi ve kodlama yeteneklerimi tanıttığım ve benimle çalışmak isteyenlerin bana ulaşabileceği bir Portfolyo projesi.",
      image: "/images/project3.png",
      techStack: ["react", "tailwind css", "tanstack query", "react-router-dom", "axios"],
      github: "https://github.com/Berke0119/PortfolioWebsite",
      live: "#",
    },
    {
      title: "BizDocs",
      description: "Kamu kurumlarında kullanılan kapsamlı bir doküman yönetim sistemi projesinde aktif olarak görev aldım ve birçok kısmını kodladım.",
      image: "/images/project4.png",
      techStack: ["Flutter", "Dart", ".Net", "C#", "SQL"],
      github: "#",
      live: "#",
    },
    {
      title: "Common-Flow-Logs-Viewer",
      description: "Bir no-code platformu geliştiren firma için dahili olarak kullanılan, sistem hatalarını tespit edip akışları takip etmeyi sağlayan bir proje geliştirdim.",
      image: "/images/project5.png",
      techStack: ["React", "React-Router-Dom", "Axios", "React-Hook-Form", "React-Query", "PrimeReact", "Redux", "TypeScript"],
      github: "#",
      live: "#",
    },
    {
      title: "E-Ticaret Projesi",
      description: "Workintech'te hem frontend hem backend kısmında aktif olarak çalıştığım bir e-ticaret projesi.",
      image: "/images/project6.png",
      techStack: ["React", "React-Router-Dom", "Axios", "React-Hook-Form", "React-Query", "PrimeReact", "Redux", "TypeScript", "Spring Boot", "Java", "MySQL"],
      github: "#",
      live: "#",
    },
  ],

  navbarItems: [
    { id: "skills", label: "Yetenekler" },
    { id: "projects", label: "Projeler" },
    { id: "hire", label: "Bana ulaş" },
  ],
};
