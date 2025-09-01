import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLaravel,
  FaReact,
  FaPhp,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaUniversity,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCode,
  FaMobile,
  FaServer,
  FaGitAlt,
  FaDocker,
  FaBriefcase,
  FaRocket,
  FaClock,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiLivewire,
  SiBootstrap,
  SiCloudflare,
  SiVercel,
} from "react-icons/si";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "skills",
        "experience",
        "projects",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Sobre mí", href: "#about", icon: <FaCode /> },
    { label: "Habilidades", href: "#skills", icon: <FaServer /> },
    { label: "Experiencia", href: "#experience", icon: <FaBriefcase /> },
    { label: "Proyectos", href: "#projects", icon: <FaMobile /> },
    { label: "Formación", href: "#education", icon: <FaGraduationCap /> },
    { label: "Contacto", href: "#contact", icon: <FaEnvelope /> },
  ];

  const skills = {
    Backend: [
      {
        name: "Laravel",
        icon: <FaLaravel />,
        description: "",
      },
      {
        name: "PHP",
        icon: <FaPhp />,
        description: "",
      },
      {
        name: "Python",
        icon: <FaCode />,
        description: "",
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
        description: "",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        description: "",
      },
      {
        name: "Livewire",
        icon: <SiLivewire />,
        description: "",
      },
    ],
    Frontend: [
      {
        name: "React",
        icon: <FaReact />,
        description: "",
      },
      {
        name: "React Native",
        icon: <FaReact />,
        description: "",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        description: "",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        description: "",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        description: "",
      },
    ],
    "Estilos & UI": [
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss />,
        description: "",
      },
      {
        name: "CSS",
        icon: <FaCode />,
        description: "",
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap />,
        description: "",
      },
    ],
    "Base de Datos": [
      {
        name: "MySQL",
        icon: <SiMysql />,
        description: "",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        description: "",
      },
    ],
    "DevOps & Tools": [
      {
        name: "Git",
        icon: <FaGitAlt />,
        description: "",
      },
      {
        name: "Docker",
        icon: <FaDocker />,
        description: "",
      },

      {
        name: "Vercel",
        icon: <SiVercel />,
        description: "",
      },
    ],
  };

  const education = [
    {
      level: "PROFESIONAL",
      institution: "CORPORACIÓN UNIVERSITARIA ANTONIO JOSÉ DE SUCRE",
      shortName: "CORPOSUCRE",
      degree: "Ingeniería de Sistemas",
      location: "Sincelejo, Sucre",
      period: "2016 - 2023",
      icon: <FaUniversity />,
      highlights: [
        "Desarrollo de Software",
        "Arquitectura de Sistemas",
        "Base de Datos",
        "Ingeniería Web",
        "Metodologías Ágiles",
      ],
      color: "from-blue-500 to-indigo-600",
    },
    {
      level: "SECUNDARIOS",
      institution: "INSTITUCIÓN EDUCATIVA CRISTÓBAL COLÓN DE MORROA",
      shortName: "I.E. Cristóbal Colón",
      degree: "Bachiller Académico",
      location: "Morroa, Sucre",
      period: "2010 - 2015",
      icon: <FaGraduationCap />,
      highlights: [],
      color: "from-emerald-500 to-teal-600",
    },
  ];

  const experience = [
    {
      company: "GRUPO EDUCATIVO ABEL MENDOZA",
      role: "Ingeniero de Práctica",
      period: "2021",
      type: "Práctica Profesional",
      description:
        "Desarrollo de una plataforma interna para el control de asistencia de los estudiantes matriculados en la institución educativa.",
      highlights: [
        "Automatización del registro de asistencia",
        "Gestión centralizada de estudiantes",
        "Diseño de flujo sencillo para uso de docentes",
      ],
      color: "from-orange-500 to-yellow-600",
    },
    {
      company: "Reparalo",
      role: "Desarrollador Full-Stack",
      period: "2023 – Presente",
      type: "Tiempo Completo",
      description:
        "Aplicación web multi-establecimientos para la gestión de reparaciones. Desarrollé módulos críticos que abarcan desde la recepción del cliente hasta la entrega del equipo, con control financiero e inventario.",
      highlights: [
        "Aplicación web con Laravel + Livewire + Alpine.js + Tailwind CSS",
        "Gestión completa de reparaciones con estados",
        "Soporte para múltiples establecimientos",
        "Sistema POS integrado para ventas de accesorios",
        "Gestión de abonos y reportes de ganancias por técnico",
        "Módulo de turnos con cálculo de ingresos y gastos",
        "Notificaciones automáticas vía WhatsApp Business API",
      ],
      color: "from-blue-500 to-indigo-600",
    },
    {
      company: "Posclic",
      role: "Desarrollador Full-Stack",
      period: "2024",
      type: "Proyecto",
      description:
        "Sistema POS avanzado multi-establecimientos con soporte para múltiples cajas. Implementé funcionalidades que permiten un control total de ventas, turnos, vendedores y reportes en tiempo real.",
      highlights: [
        "Sistema POS robusto desarrollado en Laravel",
        "Soporte para múltiples establecimientos y cajas",
        "Módulo de vendedores con control de permisos",
        "Apertura y cierre de turnos con control de flujo de caja",
        "Reportes de ventas con filtros dinámicos",
        "Notificaciones en tiempo real con Firebase",
        "Diseño responsivo con Tailwind CSS",
      ],
      color: "from-emerald-500 to-teal-600",
    },
    {
      company: "Publiya",
      role: "Backend & Frontend Developer",
      period: "2024 – Presente",
      type: "Freelance",
      description:
        "Plataforma innovadora de servicios urbanos conectando usuarios con proveedores locales en San Agustín Huila. Arquitectura escalable para múltiples ciudades.",
      highlights: [
        "Aplicacion Web con Laravel",
        "API RESTful escalable con Laravel",
        "Aplicacion Nativa con React Native",
      ],
      color: "from-purple-500 to-pink-600",
    },
  ];

  const projects = [
    {
      name: "Reparalo.co",
      tagline: "Aplicación Web Multi-Establecimientos de Reparaciones",
      description:
        "Plataforma completa para talleres de reparación multi-establecimientos. Gestiona clientes, reparaciones con estados, inventario, abonos, sistema POS de accesorios, reportes de ganancias por técnicos y turnos. Incluye notificaciones automáticas vía WhatsApp y un módulo de control financiero muy completo.",
      tech: [
        "Laravel",
        "Livewire",
        "Alpine.js",
        "Tailwind CSS",
        "MySQL",
        "WhatsApp API",
      ],
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop",
      links: [{ href: "#", label: "Proyecto Privado", icon: <FaCode /> }],
      features: [
        "Gestión de reparaciones con estados",
        "Soporte para múltiples establecimientos",
        "Sistema POS para ventas de accesorios",
        "Control de abonos y deudas",
        "Módulo de turnos con reportes de ganancias",
        "Notificaciones automáticas por WhatsApp",
      ],
    },
    {
      name: "Posclic.com",
      tagline: "Sistema POS Multi-Establecimientos",
      description:
        "Aplicación POS moderna para múltiples establecimientos y cajas registradoras. Permite gestionar vendedores, ventas en tiempo real, turnos y reportes avanzados. Incluye integración con Firebase para notificaciones en vivo.",
      tech: ["Laravel", "Tailwind CSS", "MySQL", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
      links: [{ href: "#", label: "Proyecto Privado", icon: <FaCode /> }],
      features: [
        "Soporte multi-establecimientos",
        "Múltiples cajas por establecimientos",
        "Control de turnos (apertura/cierre)",
        "Módulo de vendedores",
        "Reportes de ventas con filtros dinámicos",
        "Notificaciones en tiempo real con Firebase",
      ],
    },
    {
      name: "Publiya.co",
      tagline: "Marketplace de Servicios Urbanos",
      description:
        "Plataforma que conecta usuarios con servicios locales: taxis, restaurantes, profesionales, deliverys. Búsqueda inteligente con geolocalización y sistema de reseñas integrado.",
      tech: ["Laravel", "React Native", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1600&auto=format&fit=crop",
      links: [
        {
          href: "https://publiya.co",
          label: "Visitar",
          icon: <FaExternalLinkAlt />,
        },
      ],
      features: [
        "Búsqueda geolocalizada",
        "Sistema de reseñas",
        "Gestión de servicios",
        "Panel administrativo",
      ],
    },
    {
      name: "Misionera Stereo & Amada Stereo",
      tagline: "Aplicaciones Móviles de Radio",
      description:
        "Diseño y desarrollo de dos aplicaciones móviles de radio para empresas diferentes. Ambas incluyen reproductor de la emisora en vivo, integración con redes sociales, y un dashboard para actualizar información como imágenes, enlaces sociales, stream y programación semanal.",
      tech: ["React Native", "Expo", "Tailwind CSS", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop",
      links: [{ href: "#", label: "Proyecto Privado", icon: <FaCode /> }],
      features: [
        "Reproductor de radio en vivo",
        "Integración con redes sociales",
        "Dashboard para actualizar contenido",
        "Gestión de programación semanal",
        "Streaming de la emisora",
      ],
    },
    {
      name: "Tienda Online - Boom Tecnológico",
      tagline: "E-commerce + Sistema de Puntos",
      description:
        "Solución web para la empresa Boom Tecnológico que combina tienda online y billetera digital. Permite a los clientes comprar en puntos de venta, acumular puntos, canjearlos, y enviarlos o recibirlos entre usuarios. Incluye login de clientes y sistema de referidos.",
      tech: ["Laravel", "React Native", "MySQL", "Tailwind CSS"],
      image:
        "https://img.freepik.com/free-vector/digital-wallet-abstract-concept-illustration_335657-3875.jpg?w=1380&t=st=1693595829~exp=1693599429~hmac=b28ed9b5bffb97a259fb1ef7a9ceea0bb8e6bbcd3a4f458a19c8aa8c4a5b9e8a",
      links: [{ href: "#", label: "Proyecto Privado", icon: <FaCode /> }],
      features: [
        "Tienda online integrada",
        "Wallet de puntos",
        "Login de clientes",
        "Sistema de referidos",
        "Enviar y recibir puntos",
        "Canjeo de puntos en compras",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className="font-black text-2xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Edison Guzmán
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.href.slice(1)
                      ? "bg-white/10 text-white"
                      : "hover:bg-white/5 text-slate-300 hover:text-white"
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <motion.a
                href="/cv.pdf"
                download
                className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 transition text-sm font-bold shadow-lg shadow-emerald-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Descargar CV
              </motion.a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-white/10"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span
                    className={`w-full h-0.5 bg-white transition-all ${
                      isMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-white transition-all ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-white transition-all ${
                      isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4"
              >
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition"
                    >
                      {item.icon}
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,.15),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Desarrollador{" "}
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Full-Stack
                </span>{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"></span>{" "}
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"></span>
              </h1>

              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                Soy{" "}
                <strong className="text-white">
                  Edison Andrés Guzmán Cuello
                </strong>
                , Ingeniero de Sistemas con experiencia en desarrollo backend y
                frontend. He colaborado en proyectos independientes y en
                soluciones para empresas.
              </p>

              <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                Me apasiona crear aplicaciones funcionales, intuitivas y útiles
                para las personas que las utilizan.
              </p>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:justify-self-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                <img
                  src="https://avatars.githubusercontent.com/u/160428260?v=4"
                  alt="Edison Guzman"
                  className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl object-cover ring-4 ring-white/10 shadow-2xl"
                />

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-4 -right-4 px-4 py-2 bg-blue-500 rounded-xl shadow-xl"
                >
                  <FaReact className="text-2xl" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 px-4 py-2 bg-emerald-500 rounded-xl shadow-xl"
                >
                  <FaLaravel className="text-2xl" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre mí</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-12" />

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                Empecé a programar en la universidad estudiando{" "}
                <strong className="text-white">Ingeniería de Sistemas</strong>.
                Al principio me costó un poco, pero cuando logré hacer mi
                primera aplicación que realmente funcionaba, me enganché.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Lo que más me gusta es cuando alguien me cuenta un problema que
                tiene en su negocio o trabajo, y yo puedo encontrar la forma de
                solucionarlo con código. No siempre es fácil, pero cuando
                funciona se siente bien.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Me apasiona aprender cosas nuevas y mantenerme en constante
                crecimiento. Cuando me enfrento a algo que no conozco, me gusta
                investigar, probar diferentes enfoques y buscar soluciones hasta
                comprenderlo a fondo. Creo que cada reto es una oportunidad para
                adquirir nuevas habilidades y seguir mejorando mi desarrollo
                como profesional.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-transparent p-6 hover:bg-white/5 transition">
                <FaCode className="text-2xl text-emerald-400 mb-3" />
                <p className="text-sm text-slate-400">Especialización</p>
                <p className="font-bold text-lg">Backend & Frontend</p>
                <p className="text-sm text-slate-300">Desarrollo Full-Stack</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-transparent p-6 hover:bg-white/5 transition">
                <FaCalendarAlt className="text-2xl text-purple-400 mb-3" />
                <p className="text-sm text-slate-400">Disponibilidad</p>
                <p className="font-bold text-lg">Inmediata</p>
                <p className="text-sm text-slate-300">Freelance / Contrato</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Habilidades Técnicas
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400" />
                  {category}
                </h3>
                <div className="space-y-4">
                  {items.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-start gap-3">
                        <span className="text-xl text-emerald-400 mt-0.5 group-hover:scale-110 transition">
                          {skill.icon}
                        </span>
                        <div>
                          <div className="font-medium text-white group-hover:text-emerald-400 transition">
                            {skill.name}
                          </div>
                          <p className="text-sm text-slate-400 mt-1">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiencia Profesional
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-12" />

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 hover:bg-white/10 transition"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color}`}
                      />
                      <span className="text-lg font-semibold text-slate-200">
                        {exp.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-xs" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock className="text-xs" />
                        {exp.type}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="grid md:grid-cols-1 gap-6">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proyectos Destacados
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-12" />

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {project.name}
                    </h3>
                    <p className="text-sm text-emerald-400 font-medium">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300 border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                      Características
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-xs text-slate-300"
                        >
                          <span className="w-1 h-1 rounded-full bg-emerald-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 transition text-sm font-medium text-white"
                      >
                        {link.icon} {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Formación Académica
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-12" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-gradient-to-b from-white/20 to-transparent" />

                <div className="flex gap-6">
                  <div
                    className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-2xl text-white shadow-xl`}
                  >
                    {edu.icon}
                  </div>

                  <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="text-xs font-medium text-emerald-400 uppercase tracking-wide mb-1">
                          {edu.level}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-slate-300 font-medium">
                          {edu.shortName}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-slate-400 text-sm mb-1">
                          <FaMapMarkerAlt className="text-xs" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1 text-slate-400 text-sm">
                          <FaCalendarAlt className="text-xs" />
                          {edu.period}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 text-xs rounded-full bg-white/10 text-slate-300 border border-white/10"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Charla Conmigo
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-12 mx-auto" />

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8">
            <div className="text-center mb-12">
              <div className="mb-8">
                <div className="relative inline-block">
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full opacity-20 blur-xl" />
                  <div className="relative w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
                    <FaRocket className="text-white text-2xl" />
                  </div>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Siempre estoy dispuesto a escuchar sobre nuevos proyectos, ideas
                o colaboraciones emocionantes.
              </p>

              <div className="mb-12">
                <p className="text-lg text-slate-400 mb-8">
                  <span className="font-semibold text-emerald-400">
                    Envíame un correo electrónico
                  </span>{" "}
                </p>

                {/* Botón principal de contacto sin animaciones */}
                <a
                  href="mailto:edison_guzman@uajs.edu.co?subject=Hola Edison! Tengo una idea increíble&body=Hola Edison,%0A%0AMe encantaría platicar contigo sobre:%0A%0A- Mi proyecto/idea:%0A%0A- Presupuesto estimado:%0A%0A- Timeframe:%0A%0A%0ASaludos!"
                  className="group relative inline-flex items-center gap-3 rounded-2xl px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 font-semibold text-lg transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FaEnvelope className="text-xl" />
                  <span className="relative z-10">¡Escribámoslo juntos!</span>
                </a>
              </div>
            </div>

            {/* Información de contacto sin animaciones */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <FaEnvelope className="text-emerald-400 text-xl" />
                </div>
                <p className="text-sm text-slate-400 mb-2">Email</p>
                <p className="font-medium text-emerald-300">
                  edison_guzman@uajs.edu.co
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                  <FaWhatsapp className="text-green-400 text-xl" />
                </div>
                <p className="text-sm text-slate-400 mb-2">WhatsApp</p>
                <p className="font-medium text-green-300">+57 301 596 5595</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <FaMapMarkerAlt className="text-blue-400 text-xl" />
                </div>
                <p className="text-sm text-slate-400 mb-2">Ubicación</p>
                <p className="font-medium text-blue-300">
                  Colombia - San Agustín - Huila
                </p>
              </div>
            </div>

            {/* Enlaces sociales sin animaciones */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:edison_guzman@uajs.edu.co"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all duration-300 group"
              >
                <FaEnvelope className="text-emerald-400" />
                Email
              </a>

              <a
                href="https://github.com/EdiGdev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 group"
              >
                <FaGithub className="text-purple-400" />
                GitHub
              </a>

              <a
                href="https://wa.me/573015965595"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-green-500/30 bg-green-500/10 hover:bg-green-500/20 hover:border-green-400 transition-all duration-300 group"
              >
                <FaWhatsapp className="text-green-400" />
                WhatsApp
              </a>

              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 group"
              >
                <FaDownload className="text-blue-400" />
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-slate-300 font-medium mb-1">
                Edison Andrés Guzmán Cuello
              </p>
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} — Ingeniero de Sistemas
                especializado en Full-Stack Development
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-sm text-slate-400">
                Hecho con React + Tailwind CSS
              </div>
              <div className="flex gap-4 text-lg">
                {/* <a
                  href="https://github.com/EdiGdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/edison-andres-guzman-cuello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://wa.me/573015965595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition"
                >
                  <FaWhatsapp />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
