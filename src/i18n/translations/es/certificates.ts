const certificates = [
  {
    title: "DevOps: Docker, Kubernetes, Jenkins, GitFlow CI/CD",
    provider: "Udemy",
    date: "6 de marzo de 2023",
    duration: "16.5 horas",
    technologies: ["Docker", "Jenkins", "Kubernetes", "Git", "CI/CD"],
    description:
      "Este certificado me ayudó a entender todo el ciclo desde el desarrollo hasta el despliegue. Además, fue la base de mi tesis universitaria, ya que elegí este tema.",
    certificateUrl: "https://www.udemy.com/certificate/UC-7ead730f-c8bb-4934-b190-9fae87c2439a/",
  },
  {
    title: "React Native CLI: Aplicaciones Nativas para iOS y Android",
    provider: "Udemy",
    date: "23 de febrero de 2025",
    duration: "33 horas",
    technologies: ["React Native", "Navigation", "UI Components", "Zustand", "TanStack Query"],
    description:
      "Aprendí React Native por curiosidad en el desarrollo móvil y por mi gusto por JavaScript y TypeScript. Fue mi primer paso creando apps móviles nativas.",
    certificateUrl: "https://www.udemy.com/certificate/UC-c8022ba9-0bda-4623-826b-6e0844ed6fd5/",
  },
  {
    title: "TanStack Query: Un poderoso gestor de estado asíncrono",
    provider: "DevTalles",
    date: "12 de marzo de 2025",
    duration: "37.5 horas",
    technologies: ["TanStack Query"],
    description:
      "Tras descubrir el poder de TanStack Query en React Native, este curso me ayudó a entender mejor esta herramienta tan potente.",
    certificateUrl: "https://cursos.devtalles.com/certificates/xfbvdfdjyn",
  },
  {
    title: "Node.js: De Cero a Experto",
    provider: "DevTalles",
    date: "29 de marzo de 2025",
    duration: "37.5 horas",
    technologies: ["Node.js", "MongoDB", "PostgreSQL", "Express", "Jest"],
    description:
      "Este curso me ayudó a dominar los fundamentos del backend: creación de APIs escalables, manejo de bases de datos y buenas prácticas de arquitectura.",
    certificateUrl: "https://cursos.devtalles.com/certificates/j5egawmq6g",
  },
  {
    title: "NestJS: Desarrollo Backend Escalable con Node",
    provider: "DevTalles",
    date: "4 de abril de 2025",
    duration: "25 horas",
    technologies: ["NestJS", "MongoDB", "PostgreSQL", "TypeORM", "Websockets"],
    description:
      "Aprendí desde validaciones y autenticación JWT, hasta middleware, guards y WebSockets — todo clave para crear sistemas backend escalables.",
    certificateUrl: "https://cursos.devtalles.com/certificates/3cgst3u9dp",
  },
  {
    title: "NestJS + Reportes: Generación de PDFs desde Node",
    provider: "DevTalles",
    date: "11 de abril de 2025",
    duration: "6.5 horas",
    technologies: ["NestJS", "Elementos HTML en Reportes", "Gráficas y SVGs", "Tablas"],
    description:
      "Aprendí a crear reportes PDF modernos con PDFMake, una gran mejora frente a Crystal Reports al no depender de software externo.",
    certificateUrl: "https://cursos.devtalles.com/certificates/dvrvuuprxw",
  },
  {
    title: "Principios SOLID y Código Limpio",
    provider: "DevTalles",
    date: "12 de abril de 2025",
    duration: "6.5 horas",
    technologies: ["SOLID", "Código Limpio"],
    description:
      "Este curso reforzó lo que ya conocía sobre los principios SOLID y Código Limpio — conceptos fundamentales que todo desarrollador debe tener en mente.",
    certificateUrl: "https://cursos.devtalles.com/certificates/npzuarkhzg",
  },
  {
    title: "GIT + GitHub: Sistema de Control de Versiones desde Cero",
    provider: "DevTalles",
    date: "14 de abril de 2025",
    duration: "11.5 horas",
    technologies: ["Git", "GitHub"],
    description:
      "Tomé este curso para profundizar en temas específicos como gestión de conflictos, revertir, resetear y prácticas seguras con Git.",
    certificateUrl: "https://cursos.devtalles.com/certificates/latb73hhun",
  },
  {
    title: "Patrones de Diseño: Soluciones Prácticas y Eficientes",
    provider: "DevTalles",
    date: "17 de abril de 2025",
    duration: "10 horas",
    technologies: ["Patrones de Diseño"],
    description:
      "Me tomé el tiempo para estudiar cada patrón de diseño con el detalle que merecía. Aprendí a resolver problemas comunes de forma más eficaz.",
    certificateUrl: "https://cursos.devtalles.com/certificates/hgjyrb4qae",
  },
  {
    title: "NestJS + Testing: Pruebas Unitarias y de Integración (e2e)",
    provider: "DevTalles",
    date: "17 de abril de 2025",
    duration: "12.5 horas",
    technologies: ["Jest"],
    description:
      "Exploré cómo aplicar pruebas automatizadas con Jest para mantener los sistemas backend estables, confiables y sin errores en producción.",
    certificateUrl: "https://cursos.devtalles.com/certificates/feu8t2qu4r",
  },
  {
    title: "Docker: Guía Práctica para Desarrolladores",
    provider: "DevTalles",
    date: "26 de abril de 2025",
    duration: "14 horas",
    technologies: ["Docker", "GitHub Actions"],
    description:
      "Este curso fue clave para entender conceptos avanzados de Docker como multi-stage builds y builds automatizados.",
    certificateUrl: "https://cursos.devtalles.com/certificates/b3dszxwct4",
  },
  {
    title: "NestJS + Microservicios: Aplicaciones Escalables y Modulares",
    provider: "DevTalles",
    date: "5 de mayo de 2025",
    duration: "20.5 horas",
    technologies: ["Nest", "Docker", "Kubernetes", "GKE", "Helm"],
    description:
      "Este curso me mostró que los microservicios son ideales para infraestructuras a gran escala — no siempre necesarios, pero muy interesantes de explorar.",
    certificateUrl: "https://cursos.devtalles.com/certificates/buqepvjxme",
  },
  {
    title: "Astro: El Framework para Sitios Web de Contenido",
    provider: "DevTalles",
    date: "9 de mayo de 2025",
    duration: "25.5 horas",
    technologies: ["Astro"],
    description:
      "Tomé este curso para mostrar mis proyectos con un framework moderno. Astro me dio la velocidad, simplicidad y flexibilidad que buscaba.",
    certificateUrl: "https://cursos.devtalles.com/certificates/c9iw8igntk",
  },
  {
    title: "OpenAI: Ejercicios Prácticos y Asistentes con React + NestJS",
    provider: "DevTalles",
    date: "11 de mayo de 2025",
    duration: "10 horas",
    technologies: ["NestJS", "Open AI API"],
    description:
      "Lo que más me interesó fue integrar la API de OpenAI con NestJS. La parte del frontend no era lo que buscaba.",
    certificateUrl: "https://cursos.devtalles.com/certificates/xddwahomij",
  },
  {
    title: "Mini-Curso Zustand: Gestión de Estado para React",
    provider: "DevTalles",
    date: "11 de mayo de 2025",
    duration: "6 horas",
    technologies: ["Zustand"],
    description:
      "Tras usar Zustand en React Native, quise entender por qué se considera el reemplazo moderno de Redux. Fue un gran aprendizaje para mis proyectos.",
    certificateUrl: "https://cursos.devtalles.com/certificates/hpqsp0cxal",
  },
  {
    title: "React: Aplicaciones en Tiempo Real con Socket.io",
    provider: "DevTalles",
    date: "12 de mayo de 2025",
    duration: "16 horas",
    technologies: ["Socket.io"],
    description:
      "Me enfoqué en lo que necesitaba: manejo de websockets y buenas prácticas con Socket.io, ya que el contenido de frontend no estaba relacionado.",
    certificateUrl: "https://cursos.devtalles.com/certificates/ercpez6xx8",
  },
];

export default certificates;
