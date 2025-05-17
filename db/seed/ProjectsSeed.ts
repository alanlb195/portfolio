export const ProjectsSeed = [
    {
        name: 'Ecommerce Platform',
        technologies: JSON.stringify(['Node.js', 'NestJS', 'Stripe', 'Webhook', 'Nats', 'Microservices', 'Helm', 'GKE', 'Monorepo']),
        projectUrl: 'N/A',
        repositoryUrl: 'https://github.com/orgs/Nest-Microservices-Course-AlanLB/repositories',
        title_en: 'Ecommerce Platform',
        title_es: 'Plataforma de Comercio Electrónico',
        description_en: 'Backend with user, product, order, and Stripe payment handling. Microservices infrastructure deployed to Google Kubernetes Engine using Helm.',
        description_es: 'Backend con manejo de usuarios, productos, ordenes y pagos en stripe. Infraestructura de microservicios, con despliegue en Google Kubernetes Engine manejado mediante Helm',
    },
    {
        name: 'Chothing shop',
        technologies: JSON.stringify(['Node.js', 'Nest.js', 'JWT']),
        projectUrl: 'N/A',
        repositoryUrl: 'https://github.com/Alanlb195/NestJSTesloAPI',
        title_en: 'Clothing Store',
        title_es: 'Tienda de Ropa',
        description_en: 'Backend for clothing product management with unit and e2e tests, integrated authentication and authorization.',
        description_es: 'Backend para manejo de productos tipo ropa, con tests unitarios y e2e, autenticacion y autorizacion integrada',
    },
    {
        name: 'Legacy Modernization',
        technologies: JSON.stringify(['ASP .NET', 'Docker', 'Powershell', 'Crystal Reports']),
        projectUrl: 'N/A',
        repositoryUrl: 'https://github.com/Alanlb195/WebForms-Docker',
        title_en: 'Full Dockerization of ASP .NET Web Forms Application',
        title_es: 'Dockerización Completa de Aplicación ASP .NET Web Forms',
        description_en: 'Dockerization of a legacy application as part of a production system modernization, improving processes and enabling CI/CD.',
        description_es: 'Dockerizacion de de una aplicacion Legacy como parte de una modernizacion de sistema en produccion, mejora de procesos y eficiencia para lograr un entorno CI/CD',
    }
]