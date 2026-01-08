

const services = [
  {
    title: "AI Development Services",
    description: "We engineer bespoke AI solutions, from Large Language Models (LLMs) to Machine Learning (ML) applications, helping you explore new opportunities for automation, insights, and innovation.",
    icon: "AI"
  },
  {
    title: "Mobile App Development",
    description: "We build intelligent mobile apps with Generative UX Design and AI-Powered Personalization to enhance user engagement.",
    icon: "📱"
  },
  {
    title: "Software Development",
    description: "From custom development to system upgrades, we ensure AI-Native Development and an AI-Augmented SDLC to craft software that enhances operational efficiency and drives innovation.",
    icon: "💻"
  },
  {
    title: "Digital Transformation",
    description: "We help businesses stay competitive by transforming legacy systems with AI-driven automation, modern digital-first solutions, and Intelligent Process Automation.",
    icon: "⚙️"
  },

  {
    title: "Ideation And Design Strategy",
    description: "Our strategic ideation and design processes, powered by AI-Driven Market Analysis and Generative Design, ensure that your digital products are not only functional but also deeply resonate with users.",
    icon: "💡"
  },
  {
    title: "IT Consulting",
    description: "We provide expert IT consulting services supported by AI-Powered IT Strategy and Predictive Analytics to help your organization navigate complex technology decisions.",
    icon: "💬"
  },
  {
    title: "DevOps",
    description: "Our DevOps services streamline development and operations to accelerate your project timelines and improve product quality through intelligent automation and proactive insights.",
    icon: "♾️"
  },
  {
    title: "Cloud Managed Services",
    description: "We manage your cloud infrastructure end-to-end, using AI-Optimized Cloud Management and AIOps to ensure it is optimized, secure, and cost-effective.",
    icon: "☁️"
  }
];

const EngineeringServices = () => {
  return (
    <section className="es-container">
      <div className="es-header">
        <h2 className="es-title">
          Navigate the Digital Frontier with <br /> Our Engineering Excellence
        </h2>
        <button className="es-btn-services">
          Our Services 
          <span className="es-arrow">›</span>
        </button>
      </div>

      <div className="es-grid">
        {services.map((service, index) => (
          <div className="es-card" key={index}>
            <div className="es-card-icon">{service.icon}</div>
            <h3 className="es-card-title">{service.title}</h3>
            <p className="es-card-text">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EngineeringServices;