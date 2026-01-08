import React, { useState } from "react";

const categories = [
  { id: "ai", name: "Artificial Intelligence", icon: "🤖" },
  { id: "frontend", name: "Frontend Programming Languages", icon: "‹/›" },
  { id: "backend", name: "Backend Programming Languages", icon: "⚙️" },
  { id: "mobile", name: "Mobile", icon: "📱" },
  { id: "bigdata", name: "Big Data", icon: "📊" },
  { id: "databases", name: "Databases / Data Storages", icon: "🗄️" },
  { id: "cloud", name: "Cloud Computing", icon: "☁️" },
  { id: "devops", name: "DevOps", icon: "♾️" },
  { id: "testing", name: "Software Testing", icon: "🧪" }
];

// DATA MAPPING FOR DIFFERENT CONTENT ON THE RIGHT SIDE
const techData = {
  ai: [
    { title: "Vector Databases", items: ["MongoDB Atlas", "Chroma", "Mistral AI", "Google", "Meta", "drant", "Pinecone", "Milvus"] },
    { title: "LLM Frameworks", items: ["LangChain", "LlamaIndex", "AutoGPT"] }
  ],
  frontend: [
    { title: "Core Technologies", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"] },
    { title: "State Management", items: ["Redux", "Zustand", "Context API"] }
  ],
  backend: [
    { title: "Languages", items: ["Node.js", "Python", "Golang", "Java", "PHP", "Ruby"] },
    { title: "Frameworks", items: ["Express", "Django", "Spring Boot", "FastAPI"] }
  ],
  mobile: [
    { title: "Cross Platform", items: ["Flutter", "React Native", "Ionic"] },
    { title: "Native", items: ["Swift", "Kotlin", "Objective-C", "Java"] }
  ],
  bigdata: [
    { title: "Processing", items: ["Apache Spark", "Hadoop", "Flink", "Kafka"] },
    { title: "Analytics", items: ["Snowflake", "BigQuery", "Databricks"] }
  ],
  databases: [
    { title: "SQL", items: ["PostgreSQL", "MySQL", "MS SQL", "Oracle"] },
    { title: "NoSQL", items: ["MongoDB", "Cassandra", "Redis", "DynamoDB"] }
  ],
  cloud: [
    { title: "Providers", items: ["AWS", "Google Cloud", "Azure", "DigitalOcean"] },
    { title: "Serverless", items: ["AWS Lambda", "Cloud Functions", "Vercel"] }
  ],
  devops: [
    { title: "CI/CD", items: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI"] },
    { title: "Containerization", items: ["Docker", "Kubernetes", "Terraform", "Ansible"] }
  ],
  testing: [
    { title: "Automation Tools", items: ["Selenium", "Cypress", "Playwright", "Appium", "Jest", "PyTest"] },
    { title: "Performance", items: ["JMeter", "Locust", "Postman"] }
  ]
};

const TechCapabilities = () => {
  const [activeTab, setActiveTab] = useState("ai");

  return (
    <section className="tech-section">
      <h2 className="heavy-heading">
        Tech Capabilities Driving Digital <br />
        Transformation For Our Clients
      </h2>

      <div className="capabilities-container">
        <div className="left-nav">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className={`nav-row ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span className="nav-icon">{cat.icon}</span>
              <span className="nav-name">{cat.name}</span>
              {activeTab === cat.id && <span className="active-arrow">→</span>}
            </div>
          ))}
        </div>

        <div className="right-content">
          <ContentArea type={activeTab} />
        </div>
      </div>
    </section>
  );
};

const ContentArea = ({ type }) => {
  const data = techData[type] || [];

  return (
    <div className="content-inner">
      {data.map((section, index) => (
        <React.Fragment key={index}>
          <h3 className="content-subheading">{section.title}</h3>
          <div className="tech-grid">
            {section.items.map((tech, i) => (
              <div key={i} className="tech-pill">
                <div className="pill-icon">💠</div>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TechCapabilities;