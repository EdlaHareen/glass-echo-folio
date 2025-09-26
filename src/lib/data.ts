export const personalInfo = {
  name: "Hareen Edla",
  title: "Data Engineer",
  location: "St. Louis, MO",
  phone: "314-393-6156",
  email: "edlahareen01@gmail.com",
  linkedin: "linkedin.com/in/hareenedla",
  summary: "Passionate Data Engineer with 5.5 years of experience in designing and implementing scalable data pipelines, cloud architectures, and business intelligence solutions. Expertise in Azure, AWS, and modern data technologies.",
  roles: ["Data Engineer", "Cloud Architect", "Analytics Expert", "Azure Specialist"]
};

export const experience = [
  {
    id: 1,
    company: "Task Tech Recruiters",
    position: "Azure Data Engineer",
    duration: "2023 - Present",
    location: "St. Louis, MO",
    description: "Leading cloud data architecture and engineering initiatives for enterprise clients.",
    achievements: [
      "Architected scalable Azure Data Factory pipelines processing 10TB+ daily data",
      "Implemented real-time streaming solutions using Azure Databricks and Event Hubs",
      "Optimized query performance in Azure Synapse, reducing processing time by 60%",
      "Mentored junior engineers on best practices for cloud data engineering"
    ],
    technologies: ["Azure Data Factory", "Azure Databricks", "Azure Synapse", "PySpark", "Python"]
  },
  {
    id: 2,
    company: "Previous Company",
    position: "Senior Data Engineer",
    duration: "2021 - 2023",
    location: "Remote",
    description: "Developed and maintained enterprise data infrastructure and analytics platforms.",
    achievements: [
      "Built ETL pipelines processing millions of records daily",
      "Designed data warehouse architecture supporting 100+ business users",
      "Implemented automated data quality monitoring systems",
      "Reduced data processing costs by 40% through optimization"
    ],
    technologies: ["AWS", "Redshift", "EMR", "Apache Airflow", "Python", "SQL"]
  },
  {
    id: 3,
    company: "Data Analytics Firm",
    position: "Data Engineer",
    duration: "2019 - 2021",
    location: "Chicago, IL",
    description: "Built foundational data engineering skills working on diverse analytics projects.",
    achievements: [
      "Developed automated reporting systems using Python and SQL",
      "Created interactive dashboards in Tableau and Power BI",
      "Implemented data validation and cleansing procedures",
      "Collaborated with cross-functional teams on data initiatives"
    ],
    technologies: ["SQL", "Python", "Tableau", "Power BI", "PostgreSQL", "MySQL"]
  }
];

export const skills = {
  "Cloud Platforms": [
    { name: "Azure Data Factory", proficiency: 95, years: 4 },
    { name: "Azure Databricks", proficiency: 90, years: 3 },
    { name: "Azure Synapse", proficiency: 85, years: 3 },
    { name: "AWS Redshift", proficiency: 80, years: 2 },
    { name: "AWS EMR", proficiency: 75, years: 2 },
    { name: "AWS S3", proficiency: 90, years: 4 }
  ],
  "Programming Languages": [
    { name: "SQL", proficiency: 95, years: 5 },
    { name: "Python", proficiency: 90, years: 4 },
    { name: "PySpark", proficiency: 85, years: 3 },
    { name: "Scala", proficiency: 70, years: 2 }
  ],
  "Big Data Tools": [
    { name: "Apache Spark", proficiency: 90, years: 4 },
    { name: "Apache Kafka", proficiency: 80, years: 3 },
    { name: "Apache Airflow", proficiency: 85, years: 3 },
    { name: "HDFS", proficiency: 75, years: 2 },
    { name: "Apache Flink", proficiency: 65, years: 1 }
  ],
  "Databases": [
    { name: "Azure SQL Database", proficiency: 90, years: 4 },
    { name: "PostgreSQL", proficiency: 85, years: 3 },
    { name: "MySQL", proficiency: 80, years: 3 },
    { name: "MongoDB", proficiency: 75, years: 2 },
    { name: "Cassandra", proficiency: 70, years: 2 }
  ],
  "BI & Analytics": [
    { name: "Power BI", proficiency: 90, years: 4 },
    { name: "Tableau", proficiency: 85, years: 3 },
    { name: "Spotfire", proficiency: 75, years: 2 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Real-time Analytics Platform",
    description: "Built a comprehensive real-time analytics platform processing millions of events daily using Azure Event Hubs, Databricks, and Power BI.",
    image: "/placeholder-project.jpg",
    technologies: ["Azure Databricks", "Event Hubs", "Power BI", "PySpark", "Delta Lake"],
    achievements: [
      "Processes 10M+ events daily with <2 second latency",
      "Serves 500+ business users across multiple departments",
      "Reduced manual reporting time by 80%"
    ],
    featured: true
  },
  {
    id: 2,
    title: "Data Lake Architecture",
    description: "Designed and implemented a scalable data lake architecture on Azure supporting petabyte-scale data processing and analytics.",
    image: "/placeholder-project.jpg",
    technologies: ["Azure Data Lake", "Data Factory", "Synapse", "Python", "ARM Templates"],
    achievements: [
      "Handles 50TB+ of data ingestion monthly",
      "99.9% uptime with automated monitoring",
      "40% cost reduction through optimization"
    ],
    featured: true
  },
  {
    id: 3,
    title: "Automated ETL Framework",
    description: "Developed a reusable ETL framework that reduced pipeline development time by 60% using Apache Airflow and custom Python libraries.",
    image: "/placeholder-project.jpg",
    technologies: ["Apache Airflow", "Python", "Docker", "PostgreSQL", "Redis"],
    achievements: [
      "Deployed 100+ automated pipelines",
      "Reduced development time by 60%",
      "Zero-downtime deployments"
    ],
    featured: false
  }
];

export const certifications = [
  {
    name: "Microsoft Certified: Azure Data Engineer Associate",
    issuer: "Microsoft",
    year: "2023"
  },
  {
    name: "AWS Certified Big Data - Specialty",
    issuer: "Amazon Web Services",
    year: "2022"
  },
  {
    name: "Databricks Certified Data Engineer Professional",
    issuer: "Databricks",
    year: "2023"
  }
];

export const education = [
  {
    degree: "Master of Science in Information Systems",
    school: "Saint Louis University",
    year: "2023 - 2025",
    details: "Advanced studies in information systems and data management"
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Saint Mary's College",
    year: "2019 - 2022",
    details: "Foundation in computer science principles and programming"
  }
];