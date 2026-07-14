export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bulletPoints: string[];
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: {
    category: string;
    items: string[];
  }[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  education: {
    degree: string;
    school: string;
    period: string;
  };
  certifications: string[];
}

export const personalProfile: Profile = {
  name: "Gwee Ming Loon (魏明伦)",
  role: "Platform Engineer / DevOps Engineer",
  bio: "Platform and DevOps Engineer based in Kuala Lumpur, specializing in the Fintech and Brokerage (CFD) industry. Experienced in designing, operating, and automating production cloud infrastructure across AWS and Alibaba Cloud environments. Passionate about reliability engineering, building highly available payment systems, managing cloud-native platforms, and scalable infrastructure automation.",
  avatar: "/avatar.jpg",
  skills: [
    {
      category: "Cloud Platforms",
      items: ["AWS", "Alibaba Cloud", "Cloudflare"]
    },
    {
      category: "Containers & Platforms",
      items: ["Kubernetes (EKS, ACK, Rancher)", "Docker", "Helm"]
    },
    {
      category: "Infrastructure as Code",
      items: ["Terraform", "OpenTofu"]
    },
    {
      category: "CI/CD & Automation",
      items: ["GitLab CI/CD", "AWX", "Kaniko"]
    },
    {
      category: "Monitoring & Observability",
      items: ["Grafana", "Prometheus", "Loki", "ELK Stack"]
    },
    {
      category: "Databases & Middleware",
      items: ["Amazon MSK", "Redis", "Amazon RDS"]
    },
    {
      category: "Programming & Networking",
      items: ["Python", "Bash", "DNS", "TCP/IP"]
    }
  ],
  socials: {
    github: "https://github.com/mloon0710",
    linkedin: "https://linkedin.com/in/mloon0710/",
    email: "mailto:loonming82@outlook.com"
  },
  education: {
    degree: "Bachelor of Computer Science (Cyber Security)",
    school: "Asia Pacific University (APU)",
    period: "2020 - 2023"
  },
  certifications: [
    "CCNA: Switching, Routing, and Wireless Essentials",
    "Apsara Cloud Computing: Operate and Manage a Cloud Server",
    "ACA Cloud Security Certification - Alibaba Cloud",
    "SOC Elite Certificate"
  ]
};

export const experiencesData: Experience[] = [
  {
    role: "DevOps Engineer / SRE",
    company: "Hytech Consulting Management Sdn Bhd",
    period: "Jun 2025 - Current",
    bulletPoints: [
      "Designed and provisioned Amazon EKS clusters using Terraform/OpenTofu across public and private subnet architectures.",
      "Implemented IAM Roles for Service Accounts (IRSA) to ensure secure, credential-less AWS access for Kubernetes workloads.",
      "Built and maintained GitLab CI/CD pipelines, automating container image builds via Kaniko and deploying microservices using Helm.",
      "Integrated Prometheus JMX Exporter with Amazon MSK for advanced Kafka observability, paired with Grafana and Loki for centralized monitoring.",
      "Provisioned and managed middleware services including Amazon MSK, ElastiCache Redis, and RDS using Infrastructure-as-Code principles."
    ]
  },
  {
    role: "DevOps Engineer / SRE",
    company: "Doo Technology MY SDN BHD",
    period: "Nov 2023 - Jun 2025",
    bulletPoints: [
      "Supported production payment gateway infrastructure, focusing on high availability, resilience, and multi-AZ architectures.",
      "Led K8s platform migrations from Alibaba Cloud ACK to self-managed Kubernetes clusters to improve operational control.",
      "Migrated VMware workloads from shared to dedicated infrastructure environments to satisfy strict PCI DSS compliance requirements.",
      "Executed disaster recovery planning and validation exercises, encompassing both cold and warm recovery scenarios."
    ]
  },
  {
    role: "DevOps Intern",
    company: "Microlink Solutions Berhard",
    period: "Aug 2022 - Nov 2022",
    bulletPoints: [
      "Managed infrastructure lifecycle and resources across AWS, Alibaba Cloud, and Cloudflare environments.",
      "Implemented observability solutions using Grafana, Prometheus, and SkyWalking for the JPJ AWAS project.",
      "Automated deployment processes using AWX to reduce manual effort and improve consistency."
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "AWS EKS Platform Deployment",
    description: "Designed and provisioned secure Kubernetes platforms on AWS EKS using Terraform and OpenTofu. Implemented secure workload access through IRSA and enforced strict Infrastructure-as-Code practices.",
    tags: ["AWS EKS", "Terraform", "OpenTofu", "IRSA", "Kubernetes"],
    link: "#" // 在这里填入你想展示的具体链接或留空
  },
  {
    title: "Enterprise Kafka Platform (Amazon MSK)",
    description: "Provisioned and managed Amazon MSK clusters. Integrated Prometheus JMX Exporter with Grafana to establish robust monitoring and rapid troubleshooting capabilities for enterprise Kafka workloads.",
    tags: ["Amazon MSK", "Kafka", "Prometheus", "Grafana", "Observability"],
    link: "#"
  },
  {
    title: "PCI DSS Infrastructure Migration",
    description: "Spearheaded the migration of business-critical VMware workloads from shared environments to dedicated infrastructure, ensuring full alignment with PCI DSS security compliance requirements.",
    tags: ["VMware", "PCI DSS Compliance", "Infrastructure Migration", "Security"],
    link: "#"
  },
  {
    title: "Kubernetes Platform Transformation",
    description: "Led complex migration initiatives from Alibaba Cloud ACK to self-managed Kubernetes clusters, significantly improving infrastructure ownership, deployment flexibility, and operational control.",
    tags: ["Alibaba Cloud ACK", "Kubernetes", "Platform Engineering", "Migration"],
    link: "#"
  },
  {
    title: "High-Availability Disaster Recovery",
    description: "Designed and executed comprehensive disaster recovery plans across payment-related systems, validating recovery processes and ensuring business continuity in warm and cold scenarios.",
    tags: ["Disaster Recovery", "Payment Systems", "High Availability", "Resilience"],
    link: "#"
  }
];