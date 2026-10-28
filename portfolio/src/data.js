// ====== EDIT YOUR LINKS HERE ======
export const socialLinks = {
  linkedin: "YOUR_LINKEDIN_URL", // e.g. "https://www.linkedin.com/in/your-id"
  github: "YOUR_GITHUB_URL",     // e.g. "https://github.com/your-username"
};

// Contact form: paste a Formspree endpoint (https://formspree.io/f/xxxx) to send real messages.
// Leave empty and the form validates but does NOT send anything.
export const FORM_ENDPOINT = "";

export const isConfigured = (url) => /^https?:\/\//i.test(url || "");

export const profile = {
  name: "Ashritha Dabbiru",
  title: "B.Tech Computer Science & Engineering Student | Aspiring Data Analyst",
  email: "dabbiru.ashritha@gmail.com",
  phone: "9390536347",
  college: "Lendi Institute of Engineering and Technology",
  cgpa: "8.4",
  about:
    "I am a Computer Science & Engineering student building a foundation in programming, AI and data. I am moving toward Data Analytics and developing practical analysis skills through projects, with the goal of gaining hands-on experience through internships.",
};

export const skills = [
  { name: "Python", group: "Programming" },
  { name: "Java", group: "Programming" },
  { name: "HTML", group: "Web" },
  { name: "SQL (Basics)", group: "Data" },
  { name: "YOLOv8", group: "AI / Computer Vision" },
  { name: "OpenCV", group: "AI / Computer Vision" },
];

// ====== EDIT PROJECT LINKS HERE (leave as-is until you have real URLs) ======
export const projects = [
  {
    id: "hotel",
    name: "Hotel Reservation System",
    status: "Completed",
    summary: "A Java application for booking, cancelling and managing hotel rooms.",
    description:
      "Developed a Java-based hotel reservation system with booking, cancellation and room-management functionality. Includes a simple user interface and basic database logic.",
    tech: ["Java"],
    features: ["Booking", "Cancellation", "Room management", "Basic database logic", "User interface"],
    learned:
      "Structuring a Java application around real workflows (booking, cancellation, room management) and connecting it to basic database logic.",
    github: "YOUR_PROJECT_GITHUB_URL",
    demo: "YOUR_LIVE_DEMO_URL",
  },
  {
    id: "ambulance",
    name: "AI-Based Ambulance Detection and Smart Traffic Signal Control System",
    status: "Ongoing",
    summary: "An AI system that detects ambulances from camera and audio input to support smarter traffic signals.",
    description:
      "Developing an AI-based system to detect ambulances using camera and audio inputs and support smarter traffic signal control, with the goal of improving emergency response time.",
    tech: ["YOLOv8", "OpenCV", "Camera input", "Audio input"],
    features: ["Ambulance detection from camera input", "Ambulance detection from audio input", "Support for smarter traffic signal control"],
    learned:
      "Working with computer vision tools (YOLOv8, OpenCV) and combining visual and audio inputs in one system. The project is still in progress.",
    github: "YOUR_PROJECT_GITHUB_URL",
    demo: "YOUR_LIVE_DEMO_URL",
  },
];

export const certifications = [
  { title: "Full Stack Development Course", detail: "Course completion certificate." },
  {
    title: "Certificate of Participation: HackYatra / Vercel.Hackathon",
    detail: "Powered by GVMC, with NSRIT as venue partner.",
  },
  { title: "British Council EnglishScore", detail: "B1 (Intermediate) English proficiency." },
];

export const education = [
  { degree: "B.Tech, Computer Science & Engineering", place: "Lendi Institute of Engineering and Technology", score: "CGPA: 8.4" },
  { degree: "Intermediate (CBSE)", place: "Jawahar Navodaya Vidyalaya", score: "Percentage: 85%" },
];

export const journey = [
  { title: "Programming foundations", text: "Python, Java and HTML, with basic SQL for working with databases." },
  { title: "Software projects", text: "Built the Hotel Reservation System in Java and took a Full Stack Development course." },
  { title: "AI and computer vision", text: "Working on ambulance detection with YOLOv8 and OpenCV." },
  { title: "Data analytics", text: "Developing practical data-analysis skills, aiming for projects and internships." },
];
