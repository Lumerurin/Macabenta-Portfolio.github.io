/* ============================================================
   YOUR CONTENT LIVES HERE.
   This is the only file you need to touch to add or update
   projects, certifications, and badges. No HTML or CSS required.

   HOW IMAGES & VIDEOS WORK
   ------------------------
   - Project images and videos go in the  images/  folder.
   - Certificate / badge images go in the  certificates/  folder.
   - In this file, point to them with a forward slash, e.g.
        image: "images/askwhiz.png"
        video: "images/askwhiz.mp4"
     (Always use forward slashes "/", never backslashes "\",
      or they will break on GitHub Pages.)
   - A project can use a video, an image, or both:
        • video only  → the clip plays (muted, looping) while on screen.
        • image only  → a still preview shows.
        • both        → the image is the poster frame before the video plays.
   - If a file isn't there yet, a tidy placeholder shows instead,
     so nothing ever looks broken.

   HOW LINKS WORK
   --------------
   - Paste a full URL, e.g. "https://github.com/you/repo".
   - Leave it as "" (empty) and the button simply won't show.
   ============================================================ */


/* ---- Your name and contact details ---- */
const PROFILE = {
  name: "Mel John Macabenta",
  email: "meljohnmacabenta@gmail.com",
  github: "https://github.com/Lumerurin",
  linkedin: "https://www.linkedin.com/in/mel-john-macabenta-43a6a1266/"
};


/* ---- PROJECTS ----
   The first one in this list shows first on the page.
   To add a new project later, copy the TEMPLATE at the bottom of
   this list, paste it in, and fill it in. */
const PROJECTS = [
  {
    title: "AskWhiz",
    subtitle: "Undergraduate thesis · Mapúa MCM",
    highlight: "Hybrid RAG + Claude Haiku 4.5",
    description: "A comparative study of nine retrieval-augmented generation (RAG) configurations for an institutional knowledge chatbot — three retrieval strategies across three large language models, scored with the RAGAS framework on 50 validated question–answer pairs. The Hybrid RAG + Claude Haiku 4.5 setup was the most reliable, and was deployed as a web chatbot answering real MMCM admissions and policy questions.",
    tags: ["RAG", "FastAPI", "OpenSearch", "BM25", "Anthropic API", "Render"],
    image: "images/askwhiz.png",
    video: "images/Askwhiz demo.mp4",
    link: { url: "", label: "Visit AskWhiz" }
  },
  {
    title: "Admission Chatbot (Margatron)",
    subtitle: "Mapúa Malayan Colleges Mindanao",
    highlight: "",
    description: "A web-hosted chatbot built to help prospective students with admission-related questions, with a friendly GUI and a focus on a smooth, self-serve experience.",
    tags: ["Chatbot", "Streamlit", "Python"],
    image: "images/margatron.png",
    video: "images/Margatron.mp4",
    link: { url: "https://margatron-admissionbuddy754.streamlit.app/", label: "Visit website" }
  },
  {
    title: "Lyla's: Smart Inventory & Sales",
    subtitle: "Lyla's Cakes, Pastries & Breads",
    highlight: "",
    description: "A user-friendly platform that automates sales, inventory, and transaction management to streamline day-to-day operations.",
    tags: ["Inventory", "Sales", "Web"],
    image: "images/lylas.png",
    video: "images/lylas-project.mp4",
    link: { url: "https://github.com/Lumerurin/Lylas-Smart-Inventory-Sales", label: "Visit repo" }
  },
  {
    title: "Bike Shop Inventory Management",
    subtitle: "Jolen's Bike Shop",
    highlight: "",
    description: "An inventory and operations system with a simple, approachable interface, built to help the client manage stock with ease.",
    tags: ["Inventory", "Desktop app"],
    image: "images/bikeshop.png",
    video: "images/BikeShopManagement.mp4",
    link: { url: "https://github.com/MeruMeru09/BikeShopManagement.git", label: "Download project" }
  },
  {
    title: "Purrfect Hit",
    subtitle: "Personal project",
    highlight: "",
    description: "A fast-paced, upbeat Python game designed to sharpen hand–eye coordination and reaction time.",
    tags: ["Python", "Game"],
    image: "images/purrfect-hit.png",
    video: "images/Purrfect-hit.mp4",
    link: { url: "https://github.com/Lumerurin/Purr-fect-Hit.git", label: "Download project" }
  }
  

  /* ---- TEMPLATE: copy from the comma above, paste below, and fill in ----
  ,{
    title: "Project name",
    subtitle: "Where / what it was for",
    highlight: "",
    description: "One short paragraph on what it does and your role.",
    tags: ["Tag", "Tag"],
    image: "images/your-file.png",
    video: "",
    link: { url: "", label: "View project" }
  }
  */
];


/* ---- CERTIFICATIONS & BADGES ----
   type: "badge"        → a verifiable badge (shows a "Verify" link)
   type: "certificate"  → a certificate image (click to enlarge)
   type: "both"         → has both: the image is the certificate you can
                          enlarge, and "verify" is the badge link.
   Order top-to-bottom = most relevant first. */
const CERTIFICATIONS = [
  {
    title: "AWS Certified AI Practitioner",
    issuer: "AWS",
    date: "Feb 2026",
    type: "badge",
    image: "certificates/aws-certified-ai-practitioner.png",
    verify: "https://www.credly.com/badges/c7a2f48d-1554-4ef5-87f6-ae01abf55a18/public_url"
  },
  {
    title: "Generative AI Foundations",
    issuer: "AWS Academy",
    date: "Jan 2026",
    type: "badge",
    image: "certificates/aws-academy-graduate-generative-ai-foundations-trai.png",
    verify: "https://www.credly.com/badges/fb611bea-3b6e-4ee3-a094-07f6538aa6a8/public_url"
  },
  {
    title: "Cloud Operations",
    issuer: "AWS Academy",
    date: "Apr 2026",
    type: "badge",
    image: "certificates/aws-academy-graduate-cloud-operations-training-badge.png",
    verify: "https://www.credly.com/badges/8b775271-5183-4b27-b827-9f54ba46ff28/public_url"
  },
  {
    title: "Cloud Foundations",
    issuer: "AWS Academy",
    date: "Oct 2025",
    type: "badge",
    image: "certificates/aws-academy-graduate-cloud-foundations-training-badge.png",
    verify: "https://www.credly.com/badges/110d93ef-52f5-41c4-8403-afd5b1311ec0/public_url"
  },
  {
    title: "Conduct UX Research and Test Early Concepts",
    issuer: "Google · Coursera",
    date: "Jun 2025",
    type: "certificate",
    image: "certificates/coursera-conduct-ux-research.png",
    verify: "https://coursera.org/verify/FUGO8DWGNWE8"
  },
  {
    title: "Create High-Fidelity Designs and Prototypes in Figma",
    issuer: "Google · Coursera",
    date: "Jun 2025",
    type: "certificate",
    image: "certificates/coursera-high-fidelity-figma.png",
    verify: "https://coursera.org/verify/HOKIKUN4V58E"
  },
  {
    title: "Build Wireframes and Low-Fidelity Prototypes",
    issuer: "Google · Coursera",
    date: "Jun 2025",
    type: "certificate",
    image: "certificates/coursera-build-wireframes.png",
    verify: "https://coursera.org/verify/3Q9VVGZ5LMQL"
  },
  {
    title: "Microsoft Office Specialist: Excel 2019 Associate",
    issuer: "Microsoft",
    date: "Sep 2023",
    type: "both",
    image: "certificates/Excel 2019 Associate_page-0001.jpg",
    verify: "https://www.credly.com/badges/df54e140-73d6-4d29-871d-842ab1526a3e/public_url"
  }

  /* ---- TEMPLATE ----
  ,{
    title: "Credential name",
    issuer: "Who issued it",
    date: "Mon Year",
    type: "badge",
    image: "certificates/your-file.png",
    verify: ""
  }
  */
];
