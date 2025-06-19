export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    liveDemoLink?: string; // Optionnel
    imageUrls?: string[]; // Pour les captures d'écran
  }