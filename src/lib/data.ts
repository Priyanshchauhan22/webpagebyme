import type { LucideIcon } from "lucide-react";
import { Atom, BrainCircuit, Dna, FlaskConical } from "lucide-react";

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi: string;
  fullText: string;
};

export const publications: Publication[] = [
  {
    id: "pub1",
    title: "The Role of Quantum Entanglement in Neural Information Processing",
    authors: ["Professor Eva Rostova", "John Doe", "Jane Smith"],
    journal: "Journal of Cognitive Neuroscience",
    year: 2023,
    doi: "10.1162/jocn_a_01234",
    fullText: `Abstract: This paper explores the theoretical framework for quantum entanglement as a mechanism for long-range correlations in neural networks. We propose a model where astrocytes mediate entanglement between distant neurons, potentially explaining phenomena like binding and consciousness. Methods: We developed a computational model simulating quantum interactions in a simplified cortical column. Results: Our simulations show that introducing quantum entanglement significantly increases the network's capacity for complex pattern recognition and information integration compared to purely classical models. Discussion: The implications of these findings are profound, suggesting a fundamental revision of our understanding of brain function. We discuss potential experimental verifications using advanced neuroimaging and quantum measurement techniques. Conclusion: While speculative, the quantum brain hypothesis offers compelling explanations for several neurological mysteries and opens up new avenues for research into the nature of consciousness.`,
  },
  {
    id: "pub2",
    title: "CRISPR-Cas9 Mediated Gene Editing for Neurodegenerative Diseases",
    authors: ["Professor Eva Rostova", "Michael Lee", "Sarah Brown"],
    journal: "Nature Biotechnology",
    year: 2022,
    doi: "10.1038/s41587-022-01234-5",
    fullText: `Abstract: Neurodegenerative diseases such as Alzheimer's and Parkinson's pose a significant challenge to modern medicine. This study investigates the therapeutic potential of CRISPR-Cas9 gene editing to correct genetic defects associated with these conditions. Methods: We utilized an adeno-associated virus (AAV) vector to deliver the CRISPR-Cas9 system into the brains of mouse models with familial Alzheimer's disease. The system was designed to excise a mutated portion of the amyloid precursor protein (APP) gene. Results: Treated mice showed a significant reduction in amyloid plaque formation, improved cognitive function in maze tests, and restoration of normal synaptic activity. No significant off-target effects were detected. Discussion: This study provides a proof-of-concept for the use of in-vivo gene editing as a viable treatment for neurodegenerative diseases. We address the challenges of delivery, efficiency, and long-term safety that need to be overcome before human trials can be considered. Conclusion: CRISPR-Cas9 gene editing represents a promising frontier in the fight against neurodegenerative disorders.`,
  },
  {
    id: "pub3",
    title: "Synthetic Biology Approaches to Creating Artificial Neural Networks",
    authors: ["Professor Eva Rostova", "Chen Wang", "Emily Johnson"],
    journal: "Cell Systems",
    year: 2021,
    doi: "10.1016/j.cels.2021.01.001",
    fullText: `Abstract: This paper details our efforts in constructing biological computing devices using synthetic gene circuits. We engineered Escherichia coli to function as logic gates (AND, OR, NOT) that respond to specific chemical inputs. Methods: We designed and synthesized gene circuits using standard BioBrick parts. These circuits were then transformed into E. coli, and their logical function was validated using fluorescence reporters. Results: We successfully demonstrated the creation of all basic logic gates. Furthermore, we combined these gates to create a simple biological half-adder, capable of performing binary addition. Discussion: The development of reliable biological computing components opens the door to creating complex 'bio-computers' for applications in smart therapeutics, environmental sensing, and bioremediation. We discuss the current limitations, including signal propagation time and metabolic load. Conclusion: Synthetic biology provides a powerful toolkit for engineering life itself, and our work contributes a fundamental step towards creating autonomous, cell-based computational systems.`,
  },
];

export type ResearchTheme = {
  title: string;
  description: string;
  Icon: LucideIcon;
  projects: string[];
};

export const researchThemes: ResearchTheme[] = [
  {
    title: "Quantum Neuroscience",
    description: "Investigating the potential role of quantum phenomena, such as entanglement and superposition, in cognitive functions and consciousness.",
    Icon: Atom,
    projects: [
      "Modeling quantum computation in microtubules",
      "Experimental search for quantum effects in ion channels",
      "Theoretical frameworks for a quantum theory of mind",
    ],
  },
  {
    title: "Computational Genomics",
    description: "Utilizing high-throughput sequencing and computational analysis to understand the genetic underpinnings of complex traits and diseases.",
    Icon: Dna,
    projects: [
      "GWAS of neurological disorders",
      "Single-cell transcriptomics of brain tissue",
      "Epigenetic modifications in learning and memory",
    ],
  },
  {
    title: "Synthetic Biology",
    description: "Engineering novel biological systems and organisms for applications in medicine, energy, and environmental science.",
    Icon: FlaskConical,
    projects: [
      "Designing smart probiotics for targeted drug delivery",
      "Creating biosensors for environmental toxins",
      "Engineering microorganisms for biofuel production",
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Developing and applying advanced AI and machine learning models to analyze complex biological data and model neural systems.",
    Icon: BrainCircuit,
    projects: [
      "Deep learning for medical image analysis",
      "Reinforcement learning models of decision making",
      "Generative models for protein design",
    ],
  },
];

export const professorInfo = {
  name: "Professor Eva Rostova",
  photoUrl: "https://placehold.co/400x400.png",
  title: "Principal Investigator",
  researchFields: ["Quantum Neuroscience", "Synthetic Biology", "Computational Genomics"],
  biography: `Dr. Eva Rostova is a visionary leader at the intersection of biology, physics, and computer science. With over 20 years of experience, her pioneering work has challenged conventional boundaries and opened up new frontiers in our understanding of life itself. After receiving her Ph.D. in Biophysics from MIT, she held postdoctoral positions at Stanford and the Max Planck Institute before establishing the Research Hub.

Her research is driven by a singular, audacious question: can we decode the fundamental principles of life and use them to engineer a better future? This has led her lab to pursue a diverse portfolio of projects, from exploring the quantum underpinnings of consciousness to designing synthetic organisms for therapeutic applications.

Dr. Rostova is a recipient of numerous awards, including the Pioneer Award and the Breakthrough Prize. She has published over 150 papers in leading journals and is a passionate advocate for interdisciplinary research and science communication. She believes that the greatest discoveries of the 21st century will be made at the nexus of different fields.`,
};