import { 
  CaseSensitive, 
  Languages, 
  Sigma, 
  Dna, 
  FlaskConical, 
  Atom, 
  ScrollText, 
  Globe 
} from "lucide-react";

export const MATTERS_MOCK = [
  {
    id: "lp",
    title: "Língua Portuguesa",
    bgColor: "literatura",
    icon: CaseSensitive,
    submatters: [
      { 
        id: "lp-1", 
        title: "Gramática", 
        bgColor: "literatura", 
        icon: CaseSensitive,
        lessonTitle: "Sintaxe e Concordância Verbal",
        description: "Nesta aula, analisaremos a estrutura das orações e as regras essenciais de concordância para garantir a clareza e correção gramatical em seus textos.",
        videoUrl: "https://www.youtube.com/embed/exemplo-lp",
        ebookUrl: "/ebooks/lp-gramatica.pdf"
      },
      { id: "lp-2", title: "Literatura", bgColor: "literatura", icon: CaseSensitive, lessonTitle: "Escolas Literárias", description: "Um resumo das principais eras literárias.", videoUrl: "", ebookUrl: "" },
      { id: "lp-3", title: "Interpretação", bgColor: "literatura", icon: CaseSensitive, lessonTitle: "Análise Textual", description: "Técnicas de compreensão de texto.", videoUrl: "", ebookUrl: "" }
    ]
  },
  {
    id: "ing",
    title: "Língua Inglesa",
    bgColor: "ingles",
    icon: Languages,
    submatters: [
      { 
        id: "ing-1", 
        title: "Vocabulary", 
        bgColor: "ingles", 
        icon: Languages,
        lessonTitle: "Essential Business Vocabulary",
        description: "Aprenda os termos mais comuns utilizados no ambiente corporativo internacional.",
        videoUrl: "https://www.youtube.com/embed/exemplo-ing",
        ebookUrl: "/ebooks/ing-vocab.pdf"
      }
    ]
  },
  {
    id: "esp",
    title: "Língua Espanhola",
    bgColor: "espanhol",
    icon: Languages,
    submatters: [
      { 
        id: "esp-1", 
        title: "Vocabulario", 
        bgColor: "espanhol", 
        icon: Languages,
        lessonTitle: "Falsos Amigos (Heterosemánticos)",
        description: "Cuidado! Aprenda as palavras que parecem português mas têm significados completamente diferentes em espanhol.",
        videoUrl: "https://www.youtube.com/embed/exemplo-esp",
        ebookUrl: "/ebooks/esp-vocab.pdf"
      }
    ]
  },
  {
    id: "mat",
    title: "Matemática",
    bgColor: "matematica",
    icon: Sigma,
    submatters: [
      { 
        id: "mat-3", 
        title: "Matemática Financeira (m e j)", 
        bgColor: "matematica", 
        icon: Sigma,
        lessonTitle: "Cálculo de Montante e Juros",
        description: "Domine as fórmulas fundamentais: entenda como o capital se transforma em montante (m) através do acúmulo de juros (j) simples e compostos.",
        videoUrl: "https://www.youtube.com/embed/exemplo-mat",
        ebookUrl: "/ebooks/mat-financeira.pdf"
      },
      { id: "mat-1", title: "Álgebra", bgColor: "matematica", icon: Sigma, lessonTitle: "Equações de 2º Grau", description: "Resolução de equações e Bhaskara.", videoUrl: "", ebookUrl: "" }
    ]
  },
  {
    id: "bio",
    title: "Biologia",
    bgColor: "biologia",
    icon: Dna,
    submatters: [
      { 
        id: "bio-1", 
        title: "Citologia", 
        bgColor: "biologia", 
        icon: Dna,
        lessonTitle: "Estrutura das Células Eucarióticas",
        description: "Um mergulho nas organelas celulares e suas funções vitais para a manutenção da vida.",
        videoUrl: "https://www.youtube.com/embed/exemplo-bio",
        ebookUrl: "/ebooks/bio-celulas.pdf"
      }
    ]
  },
  {
    id: "qui",
    title: "Química",
    bgColor: "quimica",
    icon: FlaskConical,
    submatters: [
      { 
        id: "qui-1", 
        title: "Química Orgânica", 
        bgColor: "quimica", 
        icon: FlaskConical,
        lessonTitle: "Cadeias Carbônicas",
        description: "Estudo das ligações do carbono e a classificação das cadeias orgânicas.",
        videoUrl: "https://www.youtube.com/embed/exemplo-qui",
        ebookUrl: "/ebooks/qui-organica.pdf"
      }
    ]
  },
  {
    id: "fis",
    title: "Física",
    bgColor: "fisica",
    icon: Atom,
    submatters: [
      { 
        id: "fis-1", 
        title: "Mecânica", 
        bgColor: "fisica", 
        icon: Atom,
        lessonTitle: "Leis de Newton",
        description: "A base da física clássica: inércia, dinâmica e ação e reação explicadas de forma prática.",
        videoUrl: "https://www.youtube.com/embed/exemplo-fis",
        ebookUrl: "/ebooks/fis-newton.pdf"
      }
    ]
  },
  {
    id: "his",
    title: "História",
    bgColor: "historia",
    icon: ScrollText,
    submatters: [
      { 
        id: "his-1", 
        title: "História do Brasil", 
        bgColor: "historia", 
        icon: ScrollText,
        lessonTitle: "Brasil Colônia",
        description: "Entenda o ciclo do açúcar, a escravidão e os movimentos de resistência no Brasil colonial.",
        videoUrl: "https://www.youtube.com/embed/exemplo-his",
        ebookUrl: "/ebooks/his-brasil.pdf"
      }
    ]
  },
  {
    id: "geo",
    title: "Geografia",
    bgColor: "geografia",
    icon: Globe,
    submatters: [
      { 
        id: "geo-2", 
        title: "Geopolítica", 
        bgColor: "geografia", 
        icon: Globe,
        lessonTitle: "Globalização e Blocos Econômicos",
        description: "Como a economia mundial se integra e o papel dos grandes blocos como UE e Mercosul.",
        videoUrl: "https://www.youtube.com/embed/exemplo-geo",
        ebookUrl: "/ebooks/geo-globalizacao.pdf"
      }
    ]
  }
];