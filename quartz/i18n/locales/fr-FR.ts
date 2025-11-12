import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Sans titre",
    description: "aucune description fournie",
  },
  components: {
    callout: {
      note: "Note",
      abstract: "Résumé",
      info: "Info",
      todo: "À faire",
      tip: "conseil",
      success: "Succès",
      question: "Question",
      warning: "avertissement",
      failure: "Échec",
      danger: "danger",
      bug: "bogue",
      example: "exemple",
      quote: "citation",
    },
    backlinks: {
      title: "Liens retour",
      noBacklinksFound: "aucun lien retour trouvé",
    },
    themeToggle: {
      lightMode: "Mode clair",
      darkMode: "Mode sombre",
    },
    readerMode: {
      title: "Mode lecture",
    },
    explorer: {
      title: "explorateur",
    },
    footer: {
      createdWith: "créé avec",
    },
    graph: {
      title: "Vue Graphique",
    },
    recentNotes: {
      title: "Notes Récentes",
      seeRemainingMore: ({ remaining }) => `Voir ${remaining} de plus →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transclusion de ${targetSlug}`,
      linkToOriginal: "Lien vers l'original",
    },
    search: {
      title: "recherche",
      searchBarPlaceholder: "rechercher quelque chose",
    },
    tableOfContents: {
      title: "table des matières",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} min de lecture`,
    },
    aboutMe: {
      title: "au sujet de moi!",
    }
  },
  pages: {
    rss: {
      recentNotes: "Notes récentes",
      lastFewNotes: ({ count }) => `Les dernières ${count} notes`,
    },
    error: {
      title: "Introuvable",
      notFound: "cette page est soit privée, soit elle n'existe pas.",
      home: "Retour à la page d'accueil",
    },
    folderContent: {
      folder: "dossier",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 élément sous ce dossier." : `${count} éléments sous ce dossier.`,
    },
    tagContent: {
      tag: "Étiquette",
      tagIndex: "Index des étiquettes",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 élément avec cette étiquette." : `${count} éléments avec cette étiquette.`,
      showingFirst: ({ count }) => `affichage des premières ${count} étiquettes.`,
      totalTags: ({ count }) => `Trouvé ${count} étiquettes au total.`,
    },
  },
} as const satisfies Translation
