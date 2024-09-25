// List of sentences
const sentences = [
    {
        text: "La neige blanche recouvre le sol.",
        words: [
            { word: "La", type: null },
            { word: "neige", type: "nom" },
            { word: "blanche", type: "adjectif" },
            { word: "recouvre", type: "verbe" },
            { word: "le", type: null },
            { word: "sol", type: "nom" },
        ]
    },
    {
        text: "Les élèves étudient attentivement pour l'examen.",
        words: [
            { word: "Les", type: null },
            { word: "élèves", type: "nom" },
            { word: "étudient", type: "verbe" },
            { word: "attentivement", type: "adverbe" },
            { word: "pour", type: null },
            { word: "l'", type: null },
            { word: "examen", type: "nom" },
        ]
    },
    {
        text: "Les élèves respectent les règles de la classe.",
        words: [
            { word: "Les", type: null },
            { word: "élèves", type: "nom" },
            { word: "respectent", type: "verbe" },
            { word: "les", type: null },
            { word: "règles", type: "nom" },
            { word: "de", type: null },
            { word: "la", type: null },
            { word: "classe", type: "nom" }
        ]
    },
    {
        text: "La démocratie permet à chacun de s'exprimer.",
        words: [
            { word: "La", type: null },
            { word: "démocratie", type: "nom" },
            { word: "permet", type: "verbe" },
            { word: "à", type: null },
            { word: "chacun", type: "nom" },
            { word: "de", type: null },
            { word: "s'exprimer", type: "verbe" }
        ]
    },
    {
        text: "Le gouvernement débat de nouvelles lois.",
        words: [
            { word: "Le", type: null },
            { word: "gouvernement", type: "nom" },
            { word: "débat", type: "verbe" },
            { word: "de", type: null },
            { word: "nouvelles", type: "adjectif" },
            { word: "lois", type: "nom" }
        ]
    },
    {
        text: "Les citoyens votent lors des élections nationales.",
        words: [
            { word: "Les", type: null },
            { word: "citoyens", type: "nom" },
            { word: "votent", type: "verbe" },
            { word: "lors", type: null },
            { word: "des", type: null },
            { word: "élections", type: "nom" },
            { word: "nationales", type: "adjectif" }
        ]
    },
    {
        text: "La Charte des droits protège les libertés.",
        words: [
            { word: "La", type: null },
            { word: "Charte", type: "nom" },
            { word: "des", type: null },
            { word: "droits", type: "nom" },
            { word: "protège", type: "verbe" },
            { word: "les", type: null },
            { word: "libertés", type: "nom" }
        ]
    },
    {
        text: "Les enfants jouent au parc après l'école.",
        words: [
            { word: "Les", type: null },
            { word: "enfants", type: "nom" },
            { word: "jouent", type: "verbe" },
            { word: "au", type: null },
            { word: "parc", type: "nom" },
            { word: "après", type: null },
            { word: "l'école", type: "nom" }
        ]
    },
    {
        text: "Le professeur explique la leçon en classe.",
        words: [
            { word: "Le", type: null },
            { word: "professeur", type: "nom" },
            { word: "explique", type: "verbe" },
            { word: "la", type: null },
            { word: "leçon", type: "nom" },
            { word: "en", type: null },
            { word: "classe", type: "nom" }
        ]
    },
    {
        text: "Les provinces ont leur propre gouvernement.",
        words: [
            { word: "Les", type: null },
            { word: "provinces", type: "nom" },
            { word: "ont", type: "verbe" },
            { word: "leur", type: null },
            { word: "propre", type: "adjectif" },
            { word: "gouvernement", type: "nom" }
        ]
    },
    {
        text: "La justice est un droit fondamental.",
        words: [
            { word: "La", type: null },
            { word: "justice", type: "nom" },
            { word: "est", type: "verbe" },
            { word: "un", type: null },
            { word: "droit", type: "nom" },
            { word: "fondamental", type: "adjectif" }
        ]
    },
    {
        text: "Les élèves apprennent l'histoire du Canada.",
        words: [
            { word: "Les", type: null },
            { word: "élèves", type: "nom" },
            { word: "apprennent", type: "verbe" },
            { word: "l'", type: null },
            { word: "histoire", type: "nom" },
            { word: "du", type: null },
            { word: "Canada", type: "nom" }
        ]
    },
    {
        text: "Le vent souffle fort dans les arbres.",
        words: [
            { word: "Le", type: null },
            { word: "vent", type: "nom" },
            { word: "souffle", type: "verbe" },
            { word: "fort", type: "adjectif" },
            { word: "dans", type: null },
            { word: "les", type: null },
            { word: "arbres", type: "nom" }
        ]
    },
    {
        text: "La rivière coule lentement à travers la ville.",
        words: [
            { word: "La", type: null },
            { word: "rivière", type: "nom" },
            { word: "coule", type: "verbe" },
            { word: "lentement", type: "adverbe" },
            { word: "à", type: null },
            { word: "travers", type: null },
            { word: "la", type: null },
            { word: "ville", type: "nom" }
        ]
    },
    {
        text: "Les citoyens canadiens jouissent de nombreux droits.",
        words: [
            { word: "Les", type: null },
            { word: "citoyens", type: "nom" },
            { word: "canadiens", type: "adjectif" },
            { word: "jouissent", type: "verbe" },
            { word: "de", type: null },
            { word: "nombreux", type: "adjectif" },
            { word: "droits", type: "nom" }
        ]
    },
    {
        text: "La montagne est magnifique en hiver.",
        words: [
            { word: "La", type: null },
            { word: "montagne", type: "nom" },
            { word: "est", type: "verbe" },
            { word: "magnifique", type: "adjectif" },
            { word: "en", type: null },
            { word: "hiver", type: "nom" }
        ]
    },
    {
        text: "Le soleil brille dans le ciel bleu.",
        words: [
            { word: "Le", type: null },
            { word: "soleil", type: "nom" },
            { word: "brille", type: "verbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "ciel", type: "nom" },
            { word: "bleu", type: "adjectif" }
        ]
    },
    {
        text: "Les élèves travaillent en groupe pour le projet.",
        words: [
            { word: "Les", type: null },
            { word: "élèves", type: "nom" },
            { word: "travaillent", type: "verbe" },
            { word: "en", type: null },
            { word: "groupe", type: "nom" },
            { word: "pour", type: null },
            { word: "le", type: null },
            { word: "projet", type: "nom" }
        ]
    },
    {
        text: "Les arbres verts dansent dans le vent.",
        words: [
            { word: "Les", type: null },
            { word: "arbres", type: "nom" },
            { word: "verts", type: "adjectif" },
            { word: "dansent", type: "verbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "vent", type: "nom" }
        ]
    },
    {
        text: "Les oiseaux chantent joyeusement dans les arbres.",
        words: [
            { word: "Les", type: null },
            { word: "oiseaux", type: "nom" },
            { word: "chantent", type: "verbe" },
            { word: "joyeusement", type: "adverbe" },
            { word: "dans", type: null },
            { word: "les", type: null },
            { word: "arbres", type: "nom" }
        ]
    },
    {
        text: "Le Canada a une histoire riche et variée.",
        words: [
            { word: "Le", type: null },
            { word: "Canada", type: "nom" },
            { word: "a", type: "verbe" },
            { word: "une", type: null },
            { word: "histoire", type: "nom" },
            { word: "riche", type: "adjectif" },
            { word: "et", type: null },
            { word: "variée", type: "adjectif" }
        ]
    },
    {
        text: "Les montagnes enneigées attirent de nombreux visiteurs.",
        words: [
            { word: "Les", type: null },
            { word: "montagnes", type: "nom" },
            { word: "enneigées", type: "adjectif" },
            { word: "attirent", type: "verbe" },
            { word: "de", type: null },
            { word: "nombreux", type: "adjectif" },
            { word: "visiteurs", type: "nom" }
        ]
    },
    {
        text: "Les étudiants recherchent des informations sur les droits civiques.",
        words: [
            { word: "Les", type: null },
            { word: "étudiants", type: "nom" },
            { word: "recherchent", type: "verbe" },
            { word: "des", type: null },
            { word: "informations", type: "nom" },
            { word: "sur", type: null },
            { word: "les", type: null },
            { word: "droits", type: "nom" },
            { word: "civiques", type: "adjectif" }
        ]
    },
    {
        text: "Les cours d'eau traversent les paysages naturels.",
        words: [
            { word: "Les", type: null },
            { word: "cours", type: "nom" },
            { word: "d'eau", type: "nom" },
            { word: "traversent", type: "verbe" },
            { word: "les", type: null },
            { word: "paysages", type: "nom" },
            { word: "naturels", type: "adjectif" }
        ]
    },
    {
        text: "L'économie canadienne dépend des ressources naturelles.",
        words: [
            { word: "L'", type: null },
            { word: "économie", type: "nom" },
            { word: "canadienne", type: "adjectif" },
            { word: "dépend", type: "verbe" },
            { word: "des", type: null },
            { word: "ressources", type: "nom" },
            { word: "naturelles", type: "adjectif" }
        ]
    },
    {
        text: "Les élèves discutent de la culture des Premières Nations.",
        words: [
            { word: "Les", type: null },
            { word: "élèves", type: "nom" },
            { word: "discutent", type: "verbe" },
            { word: "de", type: null },
            { word: "la", type: null },
            { word: "culture", type: "nom" },
            { word: "des", type: null },
            { word: "Premières", type: "adjectif" },
            { word: "Nations", type: "nom" }
        ]
    },
    {
        text: "Les droits des enfants sont protégés par des lois.",
        words: [
            { word: "Les", type: null },
            { word: "droits", type: "nom" },
            { word: "des", type: null },
            { word: "enfants", type: "nom" },
            { word: "sont", type: "verbe" },
            { word: "protégés", type: "verbe" },
            { word: "par", type: null },
            { word: "des", type: null },
            { word: "lois", type: "nom" }
        ]
    },
    {
        text: "Les citoyens suivent les lois du pays.",
        words: [
            { word: "Les", type: null },
            { word: "citoyens", type: "nom" },
            { word: "suivent", type: "verbe" },
            { word: "les", type: null },
            { word: "lois", type: "nom" },
            { word: "du", type: null },
            { word: "pays", type: "nom" }
        ]
    },
    {
        text: "Le premier ministre est le chef du gouvernement.",
        words: [
            { word: "Le", type: null },
            { word: "premier", type: "adjectif" },
            { word: "ministre", type: "nom" },
            { word: "est", type: "verbe" },
            { word: "le", type: null },
            { word: "chef", type: "nom" },
            { word: "du", type: null },
            { word: "gouvernement", type: "nom" }
        ]
    },
    {
        text: "La liberté d'expression est un droit important.",
        words: [
            { word: "La", type: null },
            { word: "liberté", type: "nom" },
            { word: "d'expression", type: "nom" },
            { word: "est", type: "verbe" },
            { word: "un", type: null },
            { word: "droit", type: "nom" },
            { word: "important", type: "adjectif" }
        ]
    },
    {
        text: "Le Canada est un pays multiculturel.",
        words: [
            { word: "Le", type: null },
            { word: "Canada", type: "nom" },
            { word: "est", type: "verbe" },
            { word: "un", type: null },
            { word: "pays", type: "nom" },
            { word: "multiculturel", type: "adjectif" }
        ]
    },
    {
        text: "Les élections permettent aux citoyens de choisir leurs dirigeants.",
        words: [
            { word: "Les", type: null },
            { word: "élections", type: "nom" },
            { word: "permettent", type: "verbe" },
            { word: "aux", type: null },
            { word: "citoyens", type: "nom" },
            { word: "de", type: null },
            { word: "choisir", type: "verbe" },
            { word: "leurs", type: null },
            { word: "dirigeants", type: "nom" }
        ]
    },
    {
        text: "Les membres du parlement discutent des nouvelles lois.",
        words: [
            { word: "Les", type: null },
            { word: "membres", type: "nom" },
            { word: "du", type: null },
            { word: "parlement", type: "nom" },
            { word: "discutent", type: "verbe" },
            { word: "des", type: null },
            { word: "nouvelles", type: "adjectif" },
            { word: "lois", type: "nom" }
        ]
    },
    {
        text: "Les Premières Nations ont une histoire riche.",
        words: [
            { word: "Les", type: null },
            { word: "Premières", type: "adjectif" },
            { word: "Nations", type: "nom" },
            { word: "ont", type: "verbe" },
            { word: "une", type: null },
            { word: "histoire", type: "nom" },
            { word: "riche", type: "adjectif" }
        ]
    },
    {
        text: "Le Canada fait partie des Nations Unies.",
        words: [
            { word: "Le", type: null },
            { word: "Canada", type: "nom" },
            { word: "fait", type: "verbe" },
            { word: "partie", type: null },
            { word: "des", type: null },
            { word: "Nations", type: "nom" },
            { word: "Unies", type: "adjectif" }
        ]
    },
    {
        text: "Les droits de la personne sont protégés par la loi.",
        words: [
            { word: "Les", type: null },
            { word: "droits", type: "nom" },
            { word: "de", type: null },
            { word: "la", type: null },
            { word: "personne", type: "nom" },
            { word: "sont", type: "verbe" },
            { word: "protégés", type: "verbe" },
            { word: "par", type: null },
            { word: "la", type: null },
            { word: "loi", type: "nom" }
        ]
    },
    {
        text: "Les citoyens ont des droits et des responsabilités.",
        words: [
            { word: "Les", type: null },
            { word: "citoyens", type: "nom" },
            { word: "ont", type: "verbe" },
            { word: "des", type: null },
            { word: "droits", type: "nom" },
            { word: "et", type: null },
            { word: "des", type: null },
            { word: "responsabilités", type: "nom" }
        ]
    },
    {
        text: "Les services publics sont importants pour la communauté.",
        words: [
            { word: "Les", type: null },
            { word: "services", type: "nom" },
            { word: "publics", type: "adjectif" },
            { word: "sont", type: "verbe" },
            { word: "importants", type: "adjectif" },
            { word: "pour", type: null },
            { word: "la", type: null },
            { word: "communauté", type: "nom" }
        ]
    },
    {
        text: "Le gouvernement doit protéger les citoyens.",
        words: [
            { word: "Le", type: null },
            { word: "gouvernement", type: "nom" },
            { word: "doit", type: "verbe" },
            { word: "protéger", type: "verbe" },
            { word: "les", type: null },
            { word: "citoyens", type: "nom" }
        ]
    },
    // Simplified, kid-friendly sentences
    {
        text: "Le chat dort sous la chaise.",
        words: [
            { word: "Le", type: null },
            { word: "chat", type: "nom" },
            { word: "dort", type: "verbe" },
            { word: "sous", type: null },
            { word: "la", type: null },
            { word: "chaise", type: "nom" }
        ]
    },
    {
        text: "Il pleut aujourd'hui.",
        words: [
            { word: "Il", type: null },
            { word: "pleut", type: "verbe" },
            { word: "aujourd'hui", type: "adverbe" }
        ]
    },
    {
        text: "Le chien court dans le jardin.",
        words: [
            { word: "Le", type: null },
            { word: "chien", type: "nom" },
            { word: "court", type: "verbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "jardin", type: "nom" }
        ]
    },
    {
        text: "Les enfants aiment jouer au ballon.",
        words: [
            { word: "Les", type: null },
            { word: "enfants", type: "nom" },
            { word: "aiment", type: "verbe" },
            { word: "jouer", type: "verbe" },
            { word: "au", type: null },
            { word: "ballon", type: "nom" }
        ]
    },
    {
        text: "Le soleil brille dans le ciel.",
        words: [
            { word: "Le", type: null },
            { word: "soleil", type: "nom" },
            { word: "brille", type: "verbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "ciel", type: "nom" }
        ]
    },
    {
        text: "Elle mange une pomme.",
        words: [
            { word: "Elle", type: null },
            { word: "mange", type: "verbe" },
            { word: "une", type: null },
            { word: "pomme", type: "nom" }
        ]
    },
    {
        text: "Le lapin saute rapidement.",
        words: [
            { word: "Le", type: null },
            { word: "lapin", type: "nom" },
            { word: "saute", type: "verbe" },
            { word: "rapidement", type: "adverbe" }
        ]
    },
    {
        text: "La lune est belle ce soir.",
        words: [
            { word: "La", type: null },
            { word: "lune", type: "nom" },
            { word: "est", type: "verbe" },
            { word: "belle", type: "adjectif" },
            { word: "ce", type: null },
            { word: "soir", type: "nom" }
        ]
    },
    {
        text: "Les fleurs poussent au printemps.",
        words: [
            { word: "Les", type: null },
            { word: "fleurs", type: "nom" },
            { word: "poussent", type: "verbe" },
            { word: "au", type: null },
            { word: "printemps", type: "nom" }
        ]
    },
    {
        text: "Il fait chaud en été.",
        words: [
            { word: "Il", type: null },
            { word: "fait", type: "verbe" },
            { word: "chaud", type: "adjectif" },
            { word: "en", type: null },
            { word: "été", type: "nom" }
        ]
    },
    {
        text: "Elle lit un livre intéressant.",
        words: [
            { word: "Elle", type: null },
            { word: "lit", type: "verbe" },
            { word: "un", type: null },
            { word: "livre", type: "nom" },
            { word: "intéressant", type: "adjectif" }
        ]
    },
    {
        text: "Les oiseaux chantent dans les arbres.",
        words: [
            { word: "Les", type: null },
            { word: "oiseaux", type: "nom" },
            { word: "chantent", type: "verbe" },
            { word: "dans", type: null },
            { word: "les", type: null },
            { word: "arbres", type: "nom" }
        ]
    },
    {
        text: "Le maire organise une fête pour la communauté.",
        words: [
            { word: "Le", type: null },
            { word: "maire", type: "nom" },
            { word: "organise", type: "verbe" },
            { word: "une", type: null },
            { word: "fête", type: "nom" },
            { word: "pour", type: null },
            { word: "la", type: null },
            { word: "communauté", type: "nom" },
        ]
    },
    {
        text: "Les élèves étudient la géographie en classe.",
        words: [
            { word: "Les", type: null },
            { word: "élèves", type: "nom" },
            { word: "étudient", type: "verbe" },
            { word: "la", type: null },
            { word: "géographie", type: "nom" },
            { word: "en", type: null },
            { word: "classe", type: "nom" },
        ]
    },
    {
        text: "Le président visite les écoles de la région.",
        words: [
            { word: "Le", type: null },
            { word: "président", type: "nom" },
            { word: "visite", type: "verbe" },
            { word: "les", type: null },
            { word: "écoles", type: "nom" },
            { word: "de", type: null },
            { word: "la", type: null },
            { word: "région", type: "nom" },
        ]
    },
    {
        text: "Les lois protègent les droits des citoyens.",
        words: [
            { word: "Les", type: null },
            { word: "lois", type: "nom" },
            { word: "protègent", type: "verbe" },
            { word: "les", type: null },
            { word: "droits", type: "nom" },
            { word: "des", type: null },
            { word: "citoyens", type: "nom" },
        ]
    },
    {
        text: "Le parlement débat de nouvelles lois chaque semaine.",
        words: [
            { word: "Le", type: null },
            { word: "parlement", type: "nom" },
            { word: "débat", type: "verbe" },
            { word: "de", type: null },
            { word: "nouvelles", type: "adjectif" },
            { word: "lois", type: "nom" },
            { word: "chaque", type: null },
            { word: "semaine", type: "nom" },
        ]
    },
    {
        text: "Les citoyens votent lors des élections municipales.",
        words: [
            { word: "Les", type: null },
            { word: "citoyens", type: "nom" },
            { word: "votent", type: "verbe" },
            { word: "lors", type: null },
            { word: "des", type: null },
            { word: "élections", type: "nom" },
            { word: "municipales", type: "adjectif" },
        ]
    },
    {
        text: "Le gouverneur supervise les écoles de la province.",
        words: [
            { word: "Le", type: null },
            { word: "gouverneur", type: "nom" },
            { word: "supervise", type: "verbe" },
            { word: "les", type: null },
            { word: "écoles", type: "nom" },
            { word: "de", type: null },
            { word: "la", type: null },
            { word: "province", type: "nom" },
        ]
    },
    {
        text: "Les provinces ont leurs propres gouvernements.",
        words: [
            { word: "Les", type: null },
            { word: "provinces", type: "nom" },
            { word: "ont", type: "verbe" },
            { word: "leurs", type: null },
            { word: "propres", type: "adjectif" },
            { word: "gouvernements", type: "nom" },
        ]
    },
    {
        text: "Les droits de l'homme sont importants pour la société.",
        words: [
            { word: "Les", type: null },
            { word: "droits", type: "nom" },
            { word: "de", type: null },
            { word: "l'homme", type: "nom" },
            { word: "sont", type: "verbe" },
            { word: "importants", type: "adjectif" },
            { word: "pour", type: null },
            { word: "la", type: null },
            { word: "société", type: "nom" },
        ]
    },
    {
        text: "Le système éducatif aide les jeunes à apprendre.",
        words: [
            { word: "Le", type: null },
            { word: "système", type: "nom" },
            { word: "éducatif", type: "adjectif" },
            { word: "aide", type: "verbe" },
            { word: "les", type: null },
            { word: "jeunes", type: "nom" },
            { word: "à", type: null },
            { word: "apprendre", type: "verbe" },
        ]
    },
    {
        text: "Les lois locales régissent la vie quotidienne.",
        words: [
            { word: "Les", type: null },
            { word: "lois", type: "nom" },
            { word: "locales", type: "adjectif" },
            { word: "régissent", type: "verbe" },
            { word: "la", type: null },
            { word: "vie", type: "nom" },
            { word: "quotidienne", type: "adjectif" },
        ]
    },
    {
        text: "Le commerce aide l'économie de la région.",
        words: [
            { word: "Le", type: null },
            { word: "commerce", type: "nom" },
            { word: "aide", type: "verbe" },
            { word: "l'économie", type: "nom" },
            { word: "de", type: null },
            { word: "la", type: null },
            { word: "région", type: "nom" },
        ]
    },
    {
        text: "Les échanges culturels enrichissent la société.",
        words: [
            { word: "Les", type: null },
            { word: "échanges", type: "nom" },
            { word: "culturels", type: "adjectif" },
            { word: "enrichissent", type: "verbe" },
            { word: "la", type: null },
            { word: "société", type: "nom" },
        ]
    },
    {
        text: "Le développement durable protège l'environnement.",
        words: [
            { word: "Le", type: null },
            { word: "développement", type: "nom" },
            { word: "durable", type: "adjectif" },
            { word: "protège", type: "verbe" },
            { word: "l'environnement", type: "nom" },
        ]
    },
    {
        text: "Les innovations technologiques améliorent la vie quotidienne.",
        words: [
            { word: "Les", type: null },
            { word: "innovations", type: "nom" },
            { word: "technologiques", type: "adjectif" },
            { word: "améliorent", type: "verbe" },
            { word: "la", type: null },
            { word: "vie", type: "nom" },
            { word: "quotidienne", type: "adjectif" },
        ]
    },
    {
        text: "Les politiques publiques visent à aider les citoyens.",
        words: [
            { word: "Les", type: null },
            { word: "politiques", type: "nom" },
            { word: "publiques", type: "adjectif" },
            { word: "visent", type: "verbe" },
            { word: "à", type: null },
            { word: "aider", type: "verbe" },
            { word: "les", type: null },
            { word: "citoyens", type: "nom" },
        ]
    },
    {
        text: "Le commerce équitable soutient les producteurs locaux.",
        words: [
            { word: "Le", type: null },
            { word: "commerce", type: "nom" },
            { word: "équitable", type: "adjectif" },
            { word: "soutient", type: "verbe" },
            { word: "les", type: null },
            { word: "producteurs", type: "nom" },
            { word: "locaux", type: "adjectif" },
        ]
    },
    {
        text: "Les partenariats internationaux renforcent la coopération.",
        words: [
            { word: "Les", type: null },
            { word: "partenariats", type: "nom" },
            { word: "internationaux", type: "adjectif" },
            { word: "renforcent", type: "verbe" },
            { word: "la", type: null },
            { word: "coopération", type: "nom" },
        ]
    },
    {
        text: "Les droits de l'homme sont universels et inaliénables.",
        words: [
            { word: "Les", type: null },
            { word: "droits", type: "nom" },
            { word: "de", type: null },
            { word: "l'homme", type: "nom" },
            { word: "sont", type: "verbe" },
            { word: "universels", type: "adjectif" },
            { word: "et", type: null },
            { word: "inaliénables", type: "adjectif" },
        ]
    },

    // 18 Generic, Age-Appropriate Sentences
    {
        text: "Le chat dort sur le canapé confortable.",
        words: [
            { word: "Le", type: null },
            { word: "chat", type: "nom" },
            { word: "dort", type: "verbe" },
            { word: "sur", type: null },
            { word: "le", type: null },
            { word: "canapé", type: "nom" },
            { word: "confortable", type: "adjectif" },
        ]
    },
    {
        text: "Les enfants rient joyeusement dans la cour.",
        words: [
            { word: "Les", type: null },
            { word: "enfants", type: "nom" },
            { word: "rient", type: "verbe" },
            { word: "joyeusement", type: "adverbe" },
            { word: "dans", type: null },
            { word: "la", type: null },
            { word: "cour", type: "nom" },
        ]
    },
    {
        text: "La petite fille danse gracieusement sur la scène.",
        words: [
            { word: "La", type: null },
            { word: "petite", type: "adjectif" },
            { word: "fille", type: "nom" },
            { word: "danse", type: "verbe" },
            { word: "gracieusement", type: "adverbe" },
            { word: "sur", type: null },
            { word: "la", type: null },
            { word: "scène", type: "nom" },
        ]
    },
    {
        text: "Le soleil brille fort dans le ciel bleu.",
        words: [
            { word: "Le", type: null },
            { word: "soleil", type: "nom" },
            { word: "brille", type: "verbe" },
            { word: "fort", type: "adjectif" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "ciel", type: "nom" },
            { word: "bleu", type: "adjectif" },
        ]
    },
    {
        text: "Les fleurs colorées poussent dans le jardin.",
        words: [
            { word: "Les", type: null },
            { word: "fleurs", type: "nom" },
            { word: "colorées", type: "adjectif" },
            { word: "poussent", type: "verbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "jardin", type: "nom" },
        ]
    },
    {
        text: "L'oiseau chante doucement sur la branche.",
        words: [
            { word: "L'", type: null },
            { word: "oiseau", type: "nom" },
            { word: "chante", type: "verbe" },
            { word: "doucement", type: "adverbe" },
            { word: "sur", type: null },
            { word: "la", type: null },
            { word: "branche", type: "nom" },
        ]
    },
    {
        text: "Le professeur explique la leçon clairement.",
        words: [
            { word: "Le", type: null },
            { word: "professeur", type: "nom" },
            { word: "explique", type: "verbe" },
            { word: "la", type: null },
            { word: "leçon", type: "nom" },
            { word: "clairement", type: "adverbe" },
        ]
    },
    {
        text: "La rivière coule doucement à travers la forêt.",
        words: [
            { word: "La", type: null },
            { word: "rivière", type: "nom" },
            { word: "coule", type: "verbe" },
            { word: "doucement", type: "adverbe" },
            { word: "à", type: null },
            { word: "travers", type: null },
            { word: "la", type: null },
            { word: "forêt", type: "nom" },
        ]
    },
    {
        text: "Les étoiles brillent dans le ciel nocturne.",
        words: [
            { word: "Les", type: null },
            { word: "étoiles", type: "nom" },
            { word: "brillent", type: "verbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "ciel", type: "nom" },
            { word: "nocturne", type: "adjectif" },
        ]
    },
    {
        text: "La montagne enneigée est magnifique en hiver.",
        words: [
            { word: "La", type: null },
            { word: "montagne", type: "nom" },
            { word: "enneigée", type: "adjectif" },
            { word: "est", type: "verbe" },
            { word: "magnifique", type: "adjectif" },
            { word: "en", type: null },
            { word: "hiver", type: "nom" },
        ]
    },
    {
        text: "La rivière calme reflète le ciel bleu.",
        words: [
            { word: "La", type: null },
            { word: "rivière", type: "nom" },
            { word: "calme", type: "adjectif" },
            { word: "reflète", type: "verbe" },
            { word: "le", type: null },
            { word: "ciel", type: "nom" },
            { word: "bleu", type: "adjectif" },
        ]
    },
    {
        text: "Le livre intéressant captive les lecteurs.",
        words: [
            { word: "Le", type: null },
            { word: "livre", type: "nom" },
            { word: "intéressant", type: "adjectif" },
            { word: "captive", type: "verbe" },
            { word: "les", type: null },
            { word: "lecteurs", type: "nom" },
        ]
    },
    {
        text: "Les étoiles scintillent dans la nuit claire.",
        words: [
            { word: "Les", type: null },
            { word: "étoiles", type: "nom" },
            { word: "scintillent", type: "verbe" },
            { word: "dans", type: null },
            { word: "la", type: null },
            { word: "nuit", type: "nom" },
            { word: "claire", type: "adjectif" },
        ]
    },
    {
        text: "Le garçon courageux affronte ses peurs.",
        words: [
            { word: "Le", type: null },
            { word: "garçon", type: "nom" },
            { word: "courageux", type: "adjectif" },
            { word: "affronte", type: "verbe" },
            { word: "ses", type: null },
            { word: "peurs", type: "nom" },
        ]
    },
    {
        text: "La bibliothèque bien organisée facilite la recherche.",
        words: [
            { word: "La", type: null },
            { word: "bibliothèque", type: "nom" },
            { word: "bien", type: "adverbe" },
            { word: "organisée", type: "adjectif" },
            { word: "facilite", type: "verbe" },
            { word: "la", type: null },
            { word: "recherche", type: "nom" },
        ]
    },
    {
        text: "Les artistes talentueux créent des œuvres inspirantes.",
        words: [
            { word: "Les", type: null },
            { word: "artistes", type: "nom" },
            { word: "talentueux", type: "adjectif" },
            { word: "créent", type: "verbe" },
            { word: "des", type: null },
            { word: "œuvres", type: "nom" },
            { word: "inspirantes", type: "adjectif" },
        ]
    },
    {
        text: "Le jardin luxuriant abrite de nombreuses espèces.",
        words: [
            { word: "Le", type: null },
            { word: "jardin", type: "nom" },
            { word: "luxuriant", type: "adjectif" },
            { word: "abrite", type: "verbe" },
            { word: "de", type: null },
            { word: "nombreuses", type: "adjectif" },
            { word: "espèces", type: "nom" },
        ]
    },
    {
        text: "Le papillon coloré vole de fleur en fleur.",
        words: [
            { word: "Le", type: null },
            { word: "papillon", type: "nom" },
            { word: "coloré", type: "adjectif" },
            { word: "vole", type: "verbe" },
            { word: "de", type: null },
            { word: "fleur", type: "nom" },
            { word: "en", type: null },
            { word: "fleur", type: "nom" },
        ]
    },
    {
        text: "La montagne enneigée est magnifique en hiver.",
        words: [
            { word: "La", type: null },
            { word: "montagne", type: "nom" },
            { word: "enneigée", type: "adjectif" },
            { word: "est", type: "verbe" },
            { word: "magnifique", type: "adjectif" },
            { word: "en", type: null },
            { word: "hiver", type: "nom" },
        ]
    },
    {
        text: "Le vent fort souffle à travers les arbres.",
        words: [
            { word: "Le", type: null },
            { word: "vent", type: "nom" },
            { word: "fort", type: "adjectif" },
            { word: "souffle", type: "verbe" },
            { word: "à", type: null },
            { word: "travers", type: null },
            { word: "les", type: null },
            { word: "arbres", type: "nom" },
        ]
    },
    {
        text: "La rivière calme reflète le ciel bleu.",
        words: [
            { word: "La", type: null },
            { word: "rivière", type: "nom" },
            { word: "calme", type: "adjectif" },
            { word: "reflète", type: "verbe" },
            { word: "le", type: null },
            { word: "ciel", type: "nom" },
            { word: "bleu", type: "adjectif" },
        ]
    },
    {
        text: "Le livre intéressant captive les lecteurs.",
        words: [
            { word: "Le", type: null },
            { word: "livre", type: "nom" },
            { word: "intéressant", type: "adjectif" },
            { word: "captive", type: "verbe" },
            { word: "les", type: null },
            { word: "lecteurs", type: "nom" },
        ]
    },
    {
        text: "Le garçon courageux affronte ses peurs.",
        words: [
            { word: "Le", type: null },
            { word: "garçon", type: "nom" },
            { word: "courageux", type: "adjectif" },
            { word: "affronte", type: "verbe" },
            { word: "ses", type: null },
            { word: "peurs", type: "nom" },
        ]
    },
    {
        text: "La bibliothèque bien organisée facilite la recherche.",
        words: [
            { word: "La", type: null },
            { word: "bibliothèque", type: "nom" },
            { word: "bien", type: "adverbe" },
            { word: "organisée", type: "adjectif" },
            { word: "facilite", type: "verbe" },
            { word: "la", type: null },
            { word: "recherche", type: "nom" },
        ]
    },
    {
        text: "Les artistes talentueux créent des œuvres inspirantes.",
        words: [
            { word: "Les", type: null },
            { word: "artistes", type: "nom" },
            { word: "talentueux", type: "adjectif" },
            { word: "créent", type: "verbe" },
            { word: "des", type: null },
            { word: "œuvres", type: "nom" },
            { word: "inspirantes", type: "adjectif" },
        ]
    },
    {
        text: "Le jardin luxuriant abrite de nombreuses espèces.",
        words: [
            { word: "Le", type: null },
            { word: "jardin", type: "nom" },
            { word: "luxuriant", type: "adjectif" },
            { word: "abrite", type: "verbe" },
            { word: "de", type: null },
            { word: "nombreuses", type: "adjectif" },
            { word: "espèces", type: "nom" },
        ]
    },
    {
        text: "Le papillon coloré vole de fleur en fleur.",
        words: [
            { word: "Le", type: null },
            { word: "papillon", type: "nom" },
            { word: "coloré", type: "adjectif" },
            { word: "vole", type: "verbe" },
            { word: "de", type: null },
            { word: "fleur", type: "nom" },
            { word: "en", type: null },
            { word: "fleur", type: "nom" },
        ]
    },
    {
        text: "Le vent frais souffle sur la plage.",
        words: [
            { word: "Le", type: null },
            { word: "vent", type: "nom" },
            { word: "frais", type: "adjectif" },
            { word: "souffle", type: "verbe" },
            { word: "sur", type: null },
            { word: "la", type: null },
            { word: "plage", type: "nom" },
        ]
    },
    {
        text: "Les enfants heureux jouent dans le jardin.",
        words: [
            { word: "Les", type: null },
            { word: "enfants", type: "nom" },
            { word: "heureux", type: "adjectif" },
            { word: "jouent", type: "verbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "jardin", type: "nom" },
        ]
    },
    {
        text: "La lune brille dans la nuit claire.",
        words: [
            { word: "La", type: null },
            { word: "lune", type: "nom" },
            { word: "brille", type: "verbe" },
            { word: "dans", type: null },
            { word: "la", type: null },
            { word: "nuit", type: "nom" },
            { word: "claire", type: "adjectif" },
        ]
    },
    {
        text: "Le garçon rapide court dans le parc.",
        words: [
            { word: "Le", type: null },
            { word: "garçon", type: "nom" },
            { word: "rapide", type: "adjectif" },
            { word: "court", type: "verbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "parc", type: "nom" },
        ]
    },
    {
        text: "La pluie tombe doucement sur le toit.",
        words: [
            { word: "La", type: null },
            { word: "pluie", type: "nom" },
            { word: "tombe", type: "verbe" },
            { word: "doucement", type: "adverbe" },
            { word: "sur", type: null },
            { word: "le", type: null },
            { word: "toit", type: "nom" },
        ]
    },
    {
        text: "Le joueur talentueux marque un but.",
        words: [
            { word: "Le", type: null },
            { word: "joueur", type: "nom" },
            { word: "talentueux", type: "adjectif" },
            { word: "marque", type: "verbe" },
            { word: "un", type: null },
            { word: "but", type: "nom" },
        ]
    },
    {
        text: "Les oiseaux volent haut dans le ciel.",
        words: [
            { word: "Les", type: null },
            { word: "oiseaux", type: "nom" },
            { word: "volent", type: "verbe" },
            { word: "haut", type: "adjectif" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "ciel", type: "nom" },
        ]
    },
    {
        text: "La voiture rapide roule sur la route.",
        words: [
            { word: "La", type: null },
            { word: "voiture", type: "nom" },
            { word: "rapide", type: "adjectif" },
            { word: "roule", type: "verbe" },
            { word: "sur", type: null },
            { word: "la", type: null },
            { word: "route", type: "nom" },
        ]
    },
    {
        text: "Le bébé dort calmement dans son berceau.",
        words: [
            { word: "Le", type: null },
            { word: "bébé", type: "nom" },
            { word: "dort", type: "verbe" },
            { word: "calmement", type: "adverbe" },
            { word: "dans", type: null },
            { word: "son", type: null },
            { word: "berceau", type: "nom" },
        ]
    },
    {
        text: "Les feuilles tombent lentement des arbres.",
        words: [
            { word: "Les", type: null },
            { word: "feuilles", type: "nom" },
            { word: "tombent", type: "verbe" },
            { word: "lentement", type: "adverbe" },
            { word: "des", type: null },
            { word: "arbres", type: "nom" },
        ]
    },
    {
        text: "La voiture rouge roule rapidement sur l'autoroute.",
        words: [
            { word: "La", type: null },
            { word: "voiture", type: "nom" },
            { word: "rouge", type: "adjectif" },
            { word: "roule", type: "verbe" },
            { word: "rapidement", type: "adverbe" },
            { word: "sur", type: null },
            { word: "l'autoroute", type: "nom" },
        ]
    },
    {
        text: "Le vent doux souffle sur la prairie.",
        words: [
            { word: "Le", type: null },
            { word: "vent", type: "nom" },
            { word: "doux", type: "adjectif" },
            { word: "souffle", type: "verbe" },
            { word: "sur", type: null },
            { word: "la", type: null },
            { word: "prairie", type: "nom" },
        ]
    },
    {
        text: "Les enfants jouent avec leurs amis dans le parc.",
        words: [
            { word: "Les", type: null },
            { word: "enfants", type: "nom" },
            { word: "jouent", type: "verbe" },
            { word: "avec", type: null },
            { word: "leurs", type: null },
            { word: "amis", type: "nom" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "parc", type: "nom" },
        ]
    },
    {
        text: "La neige blanche recouvre le sol.",
        words: [
            { word: "La", type: null },
            { word: "neige", type: "nom" },
            { word: "blanche", type: "adjectif" },
            { word: "recouvre", type: "verbe" },
            { word: "le", type: null },
            { word: "sol", type: "nom" },
        ]
    },
    {
        text: "Le chien fidèle suit son maître partout.",
        words: [
            { word: "Le", type: null },
            { word: "chien", type: "nom" },
            { word: "fidèle", type: "adjectif" },
            { word: "suit", type: "verbe" },
            { word: "son", type: null },
            { word: "maître", type: "nom" },
            { word: "partout", type: "adjectif" },
        ]
    },
    {
        text: "La fleur rose pousse dans le jardin.",
        words: [
            { word: "La", type: null },
            { word: "fleur", type: "nom" },
            { word: "rose", type: "adjectif" },
            { word: "pousse", type: "verbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "jardin", type: "nom" },
        ]
    },
    {
        text: "Les arbres verts offrent de l'ombre au parc.",
        words: [
            { word: "Les", type: null },
            { word: "arbres", type: "nom" },
            { word: "verts", type: "adjectif" },
            { word: "offrent", type: "verbe" },
            { word: "de", type: null },
            { word: "l'", type: null },
            { word: "ombre", type: "nom" },
            { word: "au", type: null },
            { word: "parc", type: "nom" },
        ]
    },
    {
        text: "La voiture brille sous le soleil.",
        words: [
            { word: "La", type: null },
            { word: "voiture", type: "nom" },
            { word: "brille", type: "verbe" },
            { word: "sous", type: null },
            { word: "le", type: null },
            { word: "soleil", type: "nom" },
        ]
    },
    {
        text: "Les oiseaux chantent joyeusement dans les arbres.",
        words: [
            { word: "Les", type: null },
            { word: "oiseaux", type: "nom" },
            { word: "chantent", type: "verbe" },
            { word: "joyeusement", type: "adverbe" },
            { word: "dans", type: null },
            { word: "les", type: null },
            { word: "arbres", type: "nom" },
        ]
    },
    {
        text: "Le soleil se couche tôt en été.",
        words: [
            { word: "Le", type: null },
            { word: "soleil", type: "nom" },
            { word: "se", type: null },
            { word: "couche", type: "verbe" },
            { word: "tôt", type: "adjectif" },
            { word: "en", type: null },
            { word: "été", type: "nom" },
        ]
    },
    {
        text: "Les enfants lisent des livres intéressants.",
        words: [
            { word: "Les", type: null },
            { word: "enfants", type: "nom" },
            { word: "lisent", type: "verbe" },
            { word: "des", type: null },
            { word: "livres", type: "nom" },
            { word: "intéressants", type: "adjectif" },
        ]
    },
    {
        text: "La pluie tombe doucement sur le toit.",
        words: [
            { word: "La", type: null },
            { word: "pluie", type: "nom" },
            { word: "tombe", type: "verbe" },
            { word: "doucement", type: "adverbe" },
            { word: "sur", type: null },
            { word: "le", type: null },
            { word: "toit", type: "nom" },
        ]
    },
    {
        text: "Le garçon rapide attrape le ballon.",
        words: [
            { word: "Le", type: null },
            { word: "garçon", type: "nom" },
            { word: "rapide", type: "adjectif" },
            { word: "attrape", type: "verbe" },
            { word: "le", type: null },
            { word: "ballon", type: "nom" },
        ]
    },
    {
        text: "Les oiseaux migrateurs voyagent chaque année.",
        words: [
            { word: "Les", type: null },
            { word: "oiseaux", type: "nom" },
            { word: "migrateurs", type: "adjectif" },
            { word: "voyagent", type: "verbe" },
            { word: "chaque", type: null },
            { word: "année", type: "nom" },
        ]
    },
    {
        text: "La neige blanche recouvre le sol.",
        words: [
            { word: "La", type: null },
            { word: "neige", type: "nom" },
            { word: "blanche", type: "adjectif" },
            { word: "recouvre", type: "verbe" },
            { word: "le", type: null },
            { word: "sol", type: "nom" },
        ]
    },
    {
        text: "Le papillon vole de fleur en fleur.",
        words: [
            { word: "Le", type: null },
            { word: "papillon", type: "nom" },
            { word: "vole", type: "verbe" },
            { word: "de", type: null },
            { word: "fleur", type: "nom" },
            { word: "en", type: null },
            { word: "fleur", type: "nom" },
        ]
    },
    {
        text: "La lune éclaire la nuit sombre.",
        words: [
            { word: "La", type: null },
            { word: "lune", type: "nom" },
            { word: "éclaire", type: "verbe" },
            { word: "la", type: null },
            { word: "nuit", type: "nom" },
            { word: "sombre", type: "adjectif" },
        ]
    },
    {
        text: "Le chien fidèle suit son maître partout.",
        words: [
            { word: "Le", type: null },
            { word: "chien", type: "nom" },
            { word: "fidèle", type: "adjectif" },
            { word: "suit", type: "verbe" },
            { word: "son", type: null },
            { word: "maître", type: "nom" },
            { word: "partout", type: "adjectif" },
        ]
    },
    {
        text: "Les feuilles tombent lentement des arbres.",
        words: [
            { word: "Les", type: null },
            { word: "feuilles", type: "nom" },
            { word: "tombent", type: "verbe" },
            { word: "lentement", type: "adverbe" },
            { word: "des", type: null },
            { word: "arbres", type: "nom" },
        ]
    },
    {
        text: "La fleur rouge pousse dans le pot.",
        words: [
            { word: "La", type: null },
            { word: "fleur", type: "nom" },
            { word: "rouge", type: "adjectif" },
            { word: "pousse", type: "verbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "pot", type: "nom" },
        ]
    },
    {
        text: "Le vent doux souffle sur la prairie.",
        words: [
            { word: "Le", type: null },
            { word: "vent", type: "nom" },
            { word: "doux", type: "adjectif" },
            { word: "souffle", type: "verbe" },
            { word: "sur", type: null },
            { word: "la", type: null },
            { word: "prairie", type: "nom" },
        ]
    },
    {
        text: "Les enfants jouent avec leurs amis dans le parc.",
        words: [
            { word: "Les", type: null },
            { word: "enfants", type: "nom" },
            { word: "jouent", type: "verbe" },
            { word: "avec", type: null },
            { word: "leurs", type: null },
            { word: "amis", type: "nom" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "parc", type: "nom" },
        ]
    },
    {
        text: "La neige blanche recouvre le sol.",
        words: [
            { word: "La", type: null },
            { word: "neige", type: "nom" },
            { word: "blanche", type: "adjectif" },
            { word: "recouvre", type: "verbe" },
            { word: "le", type: null },
            { word: "sol", type: "nom" },
        ]
    },
    {
        text: "Le papillon vole de fleur en fleur.",
        words: [
            { word: "Le", type: null },
            { word: "papillon", type: "nom" },
            { word: "vole", type: "verbe" },
            { word: "de", type: null },
            { word: "fleur", type: "nom" },
            { word: "en", type: null },
            { word: "fleur", type: "nom" },
        ]
    },
    {
        text: "La lune éclaire la nuit sombre.",
        words: [
            { word: "La", type: null },
            { word: "lune", type: "nom" },
            { word: "éclaire", type: "verbe" },
            { word: "la", type: null },
            { word: "nuit", type: "nom" },
            { word: "sombre", type: "adjectif" },
        ]
    },
    {
        text: "Le chien fidèle suit son maître partout.",
        words: [
            { word: "Le", type: null },
            { word: "chien", type: "nom" },
            { word: "fidèle", type: "adjectif" },
            { word: "suit", type: "verbe" },
            { word: "son", type: null },
            { word: "maître", type: "nom" },
            { word: "partout", type: "adverbe" },
        ]
    },
    {
        text: "Les feuilles tombent lentement des arbres.",
        words: [
            { word: "Les", type: null },
            { word: "feuilles", type: "nom" },
            { word: "tombent", type: "verbe" },
            { word: "lentement", type: "adverbe" },
            { word: "des", type: null },
            { word: "arbres", type: "nom" },
        ]
    },
    {
        text: "La fleur rouge pousse dans le pot.",
        words: [
            { word: "La", type: null },
            { word: "fleur", type: "nom" },
            { word: "rouge", type: "adjectif" },
            { word: "pousse", type: "verbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "pot", type: "nom" },
        ]
    },
    {
        text: "Le vent doux souffle sur la prairie.",
        words: [
            { word: "Le", type: null },
            { word: "vent", type: "nom" },
            { word: "doux", type: "adjectif" },
            { word: "souffle", type: "verbe" },
            { word: "sur", type: null },
            { word: "la", type: null },
            { word: "prairie", type: "nom" },
        ]
    },
    {
        text: "Le chat joue avec une balle.",
        words: [
            { word: "Le", type: null },
            { word: "chat", type: "nom" },
            { word: "joue", type: "verbe" },
            { word: "avec", type: null },
            { word: "une", type: null },
            { word: "balle", type: "nom" }
        ]
    },
    {
        text: "La voiture roule vite sur la route.",
        words: [
            { word: "La", type: null },
            { word: "voiture", type: "nom" },
            { word: "roule", type: "verbe" },
            { word: "vite", type: "adverbe" },
            { word: "sur", type: null },
            { word: "la", type: null },
            { word: "route", type: "nom" }
        ]
    },
    {
        text: "Il regarde un film amusant.",
        words: [
            { word: "Il", type: null },
            { word: "regarde", type: "verbe" },
            { word: "un", type: null },
            { word: "film", type: "nom" },
            { word: "amusant", type: "adjectif" }
        ]
    },
    {
        text: "Les abeilles font du miel.",
        words: [
            { word: "Les", type: null },
            { word: "abeilles", type: "nom" },
            { word: "font", type: "verbe" },
            { word: "du", type: null },
            { word: "miel", type: "nom" }
        ]
    },
    {
        text: "Nous marchons dans le parc.",
        words: [
            { word: "Nous", type: null },
            { word: "marchons", type: "verbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "parc", type: "nom" }
        ]
    },
    {
        text: "Elle écrit une histoire drôle.",
        words: [
            { word: "Elle", type: null },
            { word: "écrit", type: "verbe" },
            { word: "une", type: null },
            { word: "histoire", type: "nom" },
            { word: "drôle", type: "adjectif" }
        ]
    },
    {
        text: "Les enfants construisent un château de sable.",
        words: [
            { word: "Les", type: null },
            { word: "enfants", type: "nom" },
            { word: "construisent", type: "verbe" },
            { word: "un", type: null },
            { word: "château", type: "nom" },
            { word: "de", type: null },
            { word: "sable", type: "nom" }
        ]
    },
    {
        text: "L'avion vole dans le ciel bleu.",
        words: [
            { word: "L'", type: null },
            { word: "avion", type: "nom" },
            { word: "vole", type: "verbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "ciel", type: "nom" },
            { word: "bleu", type: "adjectif" }
        ]
    },
    {
        text: "Les poissons nagent dans l'eau.",
        words: [
            { word: "Les", type: null },
            { word: "poissons", type: "nom" },
            { word: "nagent", type: "verbe" },
            { word: "dans", type: null },
            { word: "l'", type: null },
            { word: "eau", type: "nom" }
        ]
    },
    {
        text: "Le garçon lit un livre d'aventure.",
        words: [
            { word: "Le", type: null },
            { word: "garçon", type: "nom" },
            { word: "lit", type: "verbe" },
            { word: "un", type: null },
            { word: "livre", type: "nom" },
            { word: "d'", type: null },
            { word: "aventure", type: "nom" }
        ]
    },
    {
        text: "Elle dessine un beau tableau.",
        words: [
            { word: "Elle", type: null },
            { word: "dessine", type: "verbe" },
            { word: "un", type: null },
            { word: "beau", type: "adjectif" },
            { word: "tableau", type: "nom" }
        ]
    },
    {
        text: "Le cheval court dans le champ.",
        words: [
            { word: "Le", type: null },
            { word: "cheval", type: "nom" },
            { word: "court", type: "verbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "champ", type: "nom" }
        ]
    },
    {
        text: "Les fleurs dansent avec le vent.",
        words: [
            { word: "Les", type: null },
            { word: "fleurs", type: "nom" },
            { word: "dansent", type: "verbe" },
            { word: "avec", type: null },
            { word: "le", type: null },
            { word: "vent", type: "nom" }
        ]
    },
    {
        text: "Nous chantons une chanson joyeuse.",
        words: [
            { word: "Nous", type: null },
            { word: "chantons", type: "verbe" },
            { word: "une", type: null },
            { word: "chanson", type: "nom" },
            { word: "joyeuse", type: "adjectif" }
        ]
    },
    {
        text: "Le lapin mange une carotte.",
        words: [
            { word: "Le", type: null },
            { word: "lapin", type: "nom" },
            { word: "mange", type: "verbe" },
            { word: "une", type: null },
            { word: "carotte", type: "nom" }
        ]
    },
    {
        text: "Elle boit un verre de jus.",
        words: [
            { word: "Elle", type: null },
            { word: "boit", type: "verbe" },
            { word: "un", type: null },
            { word: "verre", type: "nom" },
            { word: "de", type: null },
            { word: "jus", type: "nom" }
        ]
    },
    {
        text: "Les étoiles brillent dans la nuit.",
        words: [
            { word: "Les", type: null },
            { word: "étoiles", type: "nom" },
            { word: "brillent", type: "verbe" },
            { word: "dans", type: null },
            { word: "la", type: null },
            { word: "nuit", type: "nom" }
        ]
    },
    {
        text: "Il joue de la guitare tous les jours.",
        words: [
            { word: "Il", type: null },
            { word: "joue", type: "verbe" },
            { word: "de", type: null },
            { word: "la", type: null },
            { word: "guitare", type: "nom" },
            { word: "tous", type: null },
            { word: "les", type: null },
            { word: "jours", type: "nom" }
        ]
    },
    {
        text: "Le soleil se couche lentement.",
        words: [
            { word: "Le", type: null },
            { word: "soleil", type: "nom" },
            { word: "se", type: null },
            { word: "couche", type: "verbe" },
            { word: "lentement", type: "adverbe" }
        ]
    },
    {
        text: "Ils jouent au football dans le parc.",
        words: [
            { word: "Ils", type: null },
            { word: "jouent", type: "verbe" },
            { word: "au", type: null },
            { word: "football", type: "nom" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "parc", type: "nom" }
        ]
    },
    {
        text: "Le ballon rebondit sur le sol.",
        words: [
            { word: "Le", type: null },
            { word: "ballon", type: "nom" },
            { word: "rebondit", type: "verbe" },
            { word: "sur", type: null },
            { word: "le", type: null },
            { word: "sol", type: "nom" }
        ]
    },
    {
        text: "Elle court très vite.",
        words: [
            { word: "Elle", type: null },
            { word: "court", type: "verbe" },
            { word: "très", type: "adverbe" },
            { word: "vite", type: "adverbe" }
        ]
    },
    {
        text: "Nous jouons à cache-cache.",
        words: [
            { word: "Nous", type: null },
            { word: "jouons", type: "verbe" },
            { word: "à", type: null },
            { word: "cache-cache", type: "nom" }
        ]
    },
    {
        text: "Les oiseaux volent dans le ciel.",
        words: [
            { word: "Les", type: null },
            { word: "oiseaux", type: "nom" },
            { word: "volent", type: "verbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "ciel", type: "nom" }
        ]
    },
    {
        text: "Il lance la balle à son ami.",
        words: [
            { word: "Il", type: null },
            { word: "lance", type: "verbe" },
            { word: "la", type: null },
            { word: "balle", type: "nom" },
            { word: "à", type: null },
            { word: "son", type: null },
            { word: "ami", type: "nom" }
        ]
    },
    {
        text: "Le chien dort dans son panier.",
        words: [
            { word: "Le", type: null },
            { word: "chien", type: "nom" },
            { word: "dort", type: "verbe" },
            { word: "dans", type: null },
            { word: "son", type: null },
            { word: "panier", type: "nom" }
        ]
    },
    {
        text: "Les nuages cachent le soleil.",
        words: [
            { word: "Les", type: null },
            { word: "nuages", type: "nom" },
            { word: "cachent", type: "verbe" },
            { word: "le", type: null },
            { word: "soleil", type: "nom" }
        ]
    },
    {
        text: "Elle mange une pomme rouge.",
        words: [
            { word: "Elle", type: null },
            { word: "mange", type: "verbe" },
            { word: "une", type: null },
            { word: "pomme", type: "nom" },
            { word: "rouge", type: "adjectif" }
        ]
    },
    {
        text: "Le garçon dessine un cercle bleu.",
        words: [
            { word: "Le", type: null },
            { word: "garçon", type: "nom" },
            { word: "dessine", type: "verbe" },
            { word: "un", type: null },
            { word: "cercle", type: "nom" },
            { word: "bleu", type: "adjectif" }
        ]
    },
    {
        text: "Nous jouons avec nos amis.",
        words: [
            { word: "Nous", type: null },
            { word: "jouons", type: "verbe" },
            { word: "avec", type: null },
            { word: "nos", type: null },
            { word: "amis", type: "nom" }
        ]
    },
    {
        text: "Les fleurs sentent très bon.",
        words: [
            { word: "Les", type: null },
            { word: "fleurs", type: "nom" },
            { word: "sentent", type: "verbe" },
            { word: "très", type: "adverbe" },
            { word: "bon", type: "adjectif" }
        ]
    },
    {
        text: "Le lapin saute dans le jardin.",
        words: [
            { word: "Le", type: null },
            { word: "lapin", type: "nom" },
            { word: "saute", type: "verbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "jardin", type: "nom" }
        ]
    },
    {
        text: "Le chaton joue avec une pelote de laine.",
        words: [
            { word: "Le", type: null },
            { word: "chaton", type: "nom" },
            { word: "joue", type: "verbe" },
            { word: "avec", type: null },
            { word: "une", type: null },
            { word: "pelote", type: "nom" },
            { word: "de", type: null },
            { word: "laine", type: "nom" }
        ]
    },
    {
        text: "Les enfants dansent sous la pluie.",
        words: [
            { word: "Les", type: null },
            { word: "enfants", type: "nom" },
            { word: "dansent", type: "verbe" },
            { word: "sous", type: null },
            { word: "la", type: null },
            { word: "pluie", type: "nom" }
        ]
    },
    {
        text: "Le soleil brille très fort aujourd'hui.",
        words: [
            { word: "Le", type: null },
            { word: "soleil", type: "nom" },
            { word: "brille", type: "verbe" },
            { word: "très", type: "adverbe" },
            { word: "fort", type: "adverbe" },
            { word: "aujourd'hui", type: "nom" }
        ]
    },
    {
        text: "La table est couverte de livres.",
        words: [
            { word: "La", type: null },
            { word: "table", type: "nom" },
            { word: "est", type: "verbe" },
            { word: "couverte", type: "adjectif" },
            { word: "de", type: null },
            { word: "livres", type: "nom" }
        ]
    },
    {
        text: "Elle aime beaucoup les fraises.",
        words: [
            { word: "Elle", type: null },
            { word: "aime", type: "verbe" },
            { word: "beaucoup", type: "adverbe" },
            { word: "les", type: null },
            { word: "fraises", type: "nom" }
        ]
    },
    {
        text: "Le chat saute sur la chaise.",
        words: [
            { word: "Le", type: null },
            { word: "chat", type: "nom" },
            { word: "saute", type: "verbe" },
            { word: "sur", type: null },
            { word: "la", type: null },
            { word: "chaise", type: "nom" }
        ]
    },
    {
        text: "Les enfants jouent dans la cour.",
        words: [
            { word: "Les", type: null },
            { word: "enfants", type: "nom" },
            { word: "jouent", type: "verbe" },
            { word: "dans", type: null },
            { word: "la", type: null },
            { word: "cour", type: "nom" }
        ]
    },
    {
        text: "Le bateau flotte sur la mer.",
        words: [
            { word: "Le", type: null },
            { word: "bateau", type: "nom" },
            { word: "flotte", type: "verbe" },
            { word: "sur", type: null },
            { word: "la", type: null },
            { word: "mer", type: "nom" }
        ]
    },
    {
        text: "Elle chante une jolie chanson.",
        words: [
            { word: "Elle", type: null },
            { word: "chante", type: "verbe" },
            { word: "une", type: null },
            { word: "jolie", type: "adjectif" },
            { word: "chanson", type: "nom" }
        ]
    },
    {
        text: "Les étoiles brillent dans le ciel nocturne.",
        words: [
            { word: "Les", type: null },
            { word: "étoiles", type: "nom" },
            { word: "brillent", type: "verbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "ciel", type: "nom" },
            { word: "nocturne", type: "adjectif" }
        ]
    },
    {
        text: "Le vent souffle fort dans les arbres.",
        words: [
            { word: "Le", type: null },
            { word: "vent", type: "nom" },
            { word: "souffle", type: "verbe" },
            { word: "fort", type: "adverbe" },
            { word: "dans", type: null },
            { word: "les", type: null },
            { word: "arbres", type: "nom" }
        ]
    },
    {
        text: "Ils écoutent une histoire intéressante.",
        words: [
            { word: "Ils", type: null },
            { word: "écoutent", type: "verbe" },
            { word: "une", type: null },
            { word: "histoire", type: "nom" },
            { word: "intéressante", type: "adjectif" }
        ]
    },
    {
        text: "Les oiseaux chantent dans la forêt.",
        words: [
            { word: "Les", type: null },
            { word: "oiseaux", type: "nom" },
            { word: "chantent", type: "verbe" },
            { word: "dans", type: null },
            { word: "la", type: null },
            { word: "forêt", type: "nom" }
        ]
    },
    {
        text: "Il peint un grand tableau coloré.",
        words: [
            { word: "Il", type: null },
            { word: "peint", type: "verbe" },
            { word: "un", type: null },
            { word: "grand", type: "adjectif" },
            { word: "tableau", type: "nom" },
            { word: "coloré", type: "adjectif" }
        ]
    },
    {
        text: "Les papillons volent dans le parc.",
        words: [
            { word: "Les", type: null },
            { word: "papillons", type: "nom" },
            { word: "volent", type: "verbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "parc", type: "nom" }
        ]
    },
    {
        text: "Elle écrit une lettre à sa mère.",
        words: [
            { word: "Elle", type: null },
            { word: "écrit", type: "verbe" },
            { word: "une", type: null },
            { word: "lettre", type: "nom" },
            { word: "à", type: null },
            { word: "sa", type: null },
            { word: "mère", type: "nom" }
        ]
    },
    {
        text: "Il dessine un carré jaune sur le papier.",
        words: [
            { word: "Il", type: null },
            { word: "dessine", type: "verbe" },
            { word: "un", type: null },
            { word: "carré", type: "nom" },
            { word: "jaune", type: "adjectif" },
            { word: "sur", type: null },
            { word: "le", type: null },
            { word: "papier", type: "nom" }
        ]
    },
    {
        text: "Le cheval galope dans le champ.",
        words: [
            { word: "Le", type: null },
            { word: "cheval", type: "nom" },
            { word: "galope", type: "verbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "champ", type: "nom" }
        ]
    },
    {
        text: "Le chien court rapidement dans le parc.",
        words: [
            { word: "Le", type: null },
            { word: "chien", type: "nom" },
            { word: "court", type: "verbe" },
            { word: "rapidement", type: "adverbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "parc", type: "nom" }
        ]
    },
    {
        text: "Elle chante joyeusement avec ses amis.",
        words: [
            { word: "Elle", type: null },
            { word: "chante", type: "verbe" },
            { word: "joyeusement", type: "adverbe" },
            { word: "avec", type: null },
            { word: "ses", type: null },
            { word: "amis", type: "nom" }
        ]
    },
    {
        text: "Le soleil brille intensément aujourd'hui.",
        words: [
            { word: "Le", type: null },
            { word: "soleil", type: "nom" },
            { word: "brille", type: "verbe" },
            { word: "intensément", type: "adverbe" },
            { word: "aujourd'hui", type: "nom" }
        ]
    },
    {
        text: "Ils marchent lentement vers la maison.",
        words: [
            { word: "Ils", type: null },
            { word: "marchent", type: "verbe" },
            { word: "lentement", type: "adverbe" },
            { word: "vers", type: null },
            { word: "la", type: null },
            { word: "maison", type: "nom" }
        ]
    },
    {
        text: "Elle lit attentivement le livre.",
        words: [
            { word: "Elle", type: null },
            { word: "lit", type: "verbe" },
            { word: "attentivement", type: "adverbe" },
            { word: "le", type: null },
            { word: "livre", type: "nom" }
        ]
    },
    {
        text: "Le chat saute soudainement sur la table.",
        words: [
            { word: "Le", type: null },
            { word: "chat", type: "nom" },
            { word: "saute", type: "verbe" },
            { word: "soudainement", type: "adverbe" },
            { word: "sur", type: null },
            { word: "la", type: null },
            { word: "table", type: "nom" }
        ]
    },
    {
        text: "Ils parlent doucement dans la bibliothèque.",
        words: [
            { word: "Ils", type: null },
            { word: "parlent", type: "verbe" },
            { word: "doucement", type: "adverbe" },
            { word: "dans", type: null },
            { word: "la", type: null },
            { word: "bibliothèque", type: "nom" }
        ]
    },
    {
        text: "Le vent souffle violemment dehors.",
        words: [
            { word: "Le", type: null },
            { word: "vent", type: "nom" },
            { word: "souffle", type: "verbe" },
            { word: "violemment", type: "adverbe" },
            { word: "dehors", type: "nom" }
        ]
    },
    {
        text: "Il parle très rapidement quand il est nerveux.",
        words: [
            { word: "Il", type: null },
            { word: "parle", type: "verbe" },
            { word: "très", type: "adverbe" },
            { word: "rapidement", type: "adverbe" },
            { word: "quand", type: null },
            { word: "il", type: null },
            { word: "est", type: "verbe" },
            { word: "nerveux", type: "adjectif" }
        ]
    },
    {
        text: "Elle danse élégamment sur la scène.",
        words: [
            { word: "Elle", type: null },
            { word: "danse", type: "verbe" },
            { word: "élégamment", type: "adverbe" },
            { word: "sur", type: null },
            { word: "la", type: null },
            { word: "scène", type: "nom" }
        ]
    },
    {
        text: "Ils courent rapidement pour attraper le bus.",
        words: [
            { word: "Ils", type: null },
            { word: "courent", type: "verbe" },
            { word: "rapidement", type: "adverbe" },
            { word: "pour", type: null },
            { word: "attraper", type: "verbe" },
            { word: "le", type: null },
            { word: "bus", type: "nom" }
        ]
    },
    {
        text: "Le bébé pleure bruyamment dans la chambre.",
        words: [
            { word: "Le", type: null },
            { word: "bébé", type: "nom" },
            { word: "pleure", type: "verbe" },
            { word: "bruyamment", type: "adverbe" },
            { word: "dans", type: null },
            { word: "la", type: null },
            { word: "chambre", type: "nom" }
        ]
    },
    {
        text: "Nous mangeons rapidement le dîner.",
        words: [
            { word: "Nous", type: null },
            { word: "mangeons", type: "verbe" },
            { word: "rapidement", type: "adverbe" },
            { word: "le", type: null },
            { word: "dîner", type: "nom" }
        ]
    },
    {
        text: "Ils écoutent attentivement l'enseignant.",
        words: [
            { word: "Ils", type: null },
            { word: "écoutent", type: "verbe" },
            { word: "attentivement", type: "adverbe" },
            { word: "l'", type: null },
            { word: "enseignant", type: "nom" }
        ]
    },
    {
        text: "Elle conduit prudemment sur la route glissante.",
        words: [
            { word: "Elle", type: null },
            { word: "conduit", type: "verbe" },
            { word: "prudemment", type: "adverbe" },
            { word: "sur", type: null },
            { word: "la", type: null },
            { word: "route", type: "nom" },
            { word: "glissante", type: "adjectif" }
        ]
    },
    {
        text: "Ils parlent souvent de leur voyage.",
        words: [
            { word: "Ils", type: null },
            { word: "parlent", type: "verbe" },
            { word: "souvent", type: "adverbe" },
            { word: "de", type: null },
            { word: "leur", type: null },
            { word: "voyage", type: "nom" }
        ]
    },
    {
        text: "Le train avance lentement dans la gare.",
        words: [
            { word: "Le", type: null },
            { word: "train", type: "nom" },
            { word: "avance", type: "verbe" },
            { word: "lentement", type: "adverbe" },
            { word: "dans", type: null },
            { word: "la", type: null },
            { word: "gare", type: "nom" }
        ]
    },
    {
        text: "Elle marche doucement sur l'herbe.",
        words: [
            { word: "Elle", type: null },
            { word: "marche", type: "verbe" },
            { word: "doucement", type: "adverbe" },
            { word: "sur", type: null },
            { word: "l'", type: null },
            { word: "herbe", type: "nom" }
        ]
    },
    {
        text: "Ils regardent curieusement le tableau.",
        words: [
            { word: "Ils", type: null },
            { word: "regardent", type: "verbe" },
            { word: "curieusement", type: "adverbe" },
            { word: "le", type: null },
            { word: "tableau", type: "nom" }
        ]
    },
    {
        text: "Il joue silencieusement dans sa chambre.",
        words: [
            { word: "Il", type: null },
            { word: "joue", type: "verbe" },
            { word: "silencieusement", type: "adverbe" },
            { word: "dans", type: null },
            { word: "sa", type: null },
            { word: "chambre", type: "nom" }
        ]
    },
    {
        text: "Elle travaille patiemment sur son projet.",
        words: [
            { word: "Elle", type: null },
            { word: "travaille", type: "verbe" },
            { word: "patiemment", type: "adverbe" },
            { word: "sur", type: null },
            { word: "son", type: null },
            { word: "projet", type: "nom" }
        ]
    },
    {
        text: "Ils courent rapidement dans le jardin.",
        words: [
            { word: "Ils", type: null },
            { word: "courent", type: "verbe" },
            { word: "rapidement", type: "adverbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "jardin", type: "nom" }
        ]
    },
    {
        text: "Le chat saute doucement sur le canapé.",
        words: [
            { word: "Le", type: null },
            { word: "chat", type: "nom" },
            { word: "saute", type: "verbe" },
            { word: "doucement", type: "adverbe" },
            { word: "sur", type: null },
            { word: "le", type: null },
            { word: "canapé", type: "nom" }
        ]
    },
    {
        text: "Elle apprend rapidement de ses erreurs.",
        words: [
            { word: "Elle", type: null },
            { word: "apprend", type: "verbe" },
            { word: "rapidement", type: "adverbe" },
            { word: "de", type: null },
            { word: "ses", type: null },
            { word: "erreurs", type: "nom" }
        ]
    },
    {
        text: "Ils partent immédiatement après le dîner.",
        words: [
            { word: "Ils", type: null },
            { word: "partent", type: "verbe" },
            { word: "immédiatement", type: "adverbe" },
            { word: "après", type: null },
            { word: "le", type: null },
            { word: "dîner", type: "nom" }
        ]
    },
    {
        text: "Le chat noir et blanc dort paisiblement sur le canapé bleu.",
        words: [
            { word: "Le", type: null },
            { word: "chat", type: "nom" },
            { word: "noir", type: "adjectif" },
            { word: "et", type: null },
            { word: "blanc", type: "adjectif" },
            { word: "dort", type: "verbe" },
            { word: "paisiblement", type: "adverbe" },
            { word: "sur", type: null },
            { word: "le", type: null },
            { word: "canapé", type: "nom" },
            { word: "bleu", type: "adjectif" }
        ]
    },
    {
        text: "Les enfants jouent joyeusement avec leurs nouveaux jouets dans le jardin ensoleillé.",
        words: [
            { word: "Les", type: null },
            { word: "enfants", type: "nom" },
            { word: "jouent", type: "verbe" },
            { word: "joyeusement", type: "adverbe" },
            { word: "avec", type: null },
            { word: "leurs", type: null },
            { word: "nouveaux", type: "adjectif" },
            { word: "jouets", type: "nom" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "jardin", type: "nom" },
            { word: "ensoleillé", type: "adjectif" }
        ]
    },
    {
        text: "Il écrit lentement une longue lettre à son ami.",
        words: [
            { word: "Il", type: null },
            { word: "écrit", type: "verbe" },
            { word: "lentement", type: "adverbe" },
            { word: "une", type: null },
            { word: "longue", type: "adjectif" },
            { word: "lettre", type: "nom" },
            { word: "à", type: null },
            { word: "son", type: null },
            { word: "ami", type: "nom" }
        ]
    },
    {
        text: "Les voitures avancent rapidement sur la route bruyante et encombrée.",
        words: [
            { word: "Les", type: null },
            { word: "voitures", type: "nom" },
            { word: "avancent", type: "verbe" },
            { word: "rapidement", type: "adverbe" },
            { word: "sur", type: null },
            { word: "la", type: null },
            { word: "route", type: "nom" },
            { word: "bruyante", type: "adjectif" },
            { word: "et", type: null },
            { word: "encombrée", type: "adjectif" }
        ]
    },
    {
        text: "Le petit garçon range soigneusement ses livres dans la bibliothèque.",
        words: [
            { word: "Le", type: null },
            { word: "petit", type: "adjectif" },
            { word: "garçon", type: "nom" },
            { word: "range", type: "verbe" },
            { word: "soigneusement", type: "adverbe" },
            { word: "ses", type: null },
            { word: "livres", type: "nom" },
            { word: "dans", type: null },
            { word: "la", type: null },
            { word: "bibliothèque", type: "nom" }
        ]
    },
    {
        text: "Elle regarde attentivement les oiseaux colorés voler au-dessus du lac.",
        words: [
            { word: "Elle", type: null },
            { word: "regarde", type: "verbe" },
            { word: "attentivement", type: "adverbe" },
            { word: "les", type: null },
            { word: "oiseaux", type: "nom" },
            { word: "colorés", type: "adjectif" },
            { word: "voler", type: "verbe" },
            { word: "au-dessus", type: null },
            { word: "du", type: null },
            { word: "lac", type: "nom" }
        ]
    },
    {
        text: "Ils parlent très fort dans la classe bruyante.",
        words: [
            { word: "Ils", type: null },
            { word: "parlent", type: "verbe" },
            { word: "très", type: "adverbe" },
            { word: "fort", type: "adverbe" },
            { word: "dans", type: null },
            { word: "la", type: null },
            { word: "classe", type: "nom" },
            { word: "bruyante", type: "adjectif" }
        ]
    },
    {
        text: "Le professeur explique patiemment les règles du jeu.",
        words: [
            { word: "Le", type: null },
            { word: "professeur", type: "nom" },
            { word: "explique", type: "verbe" },
            { word: "patiemment", type: "adverbe" },
            { word: "les", type: null },
            { word: "règles", type: "nom" },
            { word: "du", type: null },
            { word: "jeu", type: "nom" }
        ]
    },
    {
        text: "Elle cuisine lentement un délicieux repas pour sa famille.",
        words: [
            { word: "Elle", type: null },
            { word: "cuisine", type: "verbe" },
            { word: "lentement", type: "adverbe" },
            { word: "un", type: null },
            { word: "délicieux", type: "adjectif" },
            { word: "repas", type: "nom" },
            { word: "pour", type: null },
            { word: "sa", type: null },
            { word: "famille", type: "nom" }
        ]
    },
    {
        text: "Le garçon court rapidement vers l'école en portant son sac lourd.",
        words: [
            { word: "Le", type: null },
            { word: "garçon", type: "nom" },
            { word: "court", type: "verbe" },
            { word: "rapidement", type: "adverbe" },
            { word: "vers", type: null },
            { word: "l'école", type: "nom" },
            { word: "en", type: null },
            { word: "portant", type: "verbe" },
            { word: "son", type: null },
            { word: "sac", type: "nom" },
            { word: "lourd", type: "adjectif" }
        ]
    },
    {
        text: "Ils lisent silencieusement des histoires amusantes dans la bibliothèque calme.",
        words: [
            { word: "Ils", type: null },
            { word: "lisent", type: "verbe" },
            { word: "silencieusement", type: "adverbe" },
            { word: "des", type: null },
            { word: "histoires", type: "nom" },
            { word: "amusantes", type: "adjectif" },
            { word: "dans", type: null },
            { word: "la", type: null },
            { word: "bibliothèque", type: "nom" },
            { word: "calme", type: "adjectif" }
        ]
    },
    {
        text: "Le vent souffle très doucement sur les feuilles d'automne.",
        words: [
            { word: "Le", type: null },
            { word: "vent", type: "nom" },
            { word: "souffle", type: "verbe" },
            { word: "très", type: "adverbe" },
            { word: "doucement", type: "adverbe" },
            { word: "sur", type: null },
            { word: "les", type: null },
            { word: "feuilles", type: "nom" },
            { word: "d'automne", type: "nom" }
        ]
    },
    {
        text: "Le chien marche calmement à côté de son maître dans le parc verdoyant.",
        words: [
            { word: "Le", type: null },
            { word: "chien", type: "nom" },
            { word: "marche", type: "verbe" },
            { word: "calmement", type: "adverbe" },
            { word: "à côté", type: null },
            { word: "de", type: null },
            { word: "son", type: null },
            { word: "maître", type: "nom" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "parc", type: "nom" },
            { word: "verdoyant", type: "adjectif" }
        ]
    },
    {
        text: "Elle chante doucement une chanson douce sous les étoiles brillantes.",
        words: [
            { word: "Elle", type: null },
            { word: "chante", type: "verbe" },
            { word: "doucement", type: "adverbe" },
            { word: "une", type: null },
            { word: "chanson", type: "nom" },
            { word: "douce", type: "adjectif" },
            { word: "sous", type: null },
            { word: "les", type: null },
            { word: "étoiles", type: "nom" },
            { word: "brillantes", type: "adjectif" }
        ]
    },
    {
        text: "Les fleurs poussent rapidement dans le jardin ensoleillé et coloré.",
        words: [
            { word: "Les", type: null },
            { word: "fleurs", type: "nom" },
            { word: "poussent", type: "verbe" },
            { word: "rapidement", type: "adverbe" },
            { word: "dans", type: null },
            { word: "le", type: null },
            { word: "jardin", type: "nom" },
            { word: "ensoleillé", type: "adjectif" },
            { word: "et", type: null },
            { word: "coloré", type: "adjectif" }
        ]
    },
    {
        text: "Le chat saute rapidement.",
        words: [
            { word: "Le", type: null },
            { word: "chat", type: "nom" },
            { word: "saute", type: "verbe" },
            { word: "rapidement", type: "adverbe" }
        ]
    },
    {
        text: "Elle parle doucement.",
        words: [
            { word: "Elle", type: null },
            { word: "parle", type: "verbe" },
            { word: "doucement", type: "adverbe" }
        ]
    },
    {
        text: "Ils courent joyeusement.",
        words: [
            { word: "Ils", type: null },
            { word: "courent", type: "verbe" },
            { word: "joyeusement", type: "adverbe" }
        ]
    },
    {
        text: "L'oiseau vole haut.",
        words: [
            { word: "L'", type: null },
            { word: "oiseau", type: "nom" },
            { word: "vole", type: "verbe" },
            { word: "haut", type: "adjectif" }
        ]
    },
    {
        text: "Le vent souffle doucement.",
        words: [
            { word: "Le", type: null },
            { word: "vent", type: "nom" },
            { word: "souffle", type: "verbe" },
            { word: "doucement", type: "adverbe" }
        ]
    },
    {
        text: "Le chien aboie fort.",
        words: [
            { word: "Le", type: null },
            { word: "chien", type: "nom" },
            { word: "aboie", type: "verbe" },
            { word: "fort", type: "adverbe" }
        ]
    },
    {
        text: "Elle écrit lentement.",
        words: [
            { word: "Elle", type: null },
            { word: "écrit", type: "verbe" },
            { word: "lentement", type: "adverbe" }
        ]
    },
    {
        text: "L'enfant danse joyeusement.",
        words: [
            { word: "L'", type: null },
            { word: "enfant", type: "nom" },
            { word: "danse", type: "verbe" },
            { word: "joyeusement", type: "adverbe" }
        ]
    },
    {
        text: "Les feuilles tombent doucement.",
        words: [
            { word: "Les", type: null },
            { word: "feuilles", type: "nom" },
            { word: "tombent", type: "verbe" },
            { word: "doucement", type: "adverbe" }
        ]
    },
    {
        text: "Le bébé dort paisiblement.",
        words: [
            { word: "Le", type: null },
            { word: "bébé", type: "nom" },
            { word: "dort", type: "verbe" },
            { word: "paisiblement", type: "adverbe" }
        ]
    },
    {
        text: "Il marche lentement.",
        words: [
            { word: "Il", type: null },
            { word: "marche", type: "verbe" },
            { word: "lentement", type: "adverbe" }
        ]
    },
    {
        text: "L'eau coule rapidement.",
        words: [
            { word: "L'", type: null },
            { word: "eau", type: "nom" },
            { word: "coule", type: "verbe" },
            { word: "rapidement", type: "adverbe" }
        ]
    },
    {
        text: "Les étoiles brillent brillamment.",
        words: [
            { word: "Les", type: null },
            { word: "étoiles", type: "nom" },
            { word: "brillent", type: "verbe" },
            { word: "brillamment", type: "adverbe" }
        ]
    },
    {
        text: "Le feu brûle rapidement.",
        words: [
            { word: "Le", type: null },
            { word: "feu", type: "nom" },
            { word: "brûle", type: "verbe" },
            { word: "rapidement", type: "adverbe" }
        ]
    },
    {
        text: "Le chaton miaule doucement.",
        words: [
            { word: "Le", type: null },
            { word: "chaton", type: "nom" },
            { word: "miaule", type: "verbe" },
            { word: "doucement", type: "adverbe" }
        ]
    },
    {
        text: "Ils mangent rapidement.",
        words: [
            { word: "Ils", type: null },
            { word: "mangent", type: "verbe" },
            { word: "rapidement", type: "adverbe" }
        ]
    },
    {
        text: "Elle dessine soigneusement.",
        words: [
            { word: "Elle", type: null },
            { word: "dessine", type: "verbe" },
            { word: "soigneusement", type: "adverbe" }
        ]
    },
    {
        text: "Les enfants jouent dehors joyeusement.",
        words: [
            { word: "Les", type: null },
            { word: "enfants", type: "nom" },
            { word: "jouent", type: "verbe" },
            { word: "dehors", type: null },
            { word: "joyeusement", type: "adverbe" }
        ]
    },
    {
        text: "Elle rit doucement.",
        words: [
            { word: "Elle", type: null },
            { word: "rit", type: "verbe" },
            { word: "doucement", type: "adverbe" }
        ]
    },
    {
        text: "Le garçon crie très fort.",
        words: [
            { word: "Le", type: null },
            { word: "garçon", type: "nom" },
            { word: "crie", type: "verbe" },
            { word: "très", type: "adverbe" },
            { word: "fort", type: "adjectif" }
        ]
    }

    // Add your sentences here...
];

let selectedSentences = [];
let currentSentenceIndex = 0;
let score = 0;
const totalQuestions = 20;
let attemptCount = 0;

document.getElementById('play-button').addEventListener('click', startGame);
document.getElementById('submit-button').addEventListener('click', checkAnswer);
document.getElementById('retry-button').addEventListener('click', () => location.reload());

function startGame() {
    // Hide welcome screen
    document.getElementById('welcome-screen').style.display = 'none';
    // Show game screen
    document.getElementById('game-screen').style.display = 'block';
    // Randomize and select sentences
    selectedSentences = sentences.sort(() => 0.5 - Math.random()).slice(0, totalQuestions);
    loadSentence();
}

function loadSentence() {
    if (currentSentenceIndex >= selectedSentences.length) {
        endGame();
        return;
    }
    attemptCount = 0; // Reset attempt count for the new sentence
    const sentenceObj = selectedSentences[currentSentenceIndex];
    document.getElementById('sentence-number').innerText = `Phrase ${currentSentenceIndex + 1} sur ${totalQuestions}`;

    // Display sentence with words
    const sentenceElement = document.getElementById('sentence');
    sentenceElement.innerHTML = '';

    sentenceObj.words.forEach((wordObj, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.innerText = wordObj.word;
        wordSpan.classList.add('word');
        if (wordObj.type) {
            wordSpan.classList.add('draggable');
            wordSpan.setAttribute('draggable', true);
            wordSpan.dataset.type = wordObj.type;
            wordSpan.dataset.index = index;
            wordSpan.dataset.inBin = "false";
            wordSpan.addEventListener('dragstart', dragStart);
        }
        sentenceElement.appendChild(wordSpan);
        sentenceElement.appendChild(document.createTextNode(' '));
    });

    // Clear bins
    document.querySelectorAll('.bin').forEach(bin => {
        bin.innerHTML = '';
    });
}

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.dataset.index);
    event.dataTransfer.setData('fromBin', event.target.dataset.inBin);
}

function dropWord(event) {
    event.preventDefault();
    const index = event.dataTransfer.getData('text/plain');
    const fromBin = event.dataTransfer.getData('fromBin') === "true";
    const wordElement = document.querySelector(`[data-index='${index}'][data-in-bin='${fromBin}']`);

    if (wordElement) {
        if (event.currentTarget.classList.contains('bin')) {
            // Dropping into a bin
            if (!fromBin) {
                // Dragged from sentence to bin
                // Clone the word and add to bin
                const clone = wordElement.cloneNode(true);
                clone.dataset.inBin = "true";
                clone.setAttribute('draggable', true);
                clone.addEventListener('dragstart', dragStart);
                event.currentTarget.appendChild(clone);
            } else {
                // Moving between bins
                event.currentTarget.appendChild(wordElement);
            }
        } else if (event.currentTarget.id === 'sentence') {
            // Dropping back to the sentence
            if (fromBin) {
                // Remove word from bin
                wordElement.parentElement.removeChild(wordElement);
            }
            // The sentence remains unchanged
        }
    }
}

document.querySelectorAll('.bin, #sentence').forEach(target => {
    target.addEventListener('dragover', event => event.preventDefault());
    target.addEventListener('drop', dropWord);
});

function checkAnswer() {
    let correct = true;
    const sentenceObj = selectedSentences[currentSentenceIndex];

    // Create a mapping of expected words per type
    const expected = {
        'nom': [],
        'verbe': [],
        'adjectif': [],
        'adverbe': []
    };

    sentenceObj.words.forEach((wordObj) => {
        if (wordObj.type) {
            expected[wordObj.type].push(wordObj.word);
        }
    });

    // Count total number of words to be classified
    const totalWordsToClassify = Object.values(expected).flat().length;

    // Check each bin
    document.querySelectorAll('.bin').forEach(bin => {
        const expectedType = bin.dataset.type;
        const expectedWords = expected[expectedType];
        const wordsInBin = Array.from(bin.querySelectorAll('.word')).map(elem => elem.innerText.trim());
        // Check if the words in the bin match the expected words
        if (wordsInBin.length !== expectedWords.length || !wordsInBin.every(word => expectedWords.includes(word))) {
            correct = false;
        }
    });

    // Check if all draggable words are placed in bins
    const wordsInBinsCount = document.querySelectorAll('.bin .word').length;
    if (wordsInBinsCount !== totalWordsToClassify) {
        correct = false;
    }

    if (correct) {
        // Flash green
        document.body.classList.add('correct-flash');
        setTimeout(() => document.body.classList.remove('correct-flash'), 500);
        score++;
        alert('Correct! Bien joué!');
        currentSentenceIndex++;
        loadSentence();
    } else {
        attemptCount++;
        if (attemptCount < 2) {
            // Flash red
            document.body.classList.add('incorrect-flash');
            setTimeout(() => document.body.classList.remove('incorrect-flash'), 500);
            alert('Incorrect, essaie encore!');
            // Allow retry without advancing
        } else {
            // Show correct answers
            showCorrectAnswers(expected);
            // Move to next sentence without incrementing score
            currentSentenceIndex++;
            loadSentence();
        }
    }
}

function showCorrectAnswers(expected) {
    // Build the message with correct classifications
    let message = "Voici les réponses correctes :\n\n";
    for (let type in expected) {
        const words = expected[type];
        message += `${capitalizeFirstLetter(type)}s : ${words.join(', ') || 'Aucun'}\n`;
    }
    alert(message);
}

function endGame() {
    // Hide game screen
    document.getElementById('game-screen').style.display = 'none';
    // Show result screen
    document.getElementById('result-screen').style.display = 'block';
    // Display score
    const percentage = Math.round((score / totalQuestions) * 100);
    document.getElementById('score').innerText = `Tu as obtenu ${score} sur ${totalQuestions} (${percentage}%)`;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
