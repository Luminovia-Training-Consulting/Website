export const businessExample = {salePrice: 80, variableCost: 30, fixedCosts: 500};
const {salePrice, variableCost, fixedCosts} = businessExample;

export const practiceExamplesCopy = {
    de: {
        picker: "Wählen Sie eine Übung",
        topics: {
            sql: ["SQL", "Support-Tickets zählen"],
            business: ["Wirtschaft", "Gewinnschwelle berechnen"],
            ai: ["KI", "Zusammenfassung prüfen"],
            security: ["IT-Sicherheit", "Zugriffsrechte vergleichen"],
        },
        business: {
            title: "Wann sind die Fixkosten gedeckt?",
            intro: `Ein Produkt kostet im Verkauf ${salePrice} €. Pro Stück fallen ${variableCost} € variable Kosten an. Die Fixkosten betragen ${fixedCosts} €. Verändern Sie die Stückzahl und finden Sie die Gewinnschwelle.`,
            quantity: "Verkaufte Stückzahl",
            result: "Ergebnis nach Fixkosten",
            covered: "Die Fixkosten sind genau gedeckt.",
            shortfall: "Der Deckungsbeitrag reicht noch nicht für die Fixkosten.",
            surplus: "Nach Abzug der Fixkosten bleibt ein Überschuss.",
            lesson: "Zum Training für BWL und VWL",
        },
        ai: {
            title: "Eine KI-Zusammenfassung prüfen",
            sourceLabel: "Projektmeldung",
            source: "Am 18. Mai beginnt ein Test mit fünf Personen. Über die Einführung wird nach dem Test entschieden.",
            question: "Welche Zusammenfassung gibt die Meldung korrekt wieder?",
            choices: {
                accurate: "Der Test startet am 18. Mai mit fünf Personen. Die Entscheidung über die Einführung folgt danach.",
                overstated: "Der Test startet am 18. Mai mit fünf Personen. Die Einführung ist bereits beschlossen.",
            },
            feedback: {
                accurate: "Datum und Teilnehmerzahl stimmen. Die Zusammenfassung gibt korrekt wieder, dass die Entscheidung erst nach dem Test fällt.",
                overstated: "Die Meldung kündigt einen Test an. Die Entscheidung über die Einführung soll erst danach fallen.",
            },
            lesson: "Zum Training für KI und GenAI",
        },
        security: {
            title: "Zugriff auf einen Bericht vergeben",
            intro: "Eine externe Prüferin soll einen Bericht lesen. Wählen Sie eine Rolle und prüfen Sie, welche Aktionen sie erlaubt.",
            roleLabel: "Rolle für die externe Prüferin",
            roles: {
                viewer: "Leserolle",
                editor: "Bearbeitungsrolle",
                owner: "Eigentümerrolle",
            },
            actions: {
                view: "Öffnen",
                edit: "Bearbeiten",
                share: "Freigeben",
            },
            allowed: "Erlaubt",
            denied: "Gesperrt",
            feedback: {
                viewer: "Die Leserolle erlaubt das Öffnen des Berichts. Das reicht für die Prüfung.",
                editor: "Die Bearbeitungsrolle erlaubt auch Änderungen. Für die Prüfung reicht die Leserolle.",
                owner: "Die Eigentümerrolle erlaubt auch Änderungen und Freigaben. Für die Prüfung reicht die Leserolle.",
            },
            lesson: "Zum Training für IT-Sicherheit",
        },
    },
    en: {
        picker: "Choose an exercise",
        topics: {
            sql: ["SQL", "Count support tickets"],
            business: ["Business", "Find the break-even point"],
            ai: ["AI", "Check a summary"],
            security: ["IT security", "Compare access rights"],
        },
        business: {
            title: "How many sales do you need to break even?",
            intro: `Each unit sells for €${salePrice} and has variable costs of €${variableCost}. Fixed costs are €${fixedCosts}. Change the number sold to find the break-even point.`,
            quantity: "Units sold",
            result: "Result after fixed costs",
            covered: "You have covered your fixed costs exactly.",
            shortfall: "You still have fixed costs to cover.",
            surplus: "You have a surplus after covering fixed costs.",
            lesson: "Explore business and economics training",
        },
        ai: {
            title: "Check an AI summary",
            sourceLabel: "Project update",
            source: "A trial with five participants starts on 18 May. A decision on rollout will follow the trial.",
            question: "Which summary matches the update?",
            choices: {
                accurate: "The trial starts on 18 May with five participants. A decision on rollout will follow.",
                overstated: "The trial starts on 18 May with five participants. Rollout has already been approved.",
            },
            feedback: {
                accurate: "The date and participant count match. The summary correctly places the decision after the trial.",
                overstated: "The update announces a trial. The decision on rollout comes afterwards.",
            },
            lesson: "Explore AI and generative AI training",
        },
        security: {
            title: "Grant access to a report",
            intro: "An external reviewer needs to read a report. Choose a role and check which actions it allows.",
            roleLabel: "Role for the external reviewer",
            roles: {
                viewer: "Viewer",
                editor: "Editor",
                owner: "Owner",
            },
            actions: {
                view: "Open",
                edit: "Edit",
                share: "Share",
            },
            allowed: "Allowed",
            denied: "Blocked",
            feedback: {
                viewer: "The Viewer role lets the reviewer open the report. That is enough for the review.",
                editor: "The Editor role also allows changes. The Viewer role is enough for the review.",
                owner: "The Owner role also allows editing and sharing. The Viewer role is enough for the review.",
            },
            lesson: "Explore IT security training",
        },
    },
};
