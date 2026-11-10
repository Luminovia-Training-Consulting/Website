import {ArrowUpRight} from "lucide-react";
import {useId, useState} from "react";
import {Link} from "react-router-dom";
import {useLanguage} from "../i18n.jsx";
import "../styles/practice.css";

const ticketCounts = [
    {team: "Support", open: 7, closed: 4},
    {team: "Operations", open: 3, closed: 6},
];

const labCopy = {
    de: {
        filter: "Welche Tickets sollen gezählt werden?",
        states: {open: "Offen", closed: "Geschlossen"},
        observation: {
            open: (team, count) => `${team} hat die meisten offenen Tickets (${count}).`,
            closed: (team, count) => `${team} hat die meisten geschlossenen Tickets (${count}).`,
        },
        explain: "Was macht die Abfrage?",
        where: "Wählt die Tickets mit dem eingestellten Status aus.",
        group: "Fasst die ausgewählten Tickets pro Team zusammen, damit COUNT(*) sie zählen kann.",
        order: "Zeigt das Team mit den meisten passenden Tickets zuerst.",
    },
    en: {
        filter: "Which tickets should we count?",
        states: {open: "Open", closed: "Closed"},
        observation: {
            open: (team, count) => `${team} has the most open tickets (${count}).`,
            closed: (team, count) => `${team} has the most closed tickets (${count}).`,
        },
        explain: "What does the query do?",
        where: "Selects tickets that match the chosen status.",
        group: "Groups the selected tickets by team so COUNT(*) can count them.",
        order: "Shows the team with the most matching tickets first.",
    },
};

export default function HomePractice({copy, trainingPath}) {
    const {language} = useLanguage();
    const lab = labCopy[language];
    const groupName = useId();
    const [status, setStatus] = useState("open");
    const result = ticketCounts
        .map(({team, [status]: count}) => ({team, count}))
        .sort((first, second) => second.count - first.count);
    const first = result[0];

    return (
        <figure className="practice-lab">
            <figcaption className="practice-masthead">
                <span>{copy.worksheet}</span><span className="practice-language">SQL</span>
            </figcaption>
            <fieldset className="practice-filter">
                <legend>{lab.filter}</legend>
                <div className="practice-choices">
                    {Object.entries(lab.states).map(([value, label]) => (
                        <label key={value}>
                            <input type="radio" name={groupName} value={value} checked={status === value} onChange={() => setStatus(value)}/>
                            <span>{label}</span>
                        </label>
                    ))}
                </div>
            </fieldset>
            <pre className="practice-code"><code>{`SELECT team,
       COUNT(*) AS ticket_count
FROM tickets
WHERE status = `}<span>{`'${status}'`}</span>{`
GROUP BY team
ORDER BY ticket_count DESC;`}</code></pre>
            <table className="practice-table">
                <caption>{copy.output}</caption>
                <thead><tr><th scope="col">Team</th><th scope="col">{copy.count}</th></tr></thead>
                <tbody>
                    {result.map(({team, count}) => (
                        <tr key={team}><th scope="row">{team}</th><td>{count}</td></tr>
                    ))}
                </tbody>
            </table>
            <p className="practice-observation" role="status">{lab.observation[status](first.team, first.count)}</p>
            <details className="practice-explain">
                <summary>{lab.explain}</summary>
                <dl>
                    <div><dt><code>WHERE</code></dt><dd>{lab.where}</dd></div>
                    <div><dt><code>GROUP BY</code></dt><dd>{lab.group}</dd></div>
                    <div><dt><code>ORDER BY</code></dt><dd>{lab.order}</dd></div>
                </dl>
            </details>
            <Link className="practice-link lumo-text-link" to={trainingPath}>{copy.lesson}<ArrowUpRight size={18} aria-hidden="true"/></Link>
        </figure>
    );
}
