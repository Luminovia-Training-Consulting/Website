import {ArrowUpRight} from "lucide-react";
import {useId, useState} from "react";
import {Link} from "react-router-dom";
import {businessExample, practiceExamplesCopy} from "../data/homePracticeExamples.js";
import {useLanguage} from "../i18n.jsx";
import HomePractice from "./HomePractice.jsx";

const permissions = {
    viewer: ["view"],
    editor: ["view", "edit"],
    owner: ["view", "edit", "share"],
};

function ExerciseCard({topic, copy, trainingPath, children}) {
    return (
        <section className="practice-lab" data-exercise={topic}>
            <h3 className="practice-masthead">{copy.title}</h3>
            {children}
            <Link className="practice-link lumo-text-link" to={trainingPath}>
                {copy.lesson}<ArrowUpRight size={18} aria-hidden="true"/>
            </Link>
        </section>
    );
}

function BusinessExercise({copy, language}) {
    const quantityId = useId();
    const [quantity, setQuantity] = useState(8);
    const {salePrice, variableCost, fixedCosts} = businessExample;
    const result = quantity * (salePrice - variableCost) - fixedCosts;
    const formattedResult = new Intl.NumberFormat(language === "de" ? "de-DE" : "en-AU", {
        style: "currency",
        currency: "EUR",
        currencyDisplay: "narrowSymbol",
        maximumFractionDigits: 0,
    }).format(result);
    const feedback = result === 0 ? copy.covered : result > 0 ? copy.surplus : copy.shortfall;

    return (
        <ExerciseCard topic="business" copy={copy} trainingPath="/training/business-administration-economics">
            <p className="practice-brief">{copy.intro}</p>
            <div className="practice-quantity">
                <label htmlFor={quantityId}>{copy.quantity}</label>
                <strong aria-hidden="true">{quantity}</strong>
                <input
                    id={quantityId}
                    type="range"
                    min="0"
                    max="20"
                    value={quantity}
                    onChange={(event) => setQuantity(Number(event.currentTarget.value))}
                />
            </div>
            <p className="practice-observation" role="status">
                {copy.result} <strong>{formattedResult}</strong><br/>{feedback}
            </p>
        </ExerciseCard>
    );
}

function AiExercise({copy}) {
    const groupName = useId();
    const [answer, setAnswer] = useState(null);

    return (
        <ExerciseCard topic="ai" copy={copy} trainingPath="/training/ai-genai-training">
            <div className="practice-source">
                <p><strong>{copy.sourceLabel}</strong></p>
                <blockquote>{copy.source}</blockquote>
            </div>
            <fieldset className="practice-filter">
                <legend>{copy.question}</legend>
                <div className="practice-choices practice-answer-choices">
                    {Object.entries(copy.choices).map(([value, text]) => (
                        <label key={value}>
                            <input type="radio" name={groupName} value={value} checked={answer === value} onChange={() => setAnswer(value)}/>
                            <span>{text}</span>
                        </label>
                    ))}
                </div>
            </fieldset>
            <div role="status">
                {answer && <p className="practice-observation">{copy.feedback[answer]}</p>}
            </div>
        </ExerciseCard>
    );
}

function SecurityExercise({copy}) {
    const roleId = useId();
    const [role, setRole] = useState("editor");
    const allowedActions = permissions[role];

    return (
        <ExerciseCard topic="security" copy={copy} trainingPath="/training/cybersecurity-pentesting-ethical-hacking">
            <p className="practice-brief">{copy.intro}</p>
            <label className="practice-role" htmlFor={roleId}>
                <span>{copy.roleLabel}</span>
                <select id={roleId} value={role} onChange={(event) => setRole(event.currentTarget.value)}>
                    {Object.entries(copy.roles).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
            </label>
            <dl className="practice-permissions">
                {Object.entries(copy.actions).map(([action, label]) => (
                    <div key={action}>
                        <dt>{label}</dt>
                        <dd>{allowedActions.includes(action) ? copy.allowed : copy.denied}</dd>
                    </div>
                ))}
            </dl>
            <p className="practice-observation" role="status">{copy.feedback[role]}</p>
        </ExerciseCard>
    );
}

export default function HomePracticeExamples({sqlCopy, sqlTrainingPath}) {
    const {language} = useLanguage();
    const copy = practiceExamplesCopy[language];
    const groupName = useId();
    const [active, setActive] = useState("sql");

    return (
        <div>
            <fieldset className="practice-filter practice-picker">
                <legend>{copy.picker}</legend>
                <div className="practice-choices">
                    {Object.entries(copy.names).map(([value, label]) => (
                        <label key={value}>
                            <input type="radio" name={groupName} value={value} checked={active === value} onChange={() => setActive(value)}/>
                            <span>{label}</span>
                        </label>
                    ))}
                </div>
            </fieldset>
            <div hidden={active !== "sql"}><HomePractice copy={sqlCopy} trainingPath={sqlTrainingPath}/></div>
            <div hidden={active !== "business"}><BusinessExercise copy={copy.business} language={language}/></div>
            <div hidden={active !== "ai"}><AiExercise copy={copy.ai}/></div>
            <div hidden={active !== "security"}><SecurityExercise copy={copy.security}/></div>
        </div>
    );
}
