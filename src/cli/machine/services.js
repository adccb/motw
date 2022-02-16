import prompts from "prompts";

import playbookConfigs from "../../game/playbooks.js";

const sanitizeMod = (mod) => (mod > 0 ? `+${mod}` : mod);

const sanitizeStats = (stats) =>
  stats.map((obj) =>
    Object.entries(obj)
      .reduce(
        (string, [attrib, mod]) => `${string} ${attrib}: ${sanitizeMod(mod)}`,
        ""
      )
      .trim()
  );

const playbooks = Object.values(playbookConfigs).map(({ id, description }) => ({
  title: id,
  value: id,
  description,
}));

const askNameAndPronouns = () =>
  prompts([
    { type: "text", name: "name", message: "what is your character's name?" },
    {
      type: "text",
      name: "pronouns",
      message: "what are your character's pronouns?",
    },
  ]);

const askPlaybook = () =>
  prompts({
    type: "select",
    name: "playbookChoice",
    message: "choose your playbook",
    choices: playbooks,
  }).then(({ playbookChoice }) => playbookChoice);

const askStatsAndMoves = (context) => {
  const { choose, choices } = playbookConfigs[context.playbook].choices.moves;

  return prompts([
    {
      type: "select",
      name: "stats",
      message: "choose your stats",
      choices: sanitizeStats(
        playbookConfigs[context.playbook].choices.stats.choices
      ),
    },
    {
      type: choose > 1 ? "multiselect" : "select",
      min: choose,
      max: choose,
      name: "moves",
      message: `choose ${choose} move(s)`,
      choices,
    },
  ]);
};

const askPlaybookSpecifics = (context) => {
  const specifics = playbookConfigs[context.playbook].choices.specific;

  return prompts(
    Object.entries(specifics).map(
      ([header, { choices, choose, description }]) => ({
        type: choose > 1 ? "multiselect" : "select",
        message: description,
        name: header,
        choices,
        max: choose,
      })
    )
  );
};

export default {
  askNameAndPronouns,
  askPlaybook,
  askStatsAndMoves,
  askPlaybookSpecifics,
};
