import { createMachine, interpret, assign, send } from "xstate";

import services from "./services.js";

const initialContext = {
  name: "",
  pronouns: "",
  playbook: {},
};

const machine = createMachine(
  {
    id: "machine",
    initial: "demographics",
    context: initialContext,
    states: {
      demographics: {
        on: { PLAYBOOK: "playbook" },
        invoke: {
          src: "askNameAndPronouns",
          onDone: {
            actions: [
              assign((context, { data }) => ({
                name: data.name,
                pronouns: data.pronouns,
              })),
              send("PLAYBOOK"),
            ],
          },
        },
      },
      playbook: {
        on: { STATS: "statsAndMoves" },
        invoke: {
          src: "askPlaybook",
          onDone: {
            actions: [
              assign({
                playbook: (context, { data }) => data,
              }),
              send("STATS"),
            ],
          },
        },
      },
      statsAndMoves: {
        on: { PLAYBOOK_SPECIFICS: "playbookSpecifics" },
        invoke: {
          src: "askStatsAndMoves",
          onDone: {
            actions: [
              assign((context, { data }) => ({
                stats: data.stats,
                moves: data.moves,
              })),
              send("PLAYBOOK_SPECIFICS"),
            ],
          },
        },
      },
      playbookSpecifics: {
        invoke: {
          src: "askPlaybookSpecifics",
          onDone: {},
          onError: {},
        },
      },
    },
  },
  { services }
);

export default interpret(machine);
