import { mergeObjects } from "../utils.js";

const common = {
  name: "",
  pronouns: "",
  luck: 0,
  harm: 0,
  experience: 0,
  stats: {
    charm: 0,
    cool: 0,
    sharp: 0,
    tough: 0,
    weird: 0,
  },
  moves: {
    charm: [{ title: "manipulate someone" }],
    cool: [{ title: "act under pressure" }, { title: "help out" }],
    sharp: [
      { title: "investigate a mystery" },
      { title: "read a bad situation" },
    ],
    tough: [{ title: "kick some ass" }, { title: "protect someone" }],
    weird: [{ title: "use magic" }],
    miscellaneous: [],
  },
};

const chosen = mergeObjects(common, {
  id: "chosen",
  description:
    "Your birth was prophesied. You are the Chosen One, and with your abilities you can change the world. If you fail, all will be destroyed. It all rests on you. Only you.",
  moves: {
    weird: [
      {
        title: "destiny's plaything",
        description:
          "At the beginning of each mystery, roll +Weird to see what is revealed about your immediate future. On a 10+, the Keeper will reveal a useful detail about the coming mystery. On a 7-9 you get a vague hint about it. On a miss, something bad is going to happen to you.",
      },
    ],
    miscellaneous: [
      {
        title: "i'm here for a reason",
        description:
          "There's something you are destined to do. Work out the details with the Keeper, based on your fate. You cannot die until it comes to pass. If you die in play, then you must spend a Luck point. You will then, somehow, recover or get returned to life. Once your task is done (or you use up all your Luck), all bets are off.",
      },
    ],
  },
  choices: {
    stats: {
      choose: 1,
      choices: [
        { charm: 2, cool: -1, sharp: 1, tough: 2, weird: -1 },
        { charm: -1, cool: 2, sharp: 1, tough: 2, weird: -1 },
        { charm: 1, cool: 2, sharp: 1, tough: 1, weird: -1 },
        { charm: -1, cool: 1, sharp: 2, tough: 1, weird: 2 },
        { charm: 1, cool: 2, sharp: 1, tough: 1, weird: 2 },
      ],
    },
    moves: {
      choose: 1,
      choices: [
        {
          title: "the big entrance",
          description:
            "When you make a showy entrance into a dangerous situation, roll +Cool. On 10+ everyone stops to watch and listen until you finish your opening speech. On a 7-9, you pick one person or monster to stop, watch and listen until you finish talking. On a miss, you're marked as the biggest threat by all.",
        },
        {
          title: "devastating",
          description: "When you inflict harm, you may inflict +1 harm.",
        },
        {
          title: "acceptance",
          description:
            "When your fate rears its ugly head, and you act in accordance with any of your fate tags (either heroic or doom) then mark experience.",
        },
        {
          title: "invincible",
          description:
            "You always count as having 2-armour. This doesn't stack with other protection.",
        },
        {
          title: "resilience",
          description:
            "You heal faster than normal people. Any time your harm gets healed, heal an extra point. Additionally, your wounds count as 1-harm less for the purpose of the Keeper's harm moves.",
        },
      ],
    },
    specific: {
      "weapon form": {
        description: "Design your weapon by choosing a form.",
        choose: 1,
        choices: [
          "staff (1 harm, hand, close)",
          "haft (2 harm, hand, heavy)",
          "handle (1 harm, hand, balanced)",
          "chain (1 harm, hand, area)",
        ],
      },
      "weapon business end": {
        description:
          "Now select three business-end options and add their tags to your weapon's base tags.",
        choose: 3,
        choices: [
          "artifact (magic)",
          "spikes (+1 harm, messy)",
          "blade (+1 harm)",
          "heavy (+1 harm)",
          "long (close)",
          "throwable (close)",
          "chain (area)",
        ],
      },
    },
  },
});

const crooked = mergeObjects(common, {
  id: "crooked",
  description:
    "Yeah, I’ve been around the block. A bit of this, a bit of that. When I came across the secret under-world of monsters and magic... well... it wasn’t so different from the underworld I already knew. It was easy to find an angle, just like before.",
  choices: {
    stats: {
      choose: 1,
      choices: [
        { charm: 1, cool: 1, sharp: 2, tough: 0, weird: -1 },
        { charm: -1, cool: 1, sharp: 1, tough: 2, weird: 0 },
        { charm: -1, cool: 2, sharp: 2, tough: 0, weird: -1 },
        { charm: 2, cool: 1, sharp: 1, tough: 0, weird: -1 },
        { charm: 2, cool: 0, sharp: 1, tough: 1, weird: 1 },
      ],
    },
    moves: {
      choose: 2,
      choices: [
        {
          title: "notorious",
          description:
            "You have a reputation from your criminal past. When you reveal who you are, your terrifying reputation counts as a reason for people to do what you ask, for the manipulate someone move. Revealing your identity to someone can create other problems later, of course.",
        },
        {
          title: "friends on the force",
          description:
            "You know a few cops who can be persuaded to look the other way, or do you a favour, for certain considerations. You can act under pressure to get in touch with them when you need to divert any law enforcement attention. There will be a cost, although maybe not right now.",
        },
        {
          title: "driver",
          description:
            "You have +1 ongoing while driving, plus you can hotwire anything (the older it is, the fewer tools you need to do it). You also own two handy, widely-available vehicles (perhaps a sportscar and a van).",
        },
      ],
    },
    specific: {
      underworld: {
        description: "Pick how you discovered about the real underworld.",
        choose: 1,
        choices: [
          "The target of a job was a dangerous creature. Pick one: vampire, werewolf, troll, reptiloid.",
          "You worked with someone who was more than they seemed. Pick one: sorcerer, demon, faerie, psychic.",
          "You were hired by something weird. Pick one: immortal, god, outsider, witch.",
          "Things went south on a job—including, but not limited to, running into (choose one): a horde of goblins, a hunger of ghouls, a dream-eater, a salamander.",
        ],
      },
    },
  },
});

const flake = mergeObjects(common, {
  id: "flake",
  description:
    "Everything’s connected. But not everyone can see the patterns, and most people don’t even look that hard. But me, I can never stop looking deeper. I can never stop seeing the truth. I spot the patterns. That’s how I found the monsters, and that’s how I help kill them.",
  choices: {
    stats: {
      choose: 1,
      choices: [
        { charm: 1, cool: 1, sharp: 2, tough: -1, weird: 0 },
        { charm: 0, cool: 1, sharp: 2, tough: -1, weird: 1 },
        { charm: 1, cool: -1, sharp: 2, tough: 1, weird: 0 },
        { charm: 1, cool: -1, sharp: 1, tough: 0, weird: 1 },
        { charm: 1, cool: -1, sharp: 2, tough: 0, weird: 2 },
      ],
    },
    moves: {
      choose: 3,
      choices: [
        {
          title: "sneaky",
          description:
            "When you attack from ambush, or from behind, inflict +2 harm.",
        },

        {
          title: "suspicious mind",
          description: "If someone lies to you, you know it.",
        },
        { title: "crazy eyes", description: "You get +1 Weird (max +3)" },
        {
          title: "see, it all fits together",
          description:
            "You can use Sharp instead of Charm when you manipulate someone.",
        },
        {
          title: "often overlooked",
          description:
            "When you act all crazy to avoid something, roll +Weird. On a 10+ you’re regarded as unthreatening and unimportant. On a 7-9, pick one: unthreatening or unimportant. On a miss, you draw lots (but not all) of the attention.",
        },
      ],
    },
  },
});

const spooky = mergeObjects(common, {
  id: "spooky",
  description:
    "I can do things, things that normal people can’t. But there’s a price—I haven’t paid it in full, yet, but the bill’s gonna come due soon. It’s best I don’t tell you any more. You get too close, you’ll get hurt.",
  choices: {
    stats: {
      choose: 1,
      choices: [
        { charm: 1, cool: 1, sharp: 2, tough: -1, weird: 0 },
        { charm: 0, cool: 1, sharp: 2, tough: -1, weird: 1 },
        { charm: 1, cool: -1, sharp: 2, tough: 1, weird: 0 },
        { charm: 1, cool: -1, sharp: 1, tough: 0, weird: 1 },
        { charm: 1, cool: -1, sharp: 2, tough: 0, weird: 2 },
      ],
    },
    moves: {
      choose: 3,
      choices: [
        {
          title: "the big whammy",
          description:
            "You can use your powers to kick some ass: roll +Weird instead of +Tough. The attack has 2-harm close obvious ignore-armour. On a miss, you’ll get a magical backlash.",
        },
        {
          title: "the sight",
          description:
            "You can see the invisible, especially spirits and magical influences. You may communicate with (maybe even make deals with) the spirits you see, and they give you more opportunities to spot clues when you investigate a mystery.",
        },
        {
          title: "telepathy",
          description:
            "You can read people’s thoughts and put words in their mind. This can allow you to inves- tigate a mystery or read a bad situation without needing to actually talk. You can also manipulate someone without speaking. You still roll moves as normal, except people will not expect the weirdness of your mental communication.",
        },
        {
          title: "hunches",
          description:
            "When something bad is happening (or just about to happen) somewhere that you aren’t, roll +Sharp. On a 10+ you knew where you needed to go, just in time to get there. On a 7-9, you get there late—in time to intervene, but not prevent it altogether. On a miss, you get there just in time to be in trouble yourself.",
        },
      ],
    },
  },
});

export default { chosen, crooked, flake, spooky };
