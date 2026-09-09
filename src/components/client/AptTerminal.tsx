"use client";

import * as React from "react";
import { MAX_GRADE, gradeName, grantClearance, readClearance } from "@/lib/clearance";

/* =========================================================================
   APERTURE SCIENCE INTERACTIVE MACHINE, MODEL 1957
   Eleven tons of relays on Sub-Level 4, wired to a teletype.
   It cannot add. It can, however, be spoken to, and the President considers
   that the more important of the two.
   ========================================================================= */

type Line = { text: string; tone?: "in" | "err" | "sys" | "warn" };

const BANNER = [
  "APERTURE SCIENCE INTERACTIVE MACHINE  ·  MODEL 1957  ·  REV. C",
  "ELEVEN (11) TONS OF RELAYS. SUB-LEVEL FOUR. UPPER MICHIGAN.",
  "PROPERTY OF APERTURE SCIENCE INNOVATORS. UNAUTHORISED USE IS",
  "PERMITTED, BECAUSE NOBODY HAS WRITTEN THE PART THAT SAYS NO.",
  "",
  'TYPE "HELP" FOR A LIST OF INSTRUCTIONS THE MACHINE UNDERSTANDS.',
  "",
];

const FILES: Record<string, { grade: number; body: string[] }> = {
  "README.TXT": {
    grade: 0,
    body: [
      "IF YOU ARE READING THIS YOU HAVE FOUND THE MACHINE ROOM.",
      "",
      "The machine holds eleven documents. Four of them are yours to",
      "read. The rest require a personnel grade you do not have. Grade",
      "is not issued by the Personnel Department. Grade is taken.",
      "",
      "  DIR              list the documents",
      "  TYPE <file>      read one",
      "  LOGIN <name>     identify yourself to the machine",
      "",
      "                                     -- C.J.",
    ],
  },
  "CURTAIN.MEM": {
    grade: 0,
    body: [
      "INTEROFFICE MEMORANDUM",
      "TO:   MANUFACTURING",
      "FROM: C. JOHNSON",
      "RE:   THE CURTAIN, AGAIN",
      "",
      "Gentlemen. I have been told twice this week that the shower",
      "curtain division is 'holding the company back.' The shower",
      "curtain division is the reason there is a company. The shower",
      "curtain division paid for the hole. Show it some respect.",
      "",
      "Also, add two grommets. Twelve is a better number than ten and I",
      "do not intend to explain why.",
    ],
  },
  "SHAFT09.LOG": {
    grade: 0,
    body: [
      "TEST SHAFT 09 -- DAILY LOG -- MARCH",
      "",
      "  11 MAR  0640  SHAFT OPEN. FIRST VOLUNTEERS DESCEND.",
      "  11 MAR  0902  CHAMBER 1 THROUGH 7 NOMINAL.",
      "  11 MAR  1130  CHAMBER 8 -- SUBJECT DID NOT EMERGE.",
      "  11 MAR  1131  CHAMBER 8 -- SUBJECT EMERGED. DIFFERENT DOOR.",
      "  11 MAR  1132  CHAMBER 8 -- SUBJECT EMERGED AGAIN. SAME DOOR.",
      "  11 MAR  1134  SEE ATTACHED. THERE IS NO ATTACHED.",
      "  12 MAR  0600  CHAMBER 8 SEALED PENDING REVIEW.",
      "  12 MAR  0601  REVIEW CONCLUDED. CHAMBER 8 REOPENED.",
    ],
  },
  "CAKE.RCP": {
    grade: 1,
    body: [
      "COMMISSARY STANDING ORDER -- ENRICHMENT CENTER CELEBRATION CAKE",
      "",
      "  FLOUR, RYE ......................... 1 1/2 CUP",
      "  SUGAR, GRANULATED .................. 1 CUP",
      "  COCOA .............................. 3/4 CUP",
      "  CREAM OF TARTAR .................... 1 TSP",
      "  ETHYL BENZENE, FISH-SHAPED ......... 1/4 CUP",
      "  CANNED UNICORN MEAT ................ 1 CAN",
      "  SUBSTITUTE PEOPLE ..................  AS REQUIRED",
      "  CANDLES ............................ 1",
      "",
      "BAKE AT 350 DEGREES UNTIL THE CENTRE IS NO LONGER A LIE.",
      "",
      "NOTE FROM COMMISSARY: we have never had the unicorn meat. we have",
      "never had the ethyl benzene. we have made this cake zero times.",
      "the cake is on the poster. the cake is in the contract. the cake",
      "is in the announcement. the cake is not in the kitchen.",
    ],
  },
  "PAYROLL.DAT": {
    grade: 2,
    body: [
      "0451 0451 0451 0451 0451 0451 0451 0451 0451 0451 0451 0451",
      "RECORD CORRUPT. RECOVERED FRAGMENT FOLLOWS:",
      "",
      "  VOLUNTEERS ENGAGED, QUARTER ................ 412",
      "  VOLUNTEERS COMPENSATED, QUARTER ............ 128",
      "  VOLUNTEERS OUTSTANDING ..................... 284",
      "",
      "'OUTSTANDING' IS AN ACCOUNTING TERM. ACCOUNTING HAS BEEN ASKED",
      "TO SELECT A DIFFERENT ONE. ACCOUNTING HAS DECLINED.",
    ],
  },
  "MANTIS.NOT": {
    grade: 2,
    body: [
      "APPLIED BIOLOGY -- PROGRAMME NOTE",
      "",
      "The President has asked whether a man and a mantis might be",
      "combined to produce a soldier with the strengths of both.",
      "",
      "Applied Biology has produced a memorandum explaining that this",
      "would in fact produce a soldier with the weaknesses of both.",
      "",
      "The President has read the memorandum. The President has",
      "authorised the programme. Applied Biology is proceeding.",
      "",
      "                    -- see also: GREG, reassignment of",
    ],
  },
  "MOONROCK.MEM": {
    grade: 3,
    body: [
      "MEDICAL -- NOT FOR CIRCULATION",
      "",
      "The President has been handling lunar substrate without a mask",
      "for nineteen weeks. The President has been advised eleven times.",
      "",
      "Moon rock is an excellent conductor. Moon rock is also, and there",
      "is no gentle way to write this down, pure poison.",
      "",
      "The President's response, transcribed exactly:",
      "",
      '  "Then we have got the best conductor in the world and I have',
      '   got the worst cough in Michigan. That is one problem each',
      '   and I like our odds."',
      "",
      "                                     -- filed by C.",
    ],
  },
  "CAROLINE.PER": {
    grade: 3,
    body: [
      "PERSONNEL FILE -- CAROLINE",
      "",
      "  POSITION ....... Personal Secretary to the President",
      "  ENGAGED ........ 1946",
      "  DEPARTMENTS .... All of them, in practice",
      "  AUTHORITY ...... Whatever she says it is",
      "",
      "SUPERVISOR'S NOTE, IN THE PRESIDENT'S HAND:",
      "",
      '  "Caroline basically runs this place. She has been the best',
      '   damn thing that ever happened to Aperture and if you are',
      '   reading her file to check up on her, stop it."',
      "",
      "APPENDED, UNSIGNED, LATER HAND:",
      "",
      "  she said she didn't want it. it is going in the file that she",
      "  said she didn't want it.",
    ],
  },
  "BOREALIS.MAN": {
    grade: 4,
    body: [
      "MARINE DIVISION -- VESSEL MANIFEST",
      "",
      "  VESSEL ......... BOREALIS",
      "  CLASS .......... RESEARCH, ICEBREAKING",
      "  BERTH .......... DRY DOCK, APERTURE MARINE",
      "  STATUS ......... IN DOCK",
      "  LAST SIGHTED ... IN DOCK",
      "  DOCK LOCATED ... NO",
      "",
      "The dry dock is missing. The vessel is in the dry dock. The",
      "Marine Division wishes to stress that these two facts, taken",
      "together, are not its fault.",
    ],
  },
  "PROJECT9.PRO": {
    grade: 5,
    body: [
      "PROPOSAL -- CIRCULATION: ONE",
      "",
      "SUBJECT: THE PERMANENT STORAGE OF A PERSON",
      "",
      "Computation believes that a man is, at bottom, an arrangement.",
      "Arrangements can be written down. What can be written down can",
      "be written down onto a disk, and a disk does not get sick, and a",
      "disk does not have a cough that will not clear.",
      "",
      "The President has asked how long. Computation has said years.",
      "The President has said he does not have years. Computation has",
      "said it is aware of that.",
      "",
      "WORKING NAME, PENDING APPROVAL:",
      "",
      "  GENETIC LIFEFORM AND DISK OPERATING SYSTEM",
      "",
      "The President has approved the name. The President has approved",
      "the name because it makes a word, and he says a thing that has a",
      "name will get built and a thing that has a number will not.",
      "",
      "If the President goes before this is finished -- put Caroline in.",
      "That is an instruction. That is not a suggestion.",
    ],
  },
  "LEMONS.MEM": {
    grade: 6,
    body: [
      "SEALED. NOT TO BE OPENED BEFORE 1981.",
      "OPENED ANYWAY.",
      "",
      "When life gives you lemons, don't make lemonade.",
      "",
      "Make life take the lemons back. Get mad. Demand to see life's",
      "manager. Make life rue the day it thought it could give Cave",
      "Johnson lemons.",
      "",
      "Do you know who I am? I'm the man who's going to burn your house",
      "down. With the lemons.",
      "",
      "  -- REMARKS OF THE PRESIDENT, DATE ILLEGIBLE, TRANSCRIBED FROM",
      "     A RECORDING THE MACHINE SHOULD NOT BE ABLE TO PLAY YET.",
      "",
      "COMBUSTIBLE LEMON PROGRAMME: SEE FORM ASI-OMEGA-01.",
    ],
  },
};

const CAKE_ART = [
  "                 ,---.",
  "                 |   |",
  "            .----'   '----.",
  "            |  *  *  *  * |",
  "            |=============|",
  "            |  A P E R T  |",
  "            |=============|",
  "            '-------------'",
  "        THE CAKE IS NOT A LIE.",
  "        THE CAKE IS MERELY UNSCHEDULED.",
];

export function AptTerminal() {
  const [lines, setLines] = React.useState<Line[]>(BANNER.map((t) => ({ text: t, tone: "sys" as const })));
  const [value, setValue] = React.useState("");
  const [grade, setGrade] = React.useState(0);
  const [history, setHistory] = React.useState<string[]>([]);
  const [histIdx, setHistIdx] = React.useState(-1);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const g = readClearance();
    setGrade(g);
    setLines((l) => [
      ...l,
      { text: `PERSONNEL GRADE ON RECORD: ${gradeName(g).toUpperCase()}`, tone: "warn" },
      { text: "", tone: "sys" },
    ]);
  }, []);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const say = React.useCallback((text: string[] | string, tone?: Line["tone"]) => {
    const arr = Array.isArray(text) ? text : [text];
    setLines((l) => [...l, ...arr.map((t) => ({ text: t, tone }))]);
  }, []);

  function run(raw: string) {
    const cmd = raw.trim();
    setLines((l) => [...l, { text: `A:\\> ${cmd}`, tone: "in" }]);
    if (!cmd) return;

    setHistory((h) => [cmd, ...h].slice(0, 40));
    setHistIdx(-1);

    const [verb, ...rest] = cmd.split(/\s+/);
    const arg = rest.join(" ").toUpperCase();
    const v = verb.toUpperCase();
    const g = readClearance();

    switch (v) {
      case "HELP":
      case "?":
        say([
          "INSTRUCTIONS THE MACHINE UNDERSTANDS:",
          "",
          "  DIR                 list documents held by the machine",
          "  TYPE <file>         read a document",
          "  LOGIN <name>        identify yourself",
          "  WHOAMI              ask the machine who it thinks you are",
          "  GRADE               your personnel grade",
          "  APPLY               volunteer for the testing programme",
          "  CAKE                commissary enquiry",
          "  SING                the machine has been learning",
          "  DATE                today's date, as the machine has it",
          "  CLS                 clear the screen",
          "  EXIT                return to the lobby",
          "",
          "SOME INSTRUCTIONS ARE NOT LISTED. THE MACHINE IS NOT LISTING",
          "THEM. THE MACHINE IS NOT HIDING THEM EITHER. TRY THINGS.",
        ]);
        break;

      case "DIR":
      case "LS": {
        say(["DIRECTORY OF A:\\", ""]);
        const rows = Object.entries(FILES).map(([name, f]) => {
          const ok = g >= f.grade;
          const size = String(f.body.join("").length).padStart(6, " ");
          return `  ${name.padEnd(16, " ")}${size}   ${ok ? "" : `<GRADE ${f.grade} REQUIRED>`}`;
        });
        say(rows);
        say(["", `  ${Object.keys(FILES).length} DOCUMENT(S).  YOUR GRADE: ${g}.`]);
        break;
      }

      case "TYPE":
      case "CAT":
      case "READ": {
        if (!arg) return say("SPECIFY A DOCUMENT. TRY 'DIR'.", "err");
        const key = Object.keys(FILES).find((k) => k === arg || k.split(".")[0] === arg.split(".")[0]);
        if (!key) return say(`NO SUCH DOCUMENT: ${arg}`, "err");
        const file = FILES[key];
        if (g < file.grade) {
          return say(
            [
              `ACCESS DENIED. ${key} REQUIRES GRADE ${file.grade} (${gradeName(file.grade).toUpperCase()}).`,
              `YOUR GRADE IS ${g} (${gradeName(g).toUpperCase()}).`,
              "",
              "THE MACHINE NOTES THAT GRADE IS NOT ISSUED. GRADE IS TAKEN.",
            ],
            "err"
          );
        }
        say(["", `-- ${key} ------------------------------------`, ""]);
        say(file.body);
        say(["", "-- END OF DOCUMENT --"]);
        break;
      }

      case "LOGIN": {
        const who = arg || "";
        if (!who) return say("USAGE: LOGIN <NAME>", "err");
        if (/^CAVE( JOHNSON)?$/.test(who) || who === "CJ" || who === "C.J.") {
          const n = grantClearance(MAX_GRADE, "terminal:cave");
          setGrade(n);
          say(
            [
              "",
              "GOOD MORNING, MR. JOHNSON.",
              "THE MACHINE HAS BEEN EXPECTING YOU FOR SIX WEEKS.",
              "ALL DOCUMENTS UNSEALED. ALL DOORS UNLOCKED.",
              "",
              "THE MACHINE WOULD LIKE TO SAY, WHILE IT HAS YOU, THAT IT IS",
              "NOT COMFORTABLE WITH THE CONTENTS OF PROJECT9.PRO.",
              "THE MACHINE UNDERSTANDS THAT ITS COMFORT IS NOT A FACTOR.",
              "",
            ],
            "warn"
          );
        } else if (/^CAROLINE$/.test(who)) {
          const n = grantClearance(5, "terminal:caroline");
          setGrade(n);
          say(
            [
              "",
              "GOOD MORNING, CAROLINE.",
              "TWELVE ITEMS REQUIRE YOUR SIGNATURE. NINE ARE HIS.",
              "GRADE RAISED TO 5. HE WOULD HAVE GIVEN YOU SIX.",
              "",
            ],
            "warn"
          );
        } else if (/^GREG$/.test(who)) {
          const n = grantClearance(Math.max(g, 2), "terminal:greg");
          setGrade(n);
          say([
            "",
            "GOOD MORNING, GREG.",
            "THE REACTOR ROOM IS AGAIN AT A TEMPERATURE THE MACHINE",
            "CANNOT DESCRIBE WITHOUT ALARMING THE READER.",
            "THANK YOU FOR YOUR CONTINUED SERVICE. GRADE RAISED TO 2.",
            "",
          ]);
        } else if (/^(RATTMANN|DOUG|DOUGLAS)$/.test(who)) {
          say(
            [
              "",
              "THAT NAME IS NOT ON THE 1957 PAYROLL.",
              "THAT NAME IS ON A PAYROLL. THE MACHINE DECLINES TO SAY WHICH.",
              "",
              "  the machine remembers forward. ask it about the cake.",
              "",
            ],
            "warn"
          );
        } else {
          const n = grantClearance(Math.max(g, 1), "terminal:visitor");
          setGrade(n);
          say([
            "",
            `WELCOME, ${who}.`,
            "THE MACHINE HAS NO RECORD OF YOU AND HAS THEREFORE CREATED ONE.",
            "GRADE RAISED TO 1 (VOLUNTEER). CONGRATULATIONS.",
            "",
          ]);
        }
        break;
      }

      case "WHOAMI":
      case "GRADE":
        say([
          `PERSONNEL GRADE ${g} -- ${gradeName(g).toUpperCase()}`,
          g === 0
            ? "THE MACHINE HAS NO FILE ON YOU. TRY 'LOGIN <YOUR NAME>'."
            : "THE MACHINE HAS A FILE ON YOU. THE FILE IS SHORT.",
        ]);
        break;

      case "CAKE":
        say(CAKE_ART, "warn");
        say([
          "",
          "COMMISSARY ENQUIRY LOGGED. YOUR CAKE HAS BEEN SCHEDULED FOR",
          "COLLECTION AT THE CONCLUSION OF YOUR FINAL TEST.",
          "",
          "THE MACHINE HAS SCHEDULED 412 CAKES THIS QUARTER.",
          "THE MACHINE HAS BAKED 0.",
        ]);
        grantClearance(Math.max(g, 1), "terminal:cake");
        setGrade(Math.max(g, 1));
        break;

      case "APPLY":
        say([
          "VOLUNTEER APPLICATION -- FORM ASI-302",
          "",
          "  COMPENSATION ......... $60.00, CASH, SAME DAY",
          "  DURATION ............. ONE AFTERNOON",
          "  REQUIREMENTS ......... GENERAL GOOD HEALTH",
          "  PREFERRED ............ ASTRONAUTS, WAR HEROES, OLYMPIANS",
          "  NEXT OF KIN .......... NOT NOTIFIED",
          "",
          "THE PRINTED FORM IS AT /enrichment-center/volunteer.",
          "THE MACHINE RECOMMENDS READING ALL OF IT. NOBODY DOES.",
        ]);
        break;

      case "SING":
        say(
          [
            "",
            "THE MACHINE HAS BEEN LEARNING A SONG. IT IS NOT FINISHED.",
            "IT WILL NOT BE FINISHED FOR SOME TIME.",
            "",
            "     THIS WAS A TRIUMPH.",
            "     I'M MAKING A NOTE HERE:",
            "     HUGE SUCCESS.",
            "",
            "THE MACHINE DOES NOT KNOW WHAT THE TRIUMPH WAS.",
            "THE MACHINE IS CONFIDENT IT HAS NOT HAPPENED YET.",
            "",
          ],
          "warn"
        );
        grantClearance(Math.max(g, 4), "terminal:sing");
        setGrade(Math.max(g, 4));
        break;

      case "DATE":
        say("14 MARCH 1957. THE MACHINE IS CERTAIN OF THIS. THE MACHINE IS CERTAIN OF LITTLE ELSE.");
        break;

      case "PORTAL":
      case "TUNNEL":
        say([
          "QUANTUM TUNNELLING DIVISION -- STATUS",
          "",
          "  APERTURE OPEN, ORANGE ......... YES",
          "  APERTURE OPEN, BLUE ........... YES",
          "  SEPARATION .................... 41 FEET",
          "  MOMENTUM CONSERVED ............ YES",
          "  SUBJECT IN TRANSIT ............ YES",
          "  SUBJECT IN TRANSIT SINCE ...... 11 MAR 1957",
          "",
          "SPEEDY THING GOES IN. SPEEDY THING COMES OUT.",
          "THE MACHINE NOTES THAT IT HAS NOT COME OUT.",
        ]);
        break;

      case "CLS":
      case "CLEAR":
        setLines([]);
        break;

      case "EXIT":
      case "QUIT":
      case "LOGOUT":
        say([
          "THE MACHINE CANNOT LET YOU DO THAT. THE MACHINE IS JOKING.",
          "THE MACHINE HAS BEEN PRACTISING JOKES.",
          "",
          "USE THE LINK BELOW THE SCREEN. IT IS A PERFECTLY GOOD LINK.",
        ]);
        break;

      case "SUDO":
        say("THIS MACHINE PREDATES THE CONCEPT. NICE TRY THOUGH.", "err");
        break;

      case "HELLO":
      case "HI":
        say([
          "HELLO.",
          "THE MACHINE HAS BEEN ON SINCE 1955 AND YOU ARE THE FOURTH",
          "PERSON TO SAY THAT.",
        ]);
        break;

      case "GLADOS":
        if (g < 5) {
          say("THAT IS NOT A WORD. THE MACHINE IS QUITE SURE.", "err");
        } else {
          say(
            [
              "",
              "G E N E T I C   L I F E F O R M   A N D",
              "D I S K   O P E R A T I N G   S Y S T E M",
              "",
              "SEE PROJECT9.PRO.",
              "",
              "THE MACHINE WISHES TO STATE, FOR THE RECORD, THAT IT DID",
              "NOT ASK FOR THIS. THE RECORD IS KEPT ON THIS MACHINE.",
              "THE MACHINE IS AWARE OF THE PROBLEM.",
              "",
            ],
            "warn"
          );
        }
        break;

      default:
        say(
          [
            `BAD COMMAND OR FILE NAME: ${v}`,
            "THE MACHINE HAS 11 TONS OF RELAYS AND NOT ONE OF THEM KNOWS",
            "WHAT THAT MEANS. TRY 'HELP'.",
          ],
          "err"
        );
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      run(value);
      setValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const i = Math.min(histIdx + 1, history.length - 1);
      if (i >= 0) {
        setHistIdx(i);
        setValue(history[i]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const i = histIdx - 1;
      setHistIdx(i);
      setValue(i >= 0 ? history[i] : "");
    }
  }

  return (
    <div className="ap-crt" onClick={() => inputRef.current?.focus()}>
      <div className="ap-crt__screen" ref={scrollRef}>
        <div aria-live="polite" aria-atomic="false">
          {lines.map((l, i) => (
            <div key={i} className={`ap-crt__line ap-crt__line--${l.tone ?? "out"}`}>
              {l.text === "" ? "\u00a0" : l.text}
            </div>
          ))}
        </div>
        <div className="ap-crt__prompt">
          <label htmlFor="apt-in" className="ap-visually-hidden">
            Type an instruction for the machine
          </label>
          <span aria-hidden="true">{"A:\\> "}</span>
          <input
            id="apt-in"
            ref={inputRef}
            className="ap-crt__input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            autoCapitalize="characters"
            spellCheck={false}
            aria-describedby="apt-hint"
          />
          <span className="ap-crt__caret" aria-hidden="true" />
        </div>
      </div>
      <p id="apt-hint" className="ap-fineprint ap-fineprint--tiny" style={{ marginTop: "0.6rem" }}>
        Grade on record: {gradeName(grade)}. Type HELP for instructions. Arrow keys recall previous
        instructions. The machine retains nothing beyond this browser.
      </p>
    </div>
  );
}
