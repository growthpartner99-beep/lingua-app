/**
 * Learning content types.
 *
 * The app uses hardcoded TypeScript data for lessons (no database).
 * Every data file in `src/data/` is typed with the shapes below.
 */

export type LanguageId = "es" | "fr" | "ja";

export interface Language {
  id: LanguageId;
  /** English name shown in the UI, e.g. "Spanish" */
  name: string;
  /** Name written in the language itself, e.g. "Español" */
  nativeName: string;
  /** Flag emoji for the language picker */
  flag: string;
  /** Short friendly description for the language card */
  description: string;
  /** Accent color for the language card UI (theme token hex) */
  accentColor: string;
}

export interface Unit {
  id: string;
  languageId: LanguageId;
  title: string;
  description: string;
  /** 1-based position of the unit inside its language path */
  order: number;
  /** Emoji icon shown on the learning path */
  icon: string;
  /** Theme token hex used for the unit banner / path node */
  color: string;
}

export interface LessonGoal {
  id: string;
  /** One short, student-friendly goal, e.g. "Greet someone at any time of day" */
  text: string;
}

export interface VocabularyItem {
  word: string;
  translation: string;
  /** Simple romanization / pronunciation hint, e.g. "OH-lah" */
  pronunciation: string;
  example: string;
  exampleTranslation: string;
}

export interface Phrase {
  phrase: string;
  translation: string;
  pronunciation: string;
  /** When or how the phrase is used */
  usage: string;
}

export interface VocabularyActivity {
  id: string;
  type: "vocabulary";
  title: string;
  instruction: string;
  items: VocabularyItem[];
}

export interface PhrasesActivity {
  id: string;
  type: "phrases";
  title: string;
  instruction: string;
  items: Phrase[];
}

export interface MultipleChoiceActivity {
  id: string;
  type: "multiple_choice";
  title: string;
  instruction: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface ListenRepeatActivity {
  id: string;
  type: "listen_repeat";
  title: string;
  instruction: string;
  text: string;
  translation: string;
  pronunciation: string;
}

export type Activity =
  | VocabularyActivity
  | PhrasesActivity
  | MultipleChoiceActivity
  | ListenRepeatActivity;

export type ActivityType = Activity["type"];

/**
 * Prompt material for a future audio lesson powered by a
 * Stream Vision Agent. The backend builds the agent's instructions
 * from this data — nothing here is secret.
 */
export interface AITeacherPrompt {
  /** Name and character of the AI teacher, e.g. "Sofía, a warm Spanish tutor" */
  persona: string;
  /** Full instruction sent to the Vision Agent for the lesson */
  systemPrompt: string;
  /** First line the teacher says when the session starts */
  openingLine: string;
  /** Vocabulary the teacher should practice aloud with the student */
  focusWords: string[];
  /** How the teacher corrects mistakes, e.g. "Repeat the correct word..." */
  correctionStyle: string;
}

export interface Lesson {
  id: string;
  unitId: string;
  languageId: LanguageId;
  title: string;
  description: string;
  /** 1-based position of the lesson inside its unit */
  order: number;
  /** XP awarded when the lesson is completed */
  xp: number;
  goals: LessonGoal[];
  activities: Activity[];
  aiTeacherPrompt: AITeacherPrompt;
}
