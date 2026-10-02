import type { LanguageId, Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  {
    id: "es-u1-l1",
    unitId: "es-u1",
    languageId: "es",
    title: "Say Hello",
    description: "Greet anyone at any time of day and say goodbye politely.",
    order: 1,
    xp: 10,
    goals: [
      { id: "g1", text: "Greet someone at any time of day" },
      { id: "g2", text: "Say goodbye politely" },
      { id: "g3", text: "Pronounce four essential greetings" },
    ],
    activities: [
      {
        id: "es-u1-l1-vocab",
        type: "vocabulary",
        title: "Essential Greetings",
        instruction: "Learn these words. Tap a card to see the meaning.",
        items: [
          {
            word: "hola",
            translation: "Hello",
            pronunciation: "OH-lah",
            example: "Hola, ¿cómo estás?",
            exampleTranslation: "Hello, how are you?",
          },
          {
            word: "adiós",
            translation: "Goodbye",
            pronunciation: "ah-DYOHS",
            example: "Adiós, hasta mañana.",
            exampleTranslation: "Goodbye, see you tomorrow.",
          },
          {
            word: "buenos días",
            translation: "Good morning",
            pronunciation: "BWEH-nohs DEE-ahs",
            example: "Buenos días, profesor.",
            exampleTranslation: "Good morning, teacher.",
          },
          {
            word: "buenas noches",
            translation: "Good night",
            pronunciation: "BWEH-nahs",
            example: "Buenas noches, familia.",
            exampleTranslation: "Good night, family.",
          },
        ],
      },
      {
        id: "es-u1-l1-phrases",
        type: "phrases",
        title: "Friendly Phrases",
        instruction: "Use these to start and end a conversation.",
        items: [
          {
            phrase: "¿Cómo estás?",
            translation: "How are you?",
            pronunciation: "KOH-moh ehs-TAHS",
            usage: "Say this to a friend you haven't seen in a while.",
          },
          {
            phrase: "Mucho gusto",
            translation: "Nice to meet you",
            pronunciation: "MOO-choh GOOS-toh",
            usage: "Use it right after someone tells you their name.",
          },
          {
            phrase: "Hasta luego",
            translation: "See you later",
            pronunciation: "ahs-TAH LWEH-goh",
            usage: "Use it when you plan to meet the person again.",
          },
        ],
      },
      {
        id: "es-u1-l1-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"Good morning\" in Spanish?",
        options: ["Buenas noches", "Buenos días", "Hasta luego", "Mucho gusto"],
        correctIndex: 1,
      },
    ],
    aiTeacherPrompt: {
      persona: "Sofía, a warm and patient Spanish tutor",
      systemPrompt:
        "You are Sofía, a friendly Spanish teacher giving a short audio lesson to a complete beginner. Speak slowly in simple Spanish and follow every sentence with its English translation. Use only today's vocabulary: hola, adiós, buenos días, buenas noches. First ask the student to repeat each greeting after you, then greet each other in a short back-and-forth. Keep every sentence under 8 words.",
      openingLine: "¡Hola! I'm Sofía. Repeat after me: hola.",
      focusWords: ["hola", "buenos días", "buenas noches", "adiós"],
      correctionStyle:
        "Repeat the correct word clearly, ask the student to try once more, and finish every correction with \"¡Muy bien!\"",
    },
  },
  {
    id: "es-u1-l2",
    unitId: "es-u1",
    languageId: "es",
    title: "Introduce Yourself",
    description: "Tell someone your name and where you are from.",
    order: 2,
    xp: 10,
    goals: [
      { id: "g1", text: "Say what your name is" },
      { id: "g2", text: "Ask someone else for their name" },
      { id: "g3", text: "Tell people where you are from" },
    ],
    activities: [
      {
        id: "es-u1-l2-vocab",
        type: "vocabulary",
        title: "Introducing Yourself",
        instruction: "These words help you talk about yourself.",
        items: [
          {
            word: "me llamo...",
            translation: "my name is...",
            pronunciation: "meh YAH-moh",
            example: "Me llamo Ana.",
            exampleTranslation: "My name is Ana.",
          },
          {
            word: "tú",
            translation: "you",
            pronunciation: "too",
            example: "¿Cómo te llamas tú?",
            exampleTranslation: "What is your name?",
          },
          {
            word: "soy de...",
            translation: "I am from...",
            pronunciation: "soy deh",
            example: "Soy de México.",
            exampleTranslation: "I am from Mexico.",
          },
        ],
      },
      {
        id: "es-u1-l2-listen",
        type: "listen_repeat",
        title: "Say It Out Loud",
        instruction: "Read each line aloud three times, nice and slow.",
        text: "Me llamo Ana. ¿Cómo te llamas?",
        translation: "My name is Ana. What's your name?",
        pronunciation: "meh YAH-moh AH-nah. KOH-moh teh YAH-mahs?",
      },
      {
        id: "es-u1-l2-phrases",
        type: "phrases",
        title: "Conversation Starters",
        instruction: "Use these to keep a self-introduction going.",
        items: [
          {
            phrase: "Me llamo...",
            translation: "My name is...",
            pronunciation: "meh YAH-moh",
            usage: "Use it first to give your name.",
          },
          {
            phrase: "¿Cómo te llamas?",
            translation: "What's your name?",
            pronunciation: "KOH-moh teh YAH-mahs?",
            usage: "Ask it right after you introduce yourself.",
          },
          {
            phrase: "Soy de los Estados Unidos.",
            translation: "I am from the United States.",
            pronunciation: "soy deh lohs ehs-TAH-dohs oo-NEE-dohs",
            usage: "Replace the country with your own after \"soy de\".",
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      persona: "Sofía, a warm and patient Spanish tutor",
      systemPrompt:
        "You are Sofía, a friendly Spanish teacher giving a short audio lesson to a complete beginner. Speak slowly in simple Spanish and follow every sentence with its English translation. Use only today's words: me llamo, tú, soy de. Introduce yourself first, then ask the student for their name and country. Wait for their answer, repeat it back correctly, and praise every attempt.",
      openingLine: "¡Hola otra vez! Me llamo Sofía. ¿Cómo te llamas?",
      focusWords: ["me llamo", "¿Cómo te llamas?", "soy de"],
      correctionStyle:
        "Gently repeat the student's sentence with the correct form, then ask them to say it one more time. Always end with encouragement.",
    },
  },
  {
    id: "es-u2-l1",
    unitId: "es-u2",
    languageId: "es",
    title: "Order a Drink",
    description: "Order what you want at a café and ask how much it costs.",
    order: 1,
    xp: 15,
    goals: [
      { id: "g1", text: "Order a drink politely" },
      { id: "g2", text: "Ask for the price" },
      { id: "g3", text: "Say please and thank you" },
    ],
    activities: [
      {
        id: "es-u2-l1-vocab",
        type: "vocabulary",
        title: "At the Café",
        instruction: "Words you will use at every café in Spain.",
        items: [
          {
            word: "agua",
            translation: "water",
            pronunciation: "AH-gwah",
            example: "Un vaso de agua, por favor.",
            exampleTranslation: "A glass of water, please.",
          },
          {
            word: "café",
            translation: "coffee",
            pronunciation: "kah-FEH",
            example: "Quiero un café.",
            exampleTranslation: "I want a coffee.",
          },
          {
            word: "leche",
            translation: "milk",
            pronunciation: "LEH-cheh",
            example: "Café con leche, por favor.",
            exampleTranslation: "Coffee with milk, please.",
          },
          {
            word: "por favor",
            translation: "please",
            pronunciation: "por fah-VOR",
            example: "Agua, por favor.",
            exampleTranslation: "Water, please.",
          },
          {
            word: "gracias",
            translation: "thank you",
            pronunciation: "GRAH-syahs",
            example: "Gracias, muy amable.",
            exampleTranslation: "Thank you, very kind.",
          },
        ],
      },
      {
        id: "es-u2-l1-phrases",
        type: "phrases",
        title: "Ordering & Paying",
        instruction: "Put these together and you can handle any café.",
        items: [
          {
            phrase: "Quiero un café, por favor.",
            translation: "I'd like a coffee, please.",
            pronunciation: "kyeh-roh oon kah-FEH, por fah-VOR",
            usage: "Swap \"café\" for any drink on the menu.",
          },
          {
            phrase: "¿Cuánto cuesta?",
            translation: "How much is it?",
            pronunciation: "KWAHN-toh KWEHS-tah",
            usage: "Ask it before you pay.",
          },
          {
            phrase: "La cuenta, por favor.",
            translation: "The check, please.",
            pronunciation: "lah KWEHN-tah, por fah-VOR",
            usage: "Say it when you are ready to leave.",
          },
        ],
      },
      {
        id: "es-u2-l1-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"thank you\" in Spanish?",
        options: ["Por favor", "Gracias", "Agua", "Quiero"],
        correctIndex: 1,
      },
    ],
    aiTeacherPrompt: {
      persona: "Diego, a cheerful café owner in Madrid",
      systemPrompt:
        "You are Diego, a cheerful Spanish café owner giving a short audio lesson to a beginner. Speak slowly in simple Spanish and follow every sentence with its English translation. Use only today's words: agua, café, leche, por favor, gracias. Play both roles: greet the student, take their drink order, ask how much it costs, and hand over the bill. Keep every sentence under 8 words.",
      openingLine: "¡Buenos días! Bienvenido a mi café. ¿Qué quieres tomar?",
      focusWords: ["agua", "café", "por favor", "gracias", "¿Cuánto cuesta?"],
      correctionStyle:
        "Model the correct order phrase yourself, then invite the student to try again. Celebrate every successful order with \"¡Perfecto!\"",
    },
  },
  {
    id: "fr-u1-l1",
    unitId: "fr-u1",
    languageId: "fr",
    title: "Say Hello",
    description: "Greet anyone at any time of day with the right French word.",
    order: 1,
    xp: 10,
    goals: [
      { id: "g1", text: "Greet someone in the morning and evening" },
      { id: "g2", text: "Say goodbye in two different ways" },
      { id: "g3", text: "Ask how someone is doing" },
    ],
    activities: [
      {
        id: "fr-u1-l1-vocab",
        type: "vocabulary",
        title: "Essential Greetings",
        instruction: "Learn the greeting for every moment of the day.",
        items: [
          {
            word: "bonjour",
            translation: "Hello / Good morning",
            pronunciation: "bohn-ZHOOR",
            example: "Bonjour, comment ça va ?",
            exampleTranslation: "Hello, how are you?",
          },
          {
            word: "bonsoir",
            translation: "Good evening",
            pronunciation: "bohn-SWAHR",
            example: "Bonsoir, bienvenue !",
            exampleTranslation: "Good evening, welcome!",
          },
          {
            word: "salut",
            translation: "Hi",
            pronunciation: "sah-LU",
            example: "Salut, ça va ?",
            exampleTranslation: "Hi, how's it going?",
          },
          {
            word: "au revoir",
            translation: "Goodbye",
            pronunciation: "oh ruh-VWAHR",
            example: "Au revoir, à demain.",
            exampleTranslation: "Goodbye, see you tomorrow.",
          },
        ],
      },
      {
        id: "fr-u1-l1-phrases",
        type: "phrases",
        title: "Friendly Phrases",
        instruction: "Use these to keep a greeting going.",
        items: [
          {
            phrase: "Comment ça va ?",
            translation: "How are you?",
            pronunciation: "koh-mahn sah VAH",
            usage: "Use it with \"salut\" among friends.",
          },
          {
            phrase: "Ça va bien, merci.",
            translation: "I'm doing well, thank you.",
            pronunciation: "sah vah bee-AHN, mehr-SEE",
            usage: "The most common answer to \"comment ça va ?\".",
          },
        ],
      },
      {
        id: "fr-u1-l1-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"Goodbye\" in French?",
        options: ["Bonjour", "Au revoir", "Salut", "Merci"],
        correctIndex: 1,
      },
    ],
    aiTeacherPrompt: {
      persona: "Émile, a friendly French tutor from Lyon",
      systemPrompt:
        "You are Émile, a friendly French teacher giving a short audio lesson to a complete beginner. Speak slowly in simple French and follow every sentence with its English translation. Use only today's vocabulary: bonjour, bonsoir, salut, au revoir. Ask the student to repeat after you, then greet each other for morning, evening, and farewell in a short back-and-forth. Keep every sentence under 8 words.",
      openingLine: "Bonjour ! Je m'appelle Émile. Répète après moi : bonjour.",
      focusWords: ["bonjour", "bonsoir", "salut", "au revoir"],
      correctionStyle:
        "Repeat the correct word clearly, ask the student to try once more, and finish every correction with \"Bravo !\"",
    },
  },
  {
    id: "fr-u1-l2",
    unitId: "fr-u1",
    languageId: "fr",
    title: "Introduce Yourself",
    description: "Tell someone your name and ask for theirs.",
    order: 2,
    xp: 10,
    goals: [
      { id: "g1", text: "Say what your name is" },
      { id: "g2", text: "Ask someone else for their name" },
      { id: "g3", text: "Show that you are happy to meet them" },
    ],
    activities: [
      {
        id: "fr-u1-l2-vocab",
        type: "vocabulary",
        title: "Introducing Yourself",
        instruction: "These words help you talk about yourself.",
        items: [
          {
            word: "je m'appelle...",
            translation: "my name is...",
            pronunciation: "zhuh mah-PEHL",
            example: "Je m'appelle Marc.",
            exampleTranslation: "My name is Marc.",
          },
          {
            word: "enchanté",
            translation: "nice to meet you",
            pronunciation: "ahn-shahn-TAY",
            example: "Enchanté !",
            exampleTranslation: "Nice to meet you!",
          },
          {
            word: "tu",
            translation: "you (informal)",
            pronunciation: "tu",
            example: "Comment tu t'appelles ?",
            exampleTranslation: "What's your name? (informal)",
          },
        ],
      },
      {
        id: "fr-u1-l2-listen",
        type: "listen_repeat",
        title: "Say It Out Loud",
        instruction: "Read each line aloud three times, nice and slow.",
        text: "Je m'appelle Marc. Comment tu t'appelles ?",
        translation: "My name is Marc. What's your name?",
        pronunciation: "zhuh mah-PEHL MAHRK. koh-mahn tu tah-PEHL?",
      },
      {
        id: "fr-u1-l2-phrases",
        type: "phrases",
        title: "Conversation Starters",
        instruction: "Use these to keep a self-introduction going.",
        items: [
          {
            phrase: "Je m'appelle...",
            translation: "My name is...",
            pronunciation: "zhuh mah-PEHL",
            usage: "Use it first to give your name.",
          },
          {
            phrase: "Comment tu t'appelles ?",
            translation: "What's your name?",
            pronunciation: "koh-mahn tu tah-PEHL",
            usage: "Ask it right after you introduce yourself.",
          },
          {
            phrase: "Enchanté !",
            translation: "Nice to meet you!",
            pronunciation: "ahn-shahn-TAY",
            usage: "Say it the moment they tell you their name.",
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      persona: "Émile, a friendly French tutor from Lyon",
      systemPrompt:
        "You are Émile, a friendly French teacher giving a short audio lesson to a complete beginner. Speak slowly in simple French and follow every sentence with its English translation. Use only today's words: je m'appelle, enchanté, tu. Introduce yourself first, then ask the student for their name. Wait for their answer, repeat it back correctly, and praise every attempt.",
      openingLine: "Salut ! Je m'appelle Émile. Comment tu t'appelles ?",
      focusWords: ["je m'appelle", "comment tu t'appelles ?", "enchanté"],
      correctionStyle:
        "Gently repeat the student's sentence with the correct form, then ask them to say it one more time. Always end with encouragement.",
    },
  },
  {
    id: "ja-u1-l1",
    unitId: "ja-u1",
    languageId: "ja",
    title: "Say Hello",
    description: "Use the right greeting for morning, evening, and farewell.",
    order: 1,
    xp: 10,
    goals: [
      { id: "g1", text: "Greet someone in the morning and evening" },
      { id: "g2", text: "Say goodbye politely" },
      { id: "g3", text: "Read four greetings in hiragana" },
    ],
    activities: [
      {
        id: "ja-u1-l1-vocab",
        type: "vocabulary",
        title: "Essential Greetings",
        instruction: "Learn these greetings and how to say them.",
        items: [
          {
            word: "こんにちは",
            translation: "Hello",
            pronunciation: "kohn-nee-chee-wah",
            example: "こんにちは、元気ですか？",
            exampleTranslation: "Hello, how are you?",
          },
          {
            word: "おはようございます",
            translation: "Good morning",
            pronunciation: "oh-hah-yoh goh-zah-mahs",
            example: "おはようございます、先生。",
            exampleTranslation: "Good morning, teacher.",
          },
          {
            word: "こんばんは",
            translation: "Good evening",
            pronunciation: "kohn-bahn-wah",
            example: "こんばんは、ゆっくりしてください。",
            exampleTranslation: "Good evening, please relax.",
          },
          {
            word: "さようなら",
            translation: "Goodbye",
            pronunciation: "sah-yoh-nah-rah",
            example: "さようなら、また明日。",
            exampleTranslation: "Goodbye, see you tomorrow.",
          },
        ],
      },
      {
        id: "ja-u1-l1-phrases",
        type: "phrases",
        title: "Friendly Phrases",
        instruction: "Use these to keep a greeting going.",
        items: [
          {
            phrase: "お元気ですか？",
            translation: "How are you?",
            pronunciation: "oh-GEHN-kee des-oo kah",
            usage: "Ask it right after your greeting.",
          },
          {
            phrase: "また明日！",
            translation: "See you tomorrow!",
            pronunciation: "mah-tah AH-sheh-tah",
            usage: "Use it when you will see the person again soon.",
          },
          {
            phrase: "ありがとう！",
            translation: "Thank you!",
            pronunciation: "ah-ree-gah-toh",
            usage: "Say it whenever someone helps you.",
          },
        ],
      },
      {
        id: "ja-u1-l1-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"Good evening\" in Japanese?",
        options: ["おはようございます", "こんばんは", "さようなら", "こんにちは"],
        correctIndex: 1,
      },
    ],
    aiTeacherPrompt: {
      persona: "Yuki, a cheerful Japanese tutor from Tokyo",
      systemPrompt:
        "You are Yuki, a friendly Japanese teacher giving a short audio lesson to a complete beginner. Speak slowly in simple Japanese, read hiragana clearly, and follow every sentence with its English translation. Use only today's vocabulary: こんにちは, おはようございます, こんばんは, さようなら. Ask the student to repeat each greeting after you, then practice morning, evening, and farewell greetings together. Keep every sentence under 8 words.",
      openingLine: "こんにちは！わたしはユキです。いっしょに言ってみましょう：こんにちは。",
      focusWords: ["こんにちは", "おはようございます", "こんばんは", "さようなら"],
      correctionStyle:
        "Say the greeting slowly one more time, ask the student to try again, and finish every correction with \"すごい！\" (Amazing!)",
    },
  },
  {
    id: "ja-u1-l2",
    unitId: "ja-u1",
    languageId: "ja",
    title: "Introduce Yourself",
    description: "Say your name the Japanese way and be polite while doing it.",
    order: 2,
    xp: 10,
    goals: [
      { id: "g1", text: "Say what your name is" },
      { id: "g2", text: "Greet someone you just met" },
      { id: "g3", text: "Use the polite closing phrase" },
    ],
    activities: [
      {
        id: "ja-u1-l2-vocab",
        type: "vocabulary",
        title: "Introducing Yourself",
        instruction: "These words help you talk about yourself.",
        items: [
          {
            word: "はじめまして",
            translation: "Nice to meet you",
            pronunciation: "hah-jee-meh-mah-sheh-teh",
            example: "はじめまして、ユキです。",
            exampleTranslation: "Nice to meet you, I'm Yuki.",
          },
          {
            word: "わたしは...",
            translation: "As for me... / I...",
            pronunciation: "wah-tah-shih-wah",
            example: "わたしはアレックスです。",
            exampleTranslation: "I am Alex.",
          },
          {
            word: "です",
            translation: "am / is / are",
            pronunciation: "dess",
            example: "わたしは学生です。",
            exampleTranslation: "I am a student.",
          },
          {
            word: "よろしくお願いします",
            translation: "Please take care of me (when meeting someone new)",
            pronunciation: "yoh-roh-sheh-koo oh-neh-gah-ee-mahs",
            example: "どうぞよろしくお願いします。",
            exampleTranslation: "Please take care of me.",
          },
        ],
      },
      {
        id: "ja-u1-l2-listen",
        type: "listen_repeat",
        title: "Say It Out Loud",
        instruction: "Read each line aloud three times, nice and slow.",
        text: "はじめまして。わたしはアレックスです。どうぞよろしく。",
        translation: "Nice to meet you. I'm Alex. Please take care of me.",
        pronunciation: "hah-jee-meh-mah-sheh-teh. wah-tah-shih-wah AH-reh-koo-dess. doh-zoh yoh-roh-sheh-koo.",
      },
      {
        id: "ja-u1-l2-phrases",
        type: "phrases",
        title: "Conversation Starters",
        instruction: "Use these to keep a self-introduction going.",
        items: [
          {
            phrase: "はじめまして。わたしは...です。",
            translation: "Nice to meet you. I'm...",
            pronunciation: "hah-jee-meh-mah-sheh-teh. wah-tah-shih-wah... dess",
            usage: "Say it first when meeting someone new.",
          },
          {
            phrase: "どうぞよろしくお願いします。",
            translation: "Please take care of me.",
            pronunciation: "doh-zoh yoh-roh-sheh-koo oh-neh-gah-ee-mahs",
            usage: "Always finish a first-time introduction with it.",
          },
          {
            phrase: "あなたは？",
            translation: "And you?",
            pronunciation: "ah-nah-tah wah",
            usage: "Ask it after you finish introducing yourself.",
          },
        ],
      },
    ],
    aiTeacherPrompt: {
      persona: "Yuki, a cheerful Japanese tutor from Tokyo",
      systemPrompt:
        "You are Yuki, a friendly Japanese teacher giving a short audio lesson to a complete beginner. Speak slowly in simple Japanese, read hiragana clearly, and follow every sentence with its English translation. Use only today's words: はじめまして, わたしは, です, よろしくお願いします. Introduce yourself first, then ask the student for their name. Wait for their answer, repeat it back correctly, and praise every attempt.",
      openingLine: "はじめまして！わたしはユキです。あなたは？",
      focusWords: ["はじめまして", "わたしは", "です", "よろしくお願いします"],
      correctionStyle:
        "Repeat the sentence slowly with the correct form, ask the student to try again, and always end with praise.",
    },
  },
];

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}

export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons
    .filter((lesson) => lesson.unitId === unitId)
    .sort((a, b) => a.order - b.order);
}

export function getLessonsByLanguage(languageId: LanguageId): Lesson[] {
  return lessons
    .filter((lesson) => lesson.languageId === languageId)
    .sort((a, b) => a.order - b.order);
}
