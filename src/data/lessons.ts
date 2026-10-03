import type { LanguageId, Lesson, Phrase } from "@/types/learning";

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
            pronunciation: "AHS-tah LWEH-goh",
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
    id: "es-u1-l3",
    unitId: "es-u1",
    languageId: "es",
    title: "Daily Life",
    description: "Talk about your routine and say what you do all day.",
    order: 3,
    xp: 10,
    goals: [
      { id: "g1", text: "Name the parts of your day" },
      { id: "g2", text: "Say when you do everyday things" },
      { id: "g3", text: "Describe a normal weekday" },
    ],
    activities: [
      {
        id: "es-u1-l3-vocab",
        type: "vocabulary",
        title: "Parts of the Day",
        instruction: "Learn the words that shape every day.",
        items: [
          {
            word: "la mañana",
            translation: "morning",
            pronunciation: "lah mah-NYAH-nah",
            example: "Estudio por la mañana.",
            exampleTranslation: "I study in the morning.",
          },
          {
            word: "la tarde",
            translation: "afternoon",
            pronunciation: "lah TAHR-deh",
            example: "Trabajo por la tarde.",
            exampleTranslation: "I work in the afternoon.",
          },
          {
            word: "desayunar",
            translation: "to eat breakfast",
            pronunciation: "deh-sah-yoo-NAR",
            example: "Desayuno a las siete.",
            exampleTranslation: "I eat breakfast at seven.",
          },
          {
            word: "trabajar",
            translation: "to work",
            pronunciation: "trah-bah-HAR",
            example: "Trabajo en una oficina.",
            exampleTranslation: "I work in an office.",
          },
        ],
      },
      {
        id: "es-u1-l3-phrases",
        type: "phrases",
        title: "A Normal Day",
        instruction: "Put these together to describe your routine.",
        items: [
          {
            phrase: "Me levanto temprano.",
            translation: "I get up early.",
            pronunciation: "meh leh-VAHN-toh tem-PRAH-noh",
            usage: "Say it first when you describe your morning.",
          },
          {
            phrase: "Voy a trabajar.",
            translation: "I go to work.",
            pronunciation: "voy ah trah-bah-HAR",
            usage: "Use it for any place you go every day.",
          },
          {
            phrase: "Ceno a las ocho.",
            translation: "I eat dinner at eight.",
            pronunciation: "SEH-noh ah lahs OH-choh",
            usage: "Swap the hour for your own.",
          },
        ],
      },
      {
        id: "es-u1-l3-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"morning\" in Spanish?",
        options: ["La tarde", "La mañana", "La noche", "Trabajar"],
        correctIndex: 1,
      },
    ],
    aiTeacherPrompt: {
      persona: "Sofía, a warm and patient Spanish tutor",
      systemPrompt:
        "You are Sofía, a friendly Spanish teacher giving a short audio lesson to a complete beginner. Speak slowly in simple Spanish and follow every sentence with its English translation. Use only today's words: la mañana, la tarde, desayunar, trabajar. Describe your own day first, then ask the student to describe theirs. Keep every sentence under 8 words.",
      openingLine: "¡Hola! Today we talk about the day. Repeat: la mañana.",
      focusWords: ["la mañana", "la tarde", "desayunar", "trabajar"],
      correctionStyle:
        "Say the word again at half speed, ask the student to try once more, and finish with \"¡Muy bien!\"",
    },
  },
  {
    id: "es-u1-l4",
    unitId: "es-u1",
    languageId: "es",
    title: "Family & Friends",
    description: "Name the people closest to you and talk about your friends.",
    order: 4,
    xp: 10,
    goals: [
      { id: "g1", text: "Name four family members" },
      { id: "g2", text: "Say who someone is to you" },
      { id: "g3", text: "Talk about a good friend" },
    ],
    activities: [
      {
        id: "es-u1-l4-vocab",
        type: "vocabulary",
        title: "The People Around You",
        instruction: "These words introduce your world.",
        items: [
          {
            word: "la madre",
            translation: "mother",
            pronunciation: "lah MAH-dreh",
            example: "Mi madre cocina muy bien.",
            exampleTranslation: "My mother cooks very well.",
          },
          {
            word: "el padre",
            translation: "father",
            pronunciation: "el PAH-dreh",
            example: "Mi padre trabaja cerca.",
            exampleTranslation: "My father works nearby.",
          },
          {
            word: "la hermana",
            translation: "sister",
            pronunciation: "lah ehr-MAH-nah",
            example: "Mi hermana vive en Madrid.",
            exampleTranslation: "My sister lives in Madrid.",
          },
          {
            word: "el amigo",
            translation: "friend",
            pronunciation: "el ah-MEE-goh",
            example: "Es un buen amigo.",
            exampleTranslation: "He is a good friend.",
          },
        ],
      },
      {
        id: "es-u1-l4-phrases",
        type: "phrases",
        title: "Talking About People",
        instruction: "Use these to describe who is in your life.",
        items: [
          {
            phrase: "Esta es mi hermana.",
            translation: "This is my sister.",
            pronunciation: "EH-stah es mee ehr-MAH-nah",
            usage: "Point and say it when you introduce someone.",
          },
          {
            phrase: "Tengo dos hermanos.",
            translation: "I have two brothers.",
            pronunciation: "TEHN-goh dohs ehr-MAH-nohs",
            usage: "Swap the number for your own family.",
          },
          {
            phrase: "Mi mejor amigo se llama Luis.",
            translation: "My best friend is called Luis.",
            pronunciation: "mee meh-HOR ah-MEE-goh seh YAH-mah LOO-ees",
            usage: "Use it right after talking about family.",
          },
        ],
      },
      {
        id: "es-u1-l4-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"sister\" in Spanish?",
        options: ["La madre", "El padre", "La hermana", "El amigo"],
        correctIndex: 2,
      },
    ],
    aiTeacherPrompt: {
      persona: "Sofía, a warm and patient Spanish tutor",
      systemPrompt:
        "You are Sofía, a friendly Spanish teacher giving a short audio lesson to a complete beginner. Speak slowly in simple Spanish and follow every sentence with its English translation. Use only today's words: la madre, el padre, la hermana, el amigo. Introduce your own family first, then ask the student about theirs. Keep every sentence under 8 words.",
      openingLine: "¡Hola! Família time. Repeat: la madre, el padre.",
      focusWords: ["la madre", "el padre", "la hermana", "el amigo"],
      correctionStyle:
        "Repeat the correct word clearly, ask the student to try again, and always end with \"¡Perfecto!\"",
    },
  },
  {
    id: "es-u1-l5",
    unitId: "es-u1",
    languageId: "es",
    title: "Numbers & Colors",
    description: "Count from one to ten and name the colors around you.",
    order: 5,
    xp: 10,
    goals: [
      { id: "g1", text: "Count from one to ten" },
      { id: "g2", text: "Name four colors" },
      { id: "g3", text: "Say how many things there are" },
    ],
    activities: [
      {
        id: "es-u1-l5-vocab",
        type: "vocabulary",
        title: "Numbers & Colors",
        instruction: "Learn a few numbers and the colors they describe.",
        items: [
          {
            word: "uno",
            translation: "one",
            pronunciation: "OO-noh",
            example: "Solo tengo uno.",
            exampleTranslation: "I only have one.",
          },
          {
            word: "tres",
            translation: "three",
            pronunciation: "trehs",
            example: "Tengo tres gatos.",
            exampleTranslation: "I have three cats.",
          },
          {
            word: "rojo",
            translation: "red",
            pronunciation: "ROH-hoh",
            example: "El coche es rojo.",
            exampleTranslation: "The car is red.",
          },
          {
            word: "azul",
            translation: "blue",
            pronunciation: "ah-SOOL",
            example: "El cielo es azul.",
            exampleTranslation: "The sky is blue.",
          },
        ],
      },
      {
        id: "es-u1-l5-phrases",
        type: "phrases",
        title: "Counting & Describing",
        instruction: "Use these whenever you count or describe.",
        items: [
          {
            phrase: "Tengo tres libros.",
            translation: "I have three books.",
            pronunciation: "TEHN-goh trehs LEE-brohs",
            usage: "Swap the number for anything you own.",
          },
          {
            phrase: "El coche es rojo.",
            translation: "The car is red.",
            pronunciation: "el KOH-cheh es ROH-hoh",
            usage: "Put any color after \"es\".",
          },
          {
            phrase: "¿Cuántos hay?",
            translation: "How many are there?",
            pronunciation: "KWAHN-tohs eye",
            usage: "Ask it whenever you want a number.",
          },
        ],
      },
      {
        id: "es-u1-l5-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"blue\" in Spanish?",
        options: ["Rojo", "Azul", "Verde", "Tres"],
        correctIndex: 1,
      },
    ],
    aiTeacherPrompt: {
      persona: "Sofía, a warm and patient Spanish tutor",
      systemPrompt:
        "You are Sofía, a friendly Spanish teacher giving a short audio lesson to a complete beginner. Speak slowly in simple Spanish and follow every sentence with its English translation. Use only today's words: uno, tres, rojo, azul. Count objects together, then describe colors around you. Keep every sentence under 8 words.",
      openingLine: "¡Vamos a contar! Uno, dos, tres. Repeat after me.",
      focusWords: ["uno", "tres", "rojo", "azul"],
      correctionStyle:
        "Count the number again slowly, ask the student to repeat it, and finish with \"¡Muy bien!\"",
    },
  },
  {
    id: "es-u1-l6",
    unitId: "es-u1",
    languageId: "es",
    title: "Around the House",
    description: "Name the rooms in a home and say where things are.",
    order: 6,
    xp: 15,
    goals: [
      { id: "g1", text: "Name four rooms in a home" },
      { id: "g2", text: "Say where something is" },
      { id: "g3", text: "Ask where a room is" },
    ],
    activities: [
      {
        id: "es-u1-l6-vocab",
        type: "vocabulary",
        title: "Rooms & Things",
        instruction: "Walk through a house with these words.",
        items: [
          {
            word: "la cocina",
            translation: "kitchen",
            pronunciation: "lah koh-SEE-nah",
            example: "La cocina es grande.",
            exampleTranslation: "The kitchen is big.",
          },
          {
            word: "la habitación",
            translation: "bedroom",
            pronunciation: "lah ah-bee-tah-SYON",
            example: "Mi habitación está arriba.",
            exampleTranslation: "My bedroom is upstairs.",
          },
          {
            word: "el baño",
            translation: "bathroom",
            pronunciation: "el BAH-nyoh",
            example: "El baño está aquí.",
            exampleTranslation: "The bathroom is here.",
          },
          {
            word: "la puerta",
            translation: "door",
            pronunciation: "lah PWEHR-tah",
            example: "Cierra la puerta, por favor.",
            exampleTranslation: "Close the door, please.",
          },
        ],
      },
      {
        id: "es-u1-l6-phrases",
        type: "phrases",
        title: "Finding Your Way",
        instruction: "Use these to point things out at home.",
        items: [
          {
            phrase: "La cocina está aquí.",
            translation: "The kitchen is here.",
            pronunciation: "lah koh-SEE-nah ehs-TAH ah-KEE",
            usage: "Say it while you point.",
          },
          {
            phrase: "¿Dónde está el baño?",
            translation: "Where is the bathroom?",
            pronunciation: "DOHN-deh ehs-TAH el BAH-nyoh",
            usage: "The most useful question in any home.",
          },
          {
            phrase: "Mi habitación es pequeña.",
            translation: "My bedroom is small.",
            pronunciation: "mee ah-bee-tah-SYON es peh-KEH-nyah",
            usage: "Swap small for grande to say the opposite.",
          },
        ],
      },
      {
        id: "es-u1-l6-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"kitchen\" in Spanish?",
        options: ["El baño", "La cocina", "La puerta", "La habitación"],
        correctIndex: 1,
      },
    ],
    aiTeacherPrompt: {
      persona: "Sofía, a warm and patient Spanish tutor",
      systemPrompt:
        "You are Sofía, a friendly Spanish teacher giving a short audio lesson to a complete beginner. Speak slowly in simple Spanish and follow every sentence with its English translation. Use only today's words: la cocina, la habitación, el baño, la puerta. Pretend to give the student a tour of your home and ask them where each room is. Keep every sentence under 8 words.",
      openingLine: "Bienvenido a mi casa. First stop: la cocina.",
      focusWords: ["la cocina", "la habitación", "el baño", "la puerta"],
      correctionStyle:
        "Repeat the room name clearly, ask the student to try once more, and end with \"¡Excelente!\"",
    },
  },
  {
    id: "es-u2-l2",
    unitId: "es-u2",
    languageId: "es",
    title: "Order Food",
    description: "Ask what is on the menu and order something to eat.",
    order: 2,
    xp: 15,
    goals: [
      { id: "g1", text: "Ask what is on the menu" },
      { id: "g2", text: "Order a snack to go with your drink" },
      { id: "g3", text: "Ask for a recommendation" },
    ],
    activities: [
      {
        id: "es-u2-l2-vocab",
        type: "vocabulary",
        title: "On the Menu",
        instruction: "Words you will read on every café menu.",
        items: [
          {
            word: "la tostada",
            translation: "toast",
            pronunciation: "lah tohs-TAH-dah",
            example: "Una tostada con tomate.",
            exampleTranslation: "One toast with tomato.",
          },
          {
            word: "el zumo",
            translation: "juice",
            pronunciation: "el SOO-moh",
            example: "Quiero un zumo de naranja.",
            exampleTranslation: "I want an orange juice.",
          },
          {
            word: "la fruta",
            translation: "fruit",
            pronunciation: "lah FROO-tah",
            example: "Como fruta por la mañana.",
            exampleTranslation: "I eat fruit in the morning.",
          },
          {
            word: "recomendar",
            translation: "to recommend",
            pronunciation: "reh-koh-men-DAR",
            example: "¿Qué me recomienda?",
            exampleTranslation: "What do you recommend?",
          },
        ],
      },
      {
        id: "es-u2-l2-phrases",
        type: "phrases",
        title: "Ordering Food",
        instruction: "Use these once you have a table.",
        items: [
          {
            phrase: "Quiero una tostada, por favor.",
            translation: "I'd like a toast, please.",
            pronunciation: "kyeh-roh OO-nah tohs-TAH-dah, por fah-VOR",
            usage: "Swap tostada for anything on the menu.",
          },
          {
            phrase: "¿Qué me recomienda?",
            translation: "What do you recommend?",
            pronunciation: "keh meh reh-koh-myen-DAH",
            usage: "Ask it when you cannot decide.",
          },
          {
            phrase: "También quiero un zumo.",
            translation: "I also want a juice.",
            pronunciation: "tahm-BYEHN kyeh-roh oon SOO-moh",
            usage: "Add a drink to any food order.",
          },
        ],
      },
      {
        id: "es-u2-l2-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"juice\" in Spanish?",
        options: ["La fruta", "El zumo", "La tostada", "El café"],
        correctIndex: 1,
      },
    ],
    aiTeacherPrompt: {
      persona: "Diego, a cheerful café owner in Madrid",
      systemPrompt:
        "You are Diego, a cheerful Spanish café owner giving a short audio lesson to a beginner. Speak slowly in simple Spanish and follow every sentence with its English translation. Use only today's words: la tostada, el zumo, la fruta, recomendar. Read out the menu, ask what the student wants to eat, and recommend one dish. Keep every sentence under 8 words.",
      openingLine: "¡Aquí tenemos tostadas y zumos! ¿Qué quieres comer?",
      focusWords: ["la tostada", "el zumo", "la fruta", "¿Qué me recomienda?"],
      correctionStyle:
        "Model the order phrase yourself, then invite the student to try again. Celebrate with \"¡Perfecto!\"",
    },
  },
  {
    id: "es-u2-l3",
    unitId: "es-u2",
    languageId: "es",
    title: "At the Café",
    description: "Get a table, read the menu, and talk with the waiter.",
    order: 3,
    xp: 15,
    goals: [
      { id: "g1", text: "Ask for a table" },
      { id: "g2", text: "Ask to see the menu" },
      { id: "g3", text: "Say why you are there" },
    ],
    activities: [
      {
        id: "es-u2-l3-vocab",
        type: "vocabulary",
        title: "At the Table",
        instruction: "Everything you need once you walk in.",
        items: [
          {
            word: "la mesa",
            translation: "table",
            pronunciation: "lah MEH-sah",
            example: "Una mesa para dos.",
            exampleTranslation: "A table for two.",
          },
          {
            word: "el menú",
            translation: "menu",
            pronunciation: "el meh-NOO",
            example: "¿Me trae el menú?",
            exampleTranslation: "Can you bring me the menu?",
          },
          {
            word: "el camarero",
            translation: "waiter",
            pronunciation: "el kah-mah-REH-roh",
            example: "El camarero es amable.",
            exampleTranslation: "The waiter is kind.",
          },
          {
            word: "reservar",
            translation: "to reserve",
            pronunciation: "reh-sehr-VAR",
            example: "Quiero reservar una mesa.",
            exampleTranslation: "I want to reserve a table.",
          },
        ],
      },
      {
        id: "es-u2-l3-phrases",
        type: "phrases",
        title: "Settling In",
        instruction: "Use these in the first minute at a café.",
        items: [
          {
            phrase: "Una mesa para dos, por favor.",
            translation: "A table for two, please.",
            pronunciation: "OO-nah MEH-sah PAH-rah dohs, por fah-VOR",
            usage: "Say it the moment you walk in.",
          },
          {
            phrase: "¿Me trae el menú?",
            translation: "Could you bring me the menu?",
            pronunciation: "meh trah-EH el meh-NOO",
            usage: "Ask it before you order.",
          },
          {
            phrase: "Estoy esperando a un amigo.",
            translation: "I am waiting for a friend.",
            pronunciation: "ehs-TOY ehs-peh-RAHN-dah oon ah-MEE-goh",
            usage: "Use it when you arrive alone.",
          },
        ],
      },
      {
        id: "es-u2-l3-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"menu\" in Spanish?",
        options: ["La mesa", "El menú", "El camarero", "La cuenta"],
        correctIndex: 1,
      },
    ],
    aiTeacherPrompt: {
      persona: "Diego, a cheerful café owner in Madrid",
      systemPrompt:
        "You are Diego, a cheerful Spanish café owner giving a short audio lesson to a beginner. Speak slowly in simple Spanish and follow every sentence with its English translation. Use only today's words: la mesa, el menú, el camarero, reservar. Greet the student, offer them a table, and hand over the menu. Keep every sentence under 8 words.",
      openingLine: "¡Bienvenido! ¿Una mesa para cuántas personas?",
      focusWords: ["la mesa", "el menú", "el camarero", "reservar"],
      correctionStyle:
        "Repeat the phrase at half speed, ask the student to try once more, and finish with \"¡Muy bien!\"",
    },
  },
  {
    id: "es-u2-l4",
    unitId: "es-u2",
    languageId: "es",
    title: "Ask the Price",
    description: "Find out what things cost and decide what to order.",
    order: 4,
    xp: 15,
    goals: [
      { id: "g1", text: "Ask how much something costs" },
      { id: "g2", text: "Understand the answer" },
      { id: "g3", text: "Ask for a cheaper option" },
    ],
    activities: [
      {
        id: "es-u2-l4-vocab",
        type: "vocabulary",
        title: "Prices & Money",
        instruction: "Words that help you spend wisely.",
        items: [
          {
            word: "el precio",
            translation: "price",
            pronunciation: "el PREH-see-oh",
            example: "El precio es cinco euros.",
            exampleTranslation: "The price is five euros.",
          },
          {
            word: "caro",
            translation: "expensive",
            pronunciation: "KAH-roh",
            example: "Es un poco caro.",
            exampleTranslation: "It is a bit expensive.",
          },
          {
            word: "barato",
            translation: "cheap",
            pronunciation: "bah-RAH-toh",
            example: "Aquí es más barato.",
            exampleTranslation: "It is cheaper here.",
          },
          {
            word: "euros",
            translation: "euros",
            pronunciation: "EH-rohs",
            example: "Son tres euros.",
            exampleTranslation: "It is three euros.",
          },
        ],
      },
      {
        id: "es-u2-l4-phrases",
        type: "phrases",
        title: "Talking Money",
        instruction: "Use these before you pay.",
        items: [
          {
            phrase: "¿Cuánto cuesta?",
            translation: "How much is it?",
            pronunciation: "KWAHN-toh KWEHS-tah",
            usage: "Ask it while you point at the item.",
          },
          {
            phrase: "Es demasiado caro.",
            translation: "It is too expensive.",
            pronunciation: "es deh-mah-SYAH-doh KAH-roh",
            usage: "Say it politely before you look elsewhere.",
          },
          {
            phrase: "¿Hay algo más barato?",
            translation: "Is there anything cheaper?",
            pronunciation: "eye AHL-goh mahs bah-RAH-toh",
            usage: "Ask it when the price is too high.",
          },
        ],
      },
      {
        id: "es-u2-l4-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "Which phrase asks for the price?",
        options: [
          "¿Cuánto cuesta?",
          "La cuenta, por favor.",
          "Quiero un café.",
          "¿Qué me recomienda?",
        ],
        correctIndex: 0,
      },
    ],
    aiTeacherPrompt: {
      persona: "Diego, a cheerful café owner in Madrid",
      systemPrompt:
        "You are Diego, a cheerful Spanish café owner giving a short audio lesson to a beginner. Speak slowly in simple Spanish and follow every sentence with its English translation. Use only today's words: el precio, caro, barato, euros. Price three items for the student and let them ask for a cheaper one. Keep every sentence under 8 words.",
      openingLine: "Todo cuesta euros. Pregunta: ¿cuánto cuesta?",
      focusWords: ["el precio", "caro", "barato", "¿Cuánto cuesta?"],
      correctionStyle:
        "Say the question again clearly, ask the student to repeat it, and end with \"¡Perfecto!\"",
    },
  },
  {
    id: "es-u2-l5",
    unitId: "es-u2",
    languageId: "es",
    title: "Pay the Bill",
    description: "Ask for the bill, pay how you like, and leave a tip.",
    order: 5,
    xp: 15,
    goals: [
      { id: "g1", text: "Ask for the bill" },
      { id: "g2", text: "Say how you want to pay" },
      { id: "g3", text: "Leave a tip politely" },
    ],
    activities: [
      {
        id: "es-u2-l5-vocab",
        type: "vocabulary",
        title: "Paying Up",
        instruction: "The last words of every café visit.",
        items: [
          {
            word: "la cuenta",
            translation: "the bill",
            pronunciation: "lah KWEHN-tah",
            example: "La cuenta, por favor.",
            exampleTranslation: "The bill, please.",
          },
          {
            word: "la propina",
            translation: "the tip",
            pronunciation: "lah proh-PEE-nah",
            example: "Déjeme una propina.",
            exampleTranslation: "Let me leave a tip.",
          },
          {
            word: "pagar",
            translation: "to pay",
            pronunciation: "pah-GAR",
            example: "Quiero pagar con tarjeta.",
            exampleTranslation: "I want to pay by card.",
          },
          {
            word: "efectivo",
            translation: "cash",
            pronunciation: "eh-fehk-TEE-boh",
            example: "Pago en efectivo.",
            exampleTranslation: "I pay in cash.",
          },
        ],
      },
      {
        id: "es-u2-l5-phrases",
        type: "phrases",
        title: "Closing the Meal",
        instruction: "Use these when you are ready to leave.",
        items: [
          {
            phrase: "La cuenta, por favor.",
            translation: "The check, please.",
            pronunciation: "lah KWEHN-tah, por fah-VOR",
            usage: "Say it while you make eye contact.",
          },
          {
            phrase: "¿Puedo pagar con tarjeta?",
            translation: "Can I pay by card?",
            pronunciation: "PWEH-doh pah-GAR kon tar-HEH-tah",
            usage: "Ask it before they bring the machine.",
          },
          {
            phrase: "Queda el cambio.",
            translation: "Keep the change.",
            pronunciation: "KEH-dah el KAHM-byoh",
            usage: "Say it when you want to leave a tip.",
          },
        ],
      },
      {
        id: "es-u2-l5-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"cash\" in Spanish?",
        options: ["La tarjeta", "El efectivo", "La propina", "La cuenta"],
        correctIndex: 1,
      },
    ],
    aiTeacherPrompt: {
      persona: "Diego, a cheerful café owner in Madrid",
      systemPrompt:
        "You are Diego, a cheerful Spanish café owner giving a short audio lesson to a beginner. Speak slowly in simple Spanish and follow every sentence with its English translation. Use only today's words: la cuenta, la propina, pagar, efectivo. Bring the bill, ask how the student wants to pay, and thank them. Keep every sentence under 8 words.",
      openingLine: "Cuando quieras, te traigo la cuenta. ¿Efectivo o tarjeta?",
      focusWords: ["la cuenta", "la propina", "pagar", "efectivo"],
      correctionStyle:
        "Repeat the phrase clearly, ask the student to try once more, and finish with \"¡Muy bien!\"",
    },
  },
  {
    id: "es-u2-l6",
    unitId: "es-u2",
    languageId: "es",
    title: "Small Talk",
    description: "Chat politely while you wait for your order.",
    order: 6,
    xp: 15,
    goals: [
      { id: "g1", text: "Talk about the weather" },
      { id: "g2", text: "Invite someone for a coffee" },
      { id: "g3", text: "Keep a short chat going" },
    ],
    activities: [
      {
        id: "es-u2-l6-vocab",
        type: "vocabulary",
        title: "Easy Conversation",
        instruction: "Safe topics for any café chat.",
        items: [
          {
            word: "el tiempo",
            translation: "the weather",
            pronunciation: "el TYEM-poh",
            example: "Hace buen tiempo hoy.",
            exampleTranslation: "The weather is nice today.",
          },
          {
            word: "hace calor",
            translation: "it is hot",
            pronunciation: "AH-seh kah-LOR",
            example: "Hace mucho calor.",
            exampleTranslation: "It is very hot.",
          },
          {
            word: "hace frío",
            translation: "it is cold",
            pronunciation: "AH-seh FREE-oh",
            example: "Hace frío por la noche.",
            exampleTranslation: "It is cold at night.",
          },
          {
            word: "¡qué bonito!",
            translation: "how lovely!",
            pronunciation: "keh boh-NEE-toh",
            example: "¡Qué bonito día!",
            exampleTranslation: "What a lovely day!",
          },
        ],
      },
      {
        id: "es-u2-l6-phrases",
        type: "phrases",
        title: "Keeping It Going",
        instruction: "Use these to fill the silence politely.",
        items: [
          {
            phrase: "Hace buen tiempo hoy.",
            translation: "The weather is nice today.",
            pronunciation: "AH-seh bwehn TYEM-poh oy",
            usage: "The classic opener while you wait.",
          },
          {
            phrase: "¿Tomamos un café?",
            translation: "Shall we have a coffee?",
            pronunciation: "toh-MAH-mohs oon kah-FEH",
            usage: "Invite someone after a greeting.",
          },
          {
            phrase: "¿Y tú, qué tal?",
            translation: "And you, how is it going?",
            pronunciation: "ee too, keh tahl",
            usage: "Hand the conversation back to them.",
          },
        ],
      },
      {
        id: "es-u2-l6-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"the weather\" in Spanish?",
        options: ["El tiempo", "El café", "La cuenta", "El precio"],
        correctIndex: 0,
      },
    ],
    aiTeacherPrompt: {
      persona: "Diego, a cheerful café owner in Madrid",
      systemPrompt:
        "You are Diego, a cheerful Spanish café owner giving a short audio lesson to a beginner. Speak slowly in simple Spanish and follow every sentence with its English translation. Use only today's words: el tiempo, hace calor, hace frío, ¡qué bonito! Chat about the weather while the order is ready, then invite the student for coffee. Keep every sentence under 8 words.",
      openingLine: "¡Qué bonito día! ¿Hace calor o frío donde vives?",
      focusWords: ["el tiempo", "hace calor", "hace frío", "¡qué bonito!"],
      correctionStyle:
        "Repeat the weather phrase naturally, ask the student to try again, and end with \"¡Exacto!\"",
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
    id: "fr-u1-l3",
    unitId: "fr-u1",
    languageId: "fr",
    title: "Daily Life",
    description: "Talk about your routine and say what you do all day.",
    order: 3,
    xp: 10,
    goals: [
      { id: "g1", text: "Name the parts of your day" },
      { id: "g2", text: "Say when you do everyday things" },
      { id: "g3", text: "Describe a normal weekday" },
    ],
    activities: [
      {
        id: "fr-u1-l3-vocab",
        type: "vocabulary",
        title: "Parts of the Day",
        instruction: "Learn the words that shape every day.",
        items: [
          {
            word: "le matin",
            translation: "morning",
            pronunciation: "luh mah-TAN",
            example: "J'étudie le matin.",
            exampleTranslation: "I study in the morning.",
          },
          {
            word: "l'après-midi",
            translation: "afternoon",
            pronunciation: "lah-preh-mee-DEE",
            example: "Je travaille l'après-midi.",
            exampleTranslation: "I work in the afternoon.",
          },
          {
            word: "se lever",
            translation: "to get up",
            pronunciation: "suh luh-VAY",
            example: "Je me lève à sept heures.",
            exampleTranslation: "I get up at seven.",
          },
          {
            word: "étudier",
            translation: "to study",
            pronunciation: "ay-too-dee-YAY",
            example: "J'étudie le soir.",
            exampleTranslation: "I study in the evening.",
          },
        ],
      },
      {
        id: "fr-u1-l3-phrases",
        type: "phrases",
        title: "A Normal Day",
        instruction: "Put these together to describe your routine.",
        items: [
          {
            phrase: "Je me lève tôt.",
            translation: "I get up early.",
            pronunciation: "zhuh luhv TOH",
            usage: "Say it first when you describe your morning.",
          },
          {
            phrase: "J'étudie le soir.",
            translation: "I study in the evening.",
            pronunciation: "zhay-too-dee luh SWAHR",
            usage: "Swap in any activity you do at night.",
          },
          {
            phrase: "Je dîne à dix-huit heures.",
            translation: "I eat dinner at six.",
            pronunciation: "zhuh deen ah deez-weet UHR",
            usage: "Change the hour to your own.",
          },
        ],
      },
      {
        id: "fr-u1-l3-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"morning\" in French?",
        options: ["L'après-midi", "Le matin", "La nuit", "Étudier"],
        correctIndex: 1,
      },
    ],
    aiTeacherPrompt: {
      persona: "Émile, a friendly French tutor from Lyon",
      systemPrompt:
        "You are Émile, a friendly French teacher giving a short audio lesson to a complete beginner. Speak slowly in simple French and follow every sentence with its English translation. Use only today's words: le matin, l'après-midi, se lever, étudier. Describe your own day first, then ask the student to describe theirs. Keep every sentence under 8 words.",
      openingLine: "Bonjour ! Today we talk about the day. Repeat : le matin.",
      focusWords: ["le matin", "l'après-midi", "se lever", "étudier"],
      correctionStyle:
        "Repeat the word clearly, ask the student to try once more, and finish with \"Bravo !\"",
    },
  },
  {
    id: "fr-u1-l4",
    unitId: "fr-u1",
    languageId: "fr",
    title: "Family & Friends",
    description: "Name the people closest to you and talk about your friends.",
    order: 4,
    xp: 10,
    goals: [
      { id: "g1", text: "Name four family members" },
      { id: "g2", text: "Say who someone is to you" },
      { id: "g3", text: "Talk about a good friend" },
    ],
    activities: [
      {
        id: "fr-u1-l4-vocab",
        type: "vocabulary",
        title: "The People Around You",
        instruction: "These words introduce your world.",
        items: [
          {
            word: "la mère",
            translation: "mother",
            pronunciation: "lah MAIR",
            example: "Ma mère cuisine très bien.",
            exampleTranslation: "My mother cooks very well.",
          },
          {
            word: "le père",
            translation: "father",
            pronunciation: "luh PAIR",
            example: "Mon père travaille ici.",
            exampleTranslation: "My father works here.",
          },
          {
            word: "la sœur",
            translation: "sister",
            pronunciation: "lah SUHR",
            example: "Ma sœur vit à Paris.",
            exampleTranslation: "My sister lives in Paris.",
          },
          {
            word: "l'ami",
            translation: "friend",
            pronunciation: "lah-MEE",
            example: "C'est un bon ami.",
            exampleTranslation: "He is a good friend.",
          },
        ],
      },
      {
        id: "fr-u1-l4-phrases",
        type: "phrases",
        title: "Talking About People",
        instruction: "Use these to describe who is in your life.",
        items: [
          {
            phrase: "C'est ma sœur.",
            translation: "This is my sister.",
            pronunciation: "say mah SUHR",
            usage: "Point and say it when you introduce someone.",
          },
          {
            phrase: "J'ai deux frères.",
            translation: "I have two brothers.",
            pronunciation: "zhay duh FRAIR",
            usage: "Swap the number for your own family.",
          },
          {
            phrase: "Mon meilleur ami s'appelle Marc.",
            translation: "My best friend is called Marc.",
            pronunciation: "mohn may-YOR ah-mee sah-PEHL MAHRK",
            usage: "Use it right after talking about family.",
          },
        ],
      },
      {
        id: "fr-u1-l4-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"sister\" in French?",
        options: ["La mère", "Le père", "La sœur", "L'ami"],
        correctIndex: 2,
      },
    ],
    aiTeacherPrompt: {
      persona: "Émile, a friendly French tutor from Lyon",
      systemPrompt:
        "You are Émile, a friendly French teacher giving a short audio lesson to a complete beginner. Speak slowly in simple French and follow every sentence with its English translation. Use only today's words: la mère, le père, la sœur, l'ami. Introduce your own family first, then ask the student about theirs. Keep every sentence under 8 words.",
      openingLine: "Bonjour ! Ma mère, mon père, ma sœur. Et toi ?",
      focusWords: ["la mère", "le père", "la sœur", "l'ami"],
      correctionStyle:
        "Repeat the correct word clearly, ask the student to try again, and always end with \"Bravo !\"",
    },
  },
  {
    id: "fr-u1-l5",
    unitId: "fr-u1",
    languageId: "fr",
    title: "Numbers & Colors",
    description: "Count from one to ten and name the colors around you.",
    order: 5,
    xp: 10,
    goals: [
      { id: "g1", text: "Count from one to ten" },
      { id: "g2", text: "Name four colors" },
      { id: "g3", text: "Say how many things there are" },
    ],
    activities: [
      {
        id: "fr-u1-l5-vocab",
        type: "vocabulary",
        title: "Numbers & Colors",
        instruction: "Learn a few numbers and the colors they describe.",
        items: [
          {
            word: "un",
            translation: "one",
            pronunciation: "uhn",
            example: "J'en ai un.",
            exampleTranslation: "I have one.",
          },
          {
            word: "trois",
            translation: "three",
            pronunciation: "TRWAH",
            example: "J'ai trois livres.",
            exampleTranslation: "I have three books.",
          },
          {
            word: "rouge",
            translation: "red",
            pronunciation: "ROOZH",
            example: "La voiture est rouge.",
            exampleTranslation: "The car is red.",
          },
          {
            word: "bleu",
            translation: "blue",
            pronunciation: "BLUH",
            example: "Le ciel est bleu.",
            exampleTranslation: "The sky is blue.",
          },
        ],
      },
      {
        id: "fr-u1-l5-phrases",
        type: "phrases",
        title: "Counting & Describing",
        instruction: "Use these whenever you count or describe.",
        items: [
          {
            phrase: "J'ai trois livres.",
            translation: "I have three books.",
            pronunciation: "zhay trwah LEEVR",
            usage: "Swap the number for anything you own.",
          },
          {
            phrase: "La voiture est rouge.",
            translation: "The car is red.",
            pronunciation: "lah vwah-TUHR ay ROOZH",
            usage: "Put any color after \"est\".",
          },
          {
            phrase: "Combien y a-t-il ?",
            translation: "How many are there?",
            pronunciation: "kohm-BYEHN ee ah-TEEL",
            usage: "Ask it whenever you want a number.",
          },
        ],
      },
      {
        id: "fr-u1-l5-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"blue\" in French?",
        options: ["Rouge", "Bleu", "Vert", "Trois"],
        correctIndex: 1,
      },
    ],
    aiTeacherPrompt: {
      persona: "Émile, a friendly French tutor from Lyon",
      systemPrompt:
        "You are Émile, a friendly French teacher giving a short audio lesson to a complete beginner. Speak slowly in simple French and follow every sentence with its English translation. Use only today's words: un, trois, rouge, bleu. Count objects together, then describe colors around you. Keep every sentence under 8 words.",
      openingLine: "Comptons ensemble : un, deux, trois. Répète après moi.",
      focusWords: ["un", "trois", "rouge", "bleu"],
      correctionStyle:
        "Count the number again slowly, ask the student to repeat it, and finish with \"Bravo !\"",
    },
  },
  {
    id: "fr-u1-l6",
    unitId: "fr-u1",
    languageId: "fr",
    title: "Around the House",
    description: "Name the rooms in a home and say where things are.",
    order: 6,
    xp: 15,
    goals: [
      { id: "g1", text: "Name four rooms in a home" },
      { id: "g2", text: "Say where something is" },
      { id: "g3", text: "Ask where a room is" },
    ],
    activities: [
      {
        id: "fr-u1-l6-vocab",
        type: "vocabulary",
        title: "Rooms & Things",
        instruction: "Walk through a house with these words.",
        items: [
          {
            word: "la cuisine",
            translation: "kitchen",
            pronunciation: "lah kwee-ZEEN",
            example: "La cuisine est grande.",
            exampleTranslation: "The kitchen is big.",
          },
          {
            word: "la chambre",
            translation: "bedroom",
            pronunciation: "lahsh BRAHMR",
            example: "Ma chambre est à l'étage.",
            exampleTranslation: "My bedroom is upstairs.",
          },
          {
            word: "la salle de bain",
            translation: "bathroom",
            pronunciation: "lahl duh BAN",
            example: "La salle de bain est ici.",
            exampleTranslation: "The bathroom is here.",
          },
          {
            word: "la porte",
            translation: "door",
            pronunciation: "lah PORT",
            example: "Ferme la porte, s'il te plaît.",
            exampleTranslation: "Close the door, please.",
          },
        ],
      },
      {
        id: "fr-u1-l6-phrases",
        type: "phrases",
        title: "Finding Your Way",
        instruction: "Use these to point things out at home.",
        items: [
          {
            phrase: "La cuisine est ici.",
            translation: "The kitchen is here.",
            pronunciation: "lah kwee-ZEEN ay ee-SEE",
            usage: "Say it while you point.",
          },
          {
            phrase: "Où est la salle de bain ?",
            translation: "Where is the bathroom?",
            pronunciation: "oo ay lahl duh BAN",
            usage: "The most useful question in any home.",
          },
          {
            phrase: "Ma chambre est petite.",
            translation: "My bedroom is small.",
            pronunciation: "mahsh BRAHMR ay puh-TEET",
            usage: "Swap petite for grande to say the opposite.",
          },
        ],
      },
      {
        id: "fr-u1-l6-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"kitchen\" in French?",
        options: [
          "La salle de bain",
          "La cuisine",
          "La porte",
          "La chambre",
        ],
        correctIndex: 1,
      },
    ],
    aiTeacherPrompt: {
      persona: "Émile, a friendly French tutor from Lyon",
      systemPrompt:
        "You are Émile, a friendly French teacher giving a short audio lesson to a complete beginner. Speak slowly in simple French and follow every sentence with its English translation. Use only today's words: la cuisine, la chambre, la salle de bain, la porte. Pretend to give the student a tour of your home and ask them where each room is. Keep every sentence under 8 words.",
      openingLine: "Bienvenue chez moi ! First stop : la cuisine.",
      focusWords: ["la cuisine", "la chambre", "la salle de bain", "la porte"],
      correctionStyle:
        "Repeat the room name clearly, ask the student to try once more, and end with \"Parfait !\"",
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
            pronunciation: "oh-hah-yoh goh-zah-ee-mahs",
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
            pronunciation: "mah-tah ah-SHEE-tah",
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
  {
    id: "ja-u1-l3",
    unitId: "ja-u1",
    languageId: "ja",
    title: "Daily Life",
    description: "Talk about your routine and say what you do all day.",
    order: 3,
    xp: 10,
    goals: [
      { id: "g1", text: "Name the parts of your day" },
      { id: "g2", text: "Say when you do everyday things" },
      { id: "g3", text: "Describe a normal weekday" },
    ],
    activities: [
      {
        id: "ja-u1-l3-vocab",
        type: "vocabulary",
        title: "Parts of the Day",
        instruction: "Learn the words that shape every day.",
        items: [
          {
            word: "朝",
            translation: "morning",
            pronunciation: "ah-sah",
            example: "朝は七時に起きます。",
            exampleTranslation: "I get up at seven in the morning.",
          },
          {
            word: "昼",
            translation: "afternoon / noon",
            pronunciation: "heer-oo",
            example: "昼ごはんを食べます。",
            exampleTranslation: "I eat lunch.",
          },
          {
            word: "夜",
            translation: "night / evening",
            pronunciation: "yoh-rah",
            example: "夜にべんきょうします。",
            exampleTranslation: "I study at night.",
          },
          {
            word: "べんきょうする",
            translation: "to study",
            pronunciation: "ben-kyoh soo-roo",
            example: "毎日べんきょうします。",
            exampleTranslation: "I study every day.",
          },
        ],
      },
      {
        id: "ja-u1-l3-phrases",
        type: "phrases",
        title: "A Normal Day",
        instruction: "Put these together to describe your routine.",
        items: [
          {
            phrase: "朝は七時に起きます。",
            translation: "I get up at seven in the morning.",
            pronunciation: "ah-sah wah shah-nee-chee joh ee oh-kee-mahs",
            usage: "Swap the hour for your own.",
          },
          {
            phrase: "夜にべんきょうします。",
            translation: "I study at night.",
            pronunciation: "yoh-rah nee ben-kyoh shee-mahs",
            usage: "Use it for anything you do in the evening.",
          },
          {
            phrase: "日曜日は休みです。",
            translation: "Sunday is my day off.",
            pronunciation: "nee-chee-oh-bee wah ya-soo-mee dess",
            usage: "Say it when you talk about your week.",
          },
        ],
      },
      {
        id: "ja-u1-l3-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"morning\" in Japanese?",
        options: ["昼", "朝", "夜", "べんきょうする"],
        correctIndex: 1,
      },
    ],
    aiTeacherPrompt: {
      persona: "Yuki, a cheerful Japanese tutor from Tokyo",
      systemPrompt:
        "You are Yuki, a friendly Japanese teacher giving a short audio lesson to a complete beginner. Speak slowly in simple Japanese, read hiragana clearly, and follow every sentence with its English translation. Use only today's words: 朝, 昼, 夜, べんきょうする. Describe your own day first, then ask the student to describe theirs. Keep every sentence under 8 words.",
      openingLine: "こんにちは！ Today we talk about the day. 朝、昼、夜。",
      focusWords: ["朝", "昼", "夜", "べんきょうする"],
      correctionStyle:
        "Say the word slowly one more time, ask the student to try again, and finish with \"すごい！\" (Amazing!)",
    },
  },
  {
    id: "ja-u1-l4",
    unitId: "ja-u1",
    languageId: "ja",
    title: "Family & Friends",
    description: "Name the people closest to you and talk about your friends.",
    order: 4,
    xp: 10,
    goals: [
      { id: "g1", text: "Name four family members" },
      { id: "g2", text: "Say who someone is to you" },
      { id: "g3", text: "Talk about a good friend" },
    ],
    activities: [
      {
        id: "ja-u1-l4-vocab",
        type: "vocabulary",
        title: "The People Around You",
        instruction: "These words introduce your world.",
        items: [
          {
            word: "おかあさん",
            translation: "mother",
            pronunciation: "oh-kah-sahn",
            example: "おかあさんはかりょうりがじょうずです。",
            exampleTranslation: "My mother is a good cook.",
          },
          {
            word: "おとうさん",
            translation: "father",
            pronunciation: "oh-toh-sahn",
            example: "おとうさんはかいしゃではたらきます。",
            exampleTranslation: "My father works at a company.",
          },
          {
            word: "いもうと",
            translation: "younger sister",
            pronunciation: "ee-moh-toh",
            example: "いもうとはにじゅうさいです。",
            exampleTranslation: "My younger sister is twenty.",
          },
          {
            word: "ともだち",
            translation: "friend",
            pronunciation: "toh-moh-dah-chee",
            example: "ともだちといっしょにいきます。",
            exampleTranslation: "I go with a friend.",
          },
        ],
      },
      {
        id: "ja-u1-l4-phrases",
        type: "phrases",
        title: "Talking About People",
        instruction: "Use these to describe who is in your life.",
        items: [
          {
            phrase: "これが私のいもうとです。",
            translation: "This is my younger sister.",
            pronunciation: "koh-reh-gah wah-tah-shih no ee-moh-toh dess",
            usage: "Point and say it when you introduce someone.",
          },
          {
            phrase: "兄が二人います。",
            translation: "I have two older brothers.",
            pronunciation: "ah-nee gah fah-tah-ree ee-mahs",
            usage: "Swap the number for your own family.",
          },
          {
            phrase: "ともだちはアメリカじんです。",
            translation: "My friend is American.",
            pronunciation: "toh-moh-dah-chee wah ah-meh-ree-kah jin dess",
            usage: "Use it right after talking about family.",
          },
        ],
      },
      {
        id: "ja-u1-l4-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"mother\" in Japanese?",
        options: ["おとうさん", "おかあさん", "いもうと", "ともだち"],
        correctIndex: 1,
      },
    ],
    aiTeacherPrompt: {
      persona: "Yuki, a cheerful Japanese tutor from Tokyo",
      systemPrompt:
        "You are Yuki, a friendly Japanese teacher giving a short audio lesson to a complete beginner. Speak slowly in simple Japanese, read hiragana clearly, and follow every sentence with its English translation. Use only today's words: おかあさん, おとうさん, いもうと, ともだち. Introduce your own family first, then ask the student about theirs. Keep every sentence under 8 words.",
      openingLine: "こんにちは！ わたしの family: おかあさん、おとうさん。あなたは？",
      focusWords: ["おかあさん", "おとうさん", "いもうと", "ともだち"],
      correctionStyle:
        "Repeat the word clearly, ask the student to try again, and always end with \"すごい！\" (Amazing!)",
    },
  },
  {
    id: "ja-u1-l5",
    unitId: "ja-u1",
    languageId: "ja",
    title: "Numbers & Colors",
    description: "Count from one to ten and name the colors around you.",
    order: 5,
    xp: 10,
    goals: [
      { id: "g1", text: "Count from one to ten" },
      { id: "g2", text: "Name four colors" },
      { id: "g3", text: "Say how many things there are" },
    ],
    activities: [
      {
        id: "ja-u1-l5-vocab",
        type: "vocabulary",
        title: "Numbers & Colors",
        instruction: "Learn a few numbers and the colors they describe.",
        items: [
          {
            word: "一",
            translation: "one",
            pronunciation: "ee-chee",
            example: "りんごが一つあります。",
            exampleTranslation: "There is one apple.",
          },
          {
            word: "三",
            translation: "three",
            pronunciation: "sahn",
            example: "ほんが三さつあります。",
            exampleTranslation: "There are three books.",
          },
          {
            word: "赤",
            translation: "red",
            pronunciation: "ah-kah",
            example: "くるまは赤です。",
            exampleTranslation: "The car is red.",
          },
          {
            word: "青",
            translation: "blue",
            pronunciation: "ah-oh",
            example: "そらは青です。",
            exampleTranslation: "The sky is blue.",
          },
        ],
      },
      {
        id: "ja-u1-l5-phrases",
        type: "phrases",
        title: "Counting & Describing",
        instruction: "Use these whenever you count or describe.",
        items: [
          {
            phrase: "本が三さつあります。",
            translation: "There are three books.",
            pronunciation: "hohn gah sahn sahts ah-ree-mahs",
            usage: "Swap the number for anything you own.",
          },
          {
            phrase: "くるまは赤です。",
            translation: "The car is red.",
            pronunciation: "koo-roo-mah wah ah-kah dess",
            usage: "Put any color before です.",
          },
          {
            phrase: "いくつありますか？",
            translation: "How many are there?",
            pronunciation: "ee-koo-tsoo ah-ree-mahs-kah",
            usage: "Ask it whenever you want a number.",
          },
        ],
      },
      {
        id: "ja-u1-l5-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"blue\" in Japanese?",
        options: ["赤", "青", "三", "一"],
        correctIndex: 1,
      },
    ],
    aiTeacherPrompt: {
      persona: "Yuki, a cheerful Japanese tutor from Tokyo",
      systemPrompt:
        "You are Yuki, a friendly Japanese teacher giving a short audio lesson to a complete beginner. Speak slowly in simple Japanese, read hiragana and kanji clearly, and follow every sentence with its English translation. Use only today's words: 一, 三, 赤, 青. Count objects together, then describe colors around you. Keep every sentence under 8 words.",
      openingLine: "いっしょにかぞえましょう：一、二、三。",
      focusWords: ["一", "三", "赤", "青"],
      correctionStyle:
        "Count the number again slowly, ask the student to repeat it, and finish with \"すごい！\" (Amazing!)",
    },
  },
  {
    id: "ja-u1-l6",
    unitId: "ja-u1",
    languageId: "ja",
    title: "Around the House",
    description: "Name the rooms in a home and say where things are.",
    order: 6,
    xp: 15,
    goals: [
      { id: "g1", text: "Name four rooms in a home" },
      { id: "g2", text: "Say where something is" },
      { id: "g3", text: "Ask where a room is" },
    ],
    activities: [
      {
        id: "ja-u1-l6-vocab",
        type: "vocabulary",
        title: "Rooms & Things",
        instruction: "Walk through a house with these words.",
        items: [
          {
            word: "キッチン",
            translation: "kitchen",
            pronunciation: "kit-cheen",
            example: "キッチンはここです。",
            exampleTranslation: "The kitchen is here.",
          },
          {
            word: "へや",
            translation: "room",
            pronunciation: "heh-yah",
            example: "わたしのへやはちいさいです。",
            exampleTranslation: "My room is small.",
          },
          {
            word: "トイレ",
            translation: "bathroom / toilet",
            pronunciation: "toy-reh",
            example: "トイレはどこですか？",
            exampleTranslation: "Where is the bathroom?",
          },
          {
            word: "ドア",
            translation: "door",
            pronunciation: "doh-ah",
            example: "ドアを閉めてください。",
            exampleTranslation: "Please close the door.",
          },
        ],
      },
      {
        id: "ja-u1-l6-phrases",
        type: "phrases",
        title: "Finding Your Way",
        instruction: "Use these to point things out at home.",
        items: [
          {
            phrase: "キッチンはここです。",
            translation: "The kitchen is here.",
            pronunciation: "kit-cheen wah koh-koh dess",
            usage: "Say it while you point.",
          },
          {
            phrase: "トイレはどこですか？",
            translation: "Where is the bathroom?",
            pronunciation: "toy-reh wah doh-koh dess-kah",
            usage: "The most useful question in any home.",
          },
          {
            phrase: "へやはちいさいです。",
            translation: "My room is small.",
            pronunciation: "heh-yah wah chee-sah-ee dess",
            usage: "Swap small for おおきい to say the opposite.",
          },
        ],
      },
      {
        id: "ja-u1-l6-quiz",
        type: "multiple_choice",
        title: "Quick Check",
        instruction: "Pick the correct translation.",
        question: "How do you say \"kitchen\" in Japanese?",
        options: ["トイレ", "キッチン", "ドア", "へや"],
        correctIndex: 1,
      },
    ],
    aiTeacherPrompt: {
      persona: "Yuki, a cheerful Japanese tutor from Tokyo",
      systemPrompt:
        "You are Yuki, a friendly Japanese teacher giving a short audio lesson to a complete beginner. Speak slowly in simple Japanese, read hiragana and katakana clearly, and follow every sentence with its English translation. Use only today's words: キッチン, へや, トイレ, ドア. Pretend to give the student a tour of your home and ask them where each room is. Keep every sentence under 8 words.",
      openingLine: "ようこそ！ First stop: キッチン。",
      focusWords: ["キッチン", "へや", "トイレ", "ドア"],
      correctionStyle:
        "Say the room name slowly one more time, ask the student to try again, and finish with \"すごい！\" (Amazing!)",
    },
  },
];

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}

/**
 * Phrases shown on the audio lesson screen. Every lesson is hardcoded,
 * so we read the first phrases-style activity and fall back to the
 * listen / vocabulary activities when a lesson has no phrase list.
 */
export function getLessonPhrases(lesson: Lesson): Phrase[] {
  for (const activity of lesson.activities) {
    if (activity.type === "phrases") {
      return activity.items;
    }
    if (activity.type === "listen_repeat") {
      return [
        {
          phrase: activity.text,
          translation: activity.translation,
          pronunciation: activity.pronunciation,
          usage: activity.instruction,
        },
      ];
    }
  }

  for (const activity of lesson.activities) {
    if (activity.type === "vocabulary") {
      return activity.items.map((item) => ({
        phrase: item.word,
        translation: item.translation,
        pronunciation: item.pronunciation,
        usage: item.example,
      }));
    }
  }

  return [];
}

export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons
    .filter((lesson) => lesson.unitId === unitId)
    .sort((a, b) => a.order - b.order);
}

export function getLessonsByLanguage(languageId: LanguageId): Lesson[] {
  return lessons
    .filter((lesson) => lesson.languageId === languageId)
    .sort((a, b) => {
      const unitOrderA = parseInt(a.unitId.split("-u")[1] || "0", 10);
      const unitOrderB = parseInt(b.unitId.split("-u")[1] || "0", 10);
      if (unitOrderA !== unitOrderB) {
        return unitOrderA - unitOrderB;
      }
      return a.order - b.order;
    });
}
