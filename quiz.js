const quizData = [
    {
        question: "India has been a land of great cultures since ancient times including?",
        options: ["Hinduism", "Jainism", "Buddhism", "All of these"],
        answer: 3,
        explanation: "India has been home to Hinduism, Jainism, and Buddhism since ancient times, making 'All of these' the correct answer."
    },
    {
        question: "Bharatiya Knowledge System has been evident from the era of Harappan Civilization which was started from?",
        options: ["2600-1900 BCE", "3600-900 BCE", "6600-2900 BCE", "5600-3900 BCE"],
        answer: 0,
        explanation: "The Harappan Civilization flourished between 2600-1900 BCE."
    },
    {
        question: "Mohenjodaro in Sind province is now located in?",
        options: ["Bhutan", "Sri Lanka", "India", "Pakistan"],
        answer: 3,
        explanation: "Mohenjodaro is located in present-day Pakistan's Sindh province."
    },
    {
        question: "What is Pyrotechnology?",
        options: ["Crafts created using fire", "Crafts created without use of fire", "Crafts created using water and soil", "None of these"],
        answer: 0,
        explanation: "Pyrotechnology refers to crafts and technologies that involve the use of fire."
    },
    {
        question: "What is the time period of colonial period in India?",
        options: ["From 1500 CE - 1747 CE", "From 1700 CE - 1947 CE", "From 1600 CE - 1847 CE", "None of these"],
        answer: 1,
        explanation: "The colonial period in India is generally considered from 1700 CE to 1947 CE."
    },
    {
        question: "India has been a land of great cultures since ancient times including?",
        options: ["Hinduism", "Jainism", "Buddhism", "All of these"],
        answer: 3,
        explanation: "This question is repeated from earlier - India has been home to all these religions."
    },
    {
        question: "What is the ultimate goal of human life, representing liberation from the cycle of birth and death?",
        options: ["Karma", "Maya", "Atman", "Moksha"],
        answer: 3,
        explanation: "Moksha is the concept of liberation from the cycle of rebirth in Indian philosophy."
    },
    {
        question: "Shakuntala is dramatic literature written by?",
        options: ["Surdasa", "Kalidasa", "Tulsidasa", "Narottamdasa"],
        answer: 1,
        explanation: "Shakuntala was written by the ancient Indian playwright Kalidasa."
    },
    {
        question: "Ajanta and Ellora caves contain some of the finest examples of classical Indian painting, depicting scenes from the life of?",
        options: ["Hinduism", "Buddhism", "Both Hinduism and Buddhism", "Sikkhism"],
        answer: 2,
        explanation: "These caves contain artwork depicting both Hindu and Buddhist themes."
    },
    {
        question: "What is the time period of vedic period in India?",
        options: ["From 1000 BCE - 500 BCE", "From 1500 BCE - 500 BCE", "From 2000 BCE - 1500 BCE", "All of these"],
        answer: 1,
        explanation: "The Vedic period is generally dated from 1500 BCE to 500 BCE."
    },
    {
        question: "The illusionary nature of the world is also known as?",
        options: ["Karma", "Maya", "Atman", "Moksha"],
        answer: 1,
        explanation: "Maya refers to the illusionary nature of the perceived world in Indian philosophy."
    },
    {
        question: "The entire body of knowledge is divided into how many sets in Mundakupanishad?",
        options: ["0", "1", "2", "3"],
        answer: 2,
        explanation: "The Mundakopanishad divides knowledge into two categories - Para (higher) and Apara (lower) knowledge."
    },
    {
        question: "Ashtadhyayi is a grammar book written by?",
        options: ["Aryabhatta", "Brahmgupta", "Panini", "None of these"],
        answer: 2,
        explanation: "Ashtadhyayi is the foundational text of Sanskrit grammar written by Panini."
    },
    {
        question: "Sage Gautam is famous for his contribution about the scripture related to?",
        options: ["Vaisheshika", "Samkhya", "Nyaya", "None of these"],
        answer: 2,
        explanation: "Gautama is traditionally credited as the founder of the Nyaya school of philosophy."
    },
    {
        question: "Who is known as the father of Vedanta?",
        options: ["Gautam", "Kanad", "Jamini", "Veda Vyas"],
        answer: 3,
        explanation: "Veda Vyasa is traditionally regarded as the compiler of the Vedas and the father of Vedanta philosophy."
    },
    {
        question: "Philosophical study of being, existence, and reality is known as?",
        options: ["Phenology", "Oncology", "Ontology", "None of these"],
        answer: 2,
        explanation: "Ontology is the philosophical study of the nature of being, becoming, existence, or reality."
    },
    {
        question: "In traditional knowledge of India, water and fire are known as?",
        options: ["Ap and Tejas", "Vayu and Tejas", "Tejas and Akasha", "All of these"],
        answer: 0,
        explanation: "In Indian philosophy, water is called 'Ap' and fire is called 'Tejas' among the five elements."
    },
    {
        question: "Mimamsa means?",
        options: ["Science education", "Art education", "Critical investigation", "Economics education"],
        answer: 2,
        explanation: "Mimamsa refers to critical investigation or inquiry, particularly of the Vedas."
    },
    {
        question: "Sage Patanjali has given the concept of?",
        options: ["Nyaya", "Yoga", "Vaisheshika", "None of these"],
        answer: 1,
        explanation: "Patanjali is known for compiling the Yoga Sutras, foundational texts of Yoga philosophy."
    },
    {
        question: "Apara Vidhya means?",
        options: ["Sanskrit", "The higher knowledge", "The lower knowledge", "All of these"],
        answer: 2,
        explanation: "Apara Vidhya refers to lower or worldly knowledge, as opposed to Para Vidhya (spiritual knowledge)."
    },
    {
        question: "Which one is famous for foundational principles governing health, disease, diagnosis, and treatment?",
        options: ["Vaisheshika", "Ayurveda", "Apara vidhya", "Para vidhaya"],
        answer: 1,
        explanation: "Ayurveda is the traditional Indian system of medicine dealing with health and treatment."
    },
    {
        question: "What was the time period of Gupta script?",
        options: ["From 4th to 6th century CE", "From 6th to 8th century CE", "From 8th to 10th century CE", "From 10th to 12th century CE"],
        answer: 0,
        explanation: "The Gupta script was used during the Gupta Empire (4th to 6th century CE)."
    },
    {
        question: "Isa is a type of?",
        options: ["Upanishads", "Puranas", "Grammer", "None of these"],
        answer: 0,
        explanation: "Isa is one of the principal Upanishads, also called Ishavasya Upanishad."
    },
    {
        question: "How many Parvas are in Mahabharata?",
        options: ["18", "28", "38", "48"],
        answer: 0,
        explanation: "The Mahabharata is divided into 18 parvas or books."
    },
    {
        question: "Which ancient and sacred scriptures are known as the foundation of Hinduism?",
        options: ["Vedas", "Bhagvad Gita", "Ramayana", "Mahabhartha"],
        answer: 0,
        explanation: "The Vedas are considered the most authoritative and foundational scriptures of Hinduism."
    },
    {
        question: "In Hinduism, Yajna (Sacrifice) means?",
        options: [
            "Emphasis on purity and precision in the execution of rituals",
            "Performing rituals and sacrifices to appease the gods and maintain cosmic order",
            "Contains prose mantras used in rituals",
            "Detailed explanations of the rituals and their significance"
        ],
        answer: 1,
        explanation: "Yajna refers to ritual offerings made to deities to maintain cosmic order (rita)."
    },
    {
        question: "What are Agamas and Tantras?",
        options: [
            "Collection of ethical guidelines",
            "Role of different dities",
            "Base of various religious and spiritual practices",
            "None of these"
        ],
        answer: 2,
        explanation: "Agamas and Tantras are scriptures that form the basis of many Hindu, Buddhist and Jain spiritual practices."
    },
    {
        question: "Music is originated from?",
        options: ["Rk veda", "Yajur Veda", "Sama veda", "Atharva Veda"],
        answer: 2,
        explanation: "The Sama Veda is considered the origin of Indian music as it contains musical chants."
    },
    {
        question: "The Vedas are the oldest and most authoritative scriptures of Hinduism. They consist of how many main collections?",
        options: ["2", "3", "4", "5"],
        answer: 2,
        explanation: "There are four main Vedas: Rig, Yajur, Sama and Atharva."
    },
    {
        question: "Devanagari Script was developed in which century?",
        options: ["9th century CE", "8th century CE", "7th century CE", "6th century CE"],
        answer: 2,
        explanation: "The Devanagari script emerged around the 7th century CE from the Brahmi script."
    },
    {
        question: "Which one refers to the concise and aphoristic style of writing used in ancient Indian literature, particularly within the realms of philosophy, spirituality, law, and grammar?",
        options: ["Karma", "Darshana", "Tantras", "Sutras"],
        answer: 3,
        explanation: "Sutras are concise aphoristic statements that form the basis of many Indian philosophical systems."
    },
    {
        question: "In which ancient scripture, social customs, ethics of human behaviour have been mentioned?",
        options: ["Smritis", "Sutras", "Puranas", "Gita"],
        answer: 0,
        explanation: "The Smritis (like Manusmriti) deal with social customs, ethics and law."
    },
    {
        question: "Tripitaka scripture is related to?",
        options: ["Hinduism", "Jainism", "Buddhism", "Sikkhism"],
        answer: 2,
        explanation: "Tripitaka (Three Baskets) is the traditional term for Buddhist scriptures."
    },
    {
        question: "Which one comprises translations of the Buddha's teachings into Tibetan?",
        options: ["Kangyur", "Smritis", "Sutras", "None of these"],
        answer: 0,
        explanation: "Kangyur contains the Tibetan translations of Buddha's teachings."
    },
    {
        question: "Which one is the oldest veda?",
        options: ["Rk veda", "Yajur Veda", "Sama veda", "Atharva Veda"],
        answer: 0,
        explanation: "The Rigveda is the oldest among the four Vedas."
    },
    {
        question: "Which one is the sacred scriptures of the Jainism?",
        options: ["Upanishadas", "Agamas", "Puranas", "Mahayana"],
        answer: 1,
        explanation: "The Agamas are the canonical scriptures of Jainism."
    },
    {
        question: "During ancient Indian education system, education was provided in residential schools, which is known as?",
        options: ["Akhadas", "Sarayas", "Gurukulas", "Mathas"],
        answer: 2,
        explanation: "Gurukulas were the traditional residential schools in ancient India."
    },
    {
        question: "Breathing exercises are also known as?",
        options: ["Pranayama", "Asanas", "Chintan", "Manan"],
        answer: 0,
        explanation: "Pranayama refers to yogic breathing exercises and control of vital energy."
    },
    {
        question: "Which place was famous for the pursuing meditation, contemplation, and philosophical inquiry under the guidance of a spiritual teacher (guru)?",
        options: ["Mathas", "Gurukulas", "Viharas", "Ashramas"],
        answer: 3,
        explanation: "Ashramas were hermitages where spiritual practices were conducted under a guru."
    },
    {
        question: "Mahayana Sutras are the scriptures of which religion?",
        options: ["Hindu", "Jain", "Sikkh", "Buddhist"],
        answer: 3,
        explanation: "Mahayana Sutras are important Buddhist scriptures of the Mahayana tradition."
    },
    {
        question: "Which one is known as 5th veda in Hinduism?",
        options: ["Vedas", "Mahabhartha", "Ramayana", "Bhagvad Gita"],
        answer: 1,
        explanation: "The Mahabharata is sometimes called the 'fifth Veda' due to its importance."
    },
    {
        question: "Charaka and Kautilya were the alumni of which university?",
        options: ["Takshashila", "Nalanda", "Vikramshila", "Vallabhi"],
        answer: 0,
        explanation: "Takshashila was an ancient center of learning where both Charaka (medicine) and Kautilya (political science) studied."
    },
    {
        question: "The golden period of Nalanda University was in between?",
        options: [
            "5th century CE and 12th century CE",
            "7th century CE and 11th century CE",
            "8th century CE and 15th century CE",
            "9th century CE and 10th century CE"
        ],
        answer: 0,
        explanation: "Nalanda flourished from the 5th century until the 12th century CE."
    },
    {
        question: "Vallabhi was a great center of learning which is located in the state of?",
        options: ["Bihar", "Gujarat", "Madhya Pradesh", "Punjab"],
        answer: 1,
        explanation: "Vallabhi University was located in present-day Gujarat."
    },
    {
        question: "Ether is among?",
        options: ["Five elements", "Siksha", "Darshana", "None of these"],
        answer: 0,
        explanation: "Ether (Akasha) is one of the five elements (Panchamahabhuta) in Indian philosophy."
    },
    {
        question: "Total how many Nakshatras are mentioned in the ancient literatures?",
        options: ["8", "18", "23", "28"],
        answer: 3,
        explanation: "There are 28 (sometimes 27) Nakshatras or lunar mansions in Indian astronomy."
    },
    {
        question: "Vedanga-Jyotisha was composed in?",
        options: ["1000 BCE", "1100 BCE", "1200 BCE", "1300 BCE"],
        answer: 3,
        explanation: "Vedanga Jyotisha, the earliest Indian astronomical text, dates to around 1400-1200 BCE."
    },
    {
        question: "Yajnopavita is related to?",
        options: ["Upnayana", "Grihstha", "Vanprastha", "None of these"],
        answer: 0,
        explanation: "Yajnopavita is the sacred thread worn after the Upanayana (initiation) ceremony."
    },
    {
        question: "Arthashastra was written by?",
        options: ["Aryabhatta", "Kautilya", "Panini", "Brahmgupta"],
        answer: 1,
        explanation: "The Arthashastra, a treatise on statecraft, was written by Kautilya (Chanakya)."
    },
    {
        question: "In which state, ancient Vikramshila University was located?",
        options: ["Uttar Pradesh", "Gujarat", "Madhya Pradesh", "Bihar"],
        answer: 3,
        explanation: "Vikramshila University was located in present-day Bihar."
    },
    {
        question: "What was the period of Aryabhata?",
        options: ["376–440 CE", "476–550 CE", "526–560 CE", "396–510 CE"],
        answer: 1,
        explanation: "Aryabhata, the mathematician-astronomer, lived from 476–550 CE."
    },
    {
        question: "Siddhanta Shiromani is written by?",
        options: ["Brahgupta", "Aryabhatta", "Bhaskara", "Kautilya"],
        answer: 2,
        explanation: "Siddhanta Shiromani was written by Bhaskaracharya in the 12th century."
    },
    {
        question: "Who gave Heliocentric model of the solar system?",
        options: ["Aryabhatta", "Brahgupta", "Bhaskara", "Kautilya"],
        answer: 0,
        explanation: "Aryabhata proposed a heliocentric model where planets orbit the Sun."
    },
    {
        question: "The Indian calendar often integrates?",
        options: ["Only stars", "Only Lunar element", "Only Solar element", "Both lunar and solar elements"],
        answer: 3,
        explanation: "The Indian calendar is lunisolar, combining both lunar and solar elements."
    },
    {
        question: "How many ritus are there as per the Indian calendar?",
        options: ["4", "6", "8", "10"],
        answer: 1,
        explanation: "There are six ritus (seasons) in the traditional Indian calendar."
    },
    {
        question: "Which ancient Indian text describes mining and metallurgical techniques?",
        options: ["Rigveda", "Arthashastra", "Charaka Samhita", "Natya Shastra"],
        answer: 1,
        explanation: "The Arthashastra contains information about mining and metallurgy."
    },
    {
        question: "What was the primary fuel used for smelting metals in ancient India?",
        options: ["Coal", "Charcoal", "Cow dung", "Wood"],
        answer: 1,
        explanation: "Charcoal was the primary fuel for smelting due to its high burning temperature."
    },
    {
        question: "Which metal was extensively used in ancient India for making idols using the lost-wax technique?",
        options: ["Bronze", "Iron", "Zinc", "Copper"],
        answer: 0,
        explanation: "Bronze was commonly used for idols through the lost-wax (cire perdue) technique."
    },
    {
        question: "What was the primary purpose of 'Kupya' in ancient Indian metallurgy?",
        options: [
            "A type of furnace",
            "A crucible for melting metals",
            "A bellow for air supply",
            "A hammer for forging"
        ],
        answer: 2,
        explanation: "Kupya refers to the bellows used to supply air to furnaces in ancient metallurgy."
    },
    {
        question: "Which of the following was NOT an alloy developed in ancient India?",
        options: ["Brass", "Bronze", "Stainless steel", "Pewter"],
        answer: 2,
        explanation: "Stainless steel was not developed in ancient India (it was developed in the 20th century)."
    },
    {
        question: "The famous Iron Pillar of Delhi is made up of which material?",
        options: ["Wrought Iron", "Cast Iron", "High-carbon steel", "Pure Iron"],
        answer: 0,
        explanation: "The Iron Pillar is made of wrought iron with high phosphorus content."
    },
    {
        question: "Which ancient Indian metallurgist is known for advancements in iron smelting?",
        options: ["Nagarjuna", "Sushruta", "Varahamihira", "Patanjali"],
        answer: 0,
        explanation: "Nagarjuna (not to be confused with the Buddhist philosopher) made contributions to metallurgy."
    },
    {
        question: "Which of the following is a unique contribution of Indian Mathematics?",
        options: ["Calculus", "Complex Numbers", "Pythagorean Theorem", "Decimal System with Zero"],
        answer: 3,
        explanation: "The decimal place-value system with zero was India's unique contribution."
    },
    {
        question: "Which Indian mathematician introduced the concept of negative numbers?",
        options: ["Bhaskara II", "Brahmagupta", "Aryabhata", "Varahamihira"],
        answer: 1,
        explanation: "Brahmagupta (7th century) first formalized rules for negative numbers."
    },
    {
        question: "The 'Pingala's Chandah Sāstra' is associated with which mathematical concept?",
        options: ["Magic Squares", "Binary Numbers", "Trigonometry", "Algebra"],
        answer: 1,
        explanation: "Pingala's work on poetic meters contains early concepts related to binary numbers."
    },
    {
        question: "What is the unique feature of Indian trigonometry compared to Greek trigonometry?",
        options: [
            "Use of Sine (Jya) function",
            "Use of Angles",
            "Use of Tangents",
            "Use of Radians"
        ],
        answer: 0,
        explanation: "Indian trigonometry used the sine function (jya) rather than the chord function used by Greeks."
    },
    {
        question: "Which ancient Indian text contains the earliest known discussion of permutations and combinations?",
        options: ["Lilavati", "Yuktibhāṣā", "Chandah Sāstra", "Siddhanta Shiromani"],
        answer: 2,
        explanation: "Pingala's Chandah Sāstra contains early combinatorial mathematics."
    },
    {
        question: "Which ancient Indian text is considered the most authoritative work on military strategy and statecraft?",
        options: ["Manusmriti", "Mahabharata", "Rigveda", "Arthashastra"],
        answer: 3,
        explanation: "The Arthashastra by Kautilya is the premier text on statecraft and military strategy."
    },
    {
        question: "Who is regarded as the ancient Indian scholar who systematized military science and warfare strategies?",
        options: ["Chanakya", "Aryabhata", "Patanjali", "Panini"],
        answer: 0,
        explanation: "Chanakya (Kautilya) systematized military science in the Arthashastra."
    },
    {
        question: "What was the primary focus of military training in ancient India as described in the Arthashastra?",
        options: [
            "Physical strength only",
            "Archery and Swordsmanship",
            "Espionage and psychological warfare",
            "Combined in weapons, strategy, and discipline"
        ],
        answer: 3,
        explanation: "Ancient Indian military training emphasized comprehensive training in weapons, strategy and discipline."
    },
    {
        question: "Which ancient Indian kingdom was particularly known for its advanced military formations like the 'Chakravyuha'?",
        options: ["Maurya Empire", "Gupta Empire", "Magadha", "Mahajanapadas"],
        answer: 2,
        explanation: "Magadha was known for advanced military tactics including the Chakravyuha formation."
    },
    {
        question: "What was the primary purpose of Niyuddha Kala in ancient India?",
        options: [
            "Entertainment",
            "Military combat and self-defense",
            "Religious rituals",
            "Agricultural training"
        ],
        answer: 1,
        explanation: "Niyuddha Kala refers to martial arts for combat and self-defense."
    },
    {
        question: "Which ancient Indian text describes Niyuddha techniques and combat strategies?",
        options: ["Arthashastra", "Natya Shastra", "Manusmriti", "Agni Purana"],
        answer: 3,
        explanation: "The Agni Purana contains descriptions of martial arts techniques."
    },
    {
        question: "Which warrior-sage is traditionally associated with the origin of Niyuddha in Indian culture?",
        options: ["Dronacharya", "Parshuram", "Bhishma", "Karna"],
        answer: 1,
        explanation: "Parashurama is considered the originator of martial arts in Indian tradition."
    },
    {
        question: "Which of the following was a key principle of Niyuddha Kala?",
        options: [
            "Use of only long-range weapons",
            "Strict non-violence",
            "Discipline, ethics, and physical prowess",
            "Focus on magical powers"
        ],
        answer: 2,
        explanation: "Niyuddha emphasized discipline, ethics along with physical training."
    },
    {
        question: "Which Vedic concept represents the deification and sacredness of nature?",
        options: ["Yajna", "Pradushana", "Devata", "Prakriti"],
        answer: 2,
        explanation: "Devatas represent deified natural forces in Vedic thought."
    },
    {
        question: "In Vedic tradition, what does the term 'Prithvi' signify?",
        options: ["Goddess of Water", "Mother Earth", "God of Fire", "Divine Air"],
        answer: 1,
        explanation: "Prithvi is the Vedic personification of Mother Earth."
    },
    {
        question: "Which Vedic practice reflects environmental conservation through ritual offerings?",
        options: ["Tapasya", "Yajna", "Dhyana", "Puja"],
        answer: 1,
        explanation: "Yajna (ritual offerings) maintained ecological balance in Vedic thought."
    },
    {
        question: "Which Vedic text emphasizes the interconnectedness of all natural elements?",
        options: ["Rigveda", "Atharvaveda", "Samaveda", "Yajurveda"],
        answer: 0,
        explanation: "The Rigveda contains hymns emphasizing nature's interconnectedness."
    },
    {
        question: "The 'Paradigm Shift' through IKS emphasizes:",
        options: [
            "Blending ancient wisdom with modern scientific methods",
            "Rejecting technological advancements",
            "Exclusively using Sanskrit terminology",
            "Reviving outdated practices without modification"
        ],
        answer: 0,
        explanation: "IKS promotes integrating traditional knowledge with modern science."
    },
    {
        question: "According to Bhartrhari, what is the indivisible unit of linguistic communication?",
        options: ["Word", "Phoneme", "Sentence", "Meaning"],
        answer: 2,
        explanation: "Bhartrhari considered the sentence (vakya) as the basic unit of meaning."
    },
    {
        question: "The 'Vigyan Jyoti' program encourages girls to pursue STEM fields by:",
        options: [
            "Teaching Vedic mathematics exclusively",
            "Combining traditional Indian sciences with modern STEM",
            "Focusing only on space technology",
            "Ignoring IKS completely"
        ],
        answer: 1,
        explanation: "Vigyan Jyoti integrates traditional Indian knowledge with modern STEM."
    },
    {
        question: "Bhartrhari's view that language and reality are inseparable aligns with which concept?",
        options: ["Šabda-pramana", "Yajna", "Pradushana", "Karma"],
        answer: 0,
        explanation: "Šabda-pramana refers to verbal testimony as a valid means of knowledge."
    },
    {
        question: "Which of the following is a key strategy to integrate IKS into modern education?",
        options: [
            "Incorporate traditional texts in STEM curricula",
            "Replace Western science entirely",
            "Limit IKS to history courses",
            "Ignore contemporary applications"
        ],
        answer: 0,
        explanation: "Integration involves including traditional knowledge in modern curricula."
    },
    {
        question: "In Panini's Ashtadhyayi, what is the primary mechanism for generating grammatical rules?",
        options: [
            "Random word lists",
            "Sutras with recursive operations",
            "Pictorial representation",
            "Oral traditions only"
        ],
        answer: 1,
        explanation: "Panini used sutras (aphorisms) with recursive operations in his grammar."
    },
    {
        question: "Which of the following is a focus area of the IKS Division established under the Ministry of Education?",
        options: [
            "Preserving ancient manuscripts only",
            "Promoting only Ayurveda in schools",
            "Integrating IKS into mainstream education and research",
            "Translating all texts into English"
        ],
        answer: 2,
        explanation: "The IKS Division focuses on integrating traditional knowledge into education."
    },
    {
        question: "How does IKS contribute to environmental sustainability today?",
        options: [
            "Adapting ancient water management to modern ecology",
            "By reviving outdated farming tools",
            "Banning all industrial development",
            "Using only organic pesticides"
        ],
        answer: 0,
        explanation: "IKS contributes by adapting traditional ecological knowledge to modern needs."
    },
    {
        question: "What makes Sanskrit uniquely suited for Natural Language Processing (NLP)?",
        options: [
            "Its ancient religious status",
            "Simple vocabulary",
            "Large number of speakers today",
            "Highly structured, rule-based grammar"
        ],
        answer: 3,
        explanation: "Sanskrit's highly structured grammar makes it suitable for computational analysis."
    },
    {
        question: "What is the primary purpose of Chandas (prosody) in ancient Indian literature?",
        options: [
            "Decorative wordplay",
            "Structural framework for poetic composition",
            "Religious rituals only",
            "Musical notation"
        ],
        answer: 1,
        explanation: "Chandas provides the metrical structure for poetic compositions."
    },
    {
        question: "Which Vedic text is the earliest known source for the study of Chandas?",
        options: ["Rigveda", "Yajurveda", "Chandogya Upanishad", "Natya Shastra"],
        answer: 0,
        explanation: "The Rigveda itself is composed in various chandas (meters)."
    },
    {
        question: "In prosody, a Guru (heavy syllable) is defined by:",
        options: ["Sacred meaning", "High pitch", "Length", "Position in the stanza"],
        answer: 2,
        explanation: "A guru syllable is defined by its long duration in pronunciation."
    },
    {
        question: "What was the primary function of Gana (mnemonic syllables) in Sanskrit prosody?",
        options: [
            "To memorize Vedic hymns",
            "To classify poetic metres",
            "To teach grammar rules",
            "To compose musical notes"
        ],
        answer: 1,
        explanation: "Gana syllables were used to classify and remember poetic meters."
    },
    {
        question: "Which of these is NOT one of the 'seven birds' (major Sanskrit metres)?",
        options: ["Anusũubh", "Triştubh", "Jagati", "Kayya"],
        answer: 3,
        explanation: "The seven major Vedic meters are Gayatri, Ushnih, Anushtubh, Brihati, Pankti, Trishtubh, and Jagati."
    },
    {
        question: "How did metres contribute to literary architecture in ancient India?",
        options: [
            "By standardizing emotional expression",
            "By providing rigid rhythmic frameworks for poetry",
            "By replacing grammatical rules",
            "Limiting creative freedom"
        ],
        answer: 1,
        explanation: "Metrical structures provided the rhythmic framework for poetic composition."
    },
    {
        question: "According to the Vedic model, how many levels (koshas) of consciousness are described?",
        options: ["3", "6", "5", "12"],
        answer: 2,
        explanation: "The Taittiriya Upanishad describes five koshas or sheaths of consciousness."
    },
    {
        question: "The ancient Indian theory of speech (Vak) and cognition is primarily explored in which text?",
        options: [
            "Patanjali's Yoga Sutras",
            "Charaka Samhita",
            "Nyaya Sutras",
            "Mandukya Upanishad"
        ],
        answer: 3,
        explanation: "The Mandukya Upanishad explores levels of speech and consciousness."
    },
    {
        question: "Which governmental initiative promotes IKS in current research and policy?",
        options: ["AYUSH Mission", "Digital India", "Make in India", "Swachh Bharat"],
        answer: 0,
        explanation: "AYUSH promotes traditional Indian systems of medicine and knowledge."
    },
    {
        question: "Which ancient Indian text explicitly mentions Anviksiki as one of the four vital vidyas for statecraft?",
        options: ["Manusmriti", "Arthashastra", "Rigveda", "Natya Shastra"],
        answer: 1,
        explanation: "The Arthashastra lists Anviksiki (logic) among the four essential sciences."
    },
    {
        question: "The term Anviksiki primarily refers to:",
        options: [
            "Military strategy",
            "Agricultural techniques",
            "Poetic composition",
            "Logical and philosophical reasoning"
        ],
        answer: 3,
        explanation: "Anviksiki refers to logical investigation and philosophical inquiry."
    },
    {
        question: "Rajadharma in ancient Indian polity primarily emphasized:",
        options: [
            "Military conquests",
            "Duties and ethical responsibilities of a ruler",
            "Trade regulations",
            "Religious rituals"
        ],
        answer: 1,
        explanation: "Rajadharma refers to the ethical duties and responsibilities of a king."
    },
    {
        question: "Kautilya's Arthashastra is fundamentally a treatise on:",
        options: [
            "Poetic composition",
            "Astronomical calculations",
            "Statecraft, economics, and political strategy",
            "Ayurvedic medicine"
        ],
        answer: 2,
        explanation: "The Arthashastra deals with statecraft, economics and political strategy."
    },
    {
        question: "The Shulba Sutras in ancient India primarily dealt with:",
        options: [
            "Land measurement and taxation",
            "Military strategy",
            "Temple architecture",
            "Ayurvedic medicine"
        ],
        answer: 0,
        explanation: "Shulba Sutras are Vedic texts dealing with geometry for altar construction."
    },
    {
        question: "Which ancient Indian text provides detailed guidelines for revenue collection and taxation under the Mauryan administration?",
        options: ["Manusmriti", "Arthashastra", "Rigveda", "Natya Shastra"],
        answer: 1,
        explanation: "The Arthashastra contains detailed guidelines on taxation and revenue."
    },
    {
        question: "A key mechanism to integrate IKS into modern education is:",
        options: [
            "Incorporating traditional texts in interdisciplinary curricula",
            "Limiting IKS to history courses",
            "Promoting only theoretical study",
            "Ignoring Western sciences"
        ],
        answer: 0,
        explanation: "Integration involves interdisciplinary inclusion of traditional knowledge."
    },
    {
        question: "The Paradigm Shift expected from IKS integration emphasizes:",
        options: [
            "Isolating IKS from global systems",
            "Rejecting all contemporary knowledge",
            "Focusing on Sanskrit literature",
            "Blending ancient wisdom with modern scientific rigor"
        ],
        answer: 3,
        explanation: "IKS promotes blending traditional knowledge with modern science."
    },
    {
        question: "What is the primary focus of the Indian Knowledge System (IKS)?",
        options: [
            "Modern scientific theories",
            "Ancient Indian intellectual traditions and their applications",
            "Western philosophies",
            "Contemporary technological advancements"
        ],
        answer: 1,
        explanation: "IKS focuses on India's traditional knowledge systems and their modern applications."
    },
    {
        question: "Which ancient Indian text is considered the oldest and forms the foundation of the Vedic literature?",
        options: ["Bhagavad Gita", "Rigveda", "Upanishads", "Mahabharata"],
        answer: 1,
        explanation: "The Rigveda is the oldest and most foundational Vedic text."
    },
    {
        question: "In ancient Indian mathematics, which numeral system was developed that significantly influenced global mathematics?",
        options: [
            "Roman numeral system",
            "Binary numeral system",
            "Decimal place value system",
            "Hexadecimal system"
        ],
        answer: 2,
        explanation: "India developed the decimal place-value system with zero."
    },
    {
        question: "Who is known as the 'Father of Indian Astronomy' for his seminal work 'Aryabhatiya'?",
        options: ["Varahamihira", "Brahmagupta", "Aryabhata", "Bhaskara I"],
        answer: 2,
        explanation: "Aryabhata authored the Aryabhatiya, a foundational astronomical text."
    },
    {
        question: "Which ancient Indian treatise is renowned for its detailed exposition on statecraft, economics, and military strategy?",
        options: ["Manusmriti", "Arthashastra", "Ramayana", "Mahabharata"],
        answer: 1,
        explanation: "The Arthashastra by Kautilya covers statecraft and military strategy."
    },
    {
        question: "In the context of Indian linguistics, what is 'Panini' known for?",
        options: [
            "Developing the concept of zero",
            "Writing the epic Mahabharata",
            "Composing a comprehensive grammar of Sanskrit",
            "Establishing the principles of Ayurveda"
        ],
        answer: 2,
        explanation: "Panini composed the Ashtadhyayi, the definitive Sanskrit grammar."
    },
    {
        question: "Which ancient Indian science focuses on health, wellness, and longevity through natural means?",
        options: ["Yoga", "Ayurveda", "Jyotisha", "Vaastu Shastra"],
        answer: 1,
        explanation: "Ayurveda is the traditional Indian system of medicine."
    },
    {
        question: "The 'Sulbasutras' are ancient Indian texts primarily concerned with which subject?",
        options: ["Astronomy", "Geometry and construction of altars", "Music and arts", "Medicine"],
        answer: 1,
        explanation: "Sulbasutras deal with geometry for Vedic altar construction."
    },
    {
        question: "Which ancient Indian scholar is credited with the discovery of the concept of zero as a numeral?",
        options: ["Aryabhata", "Brahmagupta", "Bhaskara II", "Varahamihira"],
        answer: 1,
        explanation: "Brahmagupta formalized rules for zero in the 7th century."
    },
    {
        question: "In ancient Indian architecture, what is the significance of 'Vaastu Shastra'?",
        options: [
            "It is a treatise on dance and performance arts",
            "It provides guidelines on the design and layout of buildings and structures",
            "It is a manual on ancient warfare techniques",
            "None of these"
        ],
        answer: 1,
        explanation: "Vaastu Shastra provides architectural and design principles."
    },
    {
        question: "Which of the following is a classical Indian dance form that originated in Tamil Nadu?",
        options: ["Kathak", "Bharatanatyam", "Odissi", "Kathakali"],
        answer: 1,
        explanation: "Bharatanatyam originated in Tamil Nadu's temples."
    },
    {
        question: "The ancient Indian text 'Charaka Samhita' is associated with which field?",
        options: ["Astronomy", "Medicine", "Mathematics", "Music"],
        answer: 1,
        explanation: "Charaka Samhita is a foundational Ayurvedic text."
    },
    {
        question: "Which ancient Indian university was renowned for its vast library and attracted students from various parts of the world?",
        options: ["Takshashila", "Nalanda", "Vikramashila", "Vallabhi"],
        answer: 1,
        explanation: "Nalanda University had a massive library and international students."
    },
    {
        question: "In the context of Indian philosophy, what does 'Advaita Vedanta' emphasize?",
        options: [
            "Duality between mind and body",
            "Non-dualism and the unity of the individual soul with the ultimate reality",
            "The importance of rituals and ceremonies",
            "The supremacy of devotional practices"
        ],
        answer: 1,
        explanation: "Advaita Vedanta teaches non-dualism (Brahman-Atman unity)."
    },
    {
        question: "Who authored the ancient Indian text 'Natya Shastra', which serves as a comprehensive guide on performing arts?",
        options: ["Kalidasa", "Bharata Muni", "Tulsidas", "Valmiki"],
        answer: 1,
        explanation: "Bharata Muni is the attributed author of Natya Shastra."
    },
    {
        question: "The 'Panchatantra' is a collection of ancient Indian tales primarily intended to impart what?",
        options: [
            "Religious teachings",
            "Moral and ethical lessons",
            "Historical accounts",
            "Scientific knowledge"
        ],
        answer: 1,
        explanation: "Panchatantra stories teach moral lessons through animal fables."
    },
    {
        question: "Which ancient Indian text is considered a foundational work on yoga philosophy?",
        options: [
            "Bhagavad Gita",
            "Yoga Sutras of Patanjali",
            "Hatha Yoga Pradipika",
            "Gheranda Samhita"
        ],
        answer: 1,
        explanation: "Patanjali's Yoga Sutras systematize yoga philosophy."
    },
    {
        question: "In Indian classical music, what are the two primary systems?",
        options: [
            "Carnatic and Hindustani",
            "Folk and Classical",
            "Raga and Tala",
            "Sitar and Tabla"
        ],
        answer: 0,
        explanation: "The two main systems are Hindustani (North) and Carnatic (South)."
    },
    {
        question: "Which ancient Indian text deals with the principles of love and human relationships?",
        options: ["Manusmriti", "Kamasutra", "Arthashastra", "Upanishads"],
        answer: 1,
        explanation: "The Kamasutra by Vatsyayana deals with love and relationships."
    },
    {
        question: "The 'Bhagavad Gita' is a part of which larger Indian epic?",
        options: ["Ramayana", "Mahabharata", "Vedas", "Puranas"],
        answer: 1,
        explanation: "The Gita is part of the Mahabharata (Bhishma Parva)."
    },
    {
        question: "Which ancient Indian scholar made significant contributions to the field of metallurgy and is known for his work 'Rasaratnakara'?",
        options: ["Aryabhata", "Charaka", "Nagarjuna", "Varahamihira"],
        answer: 2,
        explanation: "Nagarjuna wrote the Rasaratnakara on alchemy and metallurgy."
    },
    {
        question: "Which Indian system of knowledge focuses on ethical living, duties, and moral responsibilities?",
        options: [
            "Dharma Shastra",
            "Arthashastra",
            "Nyaya Sutra",
            "Vaastu Shastra"
        ],
        answer: 0,
        explanation: "Dharma Shastras deal with ethics and moral duties."
    },
    {
        question: "The ancient Indian science of 'Jyotisha' is primarily concerned with which field?",
        options: [
            "Mathematics",
            "Astronomy and astrology",
            "Medicine",
            "Architecture"
        ],
        answer: 1,
        explanation: "Jyotisha encompasses both astronomy and astrology."
    },
    {
        question: "Which Indian scripture contains detailed discussions on the four goals of life: Dharma, Artha, Kama, and Moksha?",
        options: ["Upanishads", "Bhagavad Gita", "Manusmriti", "Puranas"],
        answer: 1,
        explanation: "The Bhagavad Gita discusses the four purusharthas."
    },
    {
        question: "The 'Brihat Samhita' by Varahamihira is an encyclopedic work covering topics related to which fields?",
        options: [
            "Medicine and surgery",
            "Astronomy, meteorology, and architecture",
            "Poetry and drama",
            "Religion and philosophy"
        ],
        answer: 1,
        explanation: "Brihat Samhita covers astronomy, architecture and related topics."
    },
    {
        question: "Which ancient Indian epic narrates the story of Lord Rama and his quest to rescue Sita?",
        options: ["Mahabharata", "Ramayana", "Bhagavad Gita", "Upanishads"],
        answer: 1,
        explanation: "The Ramayana tells the story of Rama's life and adventures."
    },
    {
        question: "In Ayurveda, what does the term 'Tridosha' refer to?",
        options: [
            "Three types of food",
            "Three fundamental bodily humors (Vata, Pitta, Kapha)",
            "Three stages of life",
            "Three types of diseases"
        ],
        answer: 1,
        explanation: "Tridosha theory (Vata-Pitta-Kapha) is central to Ayurveda."
    },
    {
        question: "Which ancient Indian university was known for specializing in Buddhist studies and higher education?",
        options: ["Takshashila", "Nalanda", "Vikramashila", "Ujjain"],
        answer: 1,
        explanation: "Nalanda was a major center for Buddhist studies."
    },
    {
        question: "The 'Ashtadhyayi' by Panini is a seminal work in which field?",
        options: [
            "Medicine",
            "Grammar and linguistics",
            "Astronomy",
            "Ethics"
        ],
        answer: 1,
        explanation: "Ashtadhyayi is the foundational text of Sanskrit grammar."
    },
    {
        question: "Which Indian knowledge tradition emphasizes meditation and self-realization?",
        options: ["Vedanta", "Mimamsa", "Nyaya", "Samkhya"],
        answer: 0,
        explanation: "Vedanta emphasizes meditation and realization of Brahman."
    },
    {
        question: "Which branch of Indian philosophy is primarily concerned with logic and reasoning?",
        options: ["Nyaya", "Yoga", "Samkhya", "Vedanta"],
        answer: 0,
        explanation: "Nyaya school specializes in logic and epistemology."
    },
    {
        question: "The concept of 'Panch Mahabhuta' in Indian philosophy refers to which of the following?",
        options: [
            "Five types of meditation",
            "Five great elements (Earth, Water, Fire, Air, Space)",
            "Five branches of Ayurveda",
            "Five Vedic scriptures"
        ],
        answer: 1,
        explanation: "Panch Mahabhuta are the five fundamental elements."
    },
    {
        question: "Who among the following is regarded as the pioneer of Indian logic (Nyaya)?",
        options: ["Gautama", "Kapila", "Patanjali", "Bhartrihari"],
        answer: 0,
        explanation: "Akshapada Gautama founded the Nyaya school of logic."
    },
    {
        question: "Which of the following is NOT a classical Indian musical instrument?",
        options: ["Sitar", "Veena", "Tabla", "Guitar"],
        answer: 3,
        explanation: "Guitar is not traditionally Indian (originated in Europe)."
    },
    {
        question: "The 'Sushruta Samhita' is an ancient Indian text that deals with which field?",
        options: [
            "Astronomy",
            "Surgery and medicine",
            "Architecture",
            "Philosophy"
        ],
        answer: 1,
        explanation: "Sushruta Samhita is a foundational text on surgery and medicine."
    },
    {
        question: "Which Indian philosophy focuses on cause and effect and is considered dualistic in nature?",
        options: ["Samkhya", "Vedanta", "Mimamsa", "Charvaka"],
        answer: 0,
        explanation: "Samkhya philosophy is dualistic (Purusha-Prakriti)."
    },
    {
        question: "Which of the following was an ancient Indian center of learning located in present-day Pakistan?",
        options: ["Takshashila", "Nalanda", "Vikramashila", "Ujjain"],
        answer: 0,
        explanation: "Takshashila was located in present-day Pakistan."
    },
    {
        question: "The concept of 'Rasa' in Indian aesthetics refers to which of the following?",
        options: [
            "Ayurvedic medicine preparation",
            "The essence or sentiment in performing arts",
            "A type of Indian dance form",
            "A Vedic ritual"
        ],
        answer: 1,
        explanation: "Rasa theory deals with aesthetic flavors/sentiments in arts."
    },
    {
        question: "Who composed the classical Sanskrit play 'Shakuntala'?",
        options: ["Kalidasa", "Bharata Muni", "Valmiki", "Tulsidas"],
        answer: 0,
        explanation: "Kalidasa wrote the famous play Abhijnanashakuntalam."
    },
    {
        question: "Which ancient Indian scripture describes the duties and responsibilities of a ruler?",
        options: ["Manusmriti", "Arthashastra", "Vedas", "Upanishads"],
        answer: 1,
        explanation: "Arthashastra details the duties of a king (Rajadharma)."
    },
    {
        question: "Which text is considered the foundational scripture of the Samkhya philosophy?",
        options: [
            "Yoga Sutras",
            "Samkhya Karika",
            "Vedanta Sutra",
            "Bhagavad Gita"
        ],
        answer: 1,
        explanation: "Samkhya Karika by Ishvarakrishna is the key Samkhya text."
    },
    {
        question: "Which ancient Indian text is known as the 'Fifth Veda' due to its comprehensive nature?",
        options: [
            "Bhagavad Gita",
            "Natya Shastra",
            "Upanishads",
            "Mahabharata"
        ],
        answer: 1,
        explanation: "Natya Shastra is sometimes called the fifth Veda."
    },
    {
        question: "The concept of 'Karma' in Indian philosophy primarily refers to:",
        options: [
            "Fate predetermined by the gods",
            "The law of cause and effect governing actions",
            "Ritualistic sacrifices",
            "The pursuit of pleasure"
        ],
        answer: 1,
        explanation: "Karma refers to the ethical law of cause and effect."
    },
    {
        question: "Who is considered the father of Ayurveda?",
        options: ["Charaka", "Sushruta", "Nagarjuna", "Brahmagupta"],
        answer: 0,
        explanation: "Charaka is regarded as the father of Ayurveda."
    },
    {
        question: "Which Indian scripture is primarily a dialogue between Nachiketa and Yama (the god of death)?",
        options: [
            "Katha Upanishad",
            "Mundaka Upanishad",
            "Bhagavad Gita",
            "Brahma Sutra"
        ],
        answer: 0,
        explanation: "Katha Upanishad contains the dialogue between Nachiketa and Yama."
    },
    {
        question: "Which of the following is NOT a traditional Indian martial art?",
        options: ["Kalaripayattu", "Silambam", "Gatka", "Judo"],
        answer: 3,
        explanation: "Judo is a Japanese martial art, not traditionally Indian."
    },
    {
        question: "The 'Puranas' primarily deal with:",
        options: [
            "History, mythology, and cosmology",
            "Military strategies",
            "Medical sciences",
            "Grammar and linguistics"
        ],
        answer: 0,
        explanation: "Puranas contain mythological narratives and cosmology."
    },
    {
        question: "Which ancient Indian text describes the laws of motion and gravity before Newton?",
        options: [
            "Surya Siddhanta",
            "Charaka Samhita",
            "Arthashastra",
            "Nyaya Sutra"
        ],
        answer: 0,
        explanation: "Surya Siddhanta contains early concepts of gravity."
    },
    {
        question: "What is the literal meaning of 'Vedanta'?",
        options: [
            "End of the Vedas",
            "Science of life",
            "Cosmic order",
            "Sacred law"
        ],
        answer: 0,
        explanation: "Vedanta literally means 'end (anta) of the Vedas'."
    },
    {
        question: "Which Indian philosophy emphasizes devotion (bhakti) as a path to liberation?",
        options: ["Vedanta", "Bhakti Yoga", "Nyaya", "Charvaka"],
        answer: 1,
        explanation: "Bhakti Yoga emphasizes devotional surrender to God."
    }
];

// Rest of the quiz.js code remains the same as provided earlier
// DOM Elements
const questionEl = document.getElementById('question');
const optionsEl = document.querySelector('.options');
const currentQEl = document.getElementById('current-q');
const totalQEl = document.getElementById('total-q');
const scoreEl = document.getElementById('score');
const progressFillEl = document.querySelector('.progress-fill');
const explanationEl = document.getElementById('explanation');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const quizContainer = document.querySelector('.quiz-container');
const resultsEl = document.querySelector('.quiz-results');
const finalScoreEl = document.getElementById('final-score');
const maxScoreEl = document.getElementById('max-score');
const resultMessageEl = document.getElementById('result-message');
const retryBtn = document.getElementById('retry-btn');
const homeBtn = document.getElementById('home-btn');

// Quiz State
let currentQuestion = 0;
let score = 0;
let selectedOption = null;

function initQuiz() {
    totalQEl.textContent = quizData.length;
    showQuestion();
}

// Show Question
function showQuestion() {
    const question = quizData[currentQuestion];
    questionEl.textContent = question.question;
    optionsEl.innerHTML = '';
    explanationEl.textContent = '';
    selectedOption = null;

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(index));
        optionsEl.appendChild(button);
    });

    currentQEl.textContent = currentQuestion + 1;
    updateProgress();
    
    // Disable prevBtn if on first question
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = true;
}

// Select Option
function selectOption(index) {
    selectedOption = index;
    const options = document.querySelectorAll('.option');
    const correctIndex = quizData[currentQuestion].answer;
    
    // Disable all options after selection
    options.forEach(option => option.disabled = true);
    
    // Highlight selected option
    if (index === correctIndex) {
        options[index].classList.add('correct');
        score++;
        scoreEl.textContent = score;
    } else {
        options[index].classList.add('incorrect');
        options[correctIndex].classList.add('correct');
    }
    
    // Show explanation
    explanationEl.textContent = quizData[currentQuestion].explanation;
    nextBtn.disabled = false;
}

// Next Question
nextBtn.addEventListener('click', () => {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
});

// Previous Question
prevBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
});

// Show Results
function showResults() {
    quizContainer.classList.add('hidden');
    resultsEl.classList.remove('hidden');
    finalScoreEl.textContent = score;
    maxScoreEl.textContent = quizData.length;

    const percentage = (score / quizData.length) * 100;
    if (percentage >= 80) {
        resultMessageEl.textContent = 'Excellent! You have deep knowledge of this subject.';
    } else if (percentage >= 60) {
        resultMessageEl.textContent = 'Good! You have substantial knowledge but can learn more.';
    } else if (percentage >= 40) {
        resultMessageEl.textContent = 'Fair! Keep learning to improve your understanding.';
    } else {
        resultMessageEl.textContent = 'Keep practicing! The ancient wisdom awaits your discovery.';
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressFillEl.style.width = `${progress}%`;
}

retryBtn.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    scoreEl.textContent = score;
    quizContainer.classList.remove('hidden');
    resultsEl.classList.add('hidden');
    showQuestion();
});

homeBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

initQuiz();