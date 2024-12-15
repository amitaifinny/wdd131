const avatarCharacters = [
  {
    character: "Aang",
    description: "The Avatar, a young airbending monk who is the last of his kind. He is kind, compassionate, and determined to bring peace to the world. Aang is a master of all four elements: air, water, earth, and fire. Despite his young age, he carries the weight of the world on his shoulders and strives to fulfill his destiny as the Avatar.",
    image: "./images/aang.jpg",
    tags: ["Avatar", "Airbender", "Protagonist"]
  },
  {
    character: "Katara",
    description: "A skilled waterbender from the Southern Water Tribe. She is strong-willed, compassionate, and fiercely protective of her loved ones. Katara is a talented healer and a powerful warrior. She often defies societal expectations for women in her culture and is a strong role model.",
    image: "./images/katara_d.png",
    tags: ["Waterbender", "Healer","Strong Willed Female", "Bloodbender"]
  },
  {
    character: "Sokka",
    description: "Katara's older brother and a non-bender from the Southern Water Tribe. Despite his lack of bending abilities, he is a skilled strategist, warrior, and comic relief. Sokka is loyal, resourceful, and always ready with a witty remark. He often underestimates himself but proves to be a valuable asset to the team.",
    image: "./images/sokka_d.jpg",
    tags: ["Non-Bender", "Strategist", "Comic Relief"]
  },
  {
    character: "Toph Beifong",
    description: "A blind earthbending prodigy from the Earth Kingdom. She is rebellious, confident, and a master of earthbending. Toph is a skilled fighter and a valuable asset to the team. She challenges societal norms and proves that blindness is not a limitation.",
    image: "./images/toph_d.png",
    tags: ["Earthbender", "Blind Fighter", "Rebellious", "Metalbender"]
  },
  {
    character: "Zuko",
    description: "The exiled Prince of the Fire Nation. He is a skilled firebender, but he is tormented by his past and his desire to regain his honor. Zuko is a complex character who eventually joins the Avatar's team. His journey of redemption and self-discovery is one of the most compelling storylines in the series.",
    image: "./images/zuko_d.png",
    tags: ["Firebender", "Exiled Prince", "Redemption", "Lightningbender"]
  },
  {
    character: "Iroh",
    description: "Zuko's wise and compassionate uncle. He is a former Fire Nation general and a master of tea. Iroh is a mentor to Zuko and a source of wisdom and guidance for the entire team. His teachings on life, love, and loss have resonated with fans of all ages.",
    image: "./images/iroh_d.png",
    tags: ["Wise Mentor", "Tea Master", "Philosopher", "Lightningbender", "Firebender"]
  },
  {
    character: "Azula",
    description: "Princess of the Fire Nation and Zuko's younger sister. She is a powerful firebender, a skilled strategist, and a master manipulator. Azula is ruthless, cunning, and obsessed with power. Her complex character and villainous actions make her one of the most memorable antagonists in the series.",
    image: "./images/azula_d.png",
    tags: ["Firebender", "Villain", "Manipulative", "Lightningbender"]
  },
  {
    character: "Mai",
    description: "Azula's loyal friend and skilled knife-thrower. She is quiet, reserved, and often appears emotionless. Mai is a deadly fighter and a valuable asset to Azula's team. She is a complex character who struggles with her loyalty to Azula and her own moral compass.",
    image: "./images/mai_d.png",
    tags: ["Knife Thrower", "Loyal Friend", "Complex Character"]
  },
  {
    character: "Ty Lee",
    description: "Azula's other loyal friend and a skilled chi-blocker. She is bubbly, energetic, and often acts childish. Ty Lee is a talented acrobat and a powerful fighter. She is a loyal friend to Azula but also has a kind and compassionate side.",
    image: "./images/tylee_d.jpg",
    tags: ["Chi-Blocker", "Acrobat", "Loyal Friend"]
  },
  {
    character: "Ozai",
    description: "The Fire Lord and the main antagonist of the series. He is a powerful firebender and a ruthless ruler. Ozai is obsessed with conquering the world and will stop at nothing to achieve his goals. His tyrannical rule has led to the destruction of countless lives and the imbalance of the world.",
    image: "./images/ozai_d.png",
    tags: ["Fire Lord", "Villain", "Tyrant", "Lightningbender"]
  },
  {
    character: "Suki",
    description: "The leader of the Kyoshi Warriors, a group of skilled female warriors. She is strong, independent, and a master of Kyoshi fighting. Suki is a loyal friend to Team Avatar and a fierce protector of the Earth Kingdom.",
    image: "./images/suki_d.jpg",
    tags: ["Kyoshi Warrior", "Strong Female Character", "Loyal Friend"]
  },
  {
    character: "Jet",
    description: "A rebellious Earth Kingdom freedom fighter who leads a group of young rebels. He is passionate, idealistic, and driven by a desire to overthrow the Fire Nation. Jet's methods are often extreme and questionable, but his heart is in the right place.",
    image: "./images/jet_d.jpg",
    tags: ["Freedom Fighter", "Rebellious", "Questionable Methods"]
  },
  {
    character: "Long Feng",
    description: "The cunning and manipulative Earth King's advisor. He is a master of intrigue and deception, and he controls the Earth Kingdom from the shadows. Long Feng is a formidable adversary who will stop at nothing to maintain his power.",
    image: "./images/misc_d.webp",
    tags: ["Manipulative", "Intriguing", "Villain"]
  },
  {
    character: "Hama",
    description: "A powerful waterbending master from the Northern Water Tribe who is skilled in bloodbending. She is a dark and mysterious figure who uses her powers for evil. Hama's tragic backstory and twisted worldview make her a complex and compelling villain.",
    image: "./images/misc_d.webp",
    tags: ["Waterbender", "Bloodbender", "Villain"]
  },
  // {
  //   character: "June",
  //   description: "A young Earth Kingdom girl who is a skilled metalbender. She is a talented artist and a loyal friend. June is one of the few people who can see through Toph's tough exterior and appreciate her true nature.",
  //   image: "./images/misc_d.webp",
  //   tags: ["Metalbender", "Artist", "Loyal Friend"]
  // },
  {
    character: "Korra",
    description: "The Avatar after Aang, a headstrong and determined waterbender from the Southern Water Tribe. She is passionate, impulsive, and eager to prove herself. Korra's journey is one of self-discovery and spiritual growth.",
    image: "./images/korra_d.jpg",
    tags: ["Avatar", "Water Nation", "Headstrong"]
  },
  {
    character: "Mako",
    description: "A skilled firebender from Republic City. He is a complex character who struggles with his loyalty to his family and his desire to do what is right. Mako is a talented fighter and a loyal friend.",
    image: "./images/misc_d.webp",
    tags: ["Firebender", "Complex Character", "Loyal Friend", "Lightningbender"]
  },
  {
    character: "Bolin",
    description: "Mako's younger brother and an earthbender. He is kind, goofy, and always looking for the positive side of things. Bolin is a talented comedian and a loyal friend to Korra and Mako.",
    image: "./images/misc_d.webp",
    tags: ["Earthbender", "Comedian", "Loyal Friend", "Lavabender"]
  },
  {
    character: "Asami Sato",
    description: "A wealthy and intelligent businesswoman from Republic City. She is skilled in engineering and technology. Asami is a strong, independent woman who is always willing to help her friends.",
    image: "./images/misc_d.webp",
    tags: ["Engineer", "Businesswoman", "Strong Independent Woman"]
  },
  {
    character: "Tenzin",
    description: "A powerful airbender and Aang's son. He is a strict and disciplined teacher who is dedicated to preserving airbending culture. Tenzin is a wise and knowledgeable mentor to Korra.",
    image: "./images/misc_d.webp",
    tags: ["Airbender", "Teacher", "Wise Mentor"]
  },
  {
    character: "Lin Beifong",
    description: "Toph Beifong's daughter and the Chief of Police in Republic City. She is a skilled earthbender and a tough and no-nonsense leader. Lin is dedicated to protecting the city and upholding the law.",
    image: "./images/misc_d.webp",
    tags: ["Earthbender", "Police Chief", "Tough Leader", "Metalbender"]
  },
  {
    character: "Kuvira",
    description: "A powerful earthbender and the main antagonist of The Legend of Korra. She is a ruthless and ambitious leader who seeks to unite the Earth Kingdom under her rule. Kuvira's rise to power and her ultimate downfall serve as a cautionary tale about the dangers of unchecked ambition.",
    image: "./images/misc_d.webp",
    tags: ["Earthbender", "Villain", "Ruthless Leader"]
  },
  {
    character: "Zaheer",
    description: "A highly skilled airbender and the leader of the Red Lotus. He is a dangerous and unpredictable villain who seeks to liberate the world from the constraints of bending. Zaheer's philosophical beliefs and his desire for anarchy make him a complex and intriguing antagonist.",
    image: "./images/misc_d.webp",
    tags: ["Airbender", "Villain", "Philosophical"]
  }
]

export default avatarCharacters