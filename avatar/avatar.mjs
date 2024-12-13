const avatarQuotes = [
  {
    character: "Aang",
    quote: "Anyone's capable of great good and great evil. Everyone, even the Firelord and the Fire Nation, have to be treated like their worth giving a chance.",
    image: "./images/aang.jpg"
  },
  {
    character: "Aang",
    quote: "It's easy to do nothing, it's hard to forgive.",
    image: "./images/aang.jpg"
  },
  {
    character: "Aang",
    quote: "If I try, I fail. If I don't try, I'm never going to get it.",
    image: "./images/aang.jpg"
  },
  {
    character: "Aang",
    quote: "The past can be a great teacher.",
    image: "./images/aang.jpg"
  },
  {
    character: "Aang",
    quote: "Sometimes life is like this dark tunnel. You can't always see the light at the end of the tunnel, but if you just keep moving… you will come to a better place.",
    image: "./images/aang.jpg"
  },
  {
    character: "Iroh",
    quote: "Problems are often much simpler than they seem. From the outside, a problem often seems huge, but if you look at it from inside, you can usually find a way through it.",
    image: "./images/iroh_d.png"
  },
  {
    character: "Iroh",
    quote: "Sometimes the best way to solve a problem is to walk away from it for a while and let go of your thoughts.",
    image: "./images/iroh_d.png"
  },
  {
    character: "Iroh",
    quote: "The more you sweat in peace, the less you bleed in war.",
    image: "./images/iroh_d.png"
  },
  {
    character: "Iroh",
    quote: "While it is always best to strive for peace, it is also wise to prepare for war.",
    image: "./images/iroh_d.png"
  },
  {
    character: "Iroh",
    quote: "In the darkest times, hope is the only thing that can truly save us.",
    image: "./images/iroh_d.png"
  },
  {
    character: "Sokka",
    quote: "Water Tribe! We're strong, we're tough, and we can kick some major tail!",
    image: "./images/sokka_d.jpg"
  },
  {
    character: "Sokka",
    quote: "I'm not afraid. I'm Sokka. Fear's for the weak.",
    image: "./images/sokka_d.jpg"
  },
  {
    character: "Sokka",
    quote: "I'm a warrior! I'm supposed to be strong and brave. But, I'm also supposed to be smart, and right now, I'm not being very smart.",
    image: "./images/sokka_d.jpg"
  },
  {
    character: "Sokka",
    quote: "I'm not a bender. I'm a fighter!",
    image: "./images/sokka_d.jpg"
  },
  {
    character: "Sokka",
    quote: "I'm not afraid to admit when I'm wrong, especially when I'm right.",
    image: "./images/sokka_d.jpg"
  },
  {
    character: "Toph",
    quote: "I don't need eyes to see. I can feel the vibrations in the earth. I know everything that's going on around me.",
    image: "./images/toph_d.png"
  },
  {
    character: "Toph",
    quote: "Rules are stupid. I hate rules.",
    image: "./images/toph_d.png"
  },
  {
    character: "Toph",
    quote: "I don't care what you think. I'm gonna do what I want.",
    image: "./images/toph_d.png"
  },
  {
    character: "Toph",
    quote: "I'm not blind, I'm just... differently sighted.",
    image: "./images/toph_d.png"
  },
  {
    character: "Toph",
    quote: "I'm not afraid of anything. Except maybe bugs.",
    image: "./images/toph_d.png"
  },
  {
    character: "Zuko",
    quote: "I'm not going to let you take away my destiny.",
    image: "./images/zuko_d.png"
  },
  {
    character: "Zuko",
    quote: "I will find you, Avatar, and I will take your bending.",
    image: "./images/zuko_d.png"
  },
  {
    character: "Zuko",
    quote: "I've been searching for so long, I don't know who I am anymore.",
    image: "./images/zuko_d.png"
  },
  {
    character: "Zuko",
    quote: "I've learned that sometimes, the best way to gain someone's trust is to be honest with them.",
    image: "./images/zuko_d.png"
  },
  {
    character: "Zuko",
    quote: "I've made a lot of mistakes, but I'm trying to be a better person.",
    image: "./images/zuko_d.png"
  },
  {
    character: "Katara",
    quote: "Waterbending is more than just fighting. It's about healing, too.",
    image: "./images/katara_d.png"
  },
  {
    character: "Katara",
    quote: "I won't let anyone hurt my friends and family.",
    image: "./images/katara_d.png"
  },
  {
    character: "Katara",
    quote: "I'm not just a waterbender. I'm a strong, independent woman.",
    image: "./images/katara_d.png"
  },
  {
    character: "Katara",
    quote: "I believe in the power of hope.",
    image: "./images/katara_d.png"
  },
  {
    character: "Katara",
    quote: "I'm not afraid to stand up for what I believe in.",
    image: "./images/katara_d.png"
  },
  {
    character: "Azula",
    quote: "You're pathetic.",
    image: "./images/azula_d.png"
  },
  {
    character: "Azula",
    quote: "I'm not crazy, I'm just ahead of the curve.",
    image: "./images/azula_d.png"
  },
  {
    character: "Mai",
    quote: "I prefer to let my sword do the talking.",
    image: "./images/mai_d.png"
  },
  {
    character: "Ty Lee",
    quote: "Chi-blocking is the best way to take someone down.",
    image: "./images/tylee_d.jpg"
  },
  {
    character: "Iroh",
    quote: "The more you sweat in peace, the less you bleed in war.",
    image: "./images/iroh_d.png"
  },
  {
    character: "Ozai",
    quote: "Power is everything.",
    image: "./images/ozai_d.png"
  },
  {
    character: "Suki",
    quote: "Kyoshi Warriors are the best fighters in the world.",
    image: "./images/suki_d.jpg"
  },
  {
    character: "Jet",
    quote: "The Fire Nation is evil, and they must be stopped.",
    image: "./images/jet_d.jpg"
  },
  {
    character: "Aang",
    quote: "Do you think that friendships can last more than one lifetime?",
    image: "./images/aang.jpg"
  },
  {
    character: "Katara",
    quote: "I don't see why not.",
    image: "./images/katara_d.png"
  },
  {
    character: "Iroh",
    quote: "Life happens wherever you are, whether you make it or not.",
    image: "./images/iroh_d.png"
  },
  {
    character: "Zuko",
    quote: "Look Sokka, you're going to fail a lot before things work out. Even though you fail over and over again, you have to try every time. You can't quit because you're afraid you'll fail.",
    image: "./images/zuko_d.png"
  },
  {
    character: "Toph",
    quote: "You gotta be flexible, like bamboo.",
    image: "./images/toph_d.png"
  },
  {
    character: "Azula",
    quote: "You're nothing, Aang. You're just a boy.",
    image: "./images/azula_d.png"
  },
  {
    character: "Mai",
    quote: "I'm not interested in hurting people, but I will if I have to.",
    image: "./images/mai_d.png"
  },
  {
    character: "Ty Lee",
    quote: "I'm a happy-go-lucky girl, but I can also be a dangerous opponent.",
    image: "./images/tylee_d.jpg"
  },
  {
    character: "Ozai",
    quote: "I will rule the world.",
    image: "./images/ozai_d.png"
  },
  {
    character: "Suki",
    quote: "We Kyoshi Warriors are fierce and loyal.",
    image: "./images/suki_d.jpg"
  },
  {
    character: "Jet",
    quote: "The Fire Nation is destroying the world, one nation at a time.",
    image: "./images/jet_d.jpg"
  }
];