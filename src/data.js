import {SiOpenaigym} from 'react-icons/si'

export const links = [
  {
    name: "Home",
    path: '/'
  },
  {
    name: "About",
    path: '/about'
  },
  {
    name: "Gallery",
    path: '/gallery'
  },
  {
    name: "Plans",
    path: '/plans'
  },
  {
    name: "Trainers",
    path: '/trainers'
  },
  {
    name: "Contact",
    path: '/contact'
  },
]

export const programs = [
  {
    id: 1,
    icon: <SiOpenaigym/>,
    title: "Program One",
    info: "This is the beginning of something huge",
    path: "/programs/111"
  },
  {
    id: 2,
    icon: <SiOpenaigym/>,
    title: "Program Two",
    info: "This is the beginning of something huge",
    path: "/programs/222"
  },
  {
    id: 3,
    icon: <SiOpenaigym/>,
    title: "Program Three",
    info: "This is the beginning of something huge",
    path: "/programs/333"
  },
  {
    id: 4,
    icon: <SiOpenaigym/>,
    title: "Program Four",
    info: "This is the beginning of something huge",
    path: "/programs/444"
  }
]

export const values = [
  {
    id: 1,
    icon: <SiOpenaigym/>,
    title: "Value One",
    desc: "This are the values that I will need for this project."
  },
  {
    id: 2,
    icon: <SiOpenaigym/>,
    title: "Value Two",
    desc: "This are the values that I will need for this project."
  },
  {
    id: 3,
    icon: <SiOpenaigym/>,
    title: "Value Three",
    desc: "This are the values that I will need for this project."
  },
  {
    id: 4,
    icon: <SiOpenaigym/>,
    title: "Value Four",
    desc: "This are the values that I will need for this project."
  }
]

export const faqs = [
  {
    id: 1,
    question: "How often should I exercise?",
    answer: "You should exercise weekly. Onc or twice in a week to gain much fitness. You can decide to go to the gym and train there."
  },
  {
    id: 2,
    question: "What time is the best for workout?",
    answer: "You should exercise weekly. Once or twice in a week to gain much fitness. You can decide to go to the gym and train there."
  },
  {
    id: 3,
    question: "How long should my workouts be?",
    answer: "You should exercise weekly. Once or twice in a week to gain much fitness. You can decide to go to the gym and train there."
  },
  {
    id: 4,
    question: "Do I need to warm up before my workouts?",
    answer: "You should exercise weekly. Once or twice in a week to gain much fitness. You can decide to go to the gym and train there."
  },
  {
    id: 5,
    question: "Should I do strength training, cardio or both?",
    answer: "You should exercise weekly. Once or twice in a week to gain much fitness. You can decide to go to the gym and train there."
  },
  {
    id: 6,
    question: "Should I lift weights for strength training?",
    answer: "You should exercise weekly. Once or twice in a week to gain much fitness. You can decide to go to the gym and train there."
  }
]


export const testimonials = [
  {
    id: 1,
    name: "Gracious Obi",
    quote: "I had better results with my health within months after working out than I had been running once a week for over a decade. Not only is this beneficial to me, but also for the instructors who treats me with absolute amazing care.",
    job: "Student",
    avatar: require("./images/vic-original-2.jpg")
  },
  {
    id: 2,
    name: "Gracious Obi",
    quote: "I had better results with my health within months after working out than I had been running once a week for over a decade. Not only is this beneficial to me, but also for the instructors who treats me with absolute amazing care.",
    job: "Student",
    avatar: require("./images/avatar1.jpg")
  },
  {
    id: 3,
    name: "Gracious Obi",
    quote: "I had better results with my health within months after working out than I had been running once a week for over a decade. Not only is this beneficial to me, but also for the instructors who treats me with absolute amazing care.",
    job: "Student",
    avatar: require("./images/avatar2.jpg")
  },
  {
    id: 4,
    name: "Gracious Obi",
    quote: "I had better results with my health within months after working out than I had been running once a week for over a decade. Not only is this beneficial to me, but also for the instructors who treats me with absolute amazing care.",
    job: "Student",
    avatar: require("./images/avatar3.jpg")
  },
  {
    id: 5,
    name: "Gracious Obi",
    quote: "I had better results with my health within months after working out than I had been running once a week for over a decade. Not only is this beneficial to me, but also for the instructors who treats me with absolute amazing care.",
    job: "Student",
    avatar: require("./images/avatar4.jpg")
  }
]


export const plans = [
  {
    id: 1,
    name: 'Silver Package',
    desc: 'This package is perfect for beginners who need constsant help',
    price: 39.99,
    features: [
      {feature: 'First Feature', available: true},
      {feature: 'Second Feature', available: true},
      {feature: 'Third Feature', available: true},
      {feature: 'Fourth Feature', available: true},
      {feature: 'Fifth Feature', available: true},
      {feature: 'Fifth Feature Plus', available: false},
      {feature: 'Sixth Feature', available: false},
      {feature: 'Seventh Feature', available: false},
      {feature: 'Seventh Feature Plus', available: false},
      {feature: 'Eight Feature', available: false},
      {feature: 'Ninth Feature', available: false},
      {feature: 'Tenth Feature', available: false},
      {feature: 'Eleventh Feature', available: false},
    ]
  },
  {
    id: 2,
    name: 'Gold Package',
    desc: 'This is the perfect package for beginners who know what they are doing',
    price: 59.99,
    features: [
      {feature: 'First Feature', available: true},
      {feature: 'Second Feature', available: true},
      {feature: 'Third Feature', available: true},
      {feature: 'Fourth Feature', available: true},
      {feature: 'Fifth Feature', available: true},
      {feature: 'Fifth Feature Plus', available: true},
      {feature: 'Sixth Feature', available: true},
      {feature: 'Seventh Feature', available: true},
      {feature: 'Seventh Feature Plus', available: true},
      {feature: 'Eight Feature', available: false},
      {feature: 'Ninth Feature', available: false},
      {feature: 'Tenth Feature', available: false},
      {feature: 'Eleventh Feature', available: false},
    ]
  },
  {
    id: 3,
    name: 'Platinum Package',
    desc: 'This package is perfect for busy people who need home service',
    price: 99.99,
    features: [
      {feature: 'First Feature', available: true},
      {feature: 'Second Feature', available: true},
      {feature: 'Third Feature', available: true},
      {feature: 'Fourth Feature', available: true},
      {feature: 'Fifth Feature', available: true},
      {feature: 'Fifth Feature Plus', available: true},
      {feature: 'Sixth Feature', available: true},
      {feature: 'Seventh Feature', available: true},
      {feature: 'Seventh Feature Plus', available: true},
      {feature: 'Eight Feature', available: true},
      {feature: 'Ninth Feature', available: true},
      {feature: 'Tenth Feature', available: true},
      {feature: 'Eleventh Feature', available: true},
    ]
  },
]