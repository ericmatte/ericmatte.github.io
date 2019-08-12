type Project = {
  title: string;
  description: string;
  logo: string;
  github?: string;
  reference?: string;
  videoId?: string;
  prizes?: string[];
  images?: {
    path: string;
    number: number;
  };
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Home Automation",
    description:
      "I love home automation. There is so much you can do and automate in order to simplify your life or just make your home more interesting.<br>In order to do so, I run an instance of Home Assistant as a server on my Raspberry Pi. It is the center of everything.<br>Because I like DIY projects, I maded a custom board with an ESP8266 to control some RGB led strips over wifi using MQTT (<i>see images</i>). I also setup a little RF transmitter/receiver to send signals to all my configured outlet switches. I even added a custom Google Home in my RaspPi. It uses my RGB led strips as a visual feedback when it's listening  to our requests.",
    logo: "projects/homeassistant.png",
    github: "https://github.com/ericmatte/HomeAutomation",
    images: {
      path: "projects/homeassistant",
      number: 4
    },
    tags: ["Home Assistant", "Raspberry Pi", "ESP8266", "MQTT", "Google Home", "Z-Wave"]
  },
  {
    title: "DEVINE",
    description:
      "For my major project in computer engineering, I am a member of the project DEVINE. The goal of DEVINE is to implement into a robot the ability to interact with a human and play the game GuessWhat?! with him, using speech recognition and real-time analysis of his surrounding. This project is currently in development. The main challenge of the team will be to integrate the concepts and the work already done by IGLU researchers in artificial intelligence (AI) into a real project to demonstrate the potential of AI. The robot used for this project is IRL-1 from the Introlab.",
    reference: "https://devineproject.github.io/",
    logo: "projects/devine.png",
    videoId: "4hZenY6JE78",
    tags: ["University", "IGLU", "GuessWhat?!", "AI", "Python", "ROS"]
  },
  {
    title: "Budgeto",
    description:
      "Budgeto is a simple webapp that easily help you manage your money. It let you quickly have an idea of what you mostly spend during the year. You can also set and track limits on every category available.",
    logo: "projects/budgeto.png",
    images: {
      path: "projects/budgeto",
      number: 4
    },
    github: "https://github.com/ericmatte/Budgeto",
    tags: ["WebApp", "Angular4", "Python", "Android", "MySQL"]
  },
  {
    title: "R2D2 - Concours Robot-Jouet",
    description:
      "At my first year at the Université de Sherbrooke, we participated in a competition were we had to create a simple robot that will help children learn while having fun.<br />Our team made a R2D2 who ask questions about the solar system. It then scan the associated board game using RFID to see if the player has the right answer.",
    logo: "projects/crj.png",
    videoId: "0sjcXanB0nk",
    prizes: ["100$ + Prix du Jury"],
    tags: ["Team Project", "University", "C++", "Arduino", "RFID", "Robot ArmUS"]
  },
  {
    title: "Air Guitar Hero",
    description:
      "Air Guitar Hero is a game similar to guitar hero. The main difference: The player plays without a guitar! Instead, we used gloves with conductive contacts to detect the player gestures.",
    logo: "projects/airguitarhero.png",
    videoId: "m-P_RStB4fE",
    tags: ["Team Project", "University", "Java", "Applet"]
  },
  {
    title: "Découvrir Sherbrooke",
    description:
      "For the hacketon HackSherbrooke 2016, my team and I made a simple application that helps new immigrants find great activities to do in the region. We've won the 'Prix coup de coeur' for this occasion.",
    logo: "projects/decouvrir.png",
    reference: "https://www.cegepsherbrooke.qc.ca/fr/node/9762",
    images: {
      path: "projects/decouvrir",
      number: 4
    },
    prizes: ["500$ + Prix coup de coeur"],
    tags: ["Team Project", "HackSherbrooke16: A 24h Hackathon", "Ruby on Rails", "BootStrap", "MongoDB"]
  },
  {
    title: "NerfUS",
    description:
      "NerfUS is a shooting range game using Nerfs, embedded systems, and a web server. The server is used to show the game interfaces and menus, and communicate with a mesh system of microcontrollers to elevate wooden targets in real-time.",
    logo: "projects/nerfus.png",
    images: {
      path: "projects/nerfus",
      number: 5
    },
    github: "https://github.com/ericmatte/NerfUs",
    tags: ["Team Project", "University", "mbed", "Node.JS", "AngularJS", "Websocket"]
  },
  {
    title: "Let Me Know",
    description:
      "This is a simple app that helps promote alternative transportation to cars by allowing you to get to know you better from multiple statistics. It determines the pros and cons of each type of transportation, depending on your next trip.",
    logo: "projects/letmeknow.png",
    images: {
      path: "projects/letmeknow",
      number: 4
    },
    github: "https://github.com/ericmatte/HackQC17",
    tags: ["Team Project", "HackQc17: A 48h Hackathon", "Ionic", "Angular2"]
  },
  {
    title: "FrostedLink",
    description:
      "A great web browser made in VB.NET. This is one of my first big project. This is my first big project. I created it at the age of 14 years old with one of my great friend. Our goal was to make search (in that time) quicker and easier. With FrostedLink, we've won multiples prizes at Expo-science. We actually even go to the 'Expo-science Pan-canadien'.",
    logo: "projects/frostedlink.png",
    images: {
      path: "projects/frostedlink",
      number: 12
    },
    reference: "http://www.info07.com/communaute/2010/3/22/les-scientifiques-d-aujourd-hui-n-ont-qu-932343.html",
    prizes: [
      "300$ + Bronze Medal at Expo-science Pan-canadien",
      "600$ at Expos-science Provincial",
      "and much more..."
    ],
    tags: ["Expo-science", "VB.NET", "IE Engine"]
  },
  {
    title: "SpirePlane",
    description:
      "A powerful web browser made in VB.NET. It is actually a complete makeover from scratch of FrostedLink. I have coded Spireplane when I was 15 years old. It was based on the firefox engine, and had a ton of customisation settings.",
    logo: "projects/spireplane.png",
    images: {
      path: "projects/spireplane",
      number: 12
    },
    reference:
      "http://exposciences.qc.ca/fr/salle-de-presse/12/la-releve-scientifique-s-illustre-a-la-finale-de-l-outaouais",
    prizes: ["250$ - Prix des Clubs optimistes de l'Outaouais"],
    tags: ["Expo-science", "VB.NET", "XUL-Runner"]
  }
];
