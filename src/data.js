export const appData = [
  {
    name: "Kanbo",
    description: "macOS application for creating Kanban boards 🖥️",
    page: "/apps/kanbo",
    repo: "https://github.com/kadinsayani/Kanbo",
    link: "https://github.com/kadinsayani/Kanbo",
    img: "",
  },
  {
    name: "ksh",
    description: "Customizable Unix-like shell built in Rust ⌨️",
    page: "/apps/ksh",
    repo: "https://github.com/kadinsayani/ksh",
    link: "https://github.com/kadinsayani/ksh",
    img: "",
  },
  {
    name: "cryptop",
    description:
      "A user friendly CLI for getting cryptocurrency prices and information 🚀",
    page: "/apps/cryptop",
    repo: "https://github.com/kadinsayani/cryptop",
    link: "https://crates.io/crates/cryptop",
    img: "",
  },
  {
    name: "famify",
    description:
      "Web app for families with collaboration and interaction features including shared lists and twitter like social media features 🏡",
    page: "/apps/famify",
    repo: "https://github.com/kadinsayani/famify",
    link: "https://github.com/kadinsayani/famify",
    img: "",
  },
];

export const projectData = [
  {
    name: "virtual-forest",
    project: "CPSC 581 Project 1",
    page: "/projects/virtual-forest",
    repo: "https://github.com/kadinsayani/virtual-forest",
    link: "https://virtual-forest-nine.vercel.app/",
    description:
      "In this applicaiton, users become nature explorers who can learn about and interact with different species in a virtual forest. It combines education and entertainment, teaching kids about various species in an ecosystem and how the population of different species interact with each other.",
    detailedWriteup: [
      "Our project offers an immersive and educational experience, providing users with a deep understanding of the Alberta forest ecosystem, its diverse populations, and the intricate relationships that exist within it. The inception of this idea emerged from a collaborative brainstorming session aimed at conceiving interactive applications tailored for children and their parents. Our decision to pursue this concept was driven by several factors. Firstly, we recognized its potential to captivate users through creativity and interactivity, making the learning experience engaging and enjoyable. Secondly, we assessed that the project's scope and features aligned with the time constraints we had for its development.",
      "As a team member, my contributions were pivotal in shaping the interactive elements of the application. I actively participated in ideating the vision for how users would engage with our application, ensuring that it not only provided valuable educational content but also created a captivating and immersive journey through the Alberta forest ecosystem. My input played a crucial role in crafting an experience that seamlessly combines entertainment and education, making it an ideal resource for both children and their parents to explore and learn from.",
      "Furthermore, I also played a crucial role in the development of the application. During the development phase, I took on responsibilities that spanned a wide spectrum. I collaborated with the team to outline the technical requirements, helping to establish a robust framework for the application's architecture. This involved making informed decisions about the technology stack, ensuring that it aligned with our project's objectives and the targeted user experience. In terms of implementation, I took a lead role in developiong the application logic and frontend, while working with other team members to ensure feature robustness.",
    ],
    detailedPoints: [
      {
        point:
          "Virtual Forest Scene: Create a virtual forest background. Add trees, bushes, and the sky.",
      },
      {
        point:
          "Immersive Sound: Incorporate background sounds of birds chirping to enhance the forest's atmosphere. This will engage children's auditory senses, making the experience more immersive.",
      },
      {
        point:
          "Replicate an ecosystem: Replicate the ecosystem of an Albertan forest on the screen, which will include a grey wolf, white tail deer, migrating blue jays, spruce trees, northern red oak trees, and redcurrant plants.",
      },
      {
        point:
          "Interact with the objects on the screen: Provide a way for children to be able to interact with the objects on the screen. Method 1 (most promising) - Hover and Click: Highlight objects that are clickable with an outline when you hover over them (to indicate to kids that this is a clickable object). Method 2 - Draggable element: Shape the cursor like a catcher's net that children can move around by dragging it across the screen to catch the animals. Limitation: Not all the objects are animals, some of them may be trees, birds and plants – which can confuse children because they may not think the other objects can be clicked on. Method 3 - Drawing a circle around the object. Limitation: Only feasible if using a touchscreen device. With non-touchscreen devices, it will be a lot harder for children to draw a circle around an object using a touchpad or a mouse.",
      },
      {
        point:
          "Educational Pop-ups: Clicking on an object opens a pop-up window which displays interesting facts about the species they clicked on – as a way to educate them.",
      },
      {
        point:
          'Closing the Educational Pop-ups. Method 1 - Timeout: Pop-up windows close automatically after a specific time. However, this approach may not suit children with varying reading speeds. Method 2 (most promising ) – Close Button: A prominent red "X" in the corner of the pop-up window allows children to close it at their own pace, ensuring they have ample time to absorb the information. This also follows the usual convention that they are most likely familiar with.',
      },
      {
        point:
          "Special Sounds for Pop-up Events: To further engage children, special sounds accompany the opening and closing of pop-up windows, adding an element of interactivity and delight to the game.",
      },
      {
        point:
          "Tracking Progress: A progress bar at the top of the screen will indicate the number of objects yet to be discovered. The goal is to find all the objects, and being able to see their progress will motivate children to explore and learn more. ",
      },
      {
        point:
          "Completion of the Game: Once all objects have been found, a final pop-up window congratulates the player for successfully completing the task and winning the game, providing a sense of accomplishment.",
      },
      {
        point:
          "Interactive Species Population: Have sliders labelled for each species that will enable children to adjust population sizes, revealing how changes affect the interactions among species within the ecosystem, promoting understanding and learning.",
      },
    ],
    detailedImages: [
      {
        url: "/project1/detailed/dimg1.png",
        caption: "Detailed Sketch 1",
      },
      {
        url: "/project1/detailed/dimg2.png",
        caption: "Detailed Sketch 2",
      },
      {
        url: "/project1/detailed/dimg3.png",
        caption: "Detailed Sketch 3",
      },
      {
        url: "/project1/detailed/dimg4.png",
        caption: "Detailed Sketch 4",
      },
      {
        url: "/project1/detailed/dimg5.png",
        caption: "Detailed Sketch 5",
      },
      {
        url: "/project1/detailed/dimg6.png",
        caption: "Detailed Sketch 6",
      },
      {
        url: "/project1/detailed/dimg7.png",
        caption: "Detailed Sketch 7",
      },
      {
        url: "/project1/detailed/dimg8.png",
        caption: "Detailed Sketch 8",
      },
      {
        url: "/project1/detailed/dimg9.png",
        caption: "Detailed Sketch 9",
      },
      {
        url: "/project1/detailed/dimg10.png",
        caption: "Detailed Sketch 10",
      },
    ],
    conceptWriteup: [
      "When developing my concept sketches, my creative ideas spanned a diverse spectrum of applications, all sharing the common goals of interactivity, education, and practical utility. I envisioned applications that would serve as valuable tools for studying and learning, leveraging technology to enhance the educational journey of young learners. These concepts were designed to make the process of acquiring knowledge not only more effective but also enjoyable, fostering a positive attitude towards learning from an early age.",
      "In addition to educational tools, I also conceptualized games that posed challenges requiring problem-solving skills and quick reactions. These gaming experiences were carefully crafted to be both entertaining and stimulating, offering a fun and interactive way for children to develop critical thinking and decision-making abilities.",
    ],
    conceptPoints: [
      {
        point:
          "Pomodoro Timer for Kids with Goal Setting: An educational time management tool designed for children, combining the Pomodoro technique with goal-setting features. It encourages focused work and breaks, fostering productive study habits from a young age.",
      },
      {
        point:
          "Arcade Game for Learning Pathfinding Algorithms: An engaging arcade-style game that doubles as a learning tool for teaching pathfinding algorithms. Players navigate mazes, learning problem-solving skills and algorithmic thinking in an interactive and entertaining way.",
      },
      {
        point:
          "Rocket Launching Game with Precision Timing: A thrilling rocket-launching game where players must click a button at the precise moment indicated by gauge meters. This game challenges players' reflexes and timing skills while providing an exciting space-themed experience.",
      },
      {
        point:
          "Math Multiple Choice Game with Scoring: An interactive math game that presents multiple-choice questions to players, testing their mathematical knowledge and offering instant scoring feedback. It provides an engaging way for kids to practice and enhance their math skills.",
      },
      {
        point:
          "Shape Picker Learning App for Kids: A fun and educational app for children to learn about shapes by picking and identifying them in various interactive scenarios. It encourages shape recognition and cognitive development.",
      },
      {
        point:
          "Hockey Scoreboard App: A digital scoreboard application designed for tracking and displaying scores during hockey games. It simplifies the scoring process, making it convenient for players and spectators alike.",
      },
      {
        point:
          "Snake Game: A classic and addictive video game where players control a snake that grows longer as it consumes food items. It challenges players to strategize their moves to avoid collisions and score points.",
      },
      {
        point:
          "Touch Typing Game: An interactive game designed to improve typing speed and accuracy. Players are presented with typing challenges and exercises to enhance their touch typing skills in a gamified environment.",
      },
      {
        point:
          "Colorful Creative Writing App for Kids: An imaginative and vibrant writing application tailored for children. It encourages creative expression through storytelling, drawing, and colorful multimedia elements, fostering a love for writing and creativity.",
      },
      {
        point:
          "Letter Learning Game for Kids: An engaging educational game that helps children learn and recognize letters of the alphabet. Through interactive activities and challenges, it aids in early literacy development and language skills acquisition.",
      },
    ],
    conceptImages: [
      {
        url: "/project1/concept/cimg1.png",
        caption: "Concept Sketch 1",
      },
      {
        url: "/project1/concept/cimg2.png",
        caption: "Concept Sketch 2",
      },
      {
        url: "/project1/concept/cimg3.png",
        caption: "Concept Sketch 3",
      },
      {
        url: "/project1/concept/cimg4.png",
        caption: "Concept Sketch 4",
      },
      {
        url: "/project1/concept/cimg5.png",
        caption: "Concept Sketch 5",
      },
      {
        url: "/project1/concept/cimg6.png",
        caption: "Concept Sketch 6",
      },
      {
        url: "/project1/concept/cimg7.png",
        caption: "Concept Sketch 7",
      },
      {
        url: "/project1/concept/cimg8.png",
        caption: "Concept Sketch 8",
      },
      {
        url: "/project1/concept/cimg9.png",
        caption: "Concept Sketch 9",
      },
      {
        url: "/project1/concept/cimg10.png",
        caption: "Concept Sketch 10",
      },
    ],
  },
];
