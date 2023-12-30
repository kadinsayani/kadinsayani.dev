export const appData = [
  {
    name: "Kanbo",
    description: "macOS application for creating Kanban boards 🖥️",
    page: "/apps/kanbo",
    repo: "https://github.com/kadinsayani/Kanbo",
    link: "https://apps.apple.com/ca/app/kanbo/id6468838355?mt=12",
    img: "",
    type: "Apple",
    privacyPolicy: `
**Privacy Policy for Kanbo**

This Privacy Policy describes how your personal information is collected, used, and shared when you use our mobile application, Kanbo (referred to as "we," "us," or "our").

**Information We Do Not Collect**  
We want you to have confidence in using Kanbo, knowing that your privacy and data security are of utmost importance to us. Therefore, it's essential to note that we do not collect any personal information or data from you through the Kanbo macOS application.

**Data Stored on Device**  
Kanbo is designed to operate exclusively on your device. All data related to your Kanban boards, tasks, and any other information you input into the app is stored locally on your device. We do not have access to, nor do we collect, store, or transmit any of this data.

**Usage of Your Data**  
Since we do not collect any data from the Kanbo app, we cannot use or share any personal information or data about you. Your data remains completely private and under your control.

**Changes to This Privacy Policy**  
We reserve the right to update our Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this Privacy Policy periodically to stay informed about our data practices. Your continued use of the Kanbo app signifies your acceptance of any updates or revisions to this Privacy Policy.

**Contact Us**  
If you have any questions or concerns about this Privacy Policy or your data, please contact us at me@kadinsayani.dev. 

This Privacy Policy was last updated on 10/05/2023.`,
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
    name: "PetPal",
    project: "CPSC 581 Project 3",
    page: "/projects/petpal",
    repo: "https://github.com/kadinsayani/PetPal",
    link: "https://github.com/kadinsayani/PetPal",
    img: "/project3/img.png",
    description:
      "PetPal is an automatic pet feeder powered by an arduino integrated circuit. The device has a remote for programming the time for when you would like the food to be dispensed. It uses an infrared sensor to detect input from the infrared remote and a DS1307 real time clock (for tracking time) as an input device. It uses a micro servo motor as an output device. To make it fun, we shaped the pet feeder to look like a basketball hoop with a spout attached at the bottom, that is opened and closed by the motor. The spout opens exactly at the real time inputted into the remote and closes after the food is dispensed. There is also a compartment at the back of the device that can be used to store your supply of pet food. ",
    detailedWriteup: [
      "Throughout the prototyping and development phase, my role included integrating the circuit and developing the program for the arduino to run.",
    ],
    detailedPoints: [
      {
        point:
          "A variation that dispenses food when triggered by button press.",
      },
      {
        point:
          "A vartiation where the user programs both the time and amount of food to dispense.",
      },
      {
        point: "A detail where the user programs the time to dispense food.",
      },
      {
        point: "A variation where the food is dispensed at sunrise, or sunset.",
      },
      {
        point:
          "A variation where the food is dispensed when pet starts barking.",
      },
      {
        point:
          "A variation where the user programs teh tiem to dispense food, but food will also be dispensed at sunrise or sunset as a fallback.",
      },
      {
        point:
          "A variation where food is dispensed based on the current weight (quantity) of food already dispensed.",
      },
      {
        point:
          "A detail showcasing the timer resetting after food has been dispensed.",
      },
      {
        point:
          "A variation inlcuding an LCD display that informs the user when their pet was fed.",
      },
      {
        point: "A variation that includes a start button to reset the timer.",
      },
    ],
    detailedImages: [
      {
        url: "/project3/detailed/dimg1.png",
        caption: "Detailed Sketch 1",
      },
      {
        url: "/project3/detailed/dimg2.png",
        caption: "Detailed Sketch 2",
      },
      {
        url: "/project3/detailed/dimg3.png",
        caption: "Detailed Sketch 3",
      },
      {
        url: "/project3/detailed/dimg4.png",
        caption: "Detailed Sketch 4",
      },
      {
        url: "/project3/detailed/dimg5.png",
        caption: "Detailed Sketch 5",
      },
      {
        url: "/project3/detailed/dimg6.png",
        caption: "Detailed Sketch 6",
      },
      {
        url: "/project3/detailed/dimg7.png",
        caption: "Detailed Sketch 7",
      },
      {
        url: "/project3/detailed/dimg8.png",
        caption: "Detailed Sketch 8",
      },
      {
        url: "/project3/detailed/dimg9.png",
        caption: "Detailed Sketch 9",
      },
      {
        url: "/project3/detailed/dimg10.png",
        caption: "Detailed Sketch 10",
      },
    ],
    conceptWriteup: [
      "While ideating and developing our concept, my role included developing concept sketches, participating in group discussions, and filming/editing the concept video.",
    ],
    conceptPoints: [
      {
        point:
          "Plant watering device that waters plants when triggered by sunrise.",
      },
      {
        point: "Thermostat.",
      },
      {
        point: "Automatic night light.",
      },
      {
        point: "Smoke/Fire detector",
      },
      {
        point: "Guitar tuner.",
      },
      {
        point:
          "Meditation companion that inlcudes an LCD with guided breathing exercises, and a pulse (heart rate) sensor.",
      },
      {
        point:
          "Room entry alert device that alerts users when someone enters the room.",
      },
      {
        point:
          "Plant monitoring device that displays metrics such as temperature and moisture.",
      },
      {
        point: "Door lock triggered by clapping your hands.",
      },
      {
        point: "Automatic and programmable pet feeder.",
      },
    ],
    conceptImages: [
      {
        url: "/project3/concept/cimg1.png",
        caption: "Concept Sketch 1",
      },
      {
        url: "/project3/concept/cimg2.png",
        caption: "Concept Sketch 2",
      },
      {
        url: "/project3/concept/cimg3.png",
        caption: "Concept Sketch 3",
      },
      {
        url: "/project3/concept/cimg4.png",
        caption: "Concept Sketch 4",
      },
      {
        url: "/project3/concept/cimg5.png",
        caption: "Concept Sketch 5",
      },
      {
        url: "/project3/concept/cimg6.png",
        caption: "Concept Sketch 6",
      },
      {
        url: "/project3/concept/cimg7.png",
        caption: "Concept Sketch 7",
      },
      {
        url: "/project3/concept/cimg8.png",
        caption: "Concept Sketch 8",
      },
      {
        url: "/project3/concept/cimg9.png",
        caption: "Concept Sketch 9",
      },
      {
        url: "/project3/concept/cimg10.png",
        caption: "Concept Sketch 10",
      },
    ],
  },
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
          "Tracking Progress: A progress bar at the top of the screen will indicate the number of objects yet to be discovered. The goal is to find all the objects, and being able to see their progress will motivate children to explore and learn more.",
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
  {
    name: "Unlock Interfaces",
    project: "CPSC 581 Project 2",
    page: "/projects/unlockinterfaces",
    repo: "https://github.com/kadinsayani/unlockinterface",
    link: "",
    description:
      "Two innovative and new approaches to mobile unlock screens were developed. The first interface is touch based, and involves playing a sequence of piano keys to unlock the device. The second interface is both touch and sensor based, and involves selecting a sequence of pops from a vending machine, and shaking the mobile device until they fizz.",
    PianoUnlock: {
      detailedWriteup: [
        "In envisioning the Piano Unlock Interface, our aim was to harmonize the elegance of music with the sophistication of security. The concept sprung from the idea of transforming the mundane task of unlocking a phone into a musical journey, engaging both auditory and visual senses. To achieve this, we meticulously crafted a mobile UI that replicated the aesthetic of a traditional piano, adorning the screen with black and white keys that echoed the instrument’s classic design. Each key was not just a visual element; it was an interactive component, producing corresponding notes and melodies as users pressed them. This auditory feedback not only made the interface more interactive but also provided users with a delightful sensory experience, turning unlocking a phone into a symphonic adventure.",
        "Throughout the development of the Piano Unlock Interface, I played a pivotal role in bringing our visionary concept to life by contributing to coding and rigorous testing. This phase of the project was a bridge that connected our imaginative design with the practical, functional reality.",
      ],
      detailedPoints: [
        {
          point:
            "Replicate the look of a traditional piano using black and white keys on a mobile UI.",
        },
        {
          point:
            "Add the corresponding notes/sounds for each key so that it is played whenever the keys are pressed. This will engage the user’s auditory senses and make the UI more interactive.",
        },
        {
          point:
            "Add customization options. One way to do this is by allowing the user to customize the look of the piano by giving them a selection of different color schemes and themes to choose from.",
        },
        {
          point:
            "Label the piano keys so that users who are not familiar with the instrument are still able to visually identify which keys represent each note. This can also help users who have never played the piano before learn which piano keys play what sound!",
        },
        {
          point:
            "Provide feedback to the user whenever a piano key is pressed in order to help them keep track of which notes have already been played, and to help them identify any errors.",
        },
        {
          point:
            "Add a functionality that would allow users to set their own unique tunes for unlocking their phone. This can be done by adding a “SET” button on the starting screen.",
        },
        {
          point:
            "Show clear instructions to the user on how to set their own tunes/PIN code for unlocking their phone. See picture for further reference regarding this interaction.",
        },
        {
          point:
            "After they have set up their PIN, users can unlock their phones by pressing the correct sequence of piano keys to play the tune they have set, and pressing a button to enter it as the code.",
        },
        {
          point:
            "Provide feedback to the user using an animation to show that the phone was successfully unlocked.",
        },
        {
          point:
            "Display an error message if the wrong sequence of keys are played. This is to provide feedback to the user, and ask them to try again",
        },
      ],
      detailedImages: [
        {
          url: "/project2/PianoUnlock/detailed/dimg1.png",
          caption: "Detailed Sketch 1",
        },
        {
          url: "/project2/PianoUnlock/detailed/dimg2.png",
          caption: "Detailed Sketch 2",
        },
        {
          url: "/project2/PianoUnlock/detailed/dimg3.png",
          caption: "Detailed Sketch 3",
        },
        {
          url: "/project2/PianoUnlock/detailed/dimg4.png",
          caption: "Detailed Sketch 4",
        },
        {
          url: "/project2/PianoUnlock/detailed/dimg5.png",
          caption: "Detailed Sketch 5",
        },
        {
          url: "/project2/PianoUnlock/detailed/dimg6.png",
          caption: "Detailed Sketch 6",
        },
        {
          url: "/project2/PianoUnlock/detailed/dimg7.png",
          caption: "Detailed Sketch 7",
        },
        {
          url: "/project2/PianoUnlock/detailed/dimg8.png",
          caption: "Detailed Sketch 8",
        },
        {
          url: "/project2/PianoUnlock/detailed/dimg9.png",
          caption: "Detailed Sketch 9",
        },
        {
          url: "/project2/PianoUnlock/detailed/dimg10.png",
          caption: "Detailed Sketch 10",
        },
      ],
      conceptWriteup: [
        "Throughout the ideation and conceptualization process, my focus was on innovation, usability, and security. Each idea underwent rigorous scrutiny, with a keen eye on user experience and feasibility. Collaborative brainstorming sessions allowed me to refine these concepts, incorporating valuable input from team members and aligning the ideas with the project's objectives. Ultimately, the diverse interfaces – ranging from gamified interactions to intricate Morse code patterns and draggable mazes – showcased the depth of our creative exploration and commitment to crafting interfaces that captivated users while ensuring the utmost security and ease of use.",
      ],
      conceptPoints: [
        {
          point:
            "Enter a reason for unlocking the device. Reasons are tracked to understand user behaviour and minimize distractions.",
        },
        {
          point: "Play a sequence of piano keys.",
        },
        {
          point: "Arrange shapes in a speciific order.",
        },
        {
          point: "Draw pattern on a grid.",
        },
        {
          point: "Move a character to a flag using a d-pad and jump button. ",
        },
        {
          point: "Move obejct through maze by dragging it",
        },
        {
          point:
            "Enter a morse code sequence by pressing and holding a button.",
        },
        {
          point: "Swipe a panel up to a specific y-coordinate.",
        },
        {
          point: "Enter a lock combinaiton.",
        },
        {
          point:
            "Use finger to place fingerprints in a specific order/sequence.",
        },
      ],
      conceptImages: [
        {
          url: "/project2/PianoUnlock/concept/cimg1.png",
          caption: "Concept Sketch 1",
        },
        {
          url: "/project2/PianoUnlock/concept/cimg2.png",
          caption: "Concept Sketch 2",
        },
        {
          url: "/project2/PianoUnlock/concept/cimg3.png",
          caption: "Concept Sketch 3",
        },
        {
          url: "/project2/PianoUnlock/concept/cimg4.png",
          caption: "Concept Sketch 4",
        },
        {
          url: "/project2/PianoUnlock/concept/cimg5.png",
          caption: "Concept Sketch 5",
        },
        {
          url: "/project2/PianoUnlock/concept/cimg6.png",
          caption: "Concept Sketch 6",
        },
        {
          url: "/project2/PianoUnlock/concept/cimg7.png",
          caption: "Concept Sketch 7",
        },
        {
          url: "/project2/PianoUnlock/concept/cimg8.png",
          caption: "Concept Sketch 8",
        },
        {
          url: "/project2/PianoUnlock/concept/cimg9.png",
          caption: "Concept Sketch 9",
        },
        {
          url: "/project2/PianoUnlock/concept/cimg10.png",
          caption: "Concept Sketch 10",
        },
      ],
    },
    CokeMachineUnlock: {
      detailedWriteup: [
        "Our ideation phase for the Coke machine unlock interface was a whirlwind of creativity and exploration. The brainstorming sessions were vibrant with ideas as we envisioned scenarios where users could unlock the Coke machine through interactions involving multiple steps, or even mimicking the act of shaking a pop can. Each brainstorming session was a melting pot of diverse perspectives, where team members passionately advocated for their concepts. We embarked on a quest to find the perfect balance between security and user experience, aiming not just for a functional interface but one that would engage and delight users.",
        "During the development phase, my involvement was instrumental in prototyping different sensor-based interactions. I actively engaged in coding and testing functionalities. Iterative testing was crucial; we fine-tuned the sensitivity of the sensors, ensuring the interface responded accurately to user inputs. Through extensive trial and error, we perfected the interface's responsiveness, guaranteeing a smooth user experience.",
      ],
      detailedPoints: [
        {
          point:
            "A phone unlock method using mainly sensor-based unlocking to unlock the phone. The initial screen shows a vending machine with a variety of different pop cans. We chose this idea because of the novelty behind the idea. The inspiration in coming with this idea was during a group meeting while one of our group members was looking at a vending machine. ",
        },
        {
          point:
            "When clicking one of the pops in the vending machine, it brings it foreword displaying a larger version of the pop.",
        },
        {
          point:
            "A different variation of sketch 2 that we thought of to bring the pop foreword was to enter the code of the associated pop. This would emulate a real vending machine interaction but sketch 2 seems more promising because it seems like a more user-friendly interaction because if the user spends too long on the lock screen, it can become frustrating for the user.",
        },
        {
          point:
            "Once a pop selection comes forward, the user must shake the phone to make the pop fizz so it can be noted down as a selection. We thought this would be a fun interaction for the user. Also, it is able to utilize the accelerometer on a phone.",
        },
        {
          point:
            "After a pop has been shaken enough for it to fizz out, this will be noted down in the selection. The pop will be placed in the vendor dispenser just like a real vending machine. ",
        },
        {
          point:
            "When the correct selection of pop is shaken and vended out the phone will unlock. This form of unlocking will be relatively secure because if someone were to steal a user’s phone. All they will see Is a screen with vending machine and not know what exactly to do. ",
        },
        {
          point:
            "If an incorrect selection of pop is vended then an ‘X’ is displayed to the screen indicating that the phone will not unlock. This adds the ‘secure’ aspect to the phone lock.",
        },
        {
          point:
            "To ensure this phone lock cannot be brute forced, there will be a limit on how many attempts someone can try. Once a user has used up all their attempts, the vending machine will be out of order for a period of time.",
        },
        {
          point:
            "Another optional feature that could be added is a ‘use passcode’ button which will enable users to use a passcode rather than having to go through the process of shaking cans. This also ensures users will be able to get into their phone in case they forgot their pop selection.",
        },
        {
          point:
            "An alternative to individually choosing and shaking a can to vend is selecting and vending all pops at once and having to shake once. This implementation would save users time as well as physical exertion. ",
        },
      ],
      detailedImages: [
        {
          url: "/project2/CokeMachineUnlock/detailed/dimg1.png",
          caption: "Detailed Sketch 1",
        },
        {
          url: "/project2/CokeMachineUnlock/detailed/dimg2.png",
          caption: "Detailed Sketch 2",
        },
        {
          url: "/project2/CokeMachineUnlock/detailed/dimg3.png",
          caption: "Detailed Sketch 3",
        },
        {
          url: "/project2/CokeMachineUnlock/detailed/dimg4.png",
          caption: "Detailed Sketch 4",
        },
        {
          url: "/project2/CokeMachineUnlock/detailed/dimg5.png",
          caption: "Detailed Sketch 5",
        },
        {
          url: "/project2/CokeMachineUnlock/detailed/dimg6.png",
          caption: "Detailed Sketch 6",
        },
        {
          url: "/project2/CokeMachineUnlock/detailed/dimg7.png",
          caption: "Detailed Sketch 7",
        },
        {
          url: "/project2/CokeMachineUnlock/detailed/dimg8.png",
          caption: "Detailed Sketch 8",
        },
        {
          url: "/project2/CokeMachineUnlock/detailed/dimg9.png",
          caption: "Detailed Sketch 9",
        },
        {
          url: "/project2/CokeMachineUnlock/detailed/dimg10.png",
          caption: "Detailed Sketch 10",
        },
      ],
      conceptWriteup: [
        "Our team embarked on a mission to redefine user interaction, blending cutting-edge technology with user-friendly experiences. One of the core concepts we embraced was the fusion of security with seamless, intuitive gestures, ensuring a delightful user experience. I actively contributed to brainstorming sessions where we explored various creative avenues. Inspired by the fusion of technology and human gestures, we envisioned an interface that transcended conventional boundaries. The idea of using diverse sensor inputs, such as the device gyroscope and accelerometer, captured our imagination. I played a vital role in refining these ideas and ensuring they seamlessly integrated into the overall concept of a unique sensor based unlock interface.",
      ],
      conceptPoints: [
        {
          point: "Flick forward to unlock.",
        },
        {
          point: "Scan QR code stored on personal computer.",
        },
        {
          point: "Using voice detection, a user speaks a specific phrase.",
        },
        {
          point:
            "Using the camera, a user records a morris code sequence by blinking.",
        },
        {
          point:
            "Unlocking achieved by being in proximity to another personal device such as a laptop.",
        },
        {
          point: "Hand gesture recognition.",
        },
        {
          point: "User tilts their phone simulating pouring a glass of milk.",
        },
        {
          point: "User tilts their phone to move an object through a maze.",
        },
        {
          point:
            "User sings a song and the interface captures the input using sound recognition.",
        },
        {
          point:
            "User interacts with a virtual vending machine and shakes their phone to fizz out pop cans.",
        },
      ],
      conceptImages: [
        {
          url: "/project2/CokeMachineUnlock/concept/cimg1.png",
          caption: "Concept Sketch 1",
        },
        {
          url: "/project2/CokeMachineUnlock/concept/cimg2.png",
          caption: "Concept Sketch 2",
        },
        {
          url: "/project2/CokeMachineUnlock/concept/cimg3.png",
          caption: "Concept Sketch 3",
        },
        {
          url: "/project2/CokeMachineUnlock/concept/cimg4.png",
          caption: "Concept Sketch 4",
        },
        {
          url: "/project2/CokeMachineUnlock/concept/cimg5.png",
          caption: "Concept Sketch 5",
        },
        {
          url: "/project2/CokeMachineUnlock/concept/cimg6.png",
          caption: "Concept Sketch 6",
        },
        {
          url: "/project2/CokeMachineUnlock/concept/cimg7.png",
          caption: "Concept Sketch 7",
        },
        {
          url: "/project2/CokeMachineUnlock/concept/cimg8.png",
          caption: "Concept Sketch 8",
        },
        {
          url: "/project2/CokeMachineUnlock/concept/cimg9.png",
          caption: "Concept Sketch 9",
        },
        {
          url: "/project2/CokeMachineUnlock/concept/cimg10.png",
          caption: "Concept Sketch 10",
        },
      ],
    },
  },
];
