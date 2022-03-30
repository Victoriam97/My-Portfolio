// Skills Icons
import code from "./Images/code.svg"
import github from "./Images/github.svg"
import team from "./Images/team.svg"
import plan from "./Images/plan.svg"
import ui from "./Images/ui-ux.svg"
import project from "./Images/project.jpg"
import Fridgeful from "./Images/fridgeful4.jpg"
import digitalClock from "./Images/digitalclock.jpg"
import JCPage from "./Images/JCpage.jpg"

const data = {

  name: "Victoria",
  headerTagline: [
  
    "English teacher turned",
  
    "full stack developer,",
   
    "passionate about problem solving.",
  ],
  headerParagraph:
    "Birmingham based full stack developer currently learning HTML, Javascript, Node, SQL , React, Next.js , Typescript, CSS, SASS at the School of Code.",
  contactEmail: "victoriameah@hotmail.com",

  projects: [
    {
      title: "CTNY TV", 
      para:
      "A photography and videography site with inbuilt gallery to display work.",
      
      imageSrc: JCPage,    
      url: "",
    },
    {
      title: "Dev-hub", 
      para:
      "Dev-hub is a problem categorizing app made in a week with 3 other school of code bootcampers. It's an app that helps organize and de-clutter posts in the School of Code help channel on Slack. ",
    
      imageSrc:
      project,     
      url: "https://socdevhub.netlify.app/",
    },
    {
      title: "Digital Clock", 
      para:
        "A simple digital clock that allows you to toggle between 12 and 24 hour clock. Made with HTML, Javascript and CSS.",
    
      imageSrc:
      digitalClock,
      url: "https://github.com/Victoriam97",
    },
    {
      title: "Fridgeful", 
      para:
      "Fridgeful is a what's in your fridge app combined with a recipe generator made with 5 other bootcampers in 4 weeks. you input your ingredients along with their expiry date, quantity and food type and recipes are generated in descending order based on how many of your ingredients that recipe contains.",
     
      imageSrc:
      Fridgeful,
      url: "https://final-project-alpha-test.netlify.app/",
    },
   
    
  ],

  skills: [
   
   {
      img: team,
      para:
        "During my 16 week learning experience, I developed a range of skills in regards to the principles of software development, how to apply algorithmic thinking whilst creating a plan and agile principles when working in a team. I discovered how effective stand-up's, retrospectives and sprints can be whilst carrying out a collaborative project.",
    },
    {
      img: plan,
      para:
        "I was able to refine my planning skills during the bootcamp as we were introduced to tools such as Notion, Trello and Jira for organisation and issue tracking. Each week we were placed into different teams where we would be given a hackathon to complete at the end of the week. We learnt how to successfully define and understand a problem, break it down and then, develop an action plan.",
    },
   
    {
      img: code,
      para:
        "I started my bootcamper journey learning HTML, CSS and JavaScript, and then moved on to libraries  and  frameworks  such  as  React,  Typescript,  Node.js,  Express.js, while also learning how to implement unit and integration tests (Jest, React-testing-library) and end-to-end tests (Cypress).",
    },
    {
      img: ui,
      para:
        "I was also introduced to the importance of UI and UX skills during my time at the school of code. I used Figma and  Canva for collaborative design and rapid prototyping. Whilst also learning user research skills, such as creating user personas, user stories and user journeys.",
    },
  ],
  contactSubHeading: "Check out my github profile!",
  social: [
    { img: github, url: "https://github.com/Victoriam97" },
  ],
}

export default data