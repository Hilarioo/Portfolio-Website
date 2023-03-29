import { AccomplishmentsInterface, Achievement, Certificate } from '../../interface/Accomplishment';
import AdhesiveUnity from '../img/adhesive-unity.png';
import CSClub from '../img/cs-club-logo.png';
import StartupWeekend from '../img/oakland-startup-weekend.jpg';

const achievements: Achievement[] = [
  {
    id: 0,
    icon: "uil-arrow",
    title: "Computer Science Club Founder",
    image: CSClub,
    description: "Founded the computer science club at Los Medanos Community College to provide an on-campus space for programming enthusiasts to gather together, discuss coding, and assist each other with CS assignments",
    bulletpoints: ["I held weekly coding challenges during the start of every meeting as a form of ice breaker", "The club grew to an average of 25+ active members"],
  },
  {
    id: 1,
    icon: "uil-trophy",
    title: "1st Place Startup Weekend",
    image: StartupWeekend,
    description: "The Kapor Center for Social Impact hosted a 54-hour Startup Weekend event. Prezta, my team won 1st place with the idea of developing an app to help friends and family lend and borrow money, eliminating the awkwardness by setting terms in advance and having the app send reminders.",
    bulletpoints: ["I developed mockups and a basic UI layout to better explain the startup ideas and key points", "I was asked to present the idea and share my feedback of the event at the LinkedIn office located in San Francisco, CA"],
    links: [
      { icon: "uil-book-open", name: "Article 01", url: "https://www.eastbaytimes.com/2016/10/27/kapor-hosts-competition-to-boost-latino-tech/" },
      { icon: "uil-book-open", name: "Article 02", url: "https://www.prnewswire.com/news-releases/startup-weekend-oakland-latinx-tech-edition-invites-young-entrepreneurs-to-ideate-solutions-to-uplift-latinx-communities-300350708.html" }
    ]
  },
  {
    id: 2,
    icon: "uil-lightbulb-alt",
    title: "Adhesive Unity Company",
    image: AdhesiveUnity,
    description: "Adhesive Unity is a small company I created which sold stickers, and in return, all profits were donated to the purchaser's non-profit of choice.",
    bulletpoints: ["I developed and launched a website which handled payment and inventory", "Sold 750+ orders of stickers within the first week", "More than $10,000 was donated to non-profit organizations."],
    links: [
      { icon: "uil-link-alt", url: "https://adhesiveunity.com/" },
      { icon: "uil-facebook-f", url: "https://www.facebook.com/AdhesiveUnityStickers/" },
      { icon: "uil-instagram", url: "https://www.instagram.com/adhesive.unity/" },
    ]
  },
]

const certificates: Certificate[] = [
  { id: 0, title: "Javascript", url: "https://www.sololearn.com/Certificate/CT-UMBG8DOD/png" },
  { id: 1, title: "React + Redux", url: "https://www.sololearn.com/Certificate/CT-VBGBARYZ/jpg" },
  { id: 2, title: "Backend", url: "https://triplebyte.com/tb/jose-h-gonzalez-uwxzkzj/certificate" },
  { id: 3, title: "React Testing", url: "https://verintces.udemy.com/certificate/UC-5b416745-4a93-4381-b2ca-70ba0e81ad0b/" },
  { id: 4, title: "Azure DevOps Fundamentals", url: "https://verintces.udemy.com/certificate/UC-53ea078e-aab7-4b63-ac06-2042c17e2a72/" },
  { id: 5, title: "Azure DevOps Repos", url: "https://verintces.udemy.com/certificate/UC-9d0e22f8-dd55-40c3-a9e5-ad6796bca2c8/" },
]

const accomplishments: AccomplishmentsInterface = {
  achievements,
  certificates,
};



export default accomplishments;