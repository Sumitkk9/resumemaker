import Classictemplate1 from "../img/tem1.png"
import Classictemplate2 from "../img/tem2.png"
import Classictemplate3 from "../img/tem3.png"
import Classictemplate4 from "../img/tem4.png"
import Classictemplate5 from "../img/tem5.png"


const Menus = [
    {name:"Home",
     url:"/",        
    },
       {name:"T&C Page",
        url:"/terms",        
       },
       {name:"Contact Us",
        url:"http://imsumit.com/",        
       },
    ]




const templates = [
    {
        name:"Classic Template 5",
        tempImg:Classictemplate5,
        tempRecomm: true,
        tempUrl: "/classictemplate5",
    },
    {
        name:"Classic Template 1",
        tempImg:Classictemplate1,
        tempRecomm: true,
        tempUrl: "/classictemplate1",
    },
    {
        name:"Classic Template 2",
        tempImg:Classictemplate2,
        tempRecomm: false,
        tempUrl: "/classictemplate2",
    },
    {
        name:"Classic Template 3",
        tempImg:Classictemplate3,
        tempRecomm: true,
        tempUrl: "/classictemplate3",
    },
    {
        name:"Classic Template 4",
        tempImg:Classictemplate4,
        tempRecomm: false,
        tempUrl: "/classictemplate4",
    },
  
]



const demoData = {
    "fullname": "Raju Rastogi",
    "role": "Mechanical Engineer",
    "summary": "I am a passionate Mechanical Engineer from the prestigious Imperial College of Engineering. With strong problem-solving skills and a commitment to innovation, I aim to contribute to the field with practical solutions. I believe in working hard while maintaining ethical values and teamwork. I am looking for an opportunity to apply my technical knowledge in a dynamic work environment.",
    "phoneno": "9876543210",
    "email": "raju.rastogi@example.com",
    "linkedinurl": "https://www.linkedin.com/in/raju-rastogi",
    "githuburl": "https://github.com/raju-rastogi",
    "portfoliourl": "https://raju-engineer.com",
    "skill": [
        {
            "skill": "Thermodynamics, Machine Design, AutoCAD",
            "skillr": "4"
        },
        {
            "skill": "Fluid Mechanics, Strength of Materials",
            "skillr": "4"
        },
        {
            "skill": "Problem-Solving, Teamwork, Adaptability",
            "skillr": "5"
        }
    ],
    "exp": [
        {
            "exptitle": "Intern - Tata Motors",
            "expdesc": "Worked as an intern at Tata Motors, where I gained hands-on experience in automotive engineering, machine design, and production optimization.",
            "expexptype": "Internship",
            "expstartmonth": "June",
            "expstartyear": "2009",
            "expendmonth": "August",
            "expendyear": "2009"
        }
    ],
    "pproject": [
        {
            "ppt": "Efficient Cooling System Design",
            "ppd": "Designed an innovative cooling system to improve engine efficiency using thermodynamic principles.",
            "ppurl": "https://raju-engineer.com/projects/cooling-system"
        }
    ],
    "educations": [
        {
            "edut": "Bachelor of Technology (B.Tech) in Mechanical Engineering",
            "edud": "Imperial College of Engineering",
            "edusrtmonth": "July",
            "edusrtyear": "2006",
            "eduendmonth": "May",
            "eduendyear": "2010"
        }
    ],
    "certification": [
        {
            "cert-title": "AutoCAD Certification",
            "cert-url": "https://example.com/autocad-cert"
        }
    ],
    "Achievements": [
        {
            "Achievements": "Secured admission to Imperial College of Engineering despite financial difficulties."
        },
        {
            "Achievements": "Overcame personal challenges and continued studies with determination."
        },
        {
            "Achievements": "Survived a life-changing experience that strengthened my outlook on life and career."
        }
    ]
}


export {Menus,templates,demoData}