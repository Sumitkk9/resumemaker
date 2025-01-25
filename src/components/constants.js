import Classictemplate1 from "../img/tem1.png"
import Classictemplate2 from "../img/tem2.png"
import Classictemplate3 from "../img/tem3.png"

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
]

export {Menus,templates}