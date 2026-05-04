/*
_____________________________________________________________________________
                       Navigation Links

*/
let links = [
    {
        "pageName": "About",
        "URL": "index.html"
    },
    {
        "pageName": "Events",
        "URL": "events.html"
    },
    {
        "pageName": "Music",
        "URL": "music.html"
    },
    {
        "pageName": "Contact",
        "URL": "contact.html"
    }
    
];





var mylist = document.createElement('ul');

mylist.setAttribute("class", "menu");
mylist.setAttribute("id", "menu")

let txt = "";
for(var i of links){
    var atag = document.createElement('a');
    atag.setAttribute("href", i.URL);
    atag.textContent = i.pageName;
    var liElementp = document.createElement('li');
    liElementp.appendChild(atag);
    mylist.appendChild(liElementp);
  
}

document.getElementById("nav").appendChild(mylist);
  
  
  
  
  /*
_____________________________________________________________________________
                       Hamburger Menu

*/
  
  
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });


