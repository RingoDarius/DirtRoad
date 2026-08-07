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
        "pageName": "Gallery",
        "URL": "gallery.html"
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



  /*
_____________________________________________________________________________
                       Load Images

*/


  const images = [
    "July4_2026_FullBand.jpeg",
    "July4_2026_Brian.jpeg",
    "July4_2026_Texas.jpeg",
    "July4_2026_Chad.jpeg",
    "July4_2026_Kim.jpeg",
    "July4_2026_Brian02.jpeg",
    "July4_2026_Kim03.jpeg", 
    "July4_2026_BrianC.jpeg",
    "July4_2026_FullBand02.jpeg",
    "July4_2026_Kim04.jpeg", 
    "July4_2026_John.jpeg",
    "July4_2026_John02.jpeg",
    "July4_2026_Kim02.jpeg", 
    "July4_2026_Brian03.jpeg", 
    "July4_2026_Chad_03.jpeg", 
    "July4_2026_Chad_Brian_John.jpeg", 
    "July4_2026_FullBand02.jpeg", 
    "July4_2026_Kim04.jpeg", 
    "July4_2026_Todd.jpeg", 
    "July4_2026_Todd_BrianC.jpeg"
];

const gallery = document.getElementById("gallery");

images.forEach(file => {

    const img = document.createElement("img");

    img.src = "images/GloryDays2026/" + file;

    img.loading = "lazy";

    img.alt = "Dirt Road live";

    const link = document.createElement("a");

    link.href = img.src;

    link.className = "glightbox";

    link.appendChild(img);

    gallery.appendChild(link);

});

const lightbox = GLightbox();



