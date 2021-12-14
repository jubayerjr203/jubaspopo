const fa__bars = document.querySelector('.fa-bars');
const nav__ul = document.querySelector('ul.nav__ul');
const burgerItem = document.querySelector('.burgerItem i');
const doC = document.querySelector('.do');
const dd__div = document.querySelector('.dd__div');
const fadown = document.querySelector('.fa-chevron-down');

fa__bars.addEventListener('click',()=>{
  nav__ul.classList.toggle('nav__ulA');
});
burgerItem.addEventListener('click', () => {
  burgerItem.classList.toggle('fa-times')
});
doC.addEventListener('click', () => {
  dd__div.classList.toggle('activ');
  fadown.classList.toggle('fa__aseDeg');
});


// Array OF Object

let protfolio = [
  {
    img: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?crop=entropy&cs=srgb&dl=pexels-pixabay-256381.jpg&fit=crop&fm=jpg&h=2832&w=4256",
    category: "devolopment"
  },
  {
    img: "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?crop=entropy&cs=srgb&dl=pexels-kaboompics-com-6444.jpg&fit=crop&fm=jpg&h=3121&w=4681",
    category: "webdesign"
  },
  {
    img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?crop=entropy&cs=srgb&dl=pexels-designecologist-1779487.jpg&fit=crop&fm=jpg&h=2848&w=4272",
    category: "illustration"
  },
  {
    img: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?crop=entropy&cs=srgb&dl=pexels-josh-sorenson-1714208.jpg&fit=crop&fm=jpg&h=853&w=1280",
    category: "devolopment"
  },

  {
    img: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?crop=entropy&cs=srgb&dl=pexels-toa-heftiba-%C5%9Finca-1194420.jpg&fit=crop&fm=jpg&h=2454&w=3760",
    category: "webdesign"
  },
];

const por__main__bottom = document.querySelector('.por__main__bottom');
displayitem(protfolio);
function displayitem(onItem) {
  let allCon = onItem.map((item) => {
    return `
        <div class="main__img__con">
        <img src="${item.img}">
      </div>

    `
  });
  allCon = allCon.join();
  por__main__bottom.innerHTML = allCon;
}

const por__btn = document.querySelectorAll('.por__main__top button');

por__btn.forEach((per__btn) => {
  per__btn.addEventListener('click', (ev) => {
    let target = ev.target.dataset.id;
    // console.log(target);
    let filter = protfolio.filter((filItem) => {
      if(filItem.category ===target){
        return filItem;
      }
    });
    if(target === "all"){
      displayitem(protfolio);
    }
    else{
      displayitem(filter);
    }
  })
})


var typed = new Typed('.typed', {
  strings: ["বাতাস মানুষ","web devoloper", "fornt-edn engnear", "web desiner"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
});

