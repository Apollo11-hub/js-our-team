const workerList = [
  {
    name : "Wayne Barnett",
    role : "Founder & Ceo",
    image : "img/wayne-barnett-founder-ceo.jpg"
  },

  {
    name : "Angela Caroll",
    role : "Chief Director",
    image : "img/angela-caroll-chief-editor.jpg"
  },

  {
    name : "Walter Gordon",
    role : "Office Manager",
    image : "img/walter-gordon-office-manager.jpg"
  },

  {
    name : "Angela Lopez",
    role : "Social Media Manager",
    image : "img/angela-lopez-social-media-manager.jpg"
  },

  {
    name : "Scott Estrada",
    role : "Developer",
    image : "img/scott-estrada-developer.jpg"
  },

  {
    name : "Barbara Ramos",
    role : "Graphic Design",
    image : "img/barbara-ramos-graphic-designer.jpg"
  },

]

let teamContainer = document.querySelector('.team-container');


pickAWorker();

function pickAWorker(){


  teamContainer.innerHTML = '';

  for(let workMember of workerList){
    printCardWoker(workMember)
  }

}

function printCardWoker(workMember){

    const {name, role, image} = workMember;

    teamContainer.innerHTML += `
    <div class="team-card">
      <div class="card-image">
        <img
          src="
          ${image}"
          alt="${name}"
        />
      </div>
      <div class="card-text">
        <h3>${name}</h3>
        <p>${role}</p>
      </div>
    </div>
    `
}