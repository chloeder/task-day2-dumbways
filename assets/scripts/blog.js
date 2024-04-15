const dataProject = [];

const addProject = (event) => {
  event.preventDefault();

  let projectName = document.getElementById("project-name").value;
  let startDate = document.getElementById("start_date").value;
  let endDate = document.getElementById("end_date").value;
  let description = document.getElementById("description").value;
  let image = document.getElementById("file").files[0];
  let imgSrc = URL.createObjectURL(image);
  let technology = document.querySelectorAll("[type=checkbox]");
  let technologies = [];
  for (const tech of technology) {
    if (tech.checked) {
      technologies.push(tech.value);
    }
  }
  const timeDiff = Date.parse(endDate) - Date.parse(startDate);
  const diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
  const diffMonths = Math.floor(diffDays / 30.4167);
  const diffYears = Math.floor(diffMonths / 12);

  let duration;

  if (diffYears > 0) {
    duration = `${diffYears} Years`;
  } else if (diffMonths > 0) {
    duration = `${diffMonths} Months`;
  } else {
    duration = `${diffDays} Days`;
  }

  dataProject.push({
    projectName,
    duration,
    description,
    technologies,
    imgSrc,
  });

  listProject();
};

const listProject = () => {
  let projectList = document.querySelector(".card-project");
  projectList.innerHTML = "";

  for (const project of dataProject) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");

    const img = document.createElement("img");
    img.src = project.imgSrc;

    cardHeader.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const h1 = document.createElement("h1");
    h1.textContent = project.projectName;

    const p = document.createElement("p");
    p.textContent = `Duration : ${project.duration}`;

    const p2 = document.createElement("p");
    p2.textContent = project.description;

    const iconList = document.createElement("div");
    iconList.classList.add("icon");

    project.technologies.forEach((tech) => {
      const icon = document.createElement("i");
      icon.classList.add("fa-brands");
      icon.classList.add(`fa-${tech}`);
      iconList.appendChild(icon);
    });

    cardBody.appendChild(h1);
    cardBody.appendChild(p);
    cardBody.appendChild(p2);
    cardBody.appendChild(iconList);

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    const buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Edit";

    const buttonDelete = document.createElement("button");
    buttonDelete.textContent = "Delete";

    cardFooter.appendChild(buttonEdit);
    cardFooter.appendChild(buttonDelete);

    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    projectList.appendChild(card);
  }

  // dataProject.forEach((project) => {
  //   const card = document.createElement("div");
  //   card.classList.add("card");

  //   const cardHeader = document.createElement("div");
  //   cardHeader.classList.add("card-header");

  //   const img = document.createElement("img");
  //   img.src = project.imgSrc;

  //   cardHeader.appendChild(img);

  //   const cardBody = document.createElement("div");
  //   cardBody.classList.add("card-body");

  //   const h1 = document.createElement("h1");
  //   h1.textContent = project.projectName;

  //   const p = document.createElement("p");
  //   p.textContent = `Duration : ${project.duration}`;

  //   const p2 = document.createElement("p");
  //   p2.textContent = project.description;

  //   const iconList = document.createElement("div");
  //   iconList.classList.add("icon");

  //   project.technologies.forEach((tech) => {
  //     const icon = document.createElement("i");
  //     icon.classList.add("fa-brands");
  //     icon.classList.add(`fa-${tech}`);
  //     iconList.appendChild(icon);
  //   });

  //   cardBody.appendChild(h1);
  //   cardBody.appendChild(p);
  //   cardBody.appendChild(p2);
  //   cardBody.appendChild(iconList);

  //   const cardFooter = document.createElement("div");
  //   cardFooter.classList.add("card-footer");

  //   const buttonEdit = document.createElement("button");
  //   buttonEdit.textContent = "Edit";

  //   const buttonDelete = document.createElement("button");
  //   buttonDelete.textContent = "Delete";

  //   cardFooter.appendChild(buttonEdit);
  //   cardFooter.appendChild(buttonDelete);

  //   card.appendChild(cardHeader);
  //   card.appendChild(cardBody);
  //   card.appendChild(cardFooter);

  //   projectList.appendChild(card);
  // });
};
