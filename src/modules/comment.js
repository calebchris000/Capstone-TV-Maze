  document.addEventListener("click", (e) => {
    for (let i = 0; i < 6; i++) {
      if (e.target.className === i.toString()) {
        // const showComment = document.querySelector('.showComment')
        displayPopup(i);
      }
    }
  });


const displayPopup = async (i) => {
  const baseAPI = "https://api.tvmaze.com/shows";
  const request = await fetch(baseAPI);
  const response = await request.json();

  let item = `
  <div class='showComment'>
  <img class="titleIMG" src="${response[i].image.original}">
  <h3 class="title">${response[i].name}</h3>

  </div>
  `
  document.body.insertAdjacentHTML("beforeend", item)
};
