const baseAPI = "https://api.tvmaze.com/shows";

const getJSON = async () => {
  const request = await fetch(baseAPI);
  const response = await request.json();

  return response
};


const render = async () => {
  const container = document.querySelector(".container");
  const jsonData = await getJSON();
    let item = ''
  for (let i = 0; i < 6; i++) {
    item += `
     <div class="item">
            <img src=${jsonData[i].image.original} alt="">

            <div class="description">
                <p class="name">${jsonData[i].name}</p>

                <div class="like">
                    <i class="fa-regular fa-heart"></i>
                    <p>5 likes</p>
                </div>


            </div>

            <button>Comment</button>
            <button>Reservation</button>
        </div>`
  }

  container.innerHTML = item;
};

render()

