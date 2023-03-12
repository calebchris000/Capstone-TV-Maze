document.addEventListener('click', (e) => {
  for (let i = 0; i < 6; i++) {
    if (e.target.className === i.toString()) {
      // const showComment = document.querySelector('.showComment')
      displayPopup(i);
    }
  }
});

const displayPopup = async (i) => {
  const baseAPI = 'https://api.tvmaze.com/shows';
  const request = await fetch(baseAPI);
  const response = await request.json();

  let item = `
  <div class='showComment'>
  <img class="titleIMG" src="${response[i].image.original}">
  <h3 class="title">${response[i].name}</h3>
  <div class="metaData"> 
    <div class="releaseDate"> 
    <p>Release Date: ${response[i].premiered}</p>
    <p>Genre: ${response[i].genres}</p>
    </div>
    <div class="genre"> 
    <p>Language: ${response[i].language}</p>
    <p>Rating: ${response[i].rating.average}</p>
    </div>
  </div>
  <h4>Comments <span></span></h4>
  <div class="commentContainer">
  </div>
  <h4>Add a comment</h4>
  <form action="">
  <input type="text" name="name" id="name" placeholder="Your Name"/>
  <input type="text" name="insights" id="insights" placeholder="Your insights"/>
  <input type="button" value="Comments" id="btnForm"/>
</form>
  
  </div>
  `;
  document.body.insertAdjacentHTML('beforeend', item);
};

const commentData = async () => {
  const userValue = document.querySelector('#name');
  const comment = document.querySelector('#insights');

  const res = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Pd5zXNKydh5gUPj01SIC/comments',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: '1',
        ' username': userValue.value,
        ' comment': comment.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    }
  );
  const data = await res.text();
  console.log(data);
};

document.addEventListener('click', (e) => {
  for (let i = 0; i < 6; i++) {
    if (e.target.className === i.toString()) {
      // const showComment = document.querySelector('.showComment')
      displayPopup(i);
    }
  }
});

const getData = async () => {
  const res = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Pd5zXNKydh5gUPj01SIC/comments'
  );
  const result = await res.json();
  return result;
};
