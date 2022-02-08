const urlApi = "https://newsapi.org/v2/top-headlines?apiKey=54da94e5bdee433caf334ae91c37f642&country=id";

const urlCari = "https://newsapi.org/v2/top-headlines?apiKey=54da94e5bdee433caf334ae91c37f642&country=id&q=";

function cari() {
    var key = document.getElementById("input-Key").value ;
    if (key != '') {
        const news = fetch(urlCari + key);
        news
          .then((res) => res.json())
          .then((resData) => {
          console.log(resData);
            document.getElementById("cardData").innerHTML = search(resData);
          })
          .catch((error) => console.log(error));
    } else if (key == '') {
        const news = fetch(urlApi);
          news
            .then((res) => res.json())
            .then((resData) => {
            console.log(resData);
              document.getElementById("cardData").innerHTML = render(resData);
            })
            .catch((error) => console.log(error));
    }
}

function search(result) {
  let cards = "";
  let a = result;
  let x = a.totalResults;
  console.log(x);
  for (let i = 0; i < x; i++) { 
      cards +=
      '<div class="col-md-3 mb-3"><div class="card"><img src="' +
      a.articles[i].urlToImage +
      '" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title">' +
      a.articles[i].title +
      ' <h6 class="card-subtitle mb-2 text-muted">' +
      a.articles[i].author +
      '</h6><h6 class="card-subtitle mb-2 text-muted blockquote-footer">' +
      a.articles[i].publishedAt +
      '</h6></h5><p class="card-text">' +
      a.articles[i].description +
      '</p><a href="' +
      a.articles[i].url +
      '" class="btn btn-primary">Baca Selengkapnya</a></div></div></div>';
  }
  return cards;
}

function render(result) {
  let cards = "";
  let a = result;
  for (let i = 0; i < 8; i++) {
    cards +=
      '<div class="col-md-3 mb-3"><div class="card"><img src="' +
      a.articles[i].urlToImage +
      '" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title">' +
      a.articles[i].title +
      ' <h6 class="card-subtitle mb-2 text-muted">' +
      a.articles[i].author +
      '</h6><h6 class="card-subtitle mb-2 text-muted blockquote-footer">' +
      a.articles[i].publishedAt +
      '</h6></h5><p class="card-text">' +
      a.articles[i].description +
      '</p><a href="' +
      a.articles[i].url +
      '" class="btn btn-primary">Baca Selengkapnya</a></div></div></div>';
  }
  return cards;
}
