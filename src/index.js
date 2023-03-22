import ServiceApi from './js/api-server';

// const www = window.innerWidth;
// console.log(www);

// Кнопка бургер-меню
const menuBtn = document.querySelector('.button-menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-open');
});

// рендер кнопок поиска
const data = ['Victor', 'Nastya', 'Nazar', 'Mama'];

const list = document.querySelector('.categories-list');

const markup = data
  .map(
    dat => `
    <li>
      <button class="categories-button">
        ${dat}
      </button>
    </li>`
  )
  .join('');

list.innerHTML = markup;

//

// Достаем карточки

//
const newsHTML = document.querySelector('.news');

const getDataNews = new ServiceApi();
getDataNews.serviceApiData().then(news => {
  console.log(news);
  // console.log(news.media[0]['media-metadata'][0].url);
  // renderNews(news);
});

function renderNews(news) {
  newsHTML.insertAdjacentHTML('beforeend', renderNewsCard(news));
}

function renderNewsCard(news) {
  const min = 0;
  return news
    .map(({ title, des_facet, media }) => {
      return `
        <div>
        ${title}
        </br>
        ${des_facet[0]}
        </br>
        <img src="${media[0]['media-metadata'][0].url}"></img>
        </div>

    `;
    })
    .join('');
}
