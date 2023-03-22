import axios from 'axios';

const BASE_URL =
  'https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key';
const KEY = 'CY48BuSsEqEduDKMwmErVtpCE57xSb6m';
// const SECRET = 'HlnLBIykl20uoQ79';

export default class ServiceApi {
  //   constructor() {
  //     this.searchQuery = '';
  //     this.page = 1;
  //   }

  async serviceApiData() {
    return await axios.get(`${BASE_URL}=${KEY}`).then(response => {
      return response.data.results;
    });
  }
}

// const news = {
//   asset_id: 100000008783271,
//   byline: 'By Ronda Kaysen',
//   des_facet: ['Americans', 'Real Estate', 'Visas'],
//   media: {
//     caption: 'The Mitas family',
//     copyright: 'Kerry',
//     'media-metadata': [
//       {
//         format: 's',
//         url: 'https://static01.nyt.com/images/2023/03/19/multimedia/17americansineurope-bzjq/17americansineurope-bzjq-thumbStandard.jpg',
//       },
//     ],
//   },
// };
