export const exerciseOptions = {
    method: 'GET',
    headers: {
      // 'content-type': 'application/octet-stream',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
  };
  

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    // 'X-RapidAPI-Key': '1906b9e19dmsh181ba6e139ba5ebp1ee3b0jsne0a54b247d1b',
    'X-RapidAPI-Key': 'effb593c4emsh06a7005615bc90cp1219d2jsnfc129c384565',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
