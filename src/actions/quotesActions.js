
const QUOTES_BASE_URL = "http://quotesondesign.com/wp-json/posts";


export const getQuotes = () => {
    return async dispatch => {
        const randomQuotes = await fetch(`${QUOTES_BASE_URL}?filter[orderby]=rand&filter[posts_per_page]=20`).then(res => res.json());
        // const idx = Math.floor(Math.random()*19);
        // const { content, title: author } = randomQuote[idx];
        // const text = content.replace(/<(?:.|\n)*?>/gm, ''); 
        // console.log(randomQuote)
        dispatch({
            type:'RANDOM_QUOTES_RETRIEVED',
            quotes: randomQuotes
        });
    }
}
