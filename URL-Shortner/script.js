// Database hash
const mapper =
{
    // https://zany-meme-v6445qxj4592qjw-5500.app.github.dev/URL-Shortner/index.html?q=rithik
    // in url ?q=rithik -> key ->q, value = rithik
    'rithik' : 'https://github.com/rithiksanjeev/Websites',
    'portfolio': 'https://github.com/rithiksanjeev/portfolio'
}
// URLSearchParams in a built in mwthod that converts the query to key value
// instead of q it can be anything ?query= or ?site=
const urlParams = new URLSearchParams(window.location.search); // ?q=rithik ->{q:'rithik'}
const query = (urlParams.get('q')); // .get gets the value of the key
console.log(mapper[query]); // search in mapper

if (mapper[query])
{
    console.log('redirect');
    window.location.href = mapper[query]
}