const getPosts = () => {
    return fetch('http://maqay.org/wp-json/wp/v2/posts')
    .then(res=>res.json())
    .then(res=> res.filter(posts=>posts.categories[0]===23));
}
export default getPosts;

/* fetch('http://maqay.org/wp-json/wp/v2/posts', {
        method: 'GET',
        mode: 'no-cors'}
)
.then(res=>{res.json()})
.then(res=>{return res}); */