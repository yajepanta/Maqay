const getPosts = () => {
    return fetch('http://maqay.org/wp-json/wp/v2/posts', {
        method: 'GET',
        mode: 'no-cors'}
)
.then(res=>res.json())
.then(res=>res.map(post => {return post.title.rendered}));
}

export default getPosts;