const getPostsByRestButton = document.getElementById('wp-learn-rest-api-button');
if (typeof (getPostsByRestButton) != 'undefined' && getPostsByRestButton != null) {

    getPostsByRestButton.addEventListener('click', function () {
        var postsCollection = new wp.api.collections.Posts();
        postsCollection.fetch().done(function (posts) {
            const textarea = document.getElementById('wp-learn-posts');
            posts.forEach(function (post) {
                textarea.append(post.title.rendered + '\n')
            });
        });
    });
}


/**
 * Clear the text area button
 */

const clearPostsButton = document.getElementById('wp-learn-clear-posts');
if (typeof (clearPostsButton) != 'undefined' && clearPostsButton != null) {
    clearPostsButton.addEventListener('click', function () {
        const textarea = document.getElementById('wp-learn-posts')
        textarea.value = ''
    });
}