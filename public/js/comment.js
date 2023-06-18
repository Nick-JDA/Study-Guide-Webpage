const commentFunction = async (event) => {
  event.preventDefault();
  const commentText = document.querySelector('#comment-text');
  const comment = commentText.value.trim();
  const topicPage = parseInt(document.location.href.split('=')[1]);
  const commentPath = 'api/comments/' + topicPage;
  if (comment) {
    const response = await fetch(commentPath, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to add comment');
    }
  }
};

document
  .querySelector('.add-comment')
  .addEventListener('click', commentFunction);
