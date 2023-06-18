const addCommentFunction = async (event) => {
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

const removeCommentFunction = async (event) => {
  event.preventDefault();
  const commentPath = 'api/comments/' + event.target.dataset.commentid;

  const response = await fetch(commentPath, {
    method: 'DELETE',
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert("Cannot delete a comment that isn't yours!");
  }
};

document.querySelectorAll('.delBtn').forEach((button) => {
  button.addEventListener('click', removeCommentFunction);
});

document
  .querySelector('#add-comment')
  .addEventListener('click', addCommentFunction);
