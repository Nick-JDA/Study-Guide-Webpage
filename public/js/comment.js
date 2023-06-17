const commentText = document.querySelector('#comment-text')
const topicPage = parseInt(document.location.href.split("=")[1]);


const commentFunction = async () => {
    const commentWhatever = commentText.value;
  const response = await fetch('api/comments/' + topicPage, {
    method: 'POST',
    body: JSON.stringify({ commentWhatever }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert("comment added");
  } else {
    alert(response.statusText);
  }
};
console.log(parseInt(document.location.href.split("=")[1]));
document.querySelector('.add-comment').addEventListener('click', commentFunction);
