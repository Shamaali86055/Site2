let all = document.querySelector(".all");
all.addEventListener('click', allph);
function allph() {
  fetch('https://api.github.com/repos/Shamaali86055/AliImg/contents')
  .then(r => r.json())
  .then(data => {
    data.forEach(f => {
      console.log(f);
      let img = new Image();
      img.src = f.download_url;
      document.querySelector(".Show").appendChild(img);
    })
  })
};