auth.onAuthStateChanged(user => {
  console.log("Usuário:", user);

  if (!user) {
    window.location.href = "login.html";
  } else {
    carregarVideos();
  }
});

function logout() {
  auth.signOut();
}

function carregarVideos() {
  const feed = document.getElementById('feed');

  db.collection("videos").orderBy("data", "desc")
    .onSnapshot(snapshot => {
      feed.innerHTML = "";

      snapshot.forEach(doc => {
        const video = doc.data();

        feed.innerHTML += `
          <div class="video-container">
            <video src="${video.url}" autoplay loop controls></video>
          </div>
        `;
      });
    });
}