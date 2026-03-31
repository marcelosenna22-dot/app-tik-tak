function upload() {
  const file = document.getElementById('videoFile').files[0];

  if (!file) return alert("Selecione um vídeo");

  const ref = storage.ref("videos/" + Date.now());

  ref.put(file)
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      return db.collection("videos").add({
        url: url,
        data: new Date()
      });
    })
    .then(() => {
      alert("Vídeo enviado!");
      window.location.href = "index.html";
    })
    .catch(err => alert(err.message));
}