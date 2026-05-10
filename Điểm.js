window.onload = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  
  if (user) {
    const navDiv = document.querySelector(".navbar .btn-success").parentElement;

    navDiv.innerHTML = `
      <span class="text-white me-3">👋 ${user.username}</span>
      <button class="btn btn-warning" onclick="logout()">Đăng xuất</button>
    `;
  }
};
// FIREBASE CONFIG
const firebaseConfig = {

  apiKey: "AIzaSyCBh-wCR02v7WDHbFyiOdbauRi0pUUZ25Q",

  authDomain: "finaljsi-7d280.firebaseapp.com",

  projectId: "finaljsi-7d280"

};

// INIT
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// LOAD DATA
function loadScores(){

  db.collection("scores")

  .onSnapshot(snapshot => {

    const list =
    document.getElementById("score-list");

    list.innerHTML = "";

    snapshot.forEach(doc => {

      const s = doc.data();

      list.innerHTML += `

        <tr>

          <td>${s.name}</td>

          <td>${s.class}</td>

          <td>${s.math}</td>

          <td>${s.literature}</td>

          <td>${s.english}</td>

          <td>

            <strong>${s.average}</strong>

          </td>

          <td>

            <button
            class="btn btn-danger btn-sm"

            onclick="removeScore('${doc.id}')">

              X

            </button>

          </td>

        </tr>

      `;

    });

  });

}

// ADD
function addStudent(){

  const name =
  document.getElementById("name").value;

  const cls =
  document.getElementById("class").value;

  const math =
  Number(document.getElementById("math").value);

  const literature =
  Number(document.getElementById("literature").value);

  const english =
  Number(document.getElementById("english").value);

  // CHECK
  if(!name || !cls){

    alert("Vui lòng nhập đầy đủ!");

    return;

  }

  // AVERAGE
  const average = (

    (math + literature + english) / 3

  ).toFixed(1);

  // SAVE
  db.collection("scores").add({

    name: name,

    class: cls,

    math: math,

    literature: literature,

    english: english,

    average: average

  })

  .then(()=>{

    alert("Thêm thành công!");

  })

  .catch(err=>{

    alert(err.message);

  });

  // RESET
  document.getElementById("name").value = "";

  document.getElementById("class").value = "";

  document.getElementById("math").value = "";

  document.getElementById("literature").value = "";

  document.getElementById("english").value = "";

}

// DELETE
function removeScore(id){

  db.collection("scores")

  .doc(id)

  .delete();

}

// LOAD
loadScores();