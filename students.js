const students = [
  // Khối 10
  {name: "Nguyễn Văn A", grade: "Khối 10", score: 9.5, img: "https://tse1.mm.bing.net/th/id/OIP.Q8YWjoNg8popkZIAnBkZXgHaI9?w=529&h=640&rs=1&pid=ImgDetMain&o=7&rm=3"},
  {name: "Trần Thị B", grade: "Khối 10", score: 9.3, img: "https://www.hoteljob.vn/uploads/images/19-11-28-10/1574913614070.jpg"},

  // Khối 11
  {name: "Lê Văn C", grade: "Khối 11", score: 9.6, img: "https://i1.rgstatic.net/ii/profile.image/11431281216003841-1704462700372_Q512/Giang-Nguyen-Truong-8.jpg"},
  {name: "Phạm Thị D", grade: "Khối 11", score: 9.4, img: "https://tse2.mm.bing.net/th/id/OIP.PZ-UioXME8ceRNgqgrnatQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"},

  // Khối 12
  {name: "Hoàng Văn E", grade: "Khối 12", score: 9.8, img: "https://tse2.mm.bing.net/th/id/OIP.u_QsrYuHBcwLoLlQMAFLPwAAAA?pid=ImgDet&w=450&h=675&rs=1&o=7&rm=3"},
  {name: "Đỗ Thị F", grade: "Khối 12", score: 9.7, img: "https://tse2.mm.bing.net/th/id/OIP.8fm2axG3ZZ9mwgkRNrjPuwAAAA?pid=ImgDet&w=450&h=675&rs=1&o=7&rm=3"},

  // Top chung
  {name: "Top 1 Toàn Trường", grade: "Xuất sắc", score: 10, img: "https://bizweb.dktcdn.net/100/175/849/files/nhung-luu-y-khi-di-chup-anh-the-hoc-sinh-sinh-vien-5-26a7ad5f-9155-4fae-8177-0d57bffcf264.jpg?v=1720762600947"},
  {name: "Top 2 Toàn Trường", grade: "Xuất sắc", score: 9.9, img: "https://bizweb.dktcdn.net/100/175/849/files/nhung-luu-y-khi-di-chup-anh-the-hoc-sinh-sinh-vien-1-016c9c22-e8bb-46fe-a6bb-69b81dcdd0c3.jpg?v=1720762597525"},
];

const container = document.getElementById("student-cards");

students.forEach(s => {
  container.innerHTML += `
    <div class="col-md-3 mb-4">
      <div class="card card-student shadow position-relative">

        <span class="badge bg-primary badge-grade">${s.grade}</span>

        <img src="${s.img}" class="card-img-top student-img">

        <div class="card-body text-center">
          <h5>${s.name}</h5>
          <p>Điểm TB: <strong>${s.score}</strong></p>
        </div>

      </div>
    </div>
  `;
});