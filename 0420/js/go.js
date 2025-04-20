const goList = async () => {
  try {
    const response = await fetch(
      "https://yundanbi.github.io/html_study/0417/json/go1.json"
    );
    if (!response.ok) throw new Error("데이터를 불러오는 데 실패했습니다.");

    const data = await response.json();

    if (data.length > 0) {
      for (let i = 0; i < 3; i++) {
        $("#golist").append(`
              <a href="sub.html" class="product-item">
                <img src="${data[i].image}" alt="공효진" />
                  <span>${data[i].name}</span>
                  <p>${data[i].price}</p>
              </a>
            `);
      }
    } else {
      console.log("데이터가 없습니다.");
    }
  } catch (error) {
    console.error("오류 발생:", error);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  goList();
});
