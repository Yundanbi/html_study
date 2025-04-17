const getCategoryList = async () => {
  try {
    const response = await fetch(
      "https://yundanbi.github.io/html_study/0417/json/category.json"
    );
    if (!response.ok) throw new Error("데이터를 불러오는 데 실패했습니다.");

    const data = await response.json();

    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        const key = `category_${i}`; // ← 요거!
        const categories = data[i][key]; // ← 이렇게 접근!

        let innerHtml = `
          <div id="product">
        `;

        for (let j = 0; j < categories.length; j++) {
          innerHtml += `
            <div class="box">
              <a href="sub.html">
                <img src="${categories[j].image}" alt="${categories[j].name}" />
                <span>${categories[j].name}</span>
              </a>
            </div>
          `;
        }

        innerHtml += `
          </div>
        `;

        $(".category-list").append(innerHtml);
      }
    } else {
      console.log("데이터가 없습니다.");
    }
  } catch (error) {
    console.error("오류 발생:", error);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  getCategoryList();
});
