const getLikeList = async () => {
  try {
    const response = await fetch(
      "https://yundanbi.github.io/html_study/lfmal/json/like.json"
    );
    if (!response.ok) throw new Error("데이터를 불러오는 데 실패했습니다.");

    const data = await response.json();

    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        $(".like-list").append(`
          <div class="product2">
            <a href="#">
              <img src="${data[i].image}" alt="신상품" 
                data-default="${data[i].image}" 
                data-hover="${data[i].hoverimage}" />
              <ul>
                <li>${data[i].name}</li>
                <li>${data[i].price}</li>
              </ul>
            </a>
          </div>
        `);
      }

      const hoverSrc = $(this).data("hover");
      if (hoverSrc) {
        if (!hoverSrc.startsWith("img/")) {
          $(this).attr("src", "img/" + hoverSrc.split("/").pop());
        } else {
          $(this).attr("src", hoverSrc);
        }
      }

      // hover 이벤트 등록
      $(".like-list img").hover(
        function () {
          // 마우스 올렸을 때
          const hoverSrc = $(this).data("hover");
          if (hoverSrc) $(this).attr("src", hoverSrc);
        },
        function () {
          // 마우스 뗐을 때
          const defaultSrc = $(this).data("default");
          if (defaultSrc) $(this).attr("src", defaultSrc);
        }
      );
    } else {
      console.log("데이터가 없습니다.");
    }
  } catch (error) {
    console.error("오류 발생:", error);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  getLikeList();
});
