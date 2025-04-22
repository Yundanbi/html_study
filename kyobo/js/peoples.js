const REST_API_KEY_pelplerecommend = "071d884bcf93ef15ab325924977ca231";

async function people_recommendBooks() {
  const query = "경제";
  const url = `https://dapi.kakao.com/v3/search/book?query=${encodeURIComponent(
    query
  )}&size=6`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `KakaoAK ${REST_API_KEY_pelplerecommend}`,
      },
    });

    if (!response.ok) {
      throw new Error("네트워크 응답에 문제가 있어요!");
    }

    const data = await response.json();

    const list = document.getElementById("peoples-list");

    if (!data.documents || data.documents.length === 0) {
      list.innerHTML = "<p>추천 도서가 없습니다.</p>";
      return;
    }

    list.innerHTML = data.documents
      .map(
        (book) => `
          <div style="padding:10px; margin:10px; width:200px;">
            <a href="#">
              <img src="${
                book.thumbnail || "default-image.png"
              }" alt="썸네일" style="width:100%; height:250px; object-fit:cover;">
              <h3 style="font-size:16px; margin:10px 0;">${book.title}</h3>
            </a>
          </div>
        `
      )
      .join("");
  } catch (error) {
    console.error("책을 가져오는 데 실패했어요:", error);
  }
}

people_recommendBooks();
