const REST_API_KEY_best1 = "071d884bcf93ef15ab325924977ca231";

async function kyobo_best_1chBooks() {
  const query = "소설";
  const url = `https://dapi.kakao.com/v3/search/book?query=${encodeURIComponent(
    query
  )}&size=5`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `KakaoAK ${REST_API_KEY_best1}`,
      },
    });

    if (!response.ok) {
      throw new Error("네트워크 응답에 문제가 있어요!");
    }

    const data = await response.json();

    const list = document.getElementById("best_list_2");
    list.innerHTML = data.documents
      .map(
        (book) => `
        <a href="#">
          <div style=" padding:10px; margin:10px; width:200px;">
            <img src="${book.thumbnail}" alt="썸네일" style="width:100%; height:250px; object-fit:cover;">
            <h3 style="font-size:16px; margin:10px 0;">${book.title}</h3></a>
            
          </div>
        `
      )
      .join("");
  } catch (error) {
    console.error("책을 가져오는 데 실패했어요:", error);
  }
}

kyobo_best_1chBooks();
