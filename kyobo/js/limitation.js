const REST_API_KEY_speech = "071d884bcf93ef15ab325924977ca231";

async function speech() {
  const query = "강연 ";
  const url = `https://dapi.kakao.com/v3/search/book?query=${encodeURIComponent(
    query
  )}&size=6`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `KakaoAK ${REST_API_KEY_speech}`,
      },
    });

    if (!response.ok) {
      throw new Error("네트워크 응답에 문제가 있어요!");
    }

    const data = await response.json();

    const list = document.getElementById("Pronunciation");
    list.innerHTML = data.documents
      .map(
        (book) => `
        <a href="#">
          <div style="padding:10px; margin:10px; width:180px;">
            <img src="${book.thumbnail}" alt="썸네일" style="width:100%; height:200px; object-fit:cover;">
            <h3 style="font-size:16px; margin:10px 0;">${book.title}</h3></a>
            
          </div>
        `
      )
      .join("");
  } catch (error) {
    console.error("책을 가져오는 데 실패했어요:", error);
  }
}

speech();
