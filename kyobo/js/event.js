const event_list = async () => {
  try {
    const response = await fetch(
      "https://yundanbi.github.io/html_study/kyobo/json/event.json"
    );
    if (!response.ok) throw new Error("데이터를 불러오는 데 실패했습니다.");

    const data = await response.json();

    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        $("#event").append(`
          <div id="event">
            <a href="#">
              <img src="${data[i].image}" alt="event" />
              <ul>
                <li>${data[i].title}</li>
              </ul>
            </a>
          </div>
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
  event_list();
});
