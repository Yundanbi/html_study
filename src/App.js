import { useState, useEffect } from "react"; // useEffect 추가
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function App() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]); // data 상태 정의

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    fetch("https://yundanbi.github.io/html_study/product.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        console.log("데이터 불러옴:", data); // 확인
        setData(data);
      })
      .catch((error) => {
        console.error("데이터 불러오기 실패:", error);
      });
  }, []);

  return (
    <div className="App">
      <>
        <div className="coupon-banner">
          <div>지금 가입하고 최대 1만원 할인쿠폰 받아가세요</div>
        </div>

        <div id="banner">
          <div className="login">
            <ul>
              <li>
                <Link to="/signup">회원가입</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/login">로그인</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/help">고객센터</Link>
              </li>
            </ul>
          </div>

          <div id="middle-banner">
            <div id="middle-container">
              <div id="left-box">
                <div className="logo" />
                <div className="logo_right_name">
                  <ul>
                    <li className="purple">
                      <Link to="/home">마켓컬리</Link>
                    </li>
                    <li>|</li>
                    <li>
                      <Link to="#">뷰티컬리</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="search">
                <input type="text" placeholder="검색어를 입력해주세요" />
                <button type="submit">
                  <img src="/img/search.svg" alt="검색" />
                </button>
              </div>

              <div id="login_img">
                <Link to="#">
                  <img src="/img/login1.svg" alt="" />
                </Link>
                <Link to="#">
                  <img src="/img/login2.svg" alt="" />
                </Link>
                <Link to="cart">
                  <img src="/img/login3.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Navbar className="kurly-navbar">
          <Container className="kurly-container">
            <div className="navbar-center">
              <Nav className="center-menu">
                <img src="img/category.svg" alt="카테고리" />
                <Nav.Link href="#">카테고리</Nav.Link>
                <Nav.Link href="#">신상품</Nav.Link>
                <Nav.Link href="#">베스트</Nav.Link>
                <Nav.Link href="#">알뜰쇼핑</Nav.Link>
                <Nav.Link href="#">특가/혜택</Nav.Link>
              </Nav>
            </div>
          </Container>
        </Navbar>

        <div className="slider">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/slider/1.jpg"
                alt="slide1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/slider/2.png"
                alt="slide2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/slider/3.jpg"
                alt="slide3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/slider/4.jpg"
                alt="slide4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/slider/5.jpg"
                alt="slide5"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/slider/6.png"
                alt="slide5"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/slider/7.png"
                alt="slide5"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        {data && data.price && (
          <div className="product-box">
            <img src={data.thumbnail} alt={data.name} width="300" />
            <h2>{data.name}</h2>
            <p>{data.subname}</p>
            <p>
              <del>{data.price.original}</del>{" "}
              <strong>{data.price.discounted}원</strong>{" "}
              <span>({data.price.discountRate}%)</span>
            </p>
            <p>{data.delivery.desc}</p>
            <p>{data.allergy}</p>
          </div>
        )}
      </>
    </div>
  );
}

export default App;
