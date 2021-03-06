import React, { Component } from "react";
import "./Hero.scss";
import $ from "jquery";
import { SnakeLoading } from "../../../components/Loading";
import { Search } from "../../../components"
import { Link } from "react-router-dom"

export default class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      quotes: [],
    };
  }

  RandomQuotes(quote, author, btnChange = false, arrQuote, loopQuote) {
    let colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];

    let indexRand = Math.floor(Math.random() * 1643);

    let arrQuotes = arrQuote;
    let color = Math.floor(Math.random() * colors.length);

    $("#" + quote).animate({ opacity: 0 }, 500, function () {
      $(this).animate({ opacity: 1 }, 500);
      $("#" + quote).text(arrQuotes[indexRand].text);
    });
    if (btnChange === true) {
      $("#" + author).animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1, color: colors[color] }, 500);
        $(this).text("- " + arrQuotes[indexRand].author);
      });
    } else {
      $("#" + author).animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $(this).text("- " + arrQuotes[indexRand].author);
      });
    }

    $("blockquote").animate({ opacity: 0 }, 500, function () {
      $(this).animate({ opacity: 1 }, 500);
    });
    clearInterval(loopQuote);
    setInterval(loopQuote, 15000);
  }

  // async componentDidMount() {
  //   // if (localStorage.quotes == null) {
  //   let url = "https://type.fit/api/quotes";
  //   let response = await fetch(url);
  //   let data = await response.json();

  //   this.setState((state) => ({
  //     loading: true,
  //     quotes: data,
  //   }));

  //   let loopQuote = setInterval(
  //     () =>
  //       this.RandomQuotes(
  //         "quote",
  //         "author",
  //         true,
  //         this.state.quotes,
  //         loopQuote
  //       ),
  //     15000
  //   );

  //   $("#js-randomQuotes").click(() =>
  //     this.RandomQuotes("quote", "author", true, this.state.quotes, loopQuote)
  //   );
  // }

  render() {

    return (
      <div
        className="banner-blockquote"
        style={{
          backgroundImage: `url(https://www.ohanaliving.vn/542ac03681516bcca0dd605bedd41a2b.jpg)`,
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: "50rem",
        }}
      >
        <div className="container">
          <h1 className="Hero__title">FranceStay</h1>
          <div className="Hero__link">
            <Link to="/home/blog">Blog</Link>
            <Link to="/search/view-all/new-rooms">?????t ph??ng</Link>
            <Link to="/login">????ng nh???p</Link>
            <Link to="register">????ng k??</Link>
          </div>

          <p className="Hero__des" style={{ marginBottom: "15px", marginTop: "15px" }}>???ng d???ng t??m ki???m homestay mi???n ph?? cho ng?????i ??i thu?? h??ng ?????u Vi???t Nam</p>
          <div style={{ width: "520px" }}>
            <Search styles={{ height: "50px" }} />
          </div>
          <p className="Hero__des" style={{ fontSize: "24px", marginTop: "18px" }}>T???i app ngay ????? c?? tr???i nghi???m tuy???t v???i !</p>
          <div style={{ float: "left" }}>
            <img src="https://www.ohanaliving.vn/3f9605492bb7388bbc16f25a16778cbc.png" alt="download" style={{ width: "172px", height: "50px" }}></img>
            <img src="https://www.ohanaliving.vn/137381da1471b1c2ad438c213a34b0a4.png" alt="download" style={{ width: "172px", height: "50px", marginLeft: "10px" }}></img>
          </div>
        </div>
      </div>
    );
  }
}
