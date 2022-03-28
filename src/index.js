import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styles from "./index.module.css";
//стили подключил через module.
import Clock from "./clock";
import Counter from "./counter";
import Toggle from "./toggle";

const ParentComponent = () => {
  // const age = 23;
  // const films = [
  //   { title: "film1", year: 2020 },
  //   { title: "film2", year: 2019 },
  // ];
  const message = { dialog: "How are you doing? I'm great! How are you?" };

  // const handleClick = () => {
  //   console.log("click");
  // };

  return (
    <div>
      {/* <h1>Parent Hello React</h1> */}
      {/* <ClassComponent age={age} films={films} handleClick={handleClick} />
      <BannerComponent age={age} films={films} handleClick={handleClick} />
      <FunctionsComponent age={age} films={films} handleClick={handleClick} /> */}
      <MessageComponent message={message} />
    </div>
  );
};

// const FilmsList = ({ films, title }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <hr />
//       {films.map((film) => {
//         return (
//           <div>
//             <h2>Title: {film.title}</h2>
//             <h2>Year: {film.year}</h2>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// class ClassComponent extends React.Component {
//   render() {
//     console.log("this", this.props);

//     const { age, films } = this.props;

//     return (
//       <div>
//         <h1>Hello Class Component</h1>
//         {/* <h2>Age: {this.props.age}</h2> */}
//         <h2>Age: {age}</h2>
//         <FilmsList films={films} title="Films from class" />
//       </div>
//     );
//   }
// }

// function FunctionsComponent({ age, films, handleClick }) {
//   // console.log("props", props);

//   return (
//     <div className={styles.firstComponent__h1}>
//       <h1 onClick={handleClick}>Hello FunctionsComponent(click)</h1>
//       <h2>Age: {age}</h2>
//       <FilmsList films={films} title="Films from function" />
//     </div>
//   );
// }

// function BannerComponent({ age, films }) {
//   return (
//     <div className={styles.banner}>
//       <h1>Over there is your sales banner!!!</h1>
//       <FilmsList films={films} title="Films from banner" />
//     </div>
//   );
// }

function MessageComponent({ message }) {
  return (
    <div className={styles.message__banner}>
      <h1>Dialog: {message.dialog}</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <div className={styles.container}>
      <ParentComponent />
      <Clock />
      <Counter />
      <Toggle />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
