import React, { useState } from "react";

import Cart from "./components/Cart";

function App() {

  const [chose, setChose] = useState(false);

  // try {
  //   async function fromServer () {
  //     fetch('adress/') // откуда взять информацию
  //     .then((res) => res.json())
  //     .then((json) => {
  //       // где то использовать например: setState(json.//обращение к объекту)    
  //     })
  //     infoFromServer(await fromServer())
  //   }
  // } catch (error) {
  //   console.warn(error);
  //   alert('ошибка получения данных');
  // }

  const handleChose = () => {
    setChose(!chose)
  }


  // ниже методом map отрисовываем карточки с базы данных, по выбранному id увеличивается в размере при выборе и
  // передаем на бэкенд, сохраняем то что выбрано 

  return (
    <div className="App">
      <h1>Ты сегодня покормил кота?</h1>
      <div className="cartWrapper">
        <Cart handleChose={handleChose} chose={chose} /> 
        <Cart handleChose={handleChose} chose={chose} />
        <Cart handleChose={handleChose} chose={chose} />
      </div>
    </div>
  );
}

export default App;
