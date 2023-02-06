// This is a JavaScript file

// импортируем функцию
import { getMap } from './map.js'

// находим кнопку и добавляем к ней обработчик
document.getElementById('my_position').onclick = () => {
  navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true
  })
}

function success({ coords }) {
  const { latitude, longitude } = coords
  const currentPosition = [latitude, longitude]
  // вызываем функцию, передавая ей текущую позицию и сообщение
  getMap(currentPosition, 'Ваше местоположение')
}

function error({ message }) {
  console.log(message)
}