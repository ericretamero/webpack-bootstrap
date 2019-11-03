import Person from './person'
import './../css/style.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const eric = new Person('eric')
eric.greet();


function showName() {
    console.log('showName')
}
// window.showName = showName;


// showName();

// document.getElementById("name").addEventListener("click", () => {
//     console.log('showName')
// })