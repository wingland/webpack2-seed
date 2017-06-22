import _ from 'lodash';
import './styles/main.css';
import 'font-awesome/css/font-awesome.min.css';
import BrandImg from './assets/brand.png';
import Library from './library';

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    element.classList.add('world');
    var image = new Image();
    image.src = BrandImg;
    element.appendChild(image);
    var cameronIcon = document.createElement('i');
    cameronIcon.classList.add('fa');
    cameronIcon.classList.add('fa-camera-retro');
    element.appendChild(cameronIcon);

    return element;
}

document.body.appendChild(component());


if (module.hot) {
    module.hot.accept('./library', function() {
        console.log('Accepting the updated library module!');
        Library.log();
    })
}