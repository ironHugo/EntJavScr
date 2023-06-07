import{estCab} from '../modulo/estCab.js';
import{estCue, agrResCon} from './estCue.js';
import{estPie} from './estPie.js';
export{main, cabecera, cuerpo, pie, links};

const main = () => { 
    let body = document.getElementsByTagName('body')[0];
    let main = document.createElement('main');
    body.appendChild(main);
}
const cabecera = () => { 
    let main = document.getElementsByTagName('main')[0];
    let header = document.createElement('header');
    estCab(header); 
    
    main.appendChild(header);
    document.querySelector('#menSup ul li:last-child a').click(); 
}
const cuerpo = () => { 
    let main = document.getElementsByTagName('main')[0];
    let section = document.createElement('section');
    estCue(section); 
    main.appendChild(section);
    agrResCon(); 
}

const pie = () => { 
    let main = document.getElementsByTagName('main')[0];
    let footer = document.createElement('footer');
    estPie(footer);
    main.appendChild(footer);
}
const links = () => { 
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', './style/estInd.css');
    head.appendChild(link);
}
