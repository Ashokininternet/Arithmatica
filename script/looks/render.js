import {data} from '../data/data-bottom.js'

RenderBottom();

function RenderBottom(){
    let dataHtml = ``;

    data.forEach((data)=>{
        dataHtml+= `
        <a href="${data.link}" id="a">${data.name}</a>
        `;
    });

    document.querySelector('#more-options').innerHTML = dataHtml;
};
