const backgrounds = ['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg'];

const getBackground = () => {
    //const img = document.querySelector('#imgDiv img');    
    const ct = backgrounds.length;
    const ramdom = Math.floor(Math.random() * (ct - 0) + 0);
    const bgimage = document.createElement('img');
    bgimage.src = `./image/bg/${backgrounds[ramdom]}`;
    document.body.appendChild(bgimage);
}

getBackground();