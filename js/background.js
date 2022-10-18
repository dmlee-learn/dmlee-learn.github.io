const backgrounds = ['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg'];

const backgroundObj = {
    backgrounds:['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg']

    , init:(backgroundDiv) => {
        const ct = backgroundObj.backgrounds.length;
        const ramdom = Math.floor(Math.random() * (ct - 0) + 0);
        const bgimage = document.querySelector(`#${backgroundDiv}`);
        bgimage.style = `background-image: URL(./image/bg/${backgroundObj.backgrounds[ramdom]});background-size:100% 100%;width:100%;height:100%;padding: 10px;`;
    }

};