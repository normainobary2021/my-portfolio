const menuIcon = document.getElementById('hamburger');
const close = document.getElementById('close');
const menu = document.getElementById('mobile-menu');
const item = document.querySelector('#mobile-menu ul');

const popupMenu = document.getElementById('#popup');
const modalClose = document.querySelector('.close-btn');

const btn1 = document.getElementById('wkbtn1');
const btn2 = document.getElementById('wkbtn2');
const btn3 = document.getElementById('wkbtn3');
const btn4 = document.getElementById('wkbtn4');

const worksArray = [
  {
    id: '0',
    title: 'Tonic',
    close: '\u00D7',
    subheadText1: 'CANOPY',
    subheadText2: 'Back End Dev',
    subheadText3: '2015',
    image1: 'images/work1.svg',
    image2: 'images/work-1-lg.png',
    paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam assumenda aliquam repellat iusto, qui eligendi excepturi saepe deleniti. Et natus laborum quod adipisci",
    language1: 'html',
    language2: 'css',
    language3: 'javaScript',
    language4: 'github',
    language5: 'ruby',
    language6: 'bootstrap',
    liveBtn: 'https://normainobary2021.github.io/',
    sourceBtn: 'https://github.com/normainobary2021/my-portfolio',
  },

  {
    id: '1',
    title: 'Multi-Post Stories',
    close: '\u00D7',
    subheadText1: 'CANOPY',
    subheadText2: 'Back End Dev',
    subheadText3: '2015',
    image1: 'images/work2.svg',
    image2: 'images/work-2-lg.png',
    paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam assumenda aliquam repellat iusto, qui eligendi excepturi saepe deleniti. Et natus laborum quod adipisci",
    language1: 'html',
    language2: 'css',
    language3: 'javaScript',
    language4: 'github',
    language5: 'ruby',
    language6: 'bootstrap',
    liveBtn: 'https://normainobary2021.github.io/',
    sourceBtn: 'https://github.com/normainobary2021/my-portfolio',
  },

  {
    id: '2',
    title: 'Tonic',
    close: '\u00D7',
    subheadText1: 'CANOPY',
    subheadText2: 'Back End Dev',
    subheadText3: '2015',
    image1: 'images/work3.svg',
    image2: 'images/work-3-lg.png',
    paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam assumenda aliquam repellat iusto, qui eligendi excepturi saepe deleniti. Et natus laborum quod adipisci",
    language1: 'html',
    language2: 'css',
    language3: 'javaScript',
    language4: 'github',
    language5: 'ruby',
    language6: 'bootstrap',
    liveBtn: 'https://normainobary2021.github.io/',
    sourceBtn: 'https://github.com/normainobary2021/my-portfolio',
  },

  {
    id: '3',
    title: 'Multi-Post Stories',
    close: '\u00D7',
    subheadText1: 'CANOPY',
    subheadText2: 'Back End Dev',
    subheadText3: '2015',
    image1: 'images/work4.svg',
    image2: 'images/work-4-lg.png',
    paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam assumenda aliquam repellat iusto, qui eligendi excepturi saepe deleniti. Et natus laborum quod adipisci",
    language1: 'html',
    language2: 'css',
    language3: 'javaScript',
    language4: 'github',
    language5: 'ruby',
    language6: 'bootstrap',
    liveBtn: 'https://normainobary2021.github.io/',
    sourceBtn: 'https://github.com/normainobary2021/my-portfolio',
  },
];

[menuIcon,close,item].forEach((e) => {
  e.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('hidden');
    menu.classList.toggle('hidden');
  });
});

let j = 0;

function popup() {
  const popupScreen = document.querySelector('body');
  const popupDiv = document.createElement('div');
  const wrapperDiv = document.createElement('div');
  const wrapperHeadDiv = document.createElement('div');
  const divTitle = document.createElement('h2');
  const divSpan1 = document.createElement('span');
  const wrapperSubHeadDiv = document.createElement('div');
  const workSubText = document.createElement('p');
  const dotSpan1 = document.createElement('span');
  const descrSpan1 = document.createElement('span');
  const dotSpan2 = document.createElement('span');
  const descrSpan2 = document.createElement('span');
  const wrapperImageDiv = document.createElement('div');
  const workImageDiv = document.createElement('div');
  const imageItem1 = document.createElement('img');
  const wrapperTextDiv = document.createElement('div');
  const wrapperTextP1 = document.createElement('p');
  const wrapperTextP2 = document.createElement('p');
  const p2Span1 = document.createElement('span');
  const p2Span2 = document.createElement('span');
  const p2Span3 = document.createElement('span');
  const hr = document.createElement('hr');
  const wrapperBtnDiv = document.createElement('div');
  const wrapperBtn1 = document.createElement('a');
  const wrapperIBtn1 = document.createElement('i');
  const wrapperIBtn2 = document.createElement('i');
  const wrapperBtn2 = document.createElement('a');
  const fullModalDiv = document.createElement('div');
  const fullImgDiv = document.createElement('div');
  const fullDivImg = document.createElement('img');
  const fullMdlTxtDiv = document.createElement('div');
  const fullMdlP1 = document.createElement('p');
  const fullMdlP2 = document.createElement('p');
  const fullSpan1 = document.createElement('span');
  const fullSpan2 = document.createElement('span');
  const fullSpan3 = document.createElement('span');
  const fullMdlP3 = document.createElement('p');
  const fullSpan4 = document.createElement('span');
  const fullSpan5 = document.createElement('span');
  const fullSpan6 = document.createElement('span');
  const seeLiveBtn = document.createElement('button');
  const seeLiveI = document.createElement('i');
  const seeSourceBtn = document.createElement('button');
  const seeSourceI = document.createElement('i');

  popupDiv.className = 'overlay';
  wrapperDiv.className = 'wrapper';
  wrapperHeadDiv.className = 'wrapper-head';
  divSpan1.className = 'close-btn';
  wrapperSubHeadDiv.className = 'wrapper-sub-head';
  workSubText.className = 'work-subtext';
  dotSpan1.className = 'dot';
  descrSpan1.className = 'description';
  dotSpan2.className = 'dot';
  descrSpan2.className = 'description';
  wrapperImageDiv.className = 'wrapper-img';
  workImageDiv.className = 'work-image';
  wrapperTextDiv.className = 'wrapper-text';
  wrapperTextP1.className = 'long-paragraph';
  p2Span1.className = 'span1';
  p2Span2.className = 'span2';
  p2Span3.className = 'span3';
  fullSpan1.className = 'span4';
  fullSpan2.className = 'span5';
  fullSpan3.className = 'span6';
  fullSpan4.className = 'span7';
  fullSpan5.className = 'span8';
  fullSpan6.className = 'span9';
  wrapperBtnDiv.className = 'wrapper-btns';
  wrapperBtn1.className = 'btnA';
  wrapperBtn2.className = 'btnB';
  wrapperIBtn1.classList.add('bi','bi-box-arrow-up-right');
  wrapperIBtn2.classList.add('bi','bi-github');
  fullModalDiv.className = 'mdl-fullscreen';
  fullImgDiv.className = 'work-image-large';
  fullMdlTxtDiv.className = 'mdl-text';
  seeLiveBtn.className = 'btnA';
  seeSourceBtn.className = 'btnB';
  seeLiveI.classList.add('bi','bi-box-arrow-up-right');
  seeSourceI.classList.add('bi','bi-github');


  popupScreen.appendChild(popupDiv);
  popupDiv.appendChild(wrapperDiv);
  wrapperDiv.appendChild(wrapperHeadDiv);
  wrapperHeadDiv.appendChild(divTitle);
  wrapperHeadDiv.appendChild(divSpan1);
  wrapperDiv.appendChild(wrapperSubHeadDiv);
  wrapperSubHeadDiv.appendChild(workSubText);
  workSubText.appendChild(dotSpan1);
  workSubText.appendChild(descrSpan1);
  workSubText.appendChild(dotSpan2);
  workSubText.appendChild(descrSpan2);
  wrapperDiv.appendChild(wrapperImageDiv);
  wrapperImageDiv.appendChild(workImageDiv);
  workImageDiv.appendChild(imageItem1);
  wrapperDiv.appendChild(wrapperTextDiv);
  wrapperTextDiv.appendChild(wrapperTextP1);
  wrapperTextDiv.appendChild(wrapperTextP2);
  wrapperTextP2.appendChild(p2Span1);
  wrapperTextP2.appendChild(p2Span2);
  wrapperTextP2.appendChild(p2Span3);
  wrapperTextDiv.appendChild(hr);
  wrapperDiv.appendChild(wrapperBtnDiv);
  wrapperBtnDiv.appendChild(wrapperBtn1);
  wrapperBtn1.appendChild(wrapperIBtn1);
  wrapperBtnDiv.appendChild(wrapperBtn2);
  wrapperBtn2.appendChild(wrapperIBtn2);
  wrapperDiv.appendChild(fullModalDiv);
  fullModalDiv.appendChild(fullImgDiv);
  fullImgDiv.appendChild(fullDivImg);
  fullModalDiv.appendChild(fullMdlTxtDiv);
  fullMdlTxtDiv.appendChild(fullMdlP1);
  fullMdlTxtDiv.appendChild(fullMdlP2);
  fullMdlP2.appendChild(fullSpan1);
  fullMdlP2.appendChild(fullSpan2);
  fullMdlP2.appendChild(fullSpan3);
  fullMdlTxtDiv.appendChild(fullMdlP3);
  fullMdlP3.appendChild(fullSpan4);
  fullMdlP3.appendChild(fullSpan5);
  fullMdlP3.appendChild(fullSpan6);
  fullMdlTxtDiv.appendChild(seeLiveBtn);
  seeLiveBtn.appendChild(seeLiveI);
  fullMdlTxtDiv.appendChild(seeSourceBtn);
  seeSourceBtn.appendChild(seeSourceI);

  const workSub = `${worksArray[j].subheadText1}\u00A0\u00A0${worksArray[j].subheadText2}\u00A0\u00A0${worksArray[j].subheadText3}`;

  document.querySelector('.wrapper-head h2').textContent = worksArray[j].title;
  document.querySelector('.close-btn').textContent = worksArray[j].close;
  document.querySelector('.wrapper-sub-head .work-subtext').textContent = workSub;

  document.querySelector('.wrapper-img .work-image img').src = worksArray[j].image1;
  document.querySelector('.mdl-fullscreen .work-image-large img').src = worksArray[j].image2;

  document.querySelector('.wrapper-text .long-paragraph').textContent = worksArray[j].paragraph;
  document.querySelector('.wrapper-text p .span1').textContent = worksArray[j].language1;
  document.querySelector('.wrapper-text p .span2').textContent = worksArray[j].language2;
  document.querySelector('.wrapper-text p .span3').textContent = worksArray[j].language3;

  document.querySelector('.mdl-fullscreen .mdl-text p').textContent = worksArray[j].paragraph;
  document.querySelector('.mdl-fullscreen .mdl-text p .span4').textContent = worksArray[j].language1;
  document.querySelector('.mdl-fullscreen .mdl-text p .span5').textContent = worksArray[j].language2;
  document.querySelector('.mdl-fullscreen .mdl-text p .span6').textContent = worksArray[j].language3;
  document.querySelector('.mdl-fullscreen .mdl-text p .span7').textContent = worksArray[j].language4;
  document.querySelector('.mdl-fullscreen .mdl-text p .span8').textContent = worksArray[j].language5;
  document.querySelector('.mdl-fullscreen .mdl-text p .span9').textContent = worksArray[j].language6;

  document.querySelector('.wrapper .wrapper-btns .btnA').textContent = 'See Live';
  document.querySelector('.wrapper .wrapper-btns .btnB').textContent = 'See Source';
  document.querySelector('.mdl-fullscreen .mdl-text .btnA').textContent = 'See Live';
  document.querySelector('.mdl-fullscreen .mdl-text .btnB').textContent = 'See Source';


  divSpan1.addEventListener('click', () => {
    popupDiv.remove();
  });

  seeLiveBtn.addEventListener('click', () => {
    window.open(worksArray[j].liveBtn);
  });

  seeSourceBtn.addEventListener('click', () => {
    window.open(worksArray[j].sourceBtn);
  });


}

btn1.addEventListener('click', () => {
  j=0;
  popup();
});

btn2.addEventListener('click', () => {
  j=1;
  popup();
});

btn3.addEventListener('click', () => {
  j=2;
  popup();
});

btn4.addEventListener('click', () => {
  j=3;
  popup();
});