import './devFooterStyle.css';

const devFooter = (() => {
  const add = () => {
    const footerDiv = document.getElementById('devFooter');
    footerDiv.innerText = 'Copyright © 2021 devLuisTorres';
    const githubLogo = new Image();
    githubLogo.src = 'https://www.svgrepo.com/show/503359/github.svg';
    footerDiv.appendChild(githubLogo);
    githubLogo.addEventListener('click', () => {
      window.open('https://github.com/dvluistorres', '_blank');
    });
  };
  return { add };
})();

export default devFooter
