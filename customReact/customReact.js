function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (let prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}
const reactElement = {
    type: 'a',
    props: {
        target: '_blank',
        href: 'https://google.com'
    },
    children: 'Cick me to go to google.com '
}
const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
