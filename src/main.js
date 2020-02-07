export { appName, init };

const appName = 'Neutron';

document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log('App ready: ' + appName);
}
