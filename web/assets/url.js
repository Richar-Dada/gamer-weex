var protocol = location.protocol + '//';
var hostname = typeof CURRENT_IP === 'string' ? window.CURRENT_IP : location.hostname;
var port = location.port ? ':' + location.port : '';
var url = protocol + hostname + port + '/dist/index.js';
