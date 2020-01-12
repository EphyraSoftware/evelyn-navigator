var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'EvelynNavigator',
    links: [{
      // Thanks to https://www.elastic.co/brand
      text: 'Kibana dashboard',
      href: 'http://kibana.evelyn.internal:32112',
      img: '/images/logo-kibana-64-color.svg'
    }, {
      // Thanks to https://www.isc.org/images/Bind_9_ISC_Blue_320x320.png
      text: 'Webmin DNS',
      href: 'https://dns.evelyn.internal:10000',
      img: '/images/Bind_9_ISC_Blue_320x320.png'
    }, {
      // Thanks to https://i.pinimg.com/originals/1e/72/3f/1e723f8d7a825c55624d1c3fb81b33ea.png
      text: 'Evelyn NAS',
      href: 'https://nas.evelyn.internal/',
      img: '/images/nas.png'
    }, {
      // Thanks to https://www.hashicorp.com/brand
      text: 'Hashicorp Vault',
      href: 'https://vault.evelyn.internal:31011',
      img: '/images/Vault_PrimaryLogo_Black.svg'
    }, {
      // Thanks to https://www.keycloak.org/resources/images/keycloak_logo_480x108.png
      text: 'KeyCloak',
      href: 'https://keycloak.evelyn.internal:31739',
      img: '/images/keycloak_logo_480x108.png'
    }, {
      // https://www.rabbitmq.com/trademark-guidelines.html
      text: 'RabbitMQ management console',
      href: 'http://rabbit.evelyn.internal:32233',
      img: '/images/rabbitmq_logo_strap.webp'
    }, {
      // Thanks to https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/115px-Prometheus_software_logo.svg.png
      text: 'Prometheus server',
      href: 'http://prometheus.evelyn.internal:30235',
      img: '/images/115px-Prometheus_software_logo.svg.png'
    }]
  });
});

module.exports = router;
