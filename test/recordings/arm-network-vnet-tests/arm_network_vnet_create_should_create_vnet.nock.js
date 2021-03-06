// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-vnet?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-vnet' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '96f30079-0b22-41a9-86a4-aebe83c49a3a',
  'x-ms-correlation-request-id': '96f30079-0b22-41a9-86a4-aebe83c49a3a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T084029Z:96f30079-0b22-41a9-86a4-aebe83c49a3a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 08:40:28 GMT',
  connection: 'close',
  'content-length': '107' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-vnet?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-vnet' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '96f30079-0b22-41a9-86a4-aebe83c49a3a',
  'x-ms-correlation-request-id': '96f30079-0b22-41a9-86a4-aebe83c49a3a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T084029Z:96f30079-0b22-41a9-86a4-aebe83c49a3a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 08:40:28 GMT',
  connection: 'close',
  'content-length': '107' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-vnet?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet\",\"name\":\"xplat-test-vnet\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '193',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'f35a17e7-bcb9-4621-958f-92e342b854ad',
  'x-ms-correlation-request-id': 'f35a17e7-bcb9-4621-958f-92e342b854ad',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T084031Z:f35a17e7-bcb9-4621-958f-92e342b854ad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 08:40:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-vnet?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet\",\"name\":\"xplat-test-vnet\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '193',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'f35a17e7-bcb9-4621-958f-92e342b854ad',
  'x-ms-correlation-request-id': 'f35a17e7-bcb9-4621-958f-92e342b854ad',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T084031Z:f35a17e7-bcb9-4621-958f-92e342b854ad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 08:40:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/test-vnet' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b66642b6-1c38-4d88-8ebe-bbaebb1b4d00',
  'x-ms-correlation-request-id': 'b66642b6-1c38-4d88-8ebe-bbaebb1b4d00',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T084033Z:b66642b6-1c38-4d88-8ebe-bbaebb1b4d00',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 08:40:33 GMT',
  connection: 'close',
  'content-length': '162' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/test-vnet' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'b66642b6-1c38-4d88-8ebe-bbaebb1b4d00',
  'x-ms-correlation-request-id': 'b66642b6-1c38-4d88-8ebe-bbaebb1b4d00',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T084033Z:b66642b6-1c38-4d88-8ebe-bbaebb1b4d00',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 17 Feb 2016 08:40:33 GMT',
  connection: 'close',
  'content-length': '162' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"88c6f315-e239-4490-b9a6-82c52688fd41\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"236ed3d8-eecc-488a-a79a-6ae658d8f2f5\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"192.168.1.1\"\r\n      ]\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '683',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '04530acb-43a5-4344-a63f-52e58a9133ca',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/04530acb-43a5-4344-a63f-52e58a9133ca?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '7619f843-a4ab-4424-8e67-e8be39842b79',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T084037Z:7619f843-a4ab-4424-8e67-e8be39842b79',
  date: 'Wed, 17 Feb 2016 08:40:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"88c6f315-e239-4490-b9a6-82c52688fd41\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"236ed3d8-eecc-488a-a79a-6ae658d8f2f5\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"192.168.1.1\"\r\n      ]\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '683',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '04530acb-43a5-4344-a63f-52e58a9133ca',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/04530acb-43a5-4344-a63f-52e58a9133ca?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '7619f843-a4ab-4424-8e67-e8be39842b79',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T084037Z:7619f843-a4ab-4424-8e67-e8be39842b79',
  date: 'Wed, 17 Feb 2016 08:40:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/04530acb-43a5-4344-a63f-52e58a9133ca?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7f48472d-ad53-405e-b3bf-4e0721c5d2f5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '5e9c69bc-7ab6-4063-bd1c-7d760bd7c178',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T084107Z:5e9c69bc-7ab6-4063-bd1c-7d760bd7c178',
  date: 'Wed, 17 Feb 2016 08:41:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/04530acb-43a5-4344-a63f-52e58a9133ca?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7f48472d-ad53-405e-b3bf-4e0721c5d2f5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '5e9c69bc-7ab6-4063-bd1c-7d760bd7c178',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T084107Z:5e9c69bc-7ab6-4063-bd1c-7d760bd7c178',
  date: 'Wed, 17 Feb 2016 08:41:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"2f030d5b-63d3-4b0b-aa50-b245647d3ccf\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"236ed3d8-eecc-488a-a79a-6ae658d8f2f5\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"192.168.1.1\"\r\n      ]\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '684',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2f030d5b-63d3-4b0b-aa50-b245647d3ccf"',
  'x-ms-request-id': 'd57ea8c4-648f-4ff6-826d-07b96c9f7a7c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'bbf0e8ac-5087-4fe1-8a10-2dd483a8bf96',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T084108Z:bbf0e8ac-5087-4fe1-8a10-2dd483a8bf96',
  date: 'Wed, 17 Feb 2016 08:41:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"2f030d5b-63d3-4b0b-aa50-b245647d3ccf\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"236ed3d8-eecc-488a-a79a-6ae658d8f2f5\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"192.168.1.1\"\r\n      ]\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '684',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2f030d5b-63d3-4b0b-aa50-b245647d3ccf"',
  'x-ms-request-id': 'd57ea8c4-648f-4ff6-826d-07b96c9f7a7c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'bbf0e8ac-5087-4fe1-8a10-2dd483a8bf96',
  'x-ms-routing-request-id': 'WESTEUROPE:20160217T084108Z:bbf0e8ac-5087-4fe1-8a10-2dd483a8bf96',
  date: 'Wed, 17 Feb 2016 08:41:08 GMT',
  connection: 'close' });
 return result; }]];