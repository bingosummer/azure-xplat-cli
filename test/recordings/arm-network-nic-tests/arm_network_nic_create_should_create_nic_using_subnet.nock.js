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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-nic?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-nic' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '9d03d478-5dbc-49d4-8502-815fc10913be',
  'x-ms-correlation-request-id': '9d03d478-5dbc-49d4-8502-815fc10913be',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135221Z:9d03d478-5dbc-49d4-8502-815fc10913be',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 10 Feb 2016 13:52:21 GMT',
  connection: 'close',
  'content-length': '106' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-nic?api-version=2015-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-nic' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': '9d03d478-5dbc-49d4-8502-815fc10913be',
  'x-ms-correlation-request-id': '9d03d478-5dbc-49d4-8502-815fc10913be',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135221Z:9d03d478-5dbc-49d4-8502-815fc10913be',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 10 Feb 2016 13:52:21 GMT',
  connection: 'close',
  'content-length': '106' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-nic?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic\",\"name\":\"xplat-test-nic\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-request-id': 'b8412ec9-0e84-44e8-b211-ac504a81a198',
  'x-ms-correlation-request-id': 'b8412ec9-0e84-44e8-b211-ac504a81a198',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135223Z:b8412ec9-0e84-44e8-b211-ac504a81a198',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 10 Feb 2016 13:52:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-nic?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic\",\"name\":\"xplat-test-nic\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-request-id': 'b8412ec9-0e84-44e8-b211-ac504a81a198',
  'x-ms-correlation-request-id': 'b8412ec9-0e84-44e8-b211-ac504a81a198',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135223Z:b8412ec9-0e84-44e8-b211-ac504a81a198',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 10 Feb 2016 13:52:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/test-vnet' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0e46637b-98b2-49f7-a711-a7e02b11897a',
  'x-ms-correlation-request-id': '0e46637b-98b2-49f7-a711-a7e02b11897a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135227Z:0e46637b-98b2-49f7-a711-a7e02b11897a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 10 Feb 2016 13:52:27 GMT',
  connection: 'close',
  'content-length': '161' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/test-vnet' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0e46637b-98b2-49f7-a711-a7e02b11897a',
  'x-ms-correlation-request-id': '0e46637b-98b2-49f7-a711-a7e02b11897a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135227Z:0e46637b-98b2-49f7-a711-a7e02b11897a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 10 Feb 2016 13:52:27 GMT',
  connection: 'close',
  'content-length': '161' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"8f3d48d6-bce8-4949-b439-ee08f3f4c01f\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"3e344e27-aa67-4b45-9f8f-2873fa8a811f\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": []\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '592',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '8db71bc3-083f-4d43-9d56-18fe8ce87095',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/8db71bc3-083f-4d43-9d56-18fe8ce87095?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '12fb9bef-f1d0-42b0-a989-ab40201d54ca',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135229Z:12fb9bef-f1d0-42b0-a989-ab40201d54ca',
  date: 'Wed, 10 Feb 2016 13:52:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"8f3d48d6-bce8-4949-b439-ee08f3f4c01f\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"3e344e27-aa67-4b45-9f8f-2873fa8a811f\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": []\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '592',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '8db71bc3-083f-4d43-9d56-18fe8ce87095',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/8db71bc3-083f-4d43-9d56-18fe8ce87095?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '12fb9bef-f1d0-42b0-a989-ab40201d54ca',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135229Z:12fb9bef-f1d0-42b0-a989-ab40201d54ca',
  date: 'Wed, 10 Feb 2016 13:52:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/8db71bc3-083f-4d43-9d56-18fe8ce87095?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5f63dbb3-1413-4a5d-89c6-7fa26c870280',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '5ef3bbb2-ebf1-423e-908a-2cfae8208f20',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135301Z:5ef3bbb2-ebf1-423e-908a-2cfae8208f20',
  date: 'Wed, 10 Feb 2016 13:53:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/8db71bc3-083f-4d43-9d56-18fe8ce87095?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5f63dbb3-1413-4a5d-89c6-7fa26c870280',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '5ef3bbb2-ebf1-423e-908a-2cfae8208f20',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135301Z:5ef3bbb2-ebf1-423e-908a-2cfae8208f20',
  date: 'Wed, 10 Feb 2016 13:53:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"a13487b6-7a39-49ad-a6d8-fdf417692f46\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"3e344e27-aa67-4b45-9f8f-2873fa8a811f\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": []\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '593',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a13487b6-7a39-49ad-a6d8-fdf417692f46"',
  'x-ms-request-id': '7caeec58-6656-4b19-92fa-e875a88541d5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '95893789-a5ee-4c81-a08f-cf9c7138e66f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135301Z:95893789-a5ee-4c81-a08f-cf9c7138e66f',
  date: 'Wed, 10 Feb 2016 13:53:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"a13487b6-7a39-49ad-a6d8-fdf417692f46\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"3e344e27-aa67-4b45-9f8f-2873fa8a811f\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": []\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '593',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a13487b6-7a39-49ad-a6d8-fdf417692f46"',
  'x-ms-request-id': '7caeec58-6656-4b19-92fa-e875a88541d5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '95893789-a5ee-4c81-a08f-cf9c7138e66f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135301Z:95893789-a5ee-4c81-a08f-cf9c7138e66f',
  date: 'Wed, 10 Feb 2016 13:53:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"a13487b6-7a39-49ad-a6d8-fdf417692f46\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"3e344e27-aa67-4b45-9f8f-2873fa8a811f\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": []\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '593',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a13487b6-7a39-49ad-a6d8-fdf417692f46"',
  'x-ms-request-id': 'c4a6684e-f89f-4154-a661-f3c7c9a58642',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '34a3a8ab-8f90-4654-a37f-e88b85333b54',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135303Z:34a3a8ab-8f90-4654-a37f-e88b85333b54',
  date: 'Wed, 10 Feb 2016 13:53:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"a13487b6-7a39-49ad-a6d8-fdf417692f46\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"3e344e27-aa67-4b45-9f8f-2873fa8a811f\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": []\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '593',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"a13487b6-7a39-49ad-a6d8-fdf417692f46"',
  'x-ms-request-id': 'c4a6684e-f89f-4154-a661-f3c7c9a58642',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '34a3a8ab-8f90-4654-a37f-e88b85333b54',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135303Z:34a3a8ab-8f90-4654-a37f-e88b85333b54',
  date: 'Wed, 10 Feb 2016 13:53:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualnetworks/test-vnet/subnets/test-subnet?api-version=2015-06-15')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '262',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '08ab573a-cb6d-428f-8c4c-37cba89aa602',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'a17df8be-31e8-43ce-9001-4063cf06fac1',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135304Z:a17df8be-31e8-43ce-9001-4063cf06fac1',
  date: 'Wed, 10 Feb 2016 13:53:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualnetworks/test-vnet/subnets/test-subnet?api-version=2015-06-15')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '262',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '08ab573a-cb6d-428f-8c4c-37cba89aa602',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'a17df8be-31e8-43ce-9001-4063cf06fac1',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135304Z:a17df8be-31e8-43ce-9001-4063cf06fac1',
  date: 'Wed, 10 Feb 2016 13:53:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualnetworks/test-vnet/subnets/test-subnet?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-subnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\",\r\n  \"etag\": \"W/\\\"0491cacf-60a8-4957-84ee-d761239ef322\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/24\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '353',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '9ca5d821-5400-4983-a787-b85dab85ed3c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/9ca5d821-5400-4983-a787-b85dab85ed3c?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'ac916c46-d9a6-4141-9e0c-18f829e5a374',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135305Z:ac916c46-d9a6-4141-9e0c-18f829e5a374',
  date: 'Wed, 10 Feb 2016 13:53:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualnetworks/test-vnet/subnets/test-subnet?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-subnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\",\r\n  \"etag\": \"W/\\\"0491cacf-60a8-4957-84ee-d761239ef322\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/24\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '353',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '9ca5d821-5400-4983-a787-b85dab85ed3c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/9ca5d821-5400-4983-a787-b85dab85ed3c?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'ac916c46-d9a6-4141-9e0c-18f829e5a374',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135305Z:ac916c46-d9a6-4141-9e0c-18f829e5a374',
  date: 'Wed, 10 Feb 2016 13:53:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/9ca5d821-5400-4983-a787-b85dab85ed3c?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'efe03c6c-a3be-4be9-805d-5ed6eda5a334',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '97f61676-278d-4584-b586-3d472f1f2ddb',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135335Z:97f61676-278d-4584-b586-3d472f1f2ddb',
  date: 'Wed, 10 Feb 2016 13:53:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/9ca5d821-5400-4983-a787-b85dab85ed3c?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'efe03c6c-a3be-4be9-805d-5ed6eda5a334',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '97f61676-278d-4584-b586-3d472f1f2ddb',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135335Z:97f61676-278d-4584-b586-3d472f1f2ddb',
  date: 'Wed, 10 Feb 2016 13:53:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualnetworks/test-vnet/subnets/test-subnet?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-subnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\",\r\n  \"etag\": \"W/\\\"b4125f86-0af8-4a3b-827d-b706af3a5d55\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/24\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '354',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"b4125f86-0af8-4a3b-827d-b706af3a5d55"',
  'x-ms-request-id': '08df8bc4-f774-4957-87f4-4534911d93f1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '3a5a8615-7a7d-4c38-84b7-2d44aaba60a6',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135336Z:3a5a8615-7a7d-4c38-84b7-2d44aaba60a6',
  date: 'Wed, 10 Feb 2016 13:53:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualnetworks/test-vnet/subnets/test-subnet?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-subnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\",\r\n  \"etag\": \"W/\\\"b4125f86-0af8-4a3b-827d-b706af3a5d55\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/24\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '354',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"b4125f86-0af8-4a3b-827d-b706af3a5d55"',
  'x-ms-request-id': '08df8bc4-f774-4957-87f4-4534911d93f1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '3a5a8615-7a7d-4c38-84b7-2d44aaba60a6',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135336Z:3a5a8615-7a7d-4c38-84b7-2d44aaba60a6',
  date: 'Wed, 10 Feb 2016 13:53:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/test-nic' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'df5ea371-94b4-4ad0-860a-3648ac5dafbf',
  'x-ms-correlation-request-id': 'df5ea371-94b4-4ad0-860a-3648ac5dafbf',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135338Z:df5ea371-94b4-4ad0-860a-3648ac5dafbf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 10 Feb 2016 13:53:38 GMT',
  connection: 'close',
  'content-length': '162' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2015-06-15')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/test-nic' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'df5ea371-94b4-4ad0-860a-3648ac5dafbf',
  'x-ms-correlation-request-id': 'df5ea371-94b4-4ad0-860a-3648ac5dafbf',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135338Z:df5ea371-94b4-4ad0-860a-3648ac5dafbf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 10 Feb 2016 13:53:38 GMT',
  connection: 'close',
  'content-length': '162' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"41338fc2-9eb9-4fc1-a385-5f22946772ae\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f1d32864-f5df-44ac-8b30-1a519793352a\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"Nic-IP-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/Nic-IP-config\",\r\n        \"etag\": \"W/\\\"41338fc2-9eb9-4fc1-a385-5f22946772ae\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.22\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-foo\",\r\n      \"internalFqdn\": \"internal-dns-foo.e3hdipthvjcuxh2pfbz5vcubdh.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1507',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'aa59b85b-33b8-4ab2-9a0a-6459b7a3151a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/aa59b85b-33b8-4ab2-9a0a-6459b7a3151a?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '5ffa3508-f0d4-4c17-a9a7-3ffa770b9a8d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135341Z:5ffa3508-f0d4-4c17-a9a7-3ffa770b9a8d',
  date: 'Wed, 10 Feb 2016 13:53:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"41338fc2-9eb9-4fc1-a385-5f22946772ae\\\"\",\r\n  \"type\": \"Microsoft.Network/networkInterfaces\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f1d32864-f5df-44ac-8b30-1a519793352a\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"Nic-IP-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/Nic-IP-config\",\r\n        \"etag\": \"W/\\\"41338fc2-9eb9-4fc1-a385-5f22946772ae\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.22\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-foo\",\r\n      \"internalFqdn\": \"internal-dns-foo.e3hdipthvjcuxh2pfbz5vcubdh.bx.internal.cloudapp.net\"\r\n    },\r\n    \"enableIPForwarding\": false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1507',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'aa59b85b-33b8-4ab2-9a0a-6459b7a3151a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/aa59b85b-33b8-4ab2-9a0a-6459b7a3151a?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '5ffa3508-f0d4-4c17-a9a7-3ffa770b9a8d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160210T135341Z:5ffa3508-f0d4-4c17-a9a7-3ffa770b9a8d',
  date: 'Wed, 10 Feb 2016 13:53:40 GMT',
  connection: 'close' });
 return result; }]];