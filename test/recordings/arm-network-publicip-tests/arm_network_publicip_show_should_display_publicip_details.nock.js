// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382/?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"armpublicip8382\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382\",\r\n  \"etag\": \"W/\\\"66fa66d4-f928-4aee-9c0a-18d121239fae\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\",\r\n    \"tag2\": \"testValue2\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"8343b4ff-a00d-4fc2-833a-4a1d788ad082\",\r\n    \"ipAddress\": \"40.112.149.118\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 6,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip\",\r\n      \"fqdn\": \"dnstestpubip.westus.cloudapp.azure.com\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '763',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"66fa66d4-f928-4aee-9c0a-18d121239fae"',
  'x-ms-request-id': '51ded992-a215-4b59-a5e5-2923323c5bf4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-correlation-request-id': '24b89666-d1a9-4483-b395-d6f26797af17',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T133239Z:24b89666-d1a9-4483-b395-d6f26797af17',
  date: 'Tue, 29 Dec 2015 13:32:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382/?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"armpublicip8382\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382\",\r\n  \"etag\": \"W/\\\"66fa66d4-f928-4aee-9c0a-18d121239fae\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\",\r\n    \"tag2\": \"testValue2\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"8343b4ff-a00d-4fc2-833a-4a1d788ad082\",\r\n    \"ipAddress\": \"40.112.149.118\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 6,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip\",\r\n      \"fqdn\": \"dnstestpubip.westus.cloudapp.azure.com\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '763',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"66fa66d4-f928-4aee-9c0a-18d121239fae"',
  'x-ms-request-id': '51ded992-a215-4b59-a5e5-2923323c5bf4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-correlation-request-id': '24b89666-d1a9-4483-b395-d6f26797af17',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T133239Z:24b89666-d1a9-4483-b395-d6f26797af17',
  date: 'Tue, 29 Dec 2015 13:32:39 GMT',
  connection: 'close' });
 return result; }]];