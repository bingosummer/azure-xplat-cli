// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/Microsoft.Compute/artifacttypes/vmextension/types/BGInfo/versions?api-version=2015-06-15')
  .reply(200, "[\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"2.1\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/BGInfo/Versions/2.1\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '266',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '50321d24-f0a8-492b-837b-63f39537b630',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14959',
  'x-ms-correlation-request-id': '09e6ed97-6e44-474c-907b-fa52cd24953d',
  'x-ms-routing-request-id': 'WESTUS:20160218T030046Z:09e6ed97-6e44-474c-907b-fa52cd24953d',
  date: 'Thu, 18 Feb 2016 03:00:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/Microsoft.Compute/artifacttypes/vmextension/types/BGInfo/versions?api-version=2015-06-15')
  .reply(200, "[\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"2.1\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/BGInfo/Versions/2.1\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '266',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '50321d24-f0a8-492b-837b-63f39537b630',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14959',
  'x-ms-correlation-request-id': '09e6ed97-6e44-474c-907b-fa52cd24953d',
  'x-ms-routing-request-id': 'WESTUS:20160218T030046Z:09e6ed97-6e44-474c-907b-fa52cd24953d',
  date: 'Thu, 18 Feb 2016 03:00:45 GMT',
  connection: 'close' });
 return result; }]];