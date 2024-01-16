import { describe, test } from 'vitest';
import { mapSuccessResponseData, get, post } from '../api';

describe('mapSuccessResponseData', () => {
  test('should map axios response data', () => {
    const axiosResponse = { json: () => ({ data: 'test' }) };
    const result = mapSuccessResponseData(axiosResponse);
    assert.equal(result.data, 'test');
  });
});

describe('get', () => {
  test('should make a GET request', async () => {
    globalThis.fetch = async () => ({ json: () => ({ responseData: 'get-test' }) });

    const result = await get('/test-url');
    assert.equal(result.responseData, 'get-test');
  });
});

describe('post', () => {
  test('should make a POST request', async () => {
    globalThis.fetch = async () => ({ json: () => ({ responseData: 'post-test' }) });

    const result = await post('/test-url', { body: 'test' });
    assert.equal(result.responseData, 'post-test');
  });
});
