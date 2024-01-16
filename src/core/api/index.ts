const endpoint = `${location.origin}`;

export const mapSuccessResponseData = <T>(axiosResponse): T =>
  axiosResponse.json();

export const get = <T>(
  url: string,
  options?: unknown,
  customEndpoint?: string,
): Promise<T> =>
  fetch((customEndpoint || endpoint) + url)
    .then(mapSuccessResponseData)
    .catch((error) => console.log(error));

export const post = <D = unknown>(
  url: string,
  body?: unknown,
  config?: unknown,
  customEndpoint?: string,
): Promise<D> =>
  fetch((customEndpoint || endpoint) + url, body)
    .then(mapSuccessResponseData)
    .catch((error) => console.log(error));
