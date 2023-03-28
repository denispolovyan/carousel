export function loadImages(page, quantity) {
  return fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=${quantity}`
  ).then((res) =>  res.json());
}
