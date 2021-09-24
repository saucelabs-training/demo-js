/**
 * Set the test context
 *
 * @param {object} data
 * @param {object} data.user
 * @param {string} data.user.username
 * @param {string} data.user.password
 * @param {string} data.path
 * @param {array} data.products
 */
export async function setTestContext(data: { path?: string; products?: number[]; user?: { username: string; password: string; } }) {
  const {path, products = [], user} = data;
  const {username} = user;
  const userCookies = `document.cookie="session-username=${username}";`;
  const productStorage = products.length > 0 ? `localStorage.setItem("cart-contents", "[${products.toString()}]");` : '';

  // Go to the domain and set the storage
  await browser.url('');
  await browser.execute(`${userCookies} ${productStorage}`);

  // Now got to the page
  await browser.url(path);
}
