/**
 * Load the Drive API client.
 * @param {Function} callback Function to call when the client is loaded.
 */
function loadClient(callback) {
  gapi.client.load('drive', 'v2', callback);
}
