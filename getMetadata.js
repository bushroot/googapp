/**
 * Print a file's metadata.
 *
 * @param {String} fileId ID of the file to print metadata for.
 */
function printFile(fileId) {
  var request = gapi.client.drive.files.get({
      'id': fileId
  });
  request.execute(function(resp) {
    if (!resp.error) {
      console.log('Title: ' + resp.title);
      console.log('Description: ' + resp.description);
      console.log('MIME type: ' + resp.mimeType);
    } else if (resp.error.code == 401) {
      // Access token might have expired.
      checkAuth();
    } else {
      console.log('An error occured: ' + resp.error.message);
    }
  });
}
