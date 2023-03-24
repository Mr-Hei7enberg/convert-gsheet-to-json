Array.prototype.toJson = function (headers) {
  // const headers = this.shift();
  headers === undefined ? headers = this.shift() : headers;
  return this.map((item, i) => {
    let obj = { index: i };
    headers.forEach((header, index) => {
      obj[header] = item[index];
    });
    return obj;
  });
};
