const headers = {
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, Content-Length, X-Requested-With",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "PATCH, POST, GET,OPTIONS,DELETE",
    "Content-Type": "application/json",
  };
function errorFormat(res) {
    res.writeHead(400, headers);
    res.write(
      JSON.stringify({
        state: "false",
        message: "欄位未填寫正確",
      })
    );
    res.end();
}
function errorNotFound(res) {
    res.writeHead(404, headers);
    res.write(
      JSON.stringify({
        state: "false",
        message: "Not Found",
      })
    );
    res.end();
}
function errorId(res) {
    res.writeHead(400, headers);
    res.write(
      JSON.stringify({
        state: "false",
        message: "Not Found ID",
      })
    );
    res.end();
}
module.exports = {
    errorFormat,
    errorNotFound,
    errorId

}
