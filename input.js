const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);

    return stdin;
  };

  const handleUserInput = function (data) {
    // your code here
    if (data === '\u0003') {
        process.exit();
      }

      process.stdout.write(data);
  };

  module.exports = { setupInput};