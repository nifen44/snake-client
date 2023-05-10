const net = require("net");
const {IP, PORT} = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', ()=>{
    console.log('Successfully connected to game server');
    conn.write("Name:WH");
    // setInterval(()=>{
    //     conn.write("Move: left");
    // }, 300);
    
  })

  conn.on('data', (data)=>{
    console.log(data);
  })

  return conn;
};

module.exports = {connect};