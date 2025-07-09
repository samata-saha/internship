const http = require("http");

const product = [
  { id: 1, name: "Laptop", price: 100 },
  { id: 2, name: "Smartphone", price: 200 },
  { id: 3, name: "Tablet", price: 300 },
];

const newproduct = { id: 5, name: "mac", price: 270000 };
const updatedproduct = [...product, newproduct];
console.log(updatedproduct);
//create a server
const server = http.createServer((req, res) => {
  console.log("welcome all");
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write("welcome to the server");
  //   res.write(JSON.stringify(product));
  //   res.end();
  if (req.url === "/products") {
    res.end(JSON.stringify(product));
  } else if (req.url === "/updateproduct") {
    res.end(JSON.stringify(updatedproduct));
  } else {
    res.end(JSON.stringify({ message: "product not found" }));
  }
});
const port = 5500;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
