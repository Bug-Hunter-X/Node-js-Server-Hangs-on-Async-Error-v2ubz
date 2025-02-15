const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  const data = fetchData();

  data.then(result => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Result: ${result}`);
  }).catch(error => {
    // Here's the problem: if an error occurs in the asynchronous operation,
    // the response is never sent, leading to a hanging request.
    console.error('Error fetching data:', error);
  });
});

function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate a network request that sometimes fails
    const success = Math.random() < 0.8; 
    setTimeout(() => {
      if (success) {
        resolve('Success!');
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 1000);
  });
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});