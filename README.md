# Node.js Server Hanging on Asynchronous Errors

This repository demonstrates a common issue in Node.js where a server might hang when an asynchronous operation within a request handler throws an error. The server fails to send a response to the client, resulting in a timeout.

## Problem

The `bug.js` file contains a Node.js HTTP server.  It simulates fetching data asynchronously. If the data fetching fails (simulated randomly), the server doesn't send an error response to the client and instead hangs the request.

## Solution

The `bugSolution.js` file corrects the problem. By always sending a response, even in case of an error, we prevent the server from hanging.  The solution uses a `finally` block to ensure a response is always sent.