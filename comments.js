// Create web server
// To run: node comments.js
// To test: http://localhost:3000/comments
// To test: http://localhost:3000/comments?postId=1

const http = require('http');
const url = require('url');

const comments = [
  { postId: 1, id: 1, name: 'A', email: 'sample.com', body: 'A' },
];