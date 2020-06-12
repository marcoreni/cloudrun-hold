
// Require the framework and instantiate it
console.time('startup');
console.timeLog('startup', 'init');

const fastify = require('fastify')({
})

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

console.timeLog('startup', 'now ill sleep for 10 secs');
setTimeout(function() {
  // After waiting, run the server!
  fastify.listen(process.env.PORT, '0.0.0.0', function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    console.timeEnd('startup');
  })

  process.on('SIGINT', () => {
    process.exit();
  });
}, 10000);

