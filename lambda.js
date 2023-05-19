exports.handler = function (event, context) {
  console.log(event);
  context.succeed(`testing changes ${event['name']}`);
};
