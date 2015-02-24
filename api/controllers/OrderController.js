/**
 * OrderController
 *
 * @description :: Server-side logic for managing orders
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  //this is not obligatory sailsjs handles associations just fine
  //so this is just a sample how to implement more complex logic
  create: function (req, res) {
    var incomingOrder = req.params.all();

    var orderItems = incomingOrder.items;
    var order = {status: incomingOrder.status, user: incomingOrder.user};

    Order.create(order).exec(function (err, order) {
      if (err) return res.badRequest(err);

      while (orderedItems.length)
        order.items.add(orderItems.pop());

      order.save(function (err) {
        if(err) return res.badRequest(err);
        return res.ok(order);
      });
    });
  }
};

