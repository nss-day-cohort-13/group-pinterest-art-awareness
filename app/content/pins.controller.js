angular.module("app")
  .controller("pinsCtrl", function(pinFactory, $timeout) {
    const pins = this;

    pinFactory.getPins().then(data => {
      pins.list = data;
      $timeout();
    });

    pins.submit = () =>
      pinFactory.createPin(pins.newPin)
        .then(pinFactory.getPins().then(data => {
          pins.list = data;
          pins.newPin = null;
          $timeout();
        }));

    pins.delete = (key) =>
      pinFactory.deletePin(key)
        .then(pinFactory.getPins().then(data => {
          pins.list = data;
          pins.newPin = null;
          $timeout();
        }));
  });
