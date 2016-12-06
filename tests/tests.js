/* jshint jasmine: true */
exports.defineAutoTests = function () {
    describe('Echo (navigator.echo.call)', function () {
        it("Echo.spec.1 should exist", function () {
            expect(navigator.echo).toBeDefined();
            expect(navigator.echo.call).toBeDefined();
        });
    });

    describe('echo.call() call "test echo"', function () {
        it("Echo.spec.2 result test echo", function (done) {
          var success = function(result) {
            expect(result).toEqual("test echo");
            done();
          };
          var error = function(err) {
            expect(err).toEqual(null);
            done();
          };
          navigator.echo.call(success, error, "test echo");
        });
    });
};

exports.defineManualTests = function(contentEl, createActionButton) {
    contentEl.innerHTML = 'input:<input id="text" type="text"></input><br />echo:<input id="results" type="text" disabled="disabled"></input><div id="call"></div>';
    createActionButton('call echo', function() {
      var txt = document.getElementById('text').value;
      var results = document.getElementById('results');
      var success = function(result) {
        results.value = result;
      };
      var error = function(err) {
        results.value = err.message;
      };

      navigator.echo.call(success, error, txt);
    }, "call");
};
