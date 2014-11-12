function pass(arg) {
        var array = ['open', 'opus', 'apple', 'app'];
        var result = [];

        for (var i = 0; i < array.length ; i++) {
          var patt = new RegExp(arg);
            if (patt.test(array[i])) {
                 result.push(array[i])
                }
            }
            return result;
        }

