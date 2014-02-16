test( "Siblings tests", function() {
      var numberOfSibs = 3;
      var elem = document.querySelector('.sib.test');
      strictEqual(numberOfSibs, b.siblings(elem).length, "Testing sibs with no specific match" );
      strictEqual(numberOfSibs-1, b.siblings(elem,'.sib').length, "Testing sibs with specific match" );
    });
