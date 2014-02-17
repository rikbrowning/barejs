test( "Siblings tests", function() {
    var numberOfSibs = 3;
    var elem = document.querySelector('.sib.test');
    strictEqual(b.siblings(elem).length,numberOfSibs,"Testing sibs with no specific match" );
    strictEqual(b.siblings(elem,'.sib').length,numberOfSibs-1,"Testing sibs with specific match" );
});
test("Children tests",function(){
    var numberOfChildren=4;
    var elem = document.querySelector('.parent1');
    strictEqual(b.children(elem).length,numberOfChildren,"Testing children with no specific match");
    strictEqual(b.children(elem,'.sib').length,numberOfChildren-1,"Testing children with sib match");
});
test("Parents tests",function(){
    var elem = document.querySelector('.sib.test');
    strictEqual(b.parents(elem).length,6,"Testing parents with no specific match");
    strictEqual(b.parents(elem,'ul').length,2,"Testing parents with ul match");
    strictEqual(b.parents(elem,'.parent1').length,1,"Testing parents with .parent1 match");
});
