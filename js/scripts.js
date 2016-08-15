$(document).ready(function() {
  $("form#grocerylist").submit(function(event) {
    event.preventDefault();

  var groceries = $("input.grocery").map(function(){return $(this).val();}).get();

  var grocArray = [];
  var grocArrayray = [];

  groceries.forEach(function(grocery) {
    grocArray.push($("input." + grocery).val());
  });

  grocArray.map(function() {
    return grocArray.sort();
  });

  grocArray.forEach(function(grocArray) {
    grocArrayray.push(grocArray.toUpperCase());
  });

  grocArrayray.forEach(function(grocArrayray) {
    $(".grocery" + count).text(grocArrayray);
    count +=1;
  });
});

  });
