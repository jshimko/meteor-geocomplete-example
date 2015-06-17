if (Meteor.isClient) {

  // Load the Google Maps API on startup
  Meteor.startup(function() {
    GoogleMaps.load({
      key: 'YOUR API KEY',
      libraries: 'places'
    });
  });


  Template.geocompleteExample.rendered = function () {

    this.autorun(function () {
      // Wait for API to be loaded
      if (GoogleMaps.loaded()) {

        // Example 1 - Autocomplete only
        $('#place1').geocomplete();

        // Example 2 - Autocomplete + map
        $('#place2').geocomplete({
          map: $("#map")
        });

        // Example 3 - Autocomplete + map + form
        $('#place3').geocomplete({
          map: "#map2",
          details: "form"
        });

      }
    });

  }

}
