if (Meteor.isClient) {

  // Load the Google Maps API on startup
  Meteor.startup(() => {
    GoogleMaps.load({
      key: 'AIzaSyAK_vkvxDH5vsqGkd0Qn-dDmq-rShTA7UA',
      libraries: 'places'
    });
  });


  Template.geocompleteExample.onRendered(function () {

    this.autorun(() => {
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

  });

}
