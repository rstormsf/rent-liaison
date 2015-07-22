define([
  'backbone',
  'views/nav',
  'modules/home/view',

  'modules/rentalRequest/propertyOwnerCollectionView',
  'modules/rentalRequest/view',
  'modules/rentalRequest/model',
  'modules/rentalRequest/collection',

  'modules/property/collection',
  'modules/property/views/collectionView'

], function(Backbone, NavView, HomeView, RentalRequestCollectionView, RentalRequestView, RentalRequestModel, RentalRequestCollection, PropertyCollection, PropertiesView){

  return Backbone.Router.extend({

    routes: {
      ''                     : 'home',
      'rentalrequest'        : 'rentalrequestIndex',
      'rentalrequest/:uri'   : 'rentalRequest',
      'properties'           : 'properties'
    },

    home: function(){
      this._initNav();
      new HomeView({ el: Backbone.$('#js-home') });
    },

    rentalrequestIndex: function() {
      new RentalRequestCollectionView({
        el: Backbone.$('#js-rental-requests'),
        collection: new RentalRequestCollection(window.rentalRequests)
      });
    },

    rentalRequest: function () {
      new RentalRequestView({
        el: Backbone.$('#js-rental-request'),
        model: new RentalRequestModel(window.rentalRequest)
      });
    },

    properties: function() {
      // TODO cache/make sure this doesnt cause a mem leak
      this.amenitiesCollection = new Backbone.Collection(window.amenities);
      this.locationsCollection = new Backbone.Collection(window.locations);
      this.destinationsCollection = new Backbone.Collection(window.destinations);

      new PropertiesView({
        el: Backbone.$('#js-properties'),
        collection: new PropertyCollection(window.properties),

        amenities: this.amenitiesCollection,
        locations: this.locationsCollection,
        destinations: this.destinationsCollection
      });
    },

    _initNav: function(){
      new NavView({ el: Backbone.$('#js-nav') });
    }
  });
});
