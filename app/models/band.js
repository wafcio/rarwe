import Ember from 'ember';

export default Ember.Object.extend({
  name: '',

  slug: Ember.computed('name', function() {
    return this.get('name').dasherize();
  }),

  // init: function() {
  //   this._super.apply(this, arguments);
  //   if (!this.get('songs')) {
  //     this.set('songs', [])
  //   }
  // },

  setupSongs: Ember.on('init', function() {
    if (!this.get('songs')) {
      this.set('songs', []);
    }
  })
});