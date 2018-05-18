
export default function install(Vue, options) {
  Vue.prototype.toDetail = function (value) {
    this.$router.push({ name: 'detail', params: { id: value}});
  };
  Vue.prototype.toResult = function (value) {
    this.$router.push({ name: 'result', params: { tag: value}});
  };
  Vue.prototype.toAlbum = function (value) {
    this.$router.push({ name: 'album', params: { album: value}});
  };
  Vue.prototype.toZone = function (value) {
    this.$router.push({ name: 'zone', params: { id: value}});
  };
  Vue.prototype.toFans = function (value) {
    this.$router.push({ name: 'fans', params: { id: value}});
  };
}