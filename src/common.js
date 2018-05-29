import userInfo from './components/userInfo.vue'
export default function install(Vue, options) {
  Vue.prototype.checkIn = function(){
    if(!userInfo.userId){
      this.$router.replace({name: 'login'});
    }
  };
  Vue.prototype.toDetail = function (value) {
    this.$router.push({ name: 'detail', params: { id: value}});
  };
  Vue.prototype.toResult = function (value) {
    this.$router.push({ name: 'result', params: { tag: value}});
  };
  Vue.prototype.toAlbum = function (value) {
    this.$router.push({ name: 'album', params: { id: value}});
  };
  Vue.prototype.toZone = function (value) {
    userInfo.hisId = value ;
    this.$router.push({ name: 'zone'});
  };
  Vue.prototype.toFans = function (value) {
    this.$router.push({ name: 'fans', params: { id: value}});
  };
}