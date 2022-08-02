import MySignature from './my-signature.vue';

MySignature.install = function (Vue) {
    Vue.component(MySignature.name, MySignature);
};

export default MySignature;
