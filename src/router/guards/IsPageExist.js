export default (to, from, next) => {
    if (!to.matched.length) {
        next('/404');
    } else {
        next();
    }
}