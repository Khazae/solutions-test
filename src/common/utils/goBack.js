export function goBack(router, level = 1) {
  router.go(-level);
}
