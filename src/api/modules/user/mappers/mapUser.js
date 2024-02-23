export const mapUser = (payload) => ({
  id: payload?.id?.value,
  full_name: `${payload?.name?.first} ${payload?.name?.last}`,
  image: payload?.picture?.thumbnail,
  age: String(payload?.dob?.age),
  gender: payload?.gender,
  country: payload?.location?.country,
  email: payload?.email,
});
