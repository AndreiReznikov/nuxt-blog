export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event);

  return await $fetch("https://nest-blog-w4lp.onrender.com/users", {
    headers: {
      Authorization: `Bearer ${session?.secure?.accessToken}`,
    },
  });
});