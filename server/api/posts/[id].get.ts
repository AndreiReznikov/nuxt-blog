export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event);

  const { id } = event.context.params || {};

  return await $fetch(`https://nest-blog-w4lp.onrender.com/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${session?.secure?.accessToken}`,
    },
  });
});