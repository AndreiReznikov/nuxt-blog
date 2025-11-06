import { z } from "zod";

const bodySchema = z.object({
  title: z.string(),
  description: z.string(),
  authorId: z.number(),
});

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event);
  const { title, description, authorId } = await readValidatedBody(
    event,
    bodySchema.parse
  );

  try {
    await $fetch("https://nest-blog-w4lp.onrender.com/posts/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session?.secure?.accessToken}`,
      },
      body: JSON.stringify({
        title,
        description,
        authorId,
      }),
    });
  } catch {
    throw createError({
      statusCode: 401,
      message: "Неверные данные",
    });
  }
});
