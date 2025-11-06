import { z } from "zod";

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse);

  const data = await $fetch("https://nest-blog-w4lp.onrender.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: email,
      password,
    }),
  });

  const { user, backendTokens } = data;

  if (user && backendTokens) {
    await setUserSession(event, {
      user,
      secure: {
        accessToken: backendTokens.accessToken,
        refreshToken: backendTokens.refreshToken,
      },
    });

    return {};
  }

  throw createError({
    statusCode: 401,
    message: "Неверные данные",
  });
});
