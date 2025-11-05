import { z } from "zod";

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse);

  const data = await $fetch("http://localhost:8000/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: email,
      password,
    }),
  });

  const { user } = data;

  if (user) {
    await setUserSession(event, {
      user,
    });

    return {};
  }

  throw createError({
    statusCode: 401,
    message: "Неверные данные",
  });
});
