import { z } from "zod";

const bodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(3),
});

export default defineEventHandler(async (event) => {
  const { name, email, password } = await readValidatedBody(
    event,
    bodySchema.parse
  );

  try {
    await $fetch("http://localhost:8000/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
  } catch {
    throw createError({
      statusCode: 401,
      message: "Неверные данные",
    });
  }
});
