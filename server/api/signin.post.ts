import { z } from "zod";

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});

const authResponseSchema = z.object({
  user: z.object({}),
  backendTokens: z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
  }),
});

export default defineEventHandler(async (event) => {
  try {
    const result = await readValidatedBody(event, (body) =>
      bodySchema.safeParse(body)
    );

    if (!result.success) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid body',
        data: result.error.issues
      });
    }

    const { email, password } = result.data;

    const data = await $fetch("https://nest-blog-w4lp.onrender.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch((error) => {
      console.error('Auth API error:', error);
      throw createError({
        statusCode: error.statusCode || 500,
        message: 'Authentication service unavailable'
      });
    });

    const authResult = authResponseSchema.safeParse(data);
    if (!authResult.success) {
      throw createError({
        statusCode: 500,
        message: 'Invalid response format from auth service'
      });
    }

    const { user, backendTokens } = authResult.data;

    await setUserSession(event, {
      user,
      secure: {
        accessToken: backendTokens.accessToken,
        refreshToken: backendTokens.refreshToken,
      },
    });

    return { success: true };

  } catch (error) {
    console.error('Signin error:', error);

    if (error.statusCode) {
      throw error;
    }

    throw createError({
      statusCode: 500,
      message: 'Internal server error'
    });
  }
});