import { z } from 'zod'

export const updateUserSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
  email: z.string().email('Invalid email').optional(),
  avatar: z.string().url('Must be a valid URL').optional(),
})

/** @typedef {z.infer<typeof updateUserSchema>} UpdateUserFormData */
