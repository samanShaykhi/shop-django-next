import { z } from 'zod'

export const profileSchema = z.object({
  full_name: z
    .string()
    .min(3, 'نام و نام خانوادگی حداقل باید 3 کاراکتر باشد')
    .max(50, 'نام و نام خانوادگی بیش از حد طولانی است'),

  userName: z
    .string()
    .min(3, 'نام کاربری حداقل باید 3 کاراکتر باشد')
    .max(20, 'نام کاربری نباید بیشتر از 20 کاراکتر باشد')
    .regex(
      /^[a-zA-Z0-9_]+$/,
      'نام کاربری فقط باید شامل حروف انگلیسی، عدد و _ باشد'
    ),

  email: z
    .string()
    .email('ایمیل معتبر نیست')
})

export type ProfileFormType = z.infer<typeof profileSchema>