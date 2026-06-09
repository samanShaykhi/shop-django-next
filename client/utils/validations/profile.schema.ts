import { z } from 'zod'

const MAX_FILE_SIZE = 3 * 1024 * 1024 // 3MB

const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp'
]
export const profileSchema = z.object({
  profile_image: z
    .any()
    .optional()
    .refine(
      files => !files?.length || ACCEPTED_IMAGE_TYPES.includes(files[0].type),
      'فقط فایل‌های png، jpg، jpeg و webp مجاز هستند'
    )
    .refine(
      files => !files?.length || files[0].size <= MAX_FILE_SIZE,
      'حجم فایل نباید بیشتر از 3 مگابایت باشد'
    ),
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

  email: z.string().email('ایمیل معتبر نیست')
})

export type ProfileFormType = z.infer<typeof profileSchema>
