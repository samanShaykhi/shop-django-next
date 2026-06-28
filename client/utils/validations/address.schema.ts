import { z } from 'zod'

export const addressSchema = z.object({
  receiver_name: z
    .string()
    .trim()
    .min(3, 'نام و نام خانوادگی الزامی است')
    .max(100, 'نام و نام خانوادگی بیش از حد طولانی است'),

  province_city: z.string().trim().min(3, 'استان و شهر را وارد کنید'),

  address: z
    .string()
    .trim()
    .min(10, 'آدرس باید حداقل 10 کاراکتر باشد')
    .max(500, 'آدرس بیش از حد طولانی است'),

  address_details: z.string().trim().min(2, 'جزئیات آدرس را وارد کنید'),

  postal_code: z.string().regex(/^\d{10}$/, 'کد پستی باید 10 رقم باشد'),

  receiver_phone: z
    .string()
    .regex(/^09\d{9}$/, 'شماره موبایل باید با 09 شروع شده و 11 رقم باشد')
})
export type AddressFormType = z.infer<typeof addressSchema>
