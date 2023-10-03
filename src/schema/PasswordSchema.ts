import { z } from 'zod'

export const PasswordSchema = z.object({
    matKhau: z.string().nonempty('Vui lòng nhập mật khẩu'),
    matKhauChanged1: z.string().nonempty('Vui lòng nhập mật khẩu'),
    matKhauChanged2: z.string().nonempty('Vui lòng nhập mật khẩu'),
})

export type PasswordSchemaType = z.infer<typeof PasswordSchema>