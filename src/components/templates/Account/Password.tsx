import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input } from "components"
import { useAuth } from "hooks"
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from "react-toastify"
import { PasswordSchema, PasswordSchemaType } from "schema/PasswordSchema"
import { useAppDispatch } from "store"
import { updateNguoiDungThunk } from "store/quanLyNguoiDung"


export const Password = () => {
  const { infoUser } = useAuth()
  const dispatch = useAppDispatch()
  const { handleSubmit, register, formState: { errors } } = useForm<PasswordSchemaType>({
    mode: "onChange",
    resolver: zodResolver(PasswordSchema)
  })
  const setSubmit: SubmitHandler<PasswordSchemaType> = (values) => {
    const { matKhau, matKhauChanged1, matKhauChanged2 } = values
    if (matKhau === infoUser.matKhau) {
      if (matKhauChanged1 === matKhauChanged2) {
        const infoUserDaDoiMatKhau = { ...infoUser, matKhau: matKhauChanged1 }
        dispatch(updateNguoiDungThunk(infoUserDaDoiMatKhau)).unwrap().then(() => toast.success('Đổi mật khấu thành công')).catch(() => {toast.error('Vui lòng F5 để load lại trang web') })
      }
    }
  }
  return (
    <form className="h-screen" onSubmit={handleSubmit(setSubmit)}>
      <Input
        className="h-[90px] [&>label]:!text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:!text-black"
        label="Mật khẩu hiện tại"
        name="matKhau"
        type="text"
        register={register}
        error={errors?.matKhau?.message}
      />
      <Input
        className="h-[90px] [&>label]:!text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:!text-black"
        label="Mật khẩu mới"
        name="matKhauChanged1"
        type="text"
        register={register}
        error={errors?.matKhauChanged1?.message}
      />
      <Input
        className="h-[90px] [&>label]:!text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:!text-black"
        label="Nhập lại mật khẩu"
        name="matKhauChanged2"
        type="text"
        register={register}
        error={errors?.matKhauChanged2?.message}
      />
      <div className="text-right mt-20">
        <Button htmlType="submit" type="primary" className="!h-[46px]">
          Đổi mật khẩu
        </Button>
      </div>
    </form>
  )
}
