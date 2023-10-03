// import styled from 'styled-components'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from 'components'
import { useAuth } from 'hooks'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AccountSchema, AccountSchemaType } from 'schema/AccountSchema'
import { toast } from 'react-toastify'
import { useAppDispatch } from 'store'
import { updateNguoiDungThunk } from 'store/quanLyNguoiDung'
import { UserUpdate } from 'types'

export const AccountInfo = () => {
    const { infoUser } = useAuth()
    const dispatch = useAppDispatch()
    const { handleSubmit, reset, register, formState: { errors } } = useForm<AccountSchemaType>({
        mode: 'onChange',
        resolver: zodResolver(AccountSchema)
    })
    useEffect(() => {
        reset(infoUser)
    }, [reset, infoUser])
    const setSubmit: SubmitHandler<AccountSchemaType> = (values) => {
        console.log('values', values)
        const { email, hoTen, maLoaiNguoiDung, maNhom, matKhau, soDt, taiKhoan } = values
        const UserUpdate: UserUpdate = { email, hoTen, maLoaiNguoiDung, maNhom, matKhau, soDt, taiKhoan }
        dispatch(updateNguoiDungThunk(UserUpdate)).unwrap().then(() => {
            toast.success('Cập nhật tài khoản thành công')
        })
            .catch(() => {
                toast.error('Vui lòng F5 để load lại trang web')
            })
    }

    return (
        <form className='h-screen' onSubmit={handleSubmit(setSubmit)}>
            <p className="text-20 font-600">Thông tin tài khoản</p>
            <p className="text-14 font-300 text-red-600">(* chỉ được chỉnh sửa họ tên và số điện thoại *)</p>
            <Input
                className="pointer-events-none h-[90px] [&>label]:!text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-gray-400 [&>input]:!text-gray-400"
                label="Tài khoản"
                name="taiKhoan"
                register={register}
                error={errors?.taiKhoan?.message}
            />
            <Input
                className="h-[90px] [&>label]:!text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:!text-black"
                label="Họ và tên"
                name="hoTen"
                register={register}
                error={errors?.hoTen?.message}
            />
            <Input
                className="pointer-events-none h-[90px] [&>label]:!text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-gray-400 [&>input]:!text-gray-400"
                label="Email"
                name="email"
                register={register}
                error={errors?.email?.message}
            />
            <Input
                className="hidden pointer-events-none h-[90px] [&>label]:!text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-gray-400 [&>input]:!text-gray-400"
                label="Mật khẩu"
                name="matKhau"
                register={register}
                error={errors?.matKhau?.message}
            />
            <Input
                className="h-[90px] [&>label]:!text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:!text-black"
                label="Số điện thoại"
                name="soDt"
                register={register}
                error={errors?.soDt?.message}
            />
            <Input
                className="pointer-events-none h-[90px] [&>label]:!text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-gray-400 [&>input]:!text-gray-400"
                label="Mã nhóm"
                name="maNhom"
                register={register}
                error={errors?.maNhom?.message}
            />
            <Input
                className="pointer-events-none h-[90px] [&>label]:!text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-gray-400 [&>input]:!text-gray-400 text-black"
                label="Mã loại người dùng"
                name="maLoaiNguoiDung"
                register={register}
                error={errors?.maLoaiNguoiDung?.message}
            />
            <div className="text-right mt-20">
                <Button htmlType="submit" type="primary" className="!h-[46px]">
                    Hoàn thành chỉnh sửa
                </Button>
            </div>
        </form>
    )
}

// const InputS = styled(Input)`
//     label {
//         color: #111;
//     }
// `
