import * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'

const schema = yup.object().shape({
    email: yup.string().email().required('이메일을 반드시 입력해주세요.'),
    password: yup.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.').required('비밀번호를 입력해주세요'),
})

export const useLoginForm = () => {
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onBlur',
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return { register, handleSubmit, errors, onSubmit, control }
}