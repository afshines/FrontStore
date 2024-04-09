import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { url } from "@/data/config";
import { setCookie, deleteCookie } from "cookies-next";
import Swal from 'sweetalert2'
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, ButtonGroup, Textarea,Input } from "@nextui-org/react";
export default function LoginComponent() {
    const router = useRouter()
    const [error, setError] = useState<any>(null);
    const [phone, setPhone] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);


    const { register, handleSubmit, watch, formState: { errors } } = useForm<any>();
    const onSubmit: SubmitHandler<any> = async data => {
        setLoading(true);
        deleteCookie('token');
        var mydata = {
            mobile: phone
        }
        await axios.post(`${url}/v1/auth/register`, mydata).then(async function (res: any) {
            setCookie('token', res.data.token);
            router.push('/checkmobile')
            setLoading(false);

        }).catch((err: any) => {
            setLoading(false);

            Swal.fire('ورود شما اشتباه می باشد')
        });

    };
    return (
        <div className="pb-4 shadow p-4  ">
            <form onSubmit={handleSubmit(onSubmit)} dir="ltr"  >
                <div className="text-center mb-4" >شماره همراه خود را وارد نمایید</div>
                <Input onChange={(e) => { setPhone(e.target.value) }} type="number" className="text-left" placeholder="09XXXXXXXX"> </Input>
                <div>
                    {
                        loading==false ?
                        <Button type="submit" style={{ background: 'black' }} className="text-white mt-3">ثبت نام / ورود</Button>
                        :
                        <Button style={{ background: 'black' }} className=" mt-3">صبر کنید</Button>
                    }
                   

                </div>
                <div className="mt-10">
                    <a href="/" style={{  color: 'black', width: '120px' }}>بازگشت</a>

                </div>
            </form>
        </div>
    )
}