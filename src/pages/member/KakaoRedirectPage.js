import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAccessToken, getMemberWithAccessToken } from "../../api/kakaoApi";
import { useDispatch } from "react-redux";
import { login } from "../../slices/loginSlice";
import useCustomLogin from "../../hooks/useCustomLogin";

function KakaoRedirectPage(props){
    const [searchParams] = useSearchParams()

    const {moveToPath, saveAsCookie} = useCustomLogin()



    const authCode = searchParams.get('code')

    

    useEffect(() =>{
        getAccessToken(authCode).then(accessToken =>{

            getMemberWithAccessToken(accessToken).then(result =>{
                console.log("-----------");
                console.log(result)
                
                saveAsCookie(result)

                if(result && result.social){
                    moveToPath("/member/modify")
                }else{
                    moveToPath("/")
                }
            })
        })
    },[authCode]);

    return (
        <div>
            <div>Kakao Login Redirect</div>
            <div>{authCode}</div>
        </div>
    );
}

export default KakaoRedirectPage;