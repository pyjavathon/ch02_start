import React from 'react';
import BasicLayout from '../layouts/BasicLayout';
import useCustomLogin from '../hooks/useCustomLogin';

const AboutPage = () => {

    const {isLogin,moveToLoginReturn} = useCustomLogin()

    if(!isLogin){
        return moveToLoginReturn();
    }
    return (
        <BasicLayout>
           <div>AboutPage</div>
        </BasicLayout>
    );
}

export default AboutPage;