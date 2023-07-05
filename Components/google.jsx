import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

export default function GoogleLogin() {
    function handleErrors(){
        console.log("loginFailed");
    }
    function handleSuccess(credentialsResponse){
        console.log(credentialsResponse);
    }
    return (
        <GoogleOAuthProvider clientId='994718853091-3f6r0rejejl592sik4dnmkm679lhk41j.apps.googleusercontent.com'>
            <div>
                <GoogleLogin onError={handleErrors} onSuccess={handleSuccess}/>
            </div>

        </GoogleOAuthProvider>
    )
}
