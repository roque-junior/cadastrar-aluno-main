import Form from "../components/Form"
import ImgLogin from "../components/ImgLogin"

export function Login() {
    return (
        <>
         <div style={{display: 'flex', flexDirection: 'row', height: '100vh', width: '100vw'}}>
            
            <div style={{width: '50%', marginLeft: '0px'}}>
              <ImgLogin/>
            </div>

            <div style={{width: '50%', marginRight: '0px'}}>
               <Form/>
            </div>

        </div>
        

        </>
    )
}