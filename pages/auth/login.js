import React,{ useState } from 'react';
import Login from '@/components/auth/Login/Login';
import CheckOtp  from '@/components/auth/CheckOtp/CheckOtp';




const LoginPage = () => {
    const [step, setStep] = useState(1);
  return (
      <section className="auth_section book_section">
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4 offset-md-4">

                    <div className="card">
                        <div className="card-body">
                              {step === 1 && <Login setStep={setStep} />}
                              {step === 2 && <CheckOtp />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LoginPage;