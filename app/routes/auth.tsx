import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter';

export const meta = ()=>([
    { title: 'Resume Mind | Auth' },
    { name : 'description', content : 'Login Into Your Account' },
])

const auth = () => {
    // const [isLoading, setisLoading] = useState('');
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();
    useEffect(() => {
      if(auth.isAuthenticated) navigate(next);

    }, [auth.isAuthenticated,next])
    
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cove min-h-screen flex items-center justify-center">
        <div className='gradient-border shadow-lg'>
            <section className='flex flex-col gap-8 bg-white rounded-2xl p-10'>
                <div className='flex flex-col items-center gap-2 text-center'>
                    <h1>Welcome</h1>
                    <h2>Login to Continue Your Job Journey</h2>
                </div>
                <div className=''>
                    {isLoading ? (
                        <button className='auth-button animate-pulse'>
                            <p>Siginng You in...</p>
                        </button>
                    ) : (
                        <>
                            { auth.isAuthenticated ? (
                                <button className='auth-button' onClick={auth.signOut}>
                                    <p>LogOut</p>
                                </button>
                            ) : (
                                <button className='auth-button' onClick={auth.signIn}>
                                    <p>Login</p>
                                </button>
                            ) }
                        </>
                    )}
                </div>
            </section>
        </div>
    </main>
  )
}

export default auth