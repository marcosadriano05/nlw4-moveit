import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import styled from '../styles/pages/Login.module.css';

interface FormData {
  userName: string
}

export default function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    router.push({
      pathname: '/',
      query: {
        userName: data.userName
      }
    });
  };

  return(
    <div className={styled.container}>
      <Head>
        <title>Login | Pomodoro App</title>
      </Head>
      <div className={styled.content}>
        <header>
          <img src="/logo-full.svg" alt="Logo" />
        </header>
        <main>
          <h1>Bem-vindo</h1>
          <section>
            <div className={styled.gitHubLogo}>
              <img src="/icons/GitHub.svg" alt="Github icon" />
            </div>
            <div>Faça login com o seu Github para começar</div>
          </section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styled.userSubmit}>
              <label htmlFor="userName">Digite seu nome de usuário</label>
              <input 
                ref={register({ required: true })} 
                id="userName" 
                name="userName" 
                type="text" 
                placeholder="Digite seu username" 
              />
              <button type="submit">
                <i className="fas fa-arrow-right" />
              </button>
            </div>
          </form>
          { errors.userName && <span>Esse campo é obrigatório</span> }
        </main>
      </div>
    </div>
  );
}