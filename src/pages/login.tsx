import Head from 'next/head';

import styled from '../styles/pages/Login.module.css';

export default function LoginPage() {
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
          <form>
            <div className={styled.userSubmit}>
              <label htmlFor="userName">Digite seu nome de usuário</label>
              <input id="userName" name="userName" type="text" placeholder="Digite seu username" />
              <button type="submit">
                <i className="fas fa-arrow-right" />
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}