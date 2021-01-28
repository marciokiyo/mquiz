import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import db from '../db.json';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setNome] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>MQuiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>MQuiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function submit(e) {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                placeholder="Digite seu nome"
                onChange={function change(e) {
                  setNome(e.target.value);
                }}
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar&nbsp;
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            Header
          </Widget.Header>
          <Widget.Content>
            Content
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/marciokiyo/mquiz" />
    </QuizBackground>
  );
}
