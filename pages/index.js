import styled from 'styled-components'
import db from '../db.json'
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget'

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
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizLogo></QuizLogo>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            Header
          </Widget.Header>
          <Widget.Content>
            Content
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
      <GitHubCorner projectUrl="https://github.com/marciokiyo/mquiz"></GitHubCorner>
    </QuizBackground>
  )
}
