import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../../style/palette';

const ArticleListArea = styled.div`
  margin: 2%;
  display: flex;
  flex-wrap: wrap;
`

const ArticleLink = styled(Link)`
  list-style: none;
  margin: 0.5%;
  background-color: ${palette.gray[0]};
  box-shadow: 3px 3px 3px 3px ${palette.gray[5]};
  padding: 15px;
  /* max-width: 550px; */
  width: 30%;
  min-width: 400px;
  @media (max-width: 1385px) {
    /* max-width: 550px; */
    width: 45%;
    min-width: 400px;
  }
  @media (max-width: 800px) {
    /* max-width: 550px; */
    width: 80%;
    min-width: 400px;
  }
  height: 80px;
  display: flex;
	justify-content: space-between;
`

const Thumbnail = styled.img`
  width: 93px;
  /* width: auto; */
  height: 100%;
  object-fit: contain;
`

const Title = styled.h2`
  margin-block: 2px;
  margin-left: 10px;
`

function Entertain (props) {
  var arr = props.articles.filter(val => (val.title.includes(props.search)));
  return (
    <ArticleListArea>
      {arr.map(a => (
        <Article article={a} key={a._id} type='4'></Article>
      ))}
    </ArticleListArea>
  );
};

function Article(props) {
  return(
    <ArticleLink to={`/article/${props.type}/${props.article._id}`}>
      <Thumbnail src={props.article.img} alt='img' />
      <Title>{props.article.title}</Title>
      <button>플레이</button>
    </ArticleLink>
    )
}

export default Entertain;