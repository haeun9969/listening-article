import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../common/Header';
import styled from 'styled-components';
import { useStore } from '../common/store';
import speaker from '../../img/sound-on.png';
import arrowL from '../../img/left-arrow.png';
import arrowR from '../../img/right-arrow.png';

const ArticleArea = styled.div`
	background-color: whitesmoke;
	margin: 2%;
	padding: 2%;
	border-radius: 20px;
`

const TitleArea = styled.div`
	margin-right: 2%;
	margin-bottom: 1%;
	display: flex;
	justify-content: space-between;
`

const ContentArea = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	p {
		padding: 10px;
		font-size: 14pt;
	}
`

const ArticleButtons = styled.div`
	margin-inline: 2%;
	display: flex;
	justify-content: space-between;
`

const ArticlePage = () => {
	const {type, id} = useParams();
	const {articles} = useStore();
	const {economy, culture, society, sports, entertain, politic, IT} = articles;
	let findArticle
	switch (type) {
		case '0':
			findArticle = economy.find((article) => {
				return article._id === id
			});
			break;
		case '1':
			findArticle = culture.find((article) => {
				return article._id === id
			});
			break;
		case '2':
			findArticle = society.find((article) => {
				return article._id === id
			});
			break;
		case '3':
			findArticle = sports.find((article) => {
				return article._id === id
			});
			break;
		case '4':
			findArticle = entertain.find((article) => {
				return article._id === id
			});
			break;
		case '5':
			findArticle = politic.find((article) => {
				return article._id === id
			});
			break;
		case '6':
			findArticle = IT.find((article) => {
				return article._id === id
			});
			break;
		default:
	}

	return (
		<div>
			<Header />
			<ArticleArea>
				<TitleArea>
				    <h7>{findArticle.publisher}</h7>
					<h1>{findArticle.title}</h1>
					<div className='speaker'>
						<img className='speakerImg' src={speaker} alt='speaker' />
					</div>
				</TitleArea>
				<ContentArea>
					<img src={findArticle.img} alt='articleImg' />
					<p>{findArticle.contents}</p>
				</ContentArea>
				<p>{findArticle.reporter}</p>
				<button>
				<a href={findArticle.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>기사 본문 링크</a>
				</button>
				
			</ArticleArea>
			<ArticleButtons>
				    <div className='arrowL'>
						<img className='arrowLImg' src={arrowL} alt='arrowL' />
					</div>
					<div className='arrowR'>
						<img className='arrowRImg' src={arrowR} alt='arrowR' />
					</div>
			</ArticleButtons>
		</div>
	);
};

export default ArticlePage;