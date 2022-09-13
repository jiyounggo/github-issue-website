import axios from 'axios';
import { Container } from './Detail.style';

const API_URL = `${process.env.REACT_APP_SERVER_URL}`;
const GH_TOKEN = `${process.env.REACT_APP_TOKEN}`;

const api = axios.create;

const Detail = () => {
  return <Container>hello</Container>;
};

export default Detail;
