import superagentPromise from 'superagent-promise';
import _superagent, {Response} from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const responseBody = (res: Response) => res.body;

const requests = {
  del: (url: string) => superagent.del(`${url}`).then(responseBody),
  get: (url: string) => superagent.get(`${url}`).then(responseBody),
  put: <Body>(url: string, body: Body) =>
    superagent
      .put(`${url}`, body)

      .then(responseBody),
  post: <Body>(url: string, body: Body) =>
    superagent
      .post(`${url}`, body)

      .then(responseBody),
};

export default requests;
