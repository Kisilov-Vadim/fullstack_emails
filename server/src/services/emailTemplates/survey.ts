import keys from '../../config/keys';
import {RoutesPaths} from '../../routes/constants';

export const surveyTemplate = (survey: any) => `
  <html>
    <body>
      <div style="text-align: center;">
        <h3>I'd like your input!</h3>
        <p>Please answer the following question</p>
        <p>${survey.body}</p>
        <div>
          <a href="${keys.redirectDomain}${RoutesPaths.apiSurveysThanks}">Yes</a>
        </div>
        <div>
          <a href="${keys.redirectDomain}${RoutesPaths.apiSurveysThanks}">No</a>
        </div>
      </div>
    </body>
  </html>
`;
