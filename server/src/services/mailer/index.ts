/* eslint-disable @typescript-eslint/ban-ts-comment */
import sgMail from '@sendgrid/mail';

import keys from '../../config/keys';

export const sendMailer = async (
  {subject, recipients}: any,
  content: any
) => {
  sgMail.setApiKey(keys.sendGridKey);

  const formattedRecipients = recipients.map(
    ({email}: {email: string}) => email
  );

  const msg = {
    to: formattedRecipients,
    from: 'fullstack.emails@gmail.com',
    subject: subject,
    html: content,
  };

  return await sgMail.send(msg);
};
