import React, {useCallback} from 'react';
import StripeCheckout, {Token} from 'react-stripe-checkout';

import {useAppDispatch} from '../hooks';
import {authActions} from '../store/auth';

export const Payments = () => {
  const dispatch = useAppDispatch();

  const onTokenHandle = useCallback(
    (token: Token) => {
      dispatch(authActions.handleStripeToken(token));
    },
    [dispatch]
  );

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <StripeCheckout
      name="Emaily"
      description="$5 dollars for 5 emails"
      amount={500}
      token={onTokenHandle}
      stripeKey={process.env.REACT_APP_STRIPE_KEY as string}
    >
      <button className="btn" type="button">
        add credits
      </button>
    </StripeCheckout>
  );
};
