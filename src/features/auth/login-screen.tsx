import { Button, Checkbox, Input } from '$components';

import { MileIQSymbol } from '$components/logo';

const LoginScreen = ({ step = 'email', email, onSubmit = () => {} }) => {
  return (
    <div className="w-screen max-w-full min-h-screen flex bg-white">
      <div className="relative w-full">
        <a
          className="absolute left-[35px] top-[30px] z-10"
          href="https://mileiq.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MileIQSymbol />
        </a>
        <div className="relative w-full h-full table table-fixed">
          <p className="absolute bottom-20 text-center w-full text-13 text-black/50">
            By logging in, you agree to our{' '}
            <a
              className="underline"
              href="https://mileiq.com/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Use
            </a>{' '}
            and{' '}
            <a
              className="underline"
              href="https://mileiq.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </p>
          <div className="w-full table-cell align-middle">
            <div className="text-center relative my-0 mx-auto bg-white px-6 sm:px-0  w-[500px] laptop:w-[400px]">
              {step === 'email' && <LoginStepEmail onSubmit={onSubmit} />}
              {step === 'password' && (
                <LoginStepPassword onSubmit={onSubmit} email={email} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LoginScreen };

const LoginStepEmail = ({ email, error, onChange, onSubmit }) => {
  return (
    <>
      <h1 className="text-headingL-600">Log in</h1>
      <form noValidate="" onSubmit={onSubmit}>
        <div className="mt-12">
          <Input
            type="email"
            placeholder="Email"
            data-testid="login-email-input"
            onChange={onChange}
          />
        </div>
        <div className="mt-[15px] laptop:mt-[10px]">
          <Button
            type="submit"
            data-testid="login-continue-btn"
            variant="primary"
            full
          >
            Continue
          </Button>
        </div>
      </form>
      <p className="text-18 laptop:text-[14px] mt-12 text-black/70">
        Don't have an account?
        <br /> Check out our plans for{' '}
        <a
          href="https://mileiq.com/pricing"
          className="text-primary hover:text-primary-hover underline font-semibold"
        >
          individuals
        </a>{' '}
        and{' '}
        <a
          href="https://mileiq.com/pricing-for-business"
          className="text-primary hover:text-primary-hover underline font-semibold"
        >
          teams
        </a>
        .
      </p>
    </>
  );
};

const LoginStepPassword = ({ email, password, error, onChange, onSubmit }) => {
  const params = new URLSearchParams(window.location.search);
  return (
    <>
      <div>
        <div className="flex cursor-pointer">
          <i className="miq-icon miq-icon-arrow-left">
            <svg
              width="21"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.454 9.167H8.13l2.75-2.742a.837.837 0 0 0-1.183-1.183L5.53 9.408a.833.833 0 0 0-.175.275.834.834 0 0 0 0 .634c.04.102.1.195.175.275l4.167 4.166a.833.833 0 0 0 1.184 0 .832.832 0 0 0 0-1.183l-2.75-2.742h6.324a.833.833 0 0 0 0-1.666Z"
                fill="#050505"
                fillOpacity=".7"
              ></path>
            </svg>
          </i>
          <span className="ml-3 text-black/70 text-bodyM-600">
            {email || 'back'}
          </span>
        </div>
      </div>
      <h1 className="mt-space64 text-headingL-600">Enter password</h1>
      <form noValidate="" onSubmit={onSubmit}>
        <div className="mt-12">
          <Input
            type="password"
            placeholder="Password"
            data-testid="login-password-input"
            onChange={onChange}
          />
        </div>
        <label htmlFor="remember" className="flex mt-5 gap-3">
          <Checkbox id="remember" data-testid="miq-checkbox" /> Remember me
        </label>
        <div className="mt-space32 laptop:mt-[10px]">
          <Button type="submit" data-testid="login-btn" variant="primary" full>
            Log in
          </Button>
        </div>
        <div className="mt-space48">
          <a
            className="text-primary hover:text-primary-hover underline font-semibold"
            href={`/forgot-password?${params.toString()}`}
          >
            Forgot password
          </a>
        </div>
      </form>
    </>
  );
};
