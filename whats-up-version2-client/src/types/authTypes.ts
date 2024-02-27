export interface LoginCheck {
  loginCheck: boolean;
}

export interface NicknameCheck {
  nickname: boolean;
}

export interface SignUpForm {
  email: string;
  nickname: string;
  password: string;
}

export interface SignInForm {
  email: string;
  password: string;
}

export interface SignInRes {
  signInSuccess: boolean;
}

export interface SignUpRes {
  signUpSuccess: boolean;
}
