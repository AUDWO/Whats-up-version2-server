const checkUserInfoForm = (type: string, value: string) => {
  if (type === "email") {
    const emailForm = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailForm.test(String(value).toLowerCase());
  }
  if (type === "password") {
    const passwordForm =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordForm.test(value);
  }

  if (type === "nickname") {
    if (value.length <= 15) {
      return true;
    } else {
      return false;
    }
  }
};

export default checkUserInfoForm;
