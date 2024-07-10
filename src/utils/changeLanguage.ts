import { setCookie } from "cookies-next";
import { NextRouter } from "next/router";

const changeLanguage = (router: NextRouter, locale: string) => {
  const { pathname, query } = router;
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 10);
  setCookie("NEXT_LOCALE", locale, {
    expires
  });
  router.replace({ pathname, query }, undefined, { locale });
};

export default changeLanguage;
