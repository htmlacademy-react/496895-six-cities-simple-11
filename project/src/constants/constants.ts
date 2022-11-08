enum AppRoute {
  Root = '/',
  Room = '/offer',
  Login = '/login'
}

enum MainElClassName {
  Main = 'page__main page__main--index',
  MainEmpty = 'page__main page__main--index page__main--index-empty',
  Login = 'page__main page__main--login',
  Room = 'page__main page__main--property'
}

enum PageElClassName {
  Main = 'page page--gray page--main',
  Login = 'page page--gray page--login',
  Room = 'page'
}

enum RatingSetting {
  StarCount = 5,
  MaxPercent = 100,
}

export {AppRoute, MainElClassName, PageElClassName, RatingSetting};
