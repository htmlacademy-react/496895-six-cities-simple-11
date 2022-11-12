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

enum MarkerUrl {
  Default = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  Current = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg'
}

enum LeafletLayer {
  Link = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
}

export {AppRoute, MainElClassName, PageElClassName, RatingSetting, MarkerUrl, LeafletLayer};
