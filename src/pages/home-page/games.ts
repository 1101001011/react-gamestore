export interface Game {
    image: string
    title: string,
    genres: string[],
    price: number,
    video: string,
    id: number,
    description: string
}

export const GAMES: Game[] = [
    {
        image: '/images/forza_5.jpeg',
        title: 'Forza Horizon 5',
        genres: ['Гонки', 'Симулятор', 'Открытый мир'],
        price: 2340,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
    },
    {
        image: '/images/battlefield_2042.jpg',
        title: 'Battlefield 2042',
        genres: ['Экшен', 'Шутер', 'Война'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 2433,
        id: 2,
        description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
    },
    {
        image: '/images/life_is_strange_true_colors.jpeg',
        title: 'Life is Strange True Colors',
        genres: ['Глубокий сюжет', 'Протагонистка'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 3020,
        id: 3,
        description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
    },
    {
        image: '/images/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        genres: ['Открытый мир', 'Экшен'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 789,
        id: 4,
        description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
    },
    {
        image: '/images/rainbow_siege.jpeg',
        title: 'Rainbow Six® Siege',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Тактика', 'Шутер'],
        price: 982,
        id: 5,
        description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
    },
    {
        image: '/images/assassins_creed_valhalla.png',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 2863,
        id: 6,
        description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },
    {
        image: '/images/destiny_2.jpg',
        title: 'Destiny 2',
        genres: ['Шутер', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/hdWkpbPTpmE',
        price: 520,
        id: 7,
        description: 'Destiny 2 — компьютерная игра в жанре шутера от первого лица с элементами MMORPG, разработанная американской компанией Bungie. Игра, выпущенная в 2017 году для PlayStation 4, Xbox One и Microsoft Windows.'
    },
    {
        image: '/images/red_dead_redemption_2.webp',
        title: 'Red Dead Redemption 2',
        genres: ['Экшен', 'Шутер'],
        video: 'https://www.youtube.com/embed/eaW0tYpxyp0',
        price: 3599,
        id: 8,
        description: 'Red Dead Redemption 2 — компьютерная игра в жанрах action-adventure и шутера от третьего лица с открытым миром, разработанная Rockstar Studios и выпущенная Rockstar Games для консолей PlayStation 4 и Xbox One 26 октября 2018 года и для персональных компьютеров под управлением Windows 5 ноября 2019 года.'
    },
    {
        image: '/images/halo_infinite.jpg',
        title: 'Halo Infinite',
        genres: ['Экшен', 'Шутер'],
        video: 'https://www.youtube.com/embed/PyMlV5_HRWk',
        price: 1439,
        id: 9,
        description: 'Halo Infinite — компьютерная игра 2021 года в жанре шутер от первого лица, разработанная американской компанией 343 Industries для Xbox One, Xbox Series X/S и Microsoft Windows. Шестая основная часть серии Halo, прямое продолжение Halo 5: Guardians, но в то же время — начало новой главы в приключениях Мастера Чифа.'
    },
    {
        image: '/images/elden_ring.jpg',
        title: 'Elden Ring',
        genres: ['Экшен', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/K_03kFqWfqs',
        price: 2560,
        id: 10,
        description: 'Elden Ring — компьютерная игра в жанре action/RPG с открытым миром, разработанная японской компанией FromSoftware и изданная компанией Bandai Namco Entertainment для платформ Windows, PlayStation 4, PlayStation 5, Xbox One и Xbox Series X/S.'
    },
    {
        image: '/images/call_of_duty.jpg',
        title: 'Call of Duty: Vanguard',
        genres: ['Шутер'],
        video: 'https://www.youtube.com/embed/OQ1CwPhE8KQ',
        price: 3050,
        id: 11,
        description: 'Call of Duty: Vanguard — компьютерная игра в жанре шутера от первого лица, восемнадцатая в серии Call of Duty. Релиз игры состоялся 5 ноября 2021 года для Windows, PlayStation 4, PlayStation 5, Xbox One и Xbox Series X/S.'
    }
]