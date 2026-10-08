export type ZoneId = 'standard' | 'vip' | 'team'

export const ZONE_CAPACITIES: Record<ZoneId, number> = {
  standard: 20,
  vip: 7,
  team: 5,
}

const occupiedSeatNumbers: Record<ZoneId, number[]> = {
  standard: [1, 4, 8, 11, 14, 17, 18, 20],
  vip: [2, 5],
  team: [],
}

export type Zone = {
  id: ZoneId
  name: string
  shortName: string
  eyebrow: string
  description: string
  cpu: string
  gpu: string
  display: string
  gear: string
  price: number
  available: number
  capacity: number
  image: string
  accent: 'mint' | 'amber'
}

export type Tariff = {
  id: string
  name: string
  note: string
  standard: number
  vip: number
  suffix: string
  featured?: boolean
}

export const branches = [
  { id: 'karasunskaya', name: 'Карасунская, 81', note: 'Основная локация' },
  { id: 'another', name: 'Другой филиал', note: 'Демонстрационный выбор' },
] as const

export const zones: Zone[] = [
  {
    id: 'standard',
    name: 'Standard Grid',
    shortName: 'Standard',
    eyebrow: 'Твой ежедневный уровень',
    description: 'Продуманная посадка, высокая герцовка и всё необходимое для рейтинговых матчей без компромиссов.',
    cpu: 'Intel Core i7',
    gpu: 'GeForce RTX 4070',
    display: '24.5″ · 240 Гц',
    gear: 'HyperX · Logitech',
    price: 190,
    available: ZONE_CAPACITIES.standard - occupiedSeatNumbers.standard.length,
    capacity: ZONE_CAPACITIES.standard,
    image: '/photos/standard-zone.png',
    accent: 'mint',
  },
  {
    id: 'vip',
    name: 'VIP Chamber',
    shortName: 'VIP',
    eyebrow: 'Больше пространства',
    description: 'Изолированная атмосфера, увеличенный экран и премиальная периферия для долгих игровых сессий.',
    cpu: 'Intel Core i9',
    gpu: 'GeForce RTX 4080',
    display: '27″ · 280 Гц',
    gear: 'Logitech G Pro',
    price: 290,
    available: ZONE_CAPACITIES.vip - occupiedSeatNumbers.vip.length,
    capacity: ZONE_CAPACITIES.vip,
    image: '/photos/main-hall.png',
    accent: 'amber',
  },
  {
    id: 'team',
    name: 'Team Vault',
    shortName: 'Bootcamp',
    eyebrow: 'Командная комната',
    description: 'Пять мест в едином закрытом пространстве: тренировки, турниры и вечер с командой без посторонних.',
    cpu: 'Intel Core i9',
    gpu: 'GeForce RTX 4080',
    display: '27″ · 280 Гц',
    gear: 'Pro team setup',
    price: 1290,
    available: ZONE_CAPACITIES.team - occupiedSeatNumbers.team.length,
    capacity: ZONE_CAPACITIES.team,
    image: '/photos/dark-hall.png',
    accent: 'mint',
  },
]

export const TOTAL_GAMING_SEATS = Object.values(ZONE_CAPACITIES).reduce((total, capacity) => total + capacity, 0)

export const tariffs: Tariff[] = [
  { id: 'hour', name: 'Один час', note: 'Без обязательств', standard: 190, vip: 290, suffix: '/ час' },
  { id: 'triple', name: 'Три часа', note: 'Самый популярный', standard: 490, vip: 750, suffix: '/ пакет', featured: true },
  { id: 'night', name: 'Ночная смена', note: 'С 23:00 до 08:00', standard: 790, vip: 1190, suffix: '/ ночь' },
  { id: 'team', name: 'Командный слот', note: '5 мест · 3 часа', standard: 2190, vip: 2990, suffix: '/ команда' },
]

export const perks = [
  ['Gauge', 'Высокая герцовка', 'Плавная картинка для соревновательной игры.'],
  ['Armchair', 'Комфорт без тесноты', 'Эргономичные кресла и достаточное расстояние между местами.'],
  ['Wind', 'Свежий воздух', 'Продуманная вентиляция для длинных игровых сессий.'],
  ['Sparkles', 'Чистое пространство', 'Регулярный уход за рабочими местами и периферией.'],
  ['Users', 'Приходи командой', 'Зоны для совместной игры и закрытая team room.'],
  ['Clock3', 'Работаем 24/7', 'Играй тогда, когда удобно именно тебе.'],
  ['Gamepad2', 'Игры уже готовы', 'Популярные соревновательные и сюжетные проекты.'],
  ['Headphones', 'Администратор рядом', 'Помощь с запуском и настройкой игрового места.'],
] as const

export const gallery = [
  { src: '/photos/green-corridor.png', title: 'Зелёный коридор', note: 'Фирменное освещение Gamer Cave' },
  { src: '/photos/main-hall.png', title: 'Главный зал', note: 'Реальная игровая зона клуба' },
  { src: '/photos/standard-zone.png', title: 'Игровые места', note: 'Станции Standard в клубе' },
  { src: '/photos/exterior.png', title: 'Фасад клуба', note: 'Вход в Gamer Cave' },
  { src: '/photos/pc-closeup.png', title: 'Игровая станция', note: 'Комплектующие с RGB-подсветкой' },
  { src: '/photos/pc-row.png', title: 'Ряд компьютеров', note: 'Системные блоки Gamer Cave' },
  { src: '/photos/reception-logo.png', title: 'Фирменный стиль', note: 'Логотип в интерьере клуба' },
  { src: '/photos/branded-zone.png', title: 'Бренд-зона', note: 'Места рядом с фирменной стеной' },
  { src: '/photos/dark-hall.png', title: 'Тёмный зал', note: 'Атмосферная игровая зона' },
  { src: '/photos/entrance-logo.png', title: 'Входная зона', note: 'Фирменная навигация Gamer Cave' },
]

export const reviews = [
  { name: 'Алексей', tag: 'Standard · вечер', text: 'Удобная подача бронирования и понятный выбор места. Такой формат помог бы заранее собрать команду рядом.' },
  { name: 'Марина', tag: 'VIP · ночь', text: 'Нравится, что сразу видно оборудование, итоговую цену и доступность — без лишних звонков.' },
  { name: 'Денис', tag: 'Team room', text: 'Командная комната выглядит как отдельный продукт, а не просто ещё один тариф. Забронировал бы для тренировки.' },
  { name: 'Илья', tag: 'Первый визит', text: 'Темная тема читается хорошо, а сценарий брони проходит быстро даже с телефона.' },
  { name: 'София', tag: 'Standard · день', text: 'Понравилось, что макет не перегружен неоном и при этом сразу чувствуется игровая атмосфера.' },
]

export const faqs = [
  ['Как забронировать место?', 'Выберите филиал, дату, время, продолжительность, зону и свободное место. Затем оставьте имя и телефон в демонстрационной форме подтверждения.'],
  ['Можно ли прийти без бронирования?', 'В демонстрационной версии предполагается, что можно, если есть свободные места. Перед публикацией условие нужно подтвердить у клуба.'],
  ['Работает ли клуб ночью?', 'Да, согласно исходным данным Gamer Cave работает круглосуточно.'],
  ['Какие документы могут понадобиться?', 'Условия ночного посещения и возрастные ограничения необходимо уточнить у администратора перед публикацией сайта.'],
  ['Можно ли прийти своей командой?', 'Да, для этого предусмотрена зона Team Vault на 5 игроков. Всего в Gamer Cave — 32 компьютерных места.'],
  ['Как отменить бронь?', 'В рабочей версии отмена должна выполняться через администратора или личный кабинет. В этом макете данные никуда не отправляются.'],
] as const

export const timeOptions = ['10:00', '12:00', '15:00', '18:00', '21:00', '23:00', '01:00', '04:00']
export const durationOptions = [1, 2, 3, 5, 8]

export const seatsByZone: Record<ZoneId, { id: string; occupied: boolean }[]> = {
  standard: Array.from({ length: ZONE_CAPACITIES.standard }, (_, index) => ({
    id: `S${String(index + 1).padStart(2, '0')}`,
    occupied: occupiedSeatNumbers.standard.includes(index + 1),
  })),
  vip: Array.from({ length: ZONE_CAPACITIES.vip }, (_, index) => ({
    id: `V${String(index + 1).padStart(2, '0')}`,
    occupied: occupiedSeatNumbers.vip.includes(index + 1),
  })),
  team: Array.from({ length: ZONE_CAPACITIES.team }, (_, index) => ({
    id: `T${String(index + 1).padStart(2, '0')}`,
    occupied: occupiedSeatNumbers.team.includes(index + 1),
  })),
}

export const TWO_GIS_URL = 'https://2gis.ru/krasnodar/firm/70000001104519509/38.973371%2C45.028125/tab/reviews?m=38.973371%2C45.028125%2F18.11'
