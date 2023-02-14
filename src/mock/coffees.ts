import { v4 as uuidv4 } from 'uuid'

export const coffees = [
  {
    id: uuidv4(),
    badge: ['TRADICIONAL'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    photo: 'coffee1-expresso.svg',
    price: 9.9,
    quantity: 0,
  },
  {
    id: uuidv4(),
    badge: ['TRADICIONAL'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    photo: 'coffee2-americano.svg',
    price: 9.9,
    quantity: 0,
  },
  {
    id: uuidv4(),
    badge: ['TRADICIONAL'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    photo: 'coffee3-expresso-cremoso.svg',
    price: 9.9,
    quantity: 0,
  },
  {
    id: uuidv4(),
    badge: ['TRADICIONAL', 'GELADO'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    photo: 'coffee14-gelado.svg',
    price: 9.9,
    quantity: 0,
  },
  {
    id: uuidv4(),
    badge: ['TRADICIONAL', 'COM LEITE'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    photo: 'coffee4-leite.svg',
    price: 9.9,
    quantity: 0,
  },
  {
    id: uuidv4(),
    badge: ['TRADICIONAL', 'GELADO'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    photo: 'coffee5-latte.svg',
    price: 9.9,
    quantity: 0,
  },
  {
    id: uuidv4(),
    badge: ['TRADICIONAL', 'COM LEITE'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    photo: 'coffee6-capuccino.svg',
    price: 9.9,
    quantity: 0,
  },
  {
    id: uuidv4(),
    badge: ['TRADICIONAL', 'COM LEITE'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    photo: 'coffee7-macchiato.svg',
    price: 9.9,
    quantity: 0,
  },
  {
    id: uuidv4(),
    badge: ['TRADICIONAL', 'COM LEITE'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    photo: 'coffee8-mochaccino.svg',
    price: 9.9,
    quantity: 0,
  },
  {
    id: uuidv4(),
    badge: ['ESPECIAL', 'COM LEITE'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    photo: 'coffee9-chocolate.svg',
    price: 9.9,
    quantity: 0,
  },
  {
    id: uuidv4(),
    badge: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    photo: 'coffee10-cubano.svg',
    price: 9.9,
    quantity: 0,
  },
  {
    id: uuidv4(),
    badge: ['ESPECIAL'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    photo: 'coffee11-havaiano.svg',
    price: 9.9,
    quantity: 0,
  },
  {
    id: uuidv4(),
    badge: ['ESPECIAL'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    photo: 'coffee12-arabe.svg',
    price: 9.9,
    quantity: 0,
  },
  {
    id: uuidv4(),
    badge: ['ESPECIAL', 'ALCOÓLICO'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    photo: 'coffee13-irlandes.svg',
    price: 9.9,
    quantity: 0,
  },
]
