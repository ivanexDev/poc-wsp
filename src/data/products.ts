import type { Product } from "../components/Product";


export const products: Product[] = [
  {
    id:1,
    title: 'AUCA',
    description: 'Perforador Auca Negro grande 25 Hojas',
    price: 5000,
    image: '/images/perforadora.png'
  },
  { 
    id:2,
    title: 'VIRUTEX',
    description: 'Toallas Desinfectantes Virutex Easy Clean Aroma Limón 50 Unidades',
    price: 3500,
    image: '/images/toallas-multiuso.png'
  },
  {
    id: 3,
    title: 'SUPERIOR',
    description: 'Bolsa de Aseo Superior Papelero Verde 50x55 cm 20 Unidades',
    price: 3000,
    image: '/images/bolsa-de-aseo.png'
  },
  {
    id: 4,
    title: 'LYSOFORM',
    description: 'Desinfectante en Aerosol Lysoform Lavanda 285 cc',
    price: 6000,
    image: '/images/desifectante-aerosol.png'
  },
  {
    id: 5,
    title: 'NEOLITE',
    description: 'Regla Neolite Metálica 30 cm',
    price: 3000,
    image: '/images/regla-metalica.png'
  }
]