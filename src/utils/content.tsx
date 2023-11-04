import { CarouselProps, MyCardProps } from "@/@types";
import { ChalkboardTeacher, Hand, Warning } from "@phosphor-icons/react";

const carouselContent: Array<CarouselProps> = [
  {
    key: 1,
    title: "Diga não ao assédio sexual",
    subtitle:
      "O assédio sexual é inaceitável e viola os direitos fundamentais de uma pessoa. Vamos nos unir para combater essa pratica e criar um ambiente seguro para todos.",
  },
  {
    key: 2,
    title: "Denuncie o assédio sexual",
    subtitle:
      "Se você presenciar ou for vítima de assédio sexual, denuncie imediatamente. Juntos, podemos acabar com essa forma de violência e promover a igualdade de gênero.",
  },
  {
    key: 3,
    title: "Educação é a chave",
    subtitle:
      "A educação é fundamental para prevenir o assédio sexual. Vamos ensinar desde cedo o respeito mútuo, o consentimento e a importância do diálogo para construir relacionamentos saudáveis.",
  },
  {
    key: 4,
    title: "Solidariedade e apoio às vítimas",
    subtitle:
      "É importante oferecer apoio às vítimas de assédio sexual. Acredite e ouça suas histórias, ofereça suporte emocional e ajude-as a buscar justiça. Juntos, podemos criar uma rede de suporte forte.",
  },
  {
    key: 5,
    title: "Mude a cultura, crie um futuro melhor",
    subtitle:
      "Vamos trabalhar para mudar a cultura que tolera o assédio sexual. Promovendo a igualdade de gênero, desconstruindo estereótipos e fomentando o respeito, podemos construir um futuro mais seguro e igualitário.",
  },
];

const cardsContent: Array<MyCardProps> = [
  {
    key: 1,
    title: "Diga não ao assédio sexual",
    subtitle:
      "O assédio sexual é inaceitável e viola os direitos fundamentais de uma pessoa. Vamos nos unir para combater essa pratica e criar um ambiente seguro para todos.",
    Icon: (
      <Warning className="mx-auto w-16 h-16 text-primary transition-all duration-300 group-hover:text-white" />
    ),
  },
  {
    key: 2,
    title: "Denuncie o assédio sexual",
    subtitle:
      "Se você presenciar ou for vítima de assédio sexual, denuncie imediatamente. Juntos, podemos acabar com essa forma de violência e promover a igualdade de gênero.",
    Icon: (
      <Hand className="mx-auto w-16 h-16 text-primary transition-all duration-300 group-hover:text-white" />
    ),
  },
  {
    key: 3,
    title: "Educação é a chave",
    subtitle:
      "Vamos trabalhar para mudar a cultura que tolera o assédio sexual. Promovendo a igualdade de gênero, desconstruindo estereótipos e fomentando o respeito, podemos construir um futuro mais seguro e igualitário.",
    Icon: (
      <ChalkboardTeacher className="mx-auto w-16 h-16 text-primary transition-all duration-300 group-hover:text-white" />
    ),
  },
];

const testimonials = [
  {
    key: 1,
    text: "Eu tive coragem de denunciar o assédio sexual que sofri no trabalho. Foi um passo importante para minha cura e para a justiça ser feita.",
    author: "Anônima 1",
    date: "Mar 12, 2022",
  },
  {
    key: 2,
    text: "Denunciar o assédio sexual foi um ato de empoderamento para mim. Espero que minha história inspire outras mulheres a fazerem o mesmo.",
    author: "Anônima 2",
    date: "Mar 15, 2022",
  },
  {
    key: 3,
    text: "Apesar do medo, decidi denunciar o assédio sexual que sofri. Ninguém deveria passar por isso, e espero que minha denúncia ajude a criar um ambiente mais seguro para todos.",
    author: "Anônima 3",
    date: "Mar 18, 2022",
  },
  {
    key: 4,
    text: "Denunciei o assédio sexual para proteger outras mulheres que poderiam ser vítimas. Acredito que juntas podemos acabar com essa forma de violência.",
    author: "Anônima 4",
    date: "Mar 21, 2022",
  },
  {
    key: 5,
    text: "Foi difícil denunciar o assédio sexual, mas sei que foi a coisa certa a fazer. Não podemos deixar que o medo nos cale.",
    author: "Anônima 5",
    date: "Mar 24, 2022",
  },
  {
    key: 6,
    text: "Minha denúncia de assédio sexual foi um passo importante para minha recuperação. Espero que minha história encoraje outras mulheres a se levantarem contra o abuso.",
    author: "Anônima 6",
    date: "Mar 27, 2022",
  },
  {
    key: 7,
    text: "Denunciar o assédio sexual foi uma forma de me libertar do trauma. Não podemos permitir que esses abusos continuem impunes.",
    author: "Anônima 7",
    date: "Mar 30, 2022",
  },
  {
    key: 8,
    text: "Decidi denunciar o assédio sexual para proteger outras mulheres e acabar com o ciclo de abuso. Juntas somos mais fortes.",
    author: "Anônima 8",
    date: "Abr 2, 2022",
  },
];
export { carouselContent, cardsContent, testimonials };
