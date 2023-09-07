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
export { carouselContent,cardsContent };
