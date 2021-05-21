const questions = [
  {
    id: 1,
    question: "Sposoby definiowania komponentów w React",
    text: "klasa ES6, komponent bez stanu (ang. state) za pomocą funkcji, składnia ES5 za pomocą pakietu npm create-react-class,  stan dzięki Hakom (ang. Hooks)",
  },
  {
    id: 2,
    question: "Co to są komponenty wyższego rzędu?",
    text: "Komponenty wyższego rzędu (ang. Higher Order Component - HOC), zasada jest podobna do funkcji wyższego rzędu. Komponenty tego typu do funkcje, które przyjmują komponenty jako argument oraz zwracają nowy argument. Przykładem może być funkcja connect z biblioteki Redux.",
  },
  {
    id: 3,
    question: "Co to są render props?",
    text: "Render props są to właściwości komponentu, które zawierają funkcje, która otrzymuje stan komponentu lub jakieś inne dane i zwraca kod jsx",
  },
  {
    id: 4,
    question: "Jak działa JSX?",
    text: "Kompilator JSX, np. Babel parsuje kod JavaScript (JSX), znajduje wszystkie odwołania do tagów html i zastępuje je wywołaniem funkcji React.createElement lub w przypadku, gdy nazwa tagu jest z dużej litery, kompilator używa zmiennej komponentu.",
  },
  {
    id: 5,
    question: "Test netlify?",
    text: "Netlify.com, najlepsza darmowa usługa hostingowa na świecie ",
  },
];

export default questions;
